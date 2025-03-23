import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../api";

interface Product {
  _id: string;
  productName: string;
  images: string[];
}

interface OrderItem {
  products: string; // ✅ Corrected from `productId`
  quantity: number;
  product: Product | null; // Will be populated separately
}

interface Order {
  _id: string;
  user_Id: string;
  items: OrderItem[];
  totalAmount: number;
  paymentMethod: string;
  paymentStatus: string;
  orderStatus: string;
  address: string;
  createdAt: string;
}

function Orders() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          alert("User not authenticated. Please log in.");
          return;
        }

        const response = await axios.get(`${API_URL}/orders/` , {
          headers: {
            Authorization: `${token}`,
          },
        });

        console.log("API Response:", response.data);

        const data = response.data as { order?: Order };
        const fetchedOrders = data.order ? [data.order] : []; // ✅ Fix: Handle single order response

        if (!fetchedOrders.length) {
          console.warn("No orders found:", data);
          setOrders([]);
          setLoading(false);
          return;
        }

        // Fetch product details for each order item
        const ordersWithProducts = await Promise.all(
          fetchedOrders.map(async (order) => {
            const itemsWithProducts = await Promise.all(
              order.items.map(async (item) => {
                try {
                  const productRes = await axios.get(
                    `${API_URL}/product/${item.products}` // ✅ Correct field name
                  );
                  return { ...item, product: productRes.data as Product };
                } catch (error) {
                  console.error("Error fetching product details:", error);
                  return { ...item, product: null };
                }
              })
            );

            return { ...order, items: itemsWithProducts };
          })
        );

        setOrders(ordersWithProducts);
      } catch (error) {
        console.error("Error fetching orders:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  useEffect(() => {
    console.log("Updated Orders State:", orders);
  }, [orders]);

  return (
    <div className="min-h-screen p-6">
      <h2 className="text-2xl font-semibold mb-4">Your Orders</h2>
      {loading ? (
        <p>Loading orders...</p>
      ) : orders.length === 0 ? (
        <p className="text-gray-500">No orders found.</p>
      ) : (
        <div className="flex flex-col gap-6">
          {orders.map((order) => (
            <div key={order._id} className="border p-4 rounded-lg shadow-md bg-white">
              <h3 className="text-lg font-semibold">Order ID: {order._id}</h3>
              <p className="text-gray-500">
                Placed on: {new Date(order.createdAt).toLocaleString()}
              </p>
              <p>
                <strong>Address:</strong> {order.address}
              </p>
              <p>
                <strong>Payment Method:</strong> {order.paymentMethod}
              </p>
              <p>
                <strong>Payment Status:</strong> {order.paymentStatus}
              </p>
              <p>
                <strong>Order Status:</strong> {order.orderStatus}
              </p>
              <p>
                <strong>Total Amount:</strong> ₹{order.totalAmount}
              </p>
              <div className="mt-2">
                <h4 className="font-medium">Items:</h4>
                <ul className="mt-2">
                  {order.items.map((item) => (
                    <li key={`${order._id}-${item.products}`} className="flex items-center gap-4 border-b py-2">
                      <img
                        src={item.product?.images?.[0] || "/placeholder.jpg"}
                        alt={item.product?.productName || "Unknown Product"}
                        className="w-16 h-16 object-cover rounded-md"
                      />
                      <div>
                        <p className="font-medium">{item.product?.productName || "Product not found"}</p>
                        <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Orders;
