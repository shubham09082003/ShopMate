import { useEffect, useState } from "react";
import { handleCart, product } from "../HandleFunction/handleCart";
import CartCard from "../components/CartCard";
import CartSkeleton from "../components/CartSkeleton";
import axios from "axios";
import { API_URL } from "../api";

interface ProductProps {
  images: string[];
  name: string;
  price: number;
  _id: string;
}

interface CartItem {
  productId: string;
  quantity: number;
}

interface MappedCartItem extends ProductProps {
  quantity: number;
}

function Cart() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartItems, setCartItems] = useState<MappedCartItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  useEffect(() => {
    async function fetchCart() {
      const response = await handleCart();
      setCart(response.items);
    }
    fetchCart();
  }, []);

  useEffect(() => {
    async function fetchProductDetails() {
      if (cart.length === 0) {
        setLoading(false);
        return;
      }

      const products = await Promise.all(
        cart.map(async (cartItem) => {
          const productData = await product({ id: cartItem.productId });
          return { ...productData, quantity: cartItem.quantity };
        })
      );

      setCartItems(products);
      setLoading(false);
    }
    fetchProductDetails();
  }, [cart]);

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const placeOrder = async () => {
    if (!address || !paymentMethod) {
      alert("Please provide an address and select a payment method.");
      return;
    }
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Please login to place an order.");
      return;
    }
    const orderData = {
       // Replace with actual user ID from context/auth
      items: cart.map((item) => ({
        products: item.productId,
        quantity: item.quantity,
      })),
      totalAmount: totalPrice,
      paymentMethod,
      address,
    };

    try {
      const response = await axios.post(`${API_URL}/orders/checkout`, orderData, {
        headers: {
          Authorization: `${token}`, // Send token in Authorization header
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });

      if (response.status === 201) {
        alert("Order placed successfully!");
        setCart([]);
        setCartItems([]);
      }
    } catch (error) {
      console.error("Error placing order:", error);
      alert("Failed to place order. Try again.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="p-6 flex flex-col gap-4">
        {loading
          ? Array(3)
              .fill(0)
              .map((_, index) => <CartSkeleton key={index} />)
          : cartItems.length > 0
          ? cartItems.map((item) => (
              <CartCard key={item._id} images={item.images} name={item.name} quantity={item.quantity} price={item.price} />
            ))
          : !loading && <p className="text-center text-gray-500">Your cart is empty.</p>}
      </div>

      {cartItems.length > 0 && !loading && (
        <div className="bg-white shadow-md p-6 w-[80%] m-auto mt-4 rounded-lg border">
          <h2 className="text-xl font-semibold text-center">Total Price: ₹{totalPrice}</h2>
          
          <input
            type="text"
            placeholder="Address"
            className="border rounded-md p-2 w-full mt-2"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />

          <div className="mt-2">
            <input type="radio" name="payment" id="cod" className="mr-2" value="COD" onChange={(e) => setPaymentMethod(e.target.value)} />
            <label htmlFor="cod">Cash on Delivery</label>

            <input type="radio" name="payment" id="card" className="ml-4 mr-2" value="Credit Card" onChange={(e) => setPaymentMethod(e.target.value)} />
            <label htmlFor="card">Credit Card</label>

            <input type="radio" name="payment" id="debit" className="ml-4 mr-2" value="Debit Card" onChange={(e) => setPaymentMethod(e.target.value)} />
            <label htmlFor="debit">Debit Card</label>

            <input type="radio" name="payment" id="upi" className="ml-4 mr-2" value="UPI" onChange={(e) => setPaymentMethod(e.target.value)} />
            <label htmlFor="upi">UPI</label>
          </div>

          <button
            className="bg-green-500 text-white px-6 py-3 rounded-md w-full mt-4 hover:bg-green-600 transition duration-300"
            onClick={placeOrder}
          >
            Place Order
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;
