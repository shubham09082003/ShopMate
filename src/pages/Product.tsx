import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { API_URL } from '../api';
import { handleAddToCart } from '../HandleFunction/handleAddToCart';

interface Product {
  images: string[];
  productName: string;
  price: number;
  _id: string;
  description: string;
}

function Product() {
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const token = localStorage.getItem("token") || "";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<{ msg: string; data: Product }>(`${API_URL}/product/${id}`);
        setProduct(response.data.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };
    fetchData();
  }, [id]);

  if (!product) return <p className="text-center mt-10 text-lg">Loading product details...</p>;

  return (
    <div className="bg-gray-50">
      <div className="max-w-5xl mx-auto mt-10 bg-white shadow-lg rounded-lg p-6 flex flex-col md:flex-row items-center md:items-start gap-10">
        <div className="flex-shrink-0">
          <img
            src={product.images[0]}
            alt={product.productName}
            className="w-80 h-80 object-cover rounded-lg shadow-md transform hover:scale-105 transition duration-300"
          />
        </div>
        <div className="flex flex-col gap-6 w-full">
          <h1 className="text-3xl font-semibold text-gray-900">{product.productName}</h1>
          <p className="text-lg text-gray-600">{product.description}</p>
          <div className="flex items-center gap-4">
            <span className="text-2xl font-bold text-green-600">Rs. {product.price}</span>
            <span className="bg-green-100 text-green-600 text-sm font-medium px-3 py-1 rounded-full">In Stock</span>
          </div>
          <div className='grid grid-cols-3 p-2 rounded-lg w-[20%] border-gray-200 border text-center'>
            <button className="" onClick={() => setQuantity(prev => Math.max( prev - 1,1))}>-</button>
            <div>
              {quantity}
            </div>
            <button className='' onClick={() => setQuantity(prev => Math.min( prev + 1,10))}>+</button>
          </div>
          <button 
            onClick={() => id && handleAddToCart({ id, quantity, token })}
           className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-3 rounded-lg text-lg font-medium shadow-md hover:from-blue-600 hover:to-blue-800 transition duration-300">
            Add to Cart 🛒
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
