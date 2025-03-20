import axios from "axios";
import { useEffect, useState } from "react";
import Banner from "../components/Banner";
import ProductCard from "../components/ProductCard";
import ProductSkeleton from "../components/Skeleton";
import { API_URL } from "../api";

interface Product {
  images: string[];
  productName: string;
  price: number;
  _id: string;
  description: string;
}

interface ApiResponse {
  msg: string;
  data: Product[];
}

function Home() {
  const [product, setProduct] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get<ApiResponse>(`${API_URL}/product/`);
        console.log("API Response:", response.data);

        if (Array.isArray(response.data.data)) {
          setProduct(response.data.data);
        } else {
          console.error("Unexpected API response format:", response.data);
          setProduct([]);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="overflow-hidden">
        <Banner />
        <div className="grid grid-cols-1 md:grid-cols-4 md:gap-2 p-5">
          {isLoading
            ? Array(6)
                .fill(0)
                .map((_, i) => <ProductSkeleton key={i} />)
            : product.map((item) => (
                <ProductCard
                  key={item._id}
                  id={item._id}
                  images={item.images}
                  productName={item.productName}
                  price={item.price}
                  description={item.description}
                />
              ))}
        </div>
    </div>
  );
}

export default Home;
