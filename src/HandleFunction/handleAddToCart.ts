import axios from "axios";
import { API_URL } from "../api";

interface handleAddToCartProps {
    id: string;
    quantity: number;
    token: string;
}


export async function handleAddToCart({id, quantity, token}: handleAddToCartProps) {
    try {
        if(token === "") {
            console.error("Token not found");
            alert("Please login");
            window.location.href = "/login";
            return;
        }

        const response = await axios.post<{ data: any }>(`${API_URL}/cart/add`, { productId : id, quantity }, {
            headers: {
                Authorization: `${token}`
            }
        });
        console.log("Added to cart:", response.data.data);
        return response.data.data;
    } catch (error) {
        console.error("Error adding to cart:", error);
        return "Error adding to cart";
    }
}