import axios from "axios";
import { API_URL } from "../api";

interface ApiResponse {
    msg : string;
    data : any;
}

export async function handleCart() {
    try{
        const response = await axios.get<ApiResponse>(`${API_URL}/cart`,{
            headers: {
                Authorization: `${localStorage.getItem("token")}`
            }
        });
        const cart =  response.data.data;
        return cart;
    }
    catch(error){
        console.error(error);
        return;
    }
}


export async function product({id} : {id: string}) {
    try {
        const response = await axios.get<ApiResponse>(`${API_URL}/product/${id}`);
        return response.data.data;
    } catch (error) {
        console.error(error);
        return;
    }

}