import axios from "axios";

export const fetchProducts = async () => {
  const response = await axios.get("http://localhost:3000/products");
  console.log("API Response:", response.data);
  return response.data || [];
};
