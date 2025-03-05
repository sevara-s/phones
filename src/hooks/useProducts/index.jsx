import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../api";

export const useProductData = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });
};
