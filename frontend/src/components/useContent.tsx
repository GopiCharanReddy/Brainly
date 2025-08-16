import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import type { CardProps } from "./Card"

const useContent = () => {
  return useQuery<CardProps[]>({
    queryKey: ['contents'],
    queryFn: async () => {
      const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/content`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem('jwt')}`
        }
      })
      return response.data.content.map((item: any) => ({ ...item, id: item._id }));
    }
  })
}

export default useContent