import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

function useProducts() {
  const response = useQuery({
    queryKey: ['products'],
    queryFn: () => axios.get('https://ecommerce.routemisr.com/api/v1/products'),
    select: (data) => data.data.data,
    staleTime: 20000,
  });

  return response;
}

export default useProducts;
