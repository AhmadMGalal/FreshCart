import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

function useCategories() {
  const response = useQuery({
    queryKey: ['categories'],
    queryFn: () =>
      axios.get('https://ecommerce.routemisr.com/api/v1/categories'),
    select: (data) => data.data.data,
    staleTime: 20000,
  });

  return response;
}

export default useCategories;
