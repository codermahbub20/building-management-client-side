import { useQuery } from "@tanstack/react-query";
import axiosPublic from "./useAxiosPublic";


const useApartments = (currentPage, itemsPerPage) => {
    const { data: appartments = [], isPending: loading, refetch } = useQuery({
        queryKey: ['appartments'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/apartment?page=${currentPage}&size=${itemsPerPage}`)
            return res.data;
        }
    })

    return [appartments, loading, refetch]
};

export default useApartments;
