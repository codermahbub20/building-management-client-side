import axiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
// import axiosRandom from "./useAxiosRandom";


const useAgreement = () => {
    const { data: agreement = [], isPending: loading, refetch } = useQuery({
        queryKey: ['agreement'],
        queryFn: async () => {
            const res = await axiosPublic.get('/agreements')
            return res.data;
        }
    })

    return [agreement, loading, refetch]

};

export default useAgreement;