import axiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
// import axiosRandom from "./useAxiosRandom";


const useUser = () => {
    const { data: User = [], isPending: loading, refetch } = useQuery({
        queryKey: ['User'],
        queryFn: async () => {
            const res = await axiosPublic.get('/users')
            return res.data;
        }
    })

    return [User, loading, refetch]

};

export default useUser;