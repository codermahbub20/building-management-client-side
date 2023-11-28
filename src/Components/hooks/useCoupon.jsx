import { useQuery } from "@tanstack/react-query";
import axiosPublic from "./useAxiosPublic";


const useCoupon = () => {
    const { data: Coupon = [], isPending: loading, refetch } = useQuery({
        queryKey: ['coupon'],
        queryFn: async () => {
            const res = await axiosPublic.get('/coupon')
            return res.data;
        }
    })

    return {Coupon, loading, refetch}
};

export default useCoupon;