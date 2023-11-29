import axios from "axios";


const axiosPublic = axios.create({
    baseURL: 'https://building-management-server-lemon.vercel.app',
    // withCredentials: true
})

// const useAxiosPublic = () => {
//     return axiosPublic;
// };

export default axiosPublic;