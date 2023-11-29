import axios from "axios";

const axiosRandom = axios.create({
    baseURL: 'https://building-management-server-lemon.vercel.app'
});

const useAxiosRandom = () => {
    return axiosRandom;
};

export default useAxiosRandom;