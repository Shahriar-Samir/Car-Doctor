import axios from "axios";

const axiosSecure = axios.create({
    baseURL: 'https://car-doctor-backend-murex.vercel.app',
    withCredentials: true,
})

const useAxios = () => {
    return axiosSecure
};

export default useAxios;