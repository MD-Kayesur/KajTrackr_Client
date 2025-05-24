import axios from "axios";

 
 
 export const AxiousURL = axios.create({
    baseURL:'http://localhost:5001/',
withCredentials:true,
    // baseURL:'https://kaj-trackr-server.vercel.app/',
    timeout:5000
})
const useAxious = () => {
    return  AxiousURL
};

export default useAxious;