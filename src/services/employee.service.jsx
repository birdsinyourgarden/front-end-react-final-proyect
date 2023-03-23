import axios from "axios";

const baseUrl = import.meta.env.VITE_BACKEND_URL;

export const  registerEmployee = (data) => {
    const token = localStorage.getItem("token");
   const config = {
      headers: {
         Authorization: `Bearer ${token}`,
      },
   }
    return axios.post(baseUrl + "/registerEmployee", data, config);
 };
