import axios from "axios";

const baseUrl = import.meta.env.VITE_BACKEND_URL;

export const  absence = (data) => {
    const token = localStorage.getItem("token");
   const config = {
      headers: {
         Authorization: `Bearer ${token}`,
      },
   }
    return axios.post(baseUrl + "/auth/absences", data, config);
 };

 export const createAbsence = (data) => {
   const token = localStorage.getItem("token");
  const config = {
     headers: {
        Authorization: `Bearer ${token}`,
     },
  }
   return axios.post(baseUrl + "/auth/createAbsence", data, config);
};
