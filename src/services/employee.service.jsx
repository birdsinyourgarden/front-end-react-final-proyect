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
export const getEmployees = () => {
const token = localStorage.getItem("token");
const config = {
headers: {
      Authorization: `Bearer ${token}`,
   },
   }
   return axios.post(baseUrl + "/auth/dashboard", {}, config);
};

export const deleteUser = (id) => {
   const token = localStorage.getItem("token");
   const config = {
      headers: {
         Authorization: `Bearer ${token}`,
      },
   }
   return axios.delete(baseUrl + '/deleteEmployee/'+id, config)
}

export const getAbsences = () => {
   const token = localStorage.getItem("token");
   const config = {
      headers: {
         Authorization: `Bearer ${token}`,
      },
   }
   return axios.post(baseUrl + '/auth/absences/', {}, config)
}

export const getHolidays = () => {
   const token = localStorage.getItem("token");
   const config = {
      headers: {
         Authorization: `Bearer ${token}`,
      },
   }
   return axios.post(baseUrl + '/auth/holidays', {}, config)
}