import "./App.css";
import Router from "./router/Router";
//import { axiosInterceptor } from "./interceptors/axios.interceptor";
import { useNavigate } from "react-router-dom";


function App() {
  //axiosInterceptor;
  return (
      <>
        <div className="App">
            <Router />
        </div>
        
      </>
  );
}

export default App;