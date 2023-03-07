import React from "react";
import "./Empleados.css";
import {BsCartPlus} from 'react-icons/bs'
import { Link } from "react-router-dom";

const User = ({ user, min}) => {
   const baseUrl = import.meta.env.VITE_IMAGES_URL;

   console.log(baseUrl+book.image);
   return (
      <div className="container_book">
         <div className="container_image"><Link to={`/book/${book.id}`}>
            <img src={baseUrl+book.image} className="image" alt="" />
         </Link>
         </div>
            <h4 className="title_book">{book.title}</h4>
            {min?null : <div className="container_footer_book">
            <p className="price">{book.price} USD</p>
            <div className="button_add"><BsCartPlus/>Añadir</div>
         </div> }
         
      </div>
   );
};

export default Book;