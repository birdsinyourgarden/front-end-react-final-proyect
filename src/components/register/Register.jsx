import React, { useState, useEffect } from "react";
import { registerPost } from "../../services/user.service";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { useForm } from "react-hook-form";
import "./register.css";
import '../../components/form_books/formBooks.css'

const Register = () => {

   const navigate = useNavigate()

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm();

   const handleSubmitBook = async (formData) => {
      const { data } = await registerPost(formData);
      localStorage.setItem("token", data.token);
      localStorage.setItem("user_name", data.user.name);
      localStorage.setItem("user_id", data.user.id);
      console.log("response form sucess", data);
   };

   const customSubmit = (data) => {
      console.log("data antes de ser transformada", data);
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("password", data.password);
      formData.append("password_confirmation", data.password);
      handleSubmitBook(formData);
      swal("Submitted form!", "Successful validation", "success");
      setTimeout(3000, navigate('/profile'))
   };

   return (
      <div className="container_register_view">
         <div className="form-book" id="form">
            <div className="container-formbook">
               <form
                  onSubmit={handleSubmit(customSubmit)}
                  className="form-react"
               >
                  <h2>Create new user</h2>
                  <div className="form-control">
                     <label>Name</label>
                     <input
                        className="place"
                        placeholder="Enter name"
                        type="text"
                        {...register("name", {
                           required: true,
                           maxLength: 42,
                        })}
                     />
                     {errors.title?.type === "required" && (
                        <small className="fail">
                           The field cannot be empty
                        </small>
                     )}
                     {errors.title?.type === "maxLength" && (
                        <small className="fail">
                           Maximum characters are eight
                        </small>
                     )}
                  </div>

                  <div className="form-control">
                     <label>Email</label>
                     <input
                        className="place message"
                        placeholder="Email"
                        type="email"
                        {...register("email", {
                           required: true,
                           minLength: 5,
                           maxLength: 200,
                        })}
                     />
                     {errors.description?.type === "required" && (
                        <small className="fail">
                           The field cannot be empty
                        </small>
                     )}
                     {errors.description?.type === "minLength" && (
                        <small className="fail">
                           The minimum characters must be 5
                        </small>
                     )}
                     {errors.descri?.type === "maxLength" && (
                        <small className="fail">
                           The maximum characters should be 200
                        </small>
                     )}
                  </div>

                  <div className="form-control">
                     <label>password</label>
                     <input
                        className="place"
                        placeholder="password"
                        type="password"
                        {...register("password", {
                           required: true,
                           maxLength: 16,
                        })}
                     />
                     {errors.category?.type === "required" && (
                        <small className="fail">
                           The field cannot be empty
                        </small>
                     )}
                     {errors.category?.type === "maxLength" && (
                        <small className="fail">
                           Maximum characters are eight
                        </small>
                     )}
                  </div>

                  <div className="form">
                     <button type="submit">Send</button>
                  </div>
               </form>
            </div>
         </div>
         <Link to="/login">ya tienes una cuenta?</Link>
      </div>
   );
};

export default Register;
