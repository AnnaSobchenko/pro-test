import {  Formik } from "formik";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { signin } from "../../redux/auth/authOperations";
import { authValidationSchema } from "../../utils/validation/AuthValid";
import LabelForm from "../_shared/LabelForm/LabelForm";
import s from "./AuthForm.module.scss";

const AuthForm = () => {


  const dispatch = useDispatch();
 

  return <div > 
    
    
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={authValidationSchema}
      onSubmit={(values, { resetForm }) => {

        dispatch(signin(values));
        resetForm();
        console.log("values", values);
        
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <div className={s.authForm}>
          <h2>You can use your Google Account to authorize:</h2>
      <button>Google</button>
       <h2>Or login to our app using e-mail and password:</h2>
          <form onSubmit={handleSubmit}>
            <LabelForm type="email"
              handleChange={handleChange}
              handleBlur={handleBlur}
              values={values}
              
            />
            <LabelForm type="password"
              handleChange={handleChange}
              handleBlur={handleBlur}
              values={values}
            />

            <div className={s.btn} >
              <button className={s.btnSubmit} type="submit" value="signin" >
              sign in
            </button>
            <button className={s.btnSubmit} value="signup"  type="submit" >
              sign up
            </button></div>
            
          </form>
        </div>
      )}
    </Formik>
 </div>
  
};

export default AuthForm;
