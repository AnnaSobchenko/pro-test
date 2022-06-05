import {  Formik } from "formik";
import { useDispatch } from "react-redux";
import { signin } from "../../redux/auth/authOperations";
import { authValidationSchema } from "../../utils/validation/AuthValid";
import LabelForm from "../_shared/LabelForm/LabelForm";
import s from "./AuthForm.module.scss";

const AuthForm = () => {
  const dispatch = useDispatch();
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={authValidationSchema}
      onSubmit={(values, { resetForm }) => {
        dispatch(signin(values));
        resetForm();
        // console.log("values", values);
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

            <button className="btnSubmit" type="submit">
              sign in
            </button>
            <button className="btnSubmit" type="submit">
              sign up
            </button>
          </form>
        </div>
      )}
    </Formik>
  );
};

export default AuthForm;
