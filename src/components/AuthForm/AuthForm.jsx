import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { signin, signup } from "../../redux/auth/authOperations";
import { authValidationSchema } from "../../utils/validation/AuthValid";
import LabelForm from "../_shared/LabelForm/LabelForm";
import s from "./AuthForm.module.scss";
import symbol from "./../../images/Google@2x.png";
import Button from "../Button/Button";


const AuthForm = () => {
  const dispatch = useDispatch();


  return (
    <div>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={authValidationSchema}        
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
            <h2 className={s.authFormTitle} >You can use your Google Account to authorize:</h2>
           <Button cta="Google" googleAuth />
            {/* <button className={s.btnGoogle}>
              <img
                src={symbol}
                alt="googleSymbol"
                width="18px"
                height="18px"
                className={s.img}
              />
              Google
            </button> */}
            <h2 className={s.authFormTitle2} >Or login to our app using e-mail and password:</h2>
            <form onSubmit={handleSubmit} className={s.authFormInput}>
              <LabelForm
                type="email"
                handleChange={handleChange}
                handleBlur={handleBlur}
                values={values}
              />
              <LabelForm
                type="password"
                handleChange={handleChange}
                handleBlur={handleBlur}
                values={values}
              />

              <div className={s.btn}>
              {/* <Button cta="sign in" signButton /> */}
                <button
                  type="button"
                  className={`${s.btnSubmit} ${s.btnSubmitSignin} `}
                  value="signin"
                  onClick={() =>{ console.log('values', values)
                   return dispatch(signin(values))}}
                >
                  sign in
                </button>
                {/* <Button cta="sign up" signButton secondary /> */}
                <button
                  type="button"
                  className={s.btnSubmit}
                  value="signup"
                  onClick={() => { console.log('values', values)
                  return dispatch(signup(values))}}
                >
                  sign up
                </button>
              </div>
            </form>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default AuthForm;
