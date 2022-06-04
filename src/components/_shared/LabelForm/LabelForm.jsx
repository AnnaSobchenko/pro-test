import { ErrorMessage } from "formik";
import s from "./LabelForm.module.scss";

const LabelForm = ({ type, handleChange, handleBlur, values }) => {
  return (
    <>
      <label className={s.inputLabel} htmlFor="password">
        <span> {type}</span>
        <input
          type={type}
          name={type}
          placeholder="..."
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
        />
        {/* {touched.password && errors.password && alert(errors.password)} */}
        <ErrorMessage
          component="div"
          name={type}
          className={s.errorMessage}
        />
      </label>
    </>
  );
};

export default LabelForm;
