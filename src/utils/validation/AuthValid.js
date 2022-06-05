import * as Yup from "yup";

export const authValidationSchema = Yup.object().shape({
  email: Yup.string()
    .required("Fill the gap")
    .email("Please enter an email")
    .max(254, "Max 254"),
  password: Yup.string()
    .required("Fill the gap")
    .min(5, "Enter more than 5 characters")
    .max(20, "Max 20"),
});