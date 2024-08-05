import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { register } from "../../redux/auth/operations";
import styles from "./RegistrationPage.module.css";

export default function RegistrationPage() {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(6, "Must be at least 6 characters")
        .required("Required"),
    }),
    onSubmit: (values) => {
      dispatch(register(values));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className={styles.form}>
      <label>
        Name
        <input type="text" {...formik.getFieldProps("name")} />
        {formik.touched.name && formik.errors.name ? (
          <div>{formik.errors.name}</div>
        ) : null}
      </label>
      <label>
        Email
        <input type="email" {...formik.getFieldProps("email")} />
        {formik.touched.email && formik.errors.email ? (
          <div>{formik.errors.email}</div>
        ) : null}
      </label>
      <label>
        Password
        <input type="password" {...formik.getFieldProps("password")} />
        {formik.touched.password && formik.errors.password ? (
          <div>{formik.errors.password}</div>
        ) : null}
      </label>
      <button type="submit">Register</button>
    </form>
  );
}
