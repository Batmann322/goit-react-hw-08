import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import * as Yup from "yup";
import styles from "./LoginPage.module.css";

export default function LoginPage() {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(6, "Must be at least 6 characters")
        .required("Required"),
    }),
    onSubmit: (values) => {
      dispatch(logIn(values));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className={styles.form}>
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
      <button type="submit">Log In</button>
    </form>
  );
}
