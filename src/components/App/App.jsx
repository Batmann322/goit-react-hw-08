// import React, { useEffect } from "react";
// import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Layout from "../Layout/Layout";
import HomePage from "../../pages/HomePage/HomePage";
import ContactsPage from "../../pages/ContactsPage/ContactsPage";
import LoginPage from "../../pages/LoginPage/LoginPage";
import RegistrationPage from "../../pages/RegistrationPage/RegistrationPage";
// import PrivateRoute from "../PrivateRoute/PrivateRoute";
// import RestrictedRoute from "../RestrictedRoute/RestrictedRoute";
// import { refreshUser } from "../../redux/auth/operations";
// import { selectIsRefreshing } from "../../redux/auth/selectors";

export default function App() {
  //   const dispatch = useDispatch();
  //   const isRefreshing = useSelector(selectIsRefreshing);

  //   useEffect(() => {
  //     dispatch(refreshUser());
  //   }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Route>
    </Routes>
  );
}
