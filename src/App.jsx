import "./App.css";
import { Routes, Route } from "react-router-dom";

import SobreEsteProyecto from "./components/pages/SobreEsteProyecto/SobreEsteProyecto";
import Product from "./components/pages/Product/Product";
import Home from "./components/pages/Home/Home";
import Cart from "./components/pages/Cart/Cart";
import CartShipping from "./components/pages/Cart/CartShipping";
import CartInformation from "./components/pages/Cart/CartInformation";
import CartPayment from "./components/pages/Cart/CartPayment";
import Profile from "./components/pages/Profile/Profile";
import Login from "./components/pages/Login/Login";
import SignUp from "./components/pages/SignUp/SignUp";
import Category from "./components/pages/Category/Category";
import React from "react";
import AdminProducts from "./components/Admin/AdminProducts";
import AdminUsers from "./components/Admin/AdminUsers";
import AdminCategories from "./components/Admin/AdminCategories";
import AdminReviews from "./components/Admin/AdminReviews";
import AdminOrders from "./components/Admin/AdminOrders";
import AdminLogin from "./components/Admin/AdminLogin";
import EditUser from "./components/Admin/Edit/EditUser";
import EditProduct from "./components/Admin/Edit/EditProduct";
import EditCategoryId from "./components/Admin/Edit/EditCategoryId";
import CreateProduct from "./components/Admin/Create/CreateProduct";
import CreateCategory from "./components/Admin/Create/CreateCategory";
import Auth from "./components/Auth";
import AuthAdmin from "./components/AuthAdmin";
import AdminDashboard from "./components/Admin/AdminDashboard";
import Reset_Pass from "./components/pages/Reset_Pass/Reset_Pass";
import Reset_2 from "./components/pages/Reset_Pass_2/Reset_Pass_2";
import Administrators from "./components/Admin/Administrators";
import CreateAdmin from "./components/Admin/Create/CreateAdmin";

import { useState } from "react";
import { useSelector } from "react-redux";

function App() {
  const [showModal, setShowModal] = useState(true);
  const token = useSelector((state) => state.token);

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/resetpassword" element={<Reset_Pass />} />
      <Route path="/resetpassword/:token" element={<Reset_2 />} />
      <Route path="/" element={<Home showModal={showModal} setShowModal={setShowModal} />} />
      <Route path="/product/:slug" element={<Product />} />
      <Route path="/about-us" element={<SobreEsteProyecto />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/cart/information" element={<CartInformation />} />
      <Route path="/cart/shipping" element={<CartShipping />} />
      <Route element={<Auth />}>
        <Route path="/cart/payment" element={<CartPayment />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
      <Route path="/categories/:id" element={<Category />} />

      <Route path="/admin" element={<AdminLogin />} />
      <Route element={<AuthAdmin />}>
        <Route path="/admin/users" element={<AdminUsers />} />
        <Route path="/admin/categories" element={<AdminCategories />} />
        <Route path="/admin/products" element={<AdminProducts />} />
        <Route path="/admin/reviews" element={<AdminReviews />} />
        <Route path="/admin/orders" element={<AdminOrders />} />
        <Route path="/admin/editUser/:id" element={<EditUser />} />
        <Route path="/admin/editProduct/:id" element={<EditProduct />} />
        <Route path="/admin/editCategoryId/:id" element={<EditCategoryId />} />
        <Route path="/admin/createCategory" element={<CreateCategory />} />
        <Route path="/admin/createProduct" element={<CreateProduct />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/administrators" element={<Administrators />} />
        <Route path="/admin/createAdmin" element={<CreateAdmin />} />
      </Route>
    </Routes>

    /* ,

const responseMessage = (response) => {
  console.log(response);
};
const errorMessage = (error) => {
  console.log(error);
};

  <div>
    <h2>React Google Login</h2>
    <br />
    <br />
    <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
  </div> */
  );
}

export default App;
