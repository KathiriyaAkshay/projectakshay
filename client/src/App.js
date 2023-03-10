import React from "react";
import { Routes, Route } from "react-router-dom";
import NavigationBar from './component/NavigationBar';
import AdminNavigationBar from './component/AdminNavigationBar';
import Home from "./Home"
import Categories from "./Categories"
import About from "./About"
import Contact from "./Contact"
import Logout from "./Logout"
import Login from "./Login"
import Register from "./Register"
import AddCycle from "./admin/AddCycle"
import ErrorPage from "./ErrorPage"
import Footer from "../src/component/footer/footer1";
import ShowItem from "./component/ShowItem";
import Wishlist from "./Wishlist";
import UpdateCycle from "./admin/UpdateCycle";
import ShowFeedback from "./admin/ShowFeedback";
import ForgotPassword from "./ForgotPassword";
import RemoveItem from "./admin/RemoveItem";
import ShowOrders from "./component/ShowOrders";
import PreviousOrders from "./component/PreviousOrders";
import LiveOrders from "./admin/LiveOrders";
import DeliveredOrder from "./admin/DeliveredOrder";
import HomeMain from "./HomeMain";
import Header from "./component/Header";
import AdminHeader from "./component/AdminHeader";
import AddCycle2 from "./admin/AddCycle2";

const LogOutAdmin=()=>{
  sessionStorage.removeItem("type")
  window.location.href="/login";
  return ;
}
function App() {
  if (sessionStorage.getItem("type") === "Admin") {
    return (
      <>
       <AdminHeader/>
        <Routes>
          <Route exact path='/admin/Home' element={<AddCycle2 />} />
          <Route exact path='/admin/updateCycle' element={<UpdateCycle />} />
          <Route exact path='/admin/feedbacks' element={<AddCycle2 />} />
          <Route exact path="/admin/removeitem" element={<RemoveItem />} />
          <Route exact path="/admin/liveOrders" element={<AddCycle2 />} />
          <Route exact path="/admin/deliveredOrders" element={<AddCycle2 />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/logoutAdmin" element={<LogOutAdmin/>} />
          
          <Route exact path="/" element={<LogOutAdmin/>} />
         
          
        </Routes>
      </>
    )
  }
  else{
    return (
      <>
        <Header />
        <Routes>
          <Route exact path="/" element={<HomeMain />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={<Login />} />
          <Route excat path="/categories" element={<Categories />} />
          <Route excat path="/about" element={<HomeMain />} />
          <Route exact path="/contact" element={<HomeMain />} />
          <Route exact path="/logout" element={<Logout />} />
          <Route exact path="/showItem" element={<HomeMain />} />
          <Route exact path="/wishlist" element={<Wishlist />} />
          <Route exact path="/showOrders" element={<HomeMain />} />
          <Route exact path="/previousOrders" element={<HomeMain />} />
          <Route exact path="/forgotPassword" element={<ForgotPassword />} />
          <Route exact path="/sdff" element={<HomeMain/>} />
              
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </>);
  }
}

export default App;
