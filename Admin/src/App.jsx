// import { useState } from "react";
import DashboardHome from "./Components/DashboardHome/DashboardHome";
import Navbar from "./Components/Navbar/Navbar"
import Sidebar from "./Components/Sidebar/Sidebar"
import Add from "./pages/Add/Add"
import List from "./pages/List/List"; 
import Order from "./pages/Order/Order";
import { Routes, Route } from "react-router-dom";


import { ToastContainer } from 'react-toastify';



function App() {
 
  // const url = 'http://localhost:8080';
  const url = 'https://fooddeliveryapp-1-vy4f.onrender.com';
  return (
    <>
      <Navbar/>
      <ToastContainer/>

      <hr />
      <div className="app-content">
      
        <Sidebar/>
        {/* <DashboardHome/> */}
   <Routes>
          <Route path="/" element={<DashboardHome/>}/>
          <Route path="/add" element={<Add url={url}/>}/>
          <Route path="/list" element={<List url={url}/>}/>
          <Route path="/orders" element={<Order url={url}/>}/>
        </Routes>

       
      </div>
    </>
  )
}

export default App
