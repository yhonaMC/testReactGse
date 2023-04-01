import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Home } from "./Components/Home/Index";
import ProfileUser from "./Components/ProfileUser/Index";
import Sidebar from "./Components/Sidebar";
import Dashboar from "./Components/Dashboard/Index";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <BrowserRouter>
      <div className="bg-slate-50 h-screen text-black flex">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route index path="/Dashboard" element={<Dashboar />} />
          <Route index path="/profile" element={<ProfileUser />} />
        </Routes>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
