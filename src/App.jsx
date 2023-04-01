import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./Components/Context/AuthContex";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Home } from "./Components/Home/Index";
import ProfileUser from "./Components/ProfileUser/Index";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-slate-50 h-screen text-black flex">
        <AuthProvider>
          <Routes>
            <Route index path="/" element={<Home />} />
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
        </AuthProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
