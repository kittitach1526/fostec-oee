import React from "react";
import Logo from "../assets/Logo.png";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
    const navigate = useNavigate();
  return (
    <nav className="bg-gray-200 p-0 flex justify-between ">
      <div className="ml-10 flex justify-center items-center">
        <div onClick={() => navigate("/")} // ใส่ path ที่ต้องการไป
          className="cursor-pointer hover:opacity-80 transition-opacity group">
          <img src={Logo} alt="" className="w-50 h-10 mt-5" />
        </div>
      </div>
      <div className="flex gap-6 mr-50 items-center">
        <div>Day shift</div>
        <div>User data</div>
      </div>
    </nav>
  );
}
