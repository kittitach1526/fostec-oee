import React from "react";
import Logo from "../assets/Logo.png";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    // 1. ใช้ w-full เพื่อให้พื้นหลัง (ถ้ามี) ยืดเต็มจอ 
    // 2. แต่ถ้าอยากให้ตัวแถบสีเทาจำกัดแค่ 7xl ด้วย ก็ย้าย class ไปไว้ที่ <nav>
    <div className="w-full"> 
      <nav className="bg-gray-200 p-4 max-w-7xl mx-auto flex justify-between items-center">
        
        {/* ส่วน Logo */}
        <div className="flex items-center">
          <div
            onClick={() => navigate("/")}
            className="cursor-pointer hover:opacity-80 transition-opacity"
          >
            <img src={Logo} alt="Logo" className="h-10 w-auto" />
          </div>
        </div>

        {/* ส่วนเนื้อหา Navbar */}
        <div className="flex gap-6 items-center font-medium">
           <div>Day shift</div>
           <div>User data</div>
           <div className="bg-white/20 px-3 py-1 rounded">Navbar</div>
        </div>

      </nav>
    </div>
  );
}