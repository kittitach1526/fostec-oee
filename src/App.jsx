import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/Overview";
import About from "./About";
import Navbar from "./components/Navbar";
import Login from "./pages/login";
import Sidebar from "./components/Sidebar";

import Availability from "./pages/Availability";
import Performance from "./pages/Performance";
import Quality from "./pages/Quality";
import Process from "./pages/Process";

function App() {
  return (
    <Router>
      {/* 1. min-h-screen และ bg-black ให้เต็มความสูงจอ */}
      <div className="flex flex-col min-h-screen bg-black">
        
        {/* Navbar อยู่ด้านบน (ควรไปจัดการ max-w-7xl ภายใน Navbar เองตามที่คุยกันก่อนหน้า) */}
        <Navbar />

        {/* 2. ส่วน Content หลัก: ใช้ mx-auto เพื่อจัดกลุ่มนี้ให้อยู่กลางจอ */}
        <div className="flex-1 w-full max-w-7xl mx-auto flex flex-col md:flex-row">
          
          {/* Sidebar: กำหนดความกว้างคงที่ */}
          <aside className="w-64 bg-gray-200 hidden md:block border-gray-300">
            <Sidebar />
          </aside>

          {/* Main Content: ใช้ flex-1 เพื่อให้กินพื้นที่ที่เหลือจาก Sidebar */}
          <main className="flex-1 p-4 bg-gray-200">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login />} />
              <Route path="/availability" element={<Availability />} />
              <Route path="/performance" element={<Performance />} />
              <Route path="/quality" element={<Quality />} />
              <Route path="/process" element={<Process />} />
            </Routes>
          </main>
          
        </div>
      </div>
    </Router>
  );
}

export default App;
