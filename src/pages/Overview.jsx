import React from "react";
// import { Gauge } from "@kjanat/react-gauge-component";
// import { CircularProgressbar } from "react-circular-progressbar";
// import "react-circular-progressbar/dist/styles.css"; //
import { CircularGauge } from "../components/CircularGauge";
import { useNavigate } from "react-router-dom";
import MachineStatus from "../sub_pages/MachineStatus"

// ... ใน Component ของคุณ

function Home() {
  let value3 = 2;
  const navigate = useNavigate();
  return (
    <div className="max-w-7xl mx-auto mt-0 bg-white rounded-2xl">
      <div className="">
        {/* --------------------------------Gauge---------------------------------- */}
        <div className="grid grid-cols-4">
          <div>
            <div className="flex justify-center">
              <div className="w-40 h-40 font-bold mt-5">
                <CircularGauge
                  value={25}
                  startAngle={90}
                  title="75%"
                  subtitle="OEE"
                />
              </div>
            </div>
            <div className="flex justify-center items-center mt-2">
              <span>OEE</span>
            </div>
          </div>

          <div
            onClick={() => navigate("/availability")} // ใส่ path ที่ต้องการไป
            className="cursor-pointer hover:opacity-80 transition-opacity group"
          >
            <div className="flex justify-center">
              <div className="w-40 h-40 font-bold mt-5">
                <CircularGauge
                  value={50}
                  startAngle={90}
                  title="75%"
                  subtitle="OEE"
                />
              </div>
            </div>
            <div className="flex justify-center items-center mt-2">
              <span>Availability</span>
            </div>
          </div>

          <div
            onClick={() => navigate("/performance")} // ใส่ path ที่ต้องการไป
            className="cursor-pointer hover:opacity-80 transition-opacity group"
          >
            <div className="flex justify-center">
              <div className="w-40 h-40 font-bold mt-5">
                <CircularGauge
                  value={65}
                  startAngle={90}
                  title="75%"
                  subtitle="OEE"
                />
              </div>
            </div>

            <div className="flex justify-center items-center mt-2">
              <span>Performance</span>
            </div>
          </div>

          <div
            onClick={() => navigate("/quality")} // ใส่ path ที่ต้องการไป
            className="cursor-pointer hover:opacity-80 transition-opacity group"
          >
            {/* ส่วน Gauge */}
            <div className="flex justify-center">
              <div className="w-40 h-40 font-bold mt-5">
                <CircularGauge
                  value={75}
                  startAngle={90}
                  title="75%"
                  subtitle="OEE"
                />
              </div>
            </div>

            {/* ส่วนคำว่า test */}
            <div className="flex items-center justify-center mt-2">
              <span className="group-hover:text-blue-600">Quality</span>
            </div>
          </div>
        </div>
        {/* ----------------------------------------End of 4 Gauge------------------------------------------- */}
      </div>

      <div className="mt-10 bg-gray-300">
        <div className="mt-2">
          <div className="flex justify-center">
            <span>Calculation formula</span>
          </div>
        </div>
        <div className="flex justify-center">
          <h1>OEE = Availability × Performance × Quality ÷ 10000 = OEE</h1>
        </div>
      </div>

      <div className="grid grid-cols-3 mt-10">
          <MachineStatus/>
        <div className="flex justify-center">
          Six alert
        </div>
        <div className="flex justify-center">
          alert live
        </div>
      </div>
    </div>
  );
}

export default Home;
