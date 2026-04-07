import React from "react";
// import { Gauge } from "@kjanat/react-gauge-component";
// import { CircularProgressbar } from "react-circular-progressbar";
// import "react-circular-progressbar/dist/styles.css"; //
import { CircularGauge } from "../components/CircularGauge";
import { useNavigate } from "react-router-dom";
import MachineStatus from "../sub_pages/MachineStatus";

// ... ใน Component ของคุณ

let notify = [
  {
    level: "High",
    message: "Machine 1 is down",
    timestamp: "2024-06-01 10:00:00",
  },
  {
    level: "High",
    message: "Machine 1 is down",
    timestamp: "2024-06-01 10:00:00",
  },
  {
    level: "High",
    message: "Machine 1 is down",
    timestamp: "2024-06-01 10:00:00",
  },
  {
    level: "High",
    message: "Machine 1 is down",
    timestamp: "2024-06-01 10:00:00",
  },
  // {
  //   level: "High",
  //   message: "Machine 1 is down",
  //   timestamp: "2024-06-01 10:00:00",
  // },
];

function Home() {
  let value3 = 2;
  const navigate = useNavigate();
  return (
    <div className="max-w-full mx-auto mt-0 bg-white rounded-2xl">
      <div className="max-w-full">
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

      {/* ----------------------------------------Notification------------------------------------------- */}
      <div className="grid grid-cols-2">
        <div className="max-w-full bg-white mt-10 rounded-2xl p-4">
          <div>
            <div className="p-4 bg-gray-100 rounded-lg shadow-inner">
              <h2 className="text-lg font-bold mb-4">Notifications</h2>

              <div className="space-y-3">
                {notify.map((item, index) => (
                  // อย่าลืมใส่ key ให้กับ element นอกสุดในลูป
                  <div
                    key={index}
                    className={`p-3 border-l-4 rounded bg-white shadow-sm flex justify-between items-center ${
                      item.level === "High"
                        ? "border-red-500"
                        : "border-yellow-500"
                    }`}
                  >
                    <div>
                      <p className="font-semibold text-gray-800">
                        {item.message}
                      </p>
                      <p className="text-xs text-gray-500">{item.timestamp}</p>
                    </div>

                    <span
                      className={`px-2 py-1 rounded text-xs font-bold ${
                        item.level === "High"
                          ? "bg-red-100 text-red-600"
                          : "bg-yellow-100 text-yellow-600"
                      }`}
                    >
                      {item.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* ----------------------------------------End of Notification------------------------------------------- */}

        <div className="max-w-full bg-white mt-10 rounded-2xl p-4">
          <div className="p-4 bg-gray-100 rounded-lg shadow-inner h-92">
            <span className="font-bold text-lg mb-4">Process Status</span>
            <div className="grid grid-cols-3">
              <div className="mt-2 p-2">
                <div>
                  <CircularGauge
                    value={25}
                    startAngle={90}
                    title="25%"
                    subtitle="Inbound"
                    size={120}
                  />
                </div>
              </div>
              <div className="mt-2">
                <div>
                  <CircularGauge
                    value={25}
                    startAngle={90}
                    title="25%"
                    subtitle="Feeding"
                    size={120}
                  />
                </div>
              </div>
              <div className="mt-2">
                <div>
                  <CircularGauge
                    value={25}
                    startAngle={90}
                    title="25%"
                    subtitle="Sorting"
                    size={120}
                  />
                </div>
              </div>
              <div className="mt-2">
                <div>
                  <CircularGauge
                    value={25}
                    startAngle={90}
                    title="25%"
                    subtitle="Packaging"
                    size={120}
                  />
                </div>
              </div>
              <div className="mt-2">
                <div>
                  <CircularGauge
                    value={25}
                    startAngle={90}
                    title="25%"
                    subtitle="QC"
                    size={120}
                  />
                </div>
              </div>

              <div></div>
            </div>
          </div>
        </div>
      </div>

      {/* ----------------------------------------Calculation formula------------------------------------------- */}
      {/* 
      <div className="mt-10 bg-gray-300">
        <div className="mt-2">
          <div className="flex justify-center">
            <span>Calculation formula</span>
          </div>
        </div>
        <div className="flex justify-center">
          <h1>OEE = Availability × Performance × Quality ÷ 10000 = OEE</h1>
        </div>
      </div> */}
      {/* 
      <div className="grid grid-cols-3 mt-10">
        <MachineStatus />
      </div> */}
    </div>
  );
}

export default Home;
