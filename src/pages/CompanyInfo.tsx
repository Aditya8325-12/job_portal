import { useState } from "react";
import Jobs from "@/components/Compnay/Jobs";
import Overview from "@/components/Compnay/Overview";
import WhyChouseUs from "@/components/Compnay/whyChouseUs";
import Review from "@/components/Compnay/review";
import Info from "@/components/Compnay/Info";
function CompanyInfo() {
  const [activeTab, setActiveTab] = useState("overview");
  return (
    <div className="w-full  flex flex-col items-center">
      <div
        className="w-full py-56 bg-cover bg-center relative  "
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1638455153080-e5127e959224?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <div className="absolute bottom-4 right-6 text-gray-200">
          Managed by employer
        </div>
      </div>

      <div className=" w-9/12 absolute mt-96  ">
        <Info />
        <div className="w-full mt-10 px-4 py-2">
          {/* Tabs */}
          <div className="flex space-x-8 border-b border-gray-200">
            <button
              onClick={() => setActiveTab("overview")}
              className={`pb-2 font-medium ${
                activeTab === "overview"
                  ? "text-black border-b-2 border-black"
                  : "text-gray-500 cursor-pointer"
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab("Reviews")}
              className={`pb-2 font-medium ${
                activeTab === "Reviews"
                  ? "text-black border-b-2 border-black"
                  : "text-gray-500 cursor-pointer"
              }`}
            >
              Reviews
            </button>
            <button
              onClick={() => setActiveTab("jobs")}
              className={`pb-2 font-medium ${
                activeTab === "jobs"
                  ? "text-black border-b-2 border-black"
                  : "text-gray-500 cursor-pointer"
              }`}
            >
              Jobs
            </button>
            <button
              onClick={() => setActiveTab("WhyJoinUs")}
              className={`pb-2 font-medium ${
                activeTab === "WhyJoinUs"
                  ? "text-black border-b-2 border-black"
                  : "text-gray-500 cursor-pointer"
              }`}
            >
              Why Join Us
            </button>
          </div>

          {/* Content */}
          <div className="my-4">
            {activeTab === "overview" && <Overview />}
            {activeTab === "jobs" && <Jobs />}
            {activeTab === "Reviews" && <Review />}
            {activeTab === "WhyJoinUs" && <WhyChouseUs />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyInfo;
