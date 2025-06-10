import Navbar from "./navbar";
import SignIn from "./sidebar/signin";
import SignUp from "./sidebar/signup";
import Setting from "./sidebar/Setting";
import { useState } from "react";
function Body({ children }) {
  const [showSinginSidebar, setshowSinginSidebar] = useState(false);
  const [showSingUpSidebar, setshowSingUnSidebar] = useState(false);
  const [showSettingSideBar, setshowSettingSideBar] = useState(false);

  const handleCloseSidebar = () => {
    setshowSinginSidebar(false);
    setshowSingUnSidebar(false);
    setshowSettingSideBar(false);
  };

  const handleSidebar = (cred) => {
    if (cred === "L") {
      setshowSinginSidebar(true);
    } else if (cred === "R") {
      setshowSingUnSidebar(true);
    } else {
      setshowSettingSideBar(true);
    }
  };
  return (
    <div className="w-full relative  select-none">
      <Navbar handleOpenSidebar={handleSidebar} />

      {showSinginSidebar && (
        <div
          className="w-4/12 h-screen shadow-xl bg-white z-50 top-0 right-0 fixed "
          data-aos="fade-left"
        >
          <div className="w-full flex justify-end py-4">
            <button
              onClick={handleCloseSidebar}
              className="text-black font-bold text-xl pr-4 top-2 right-0"
            >
              ✕
            </button>
          </div>
          <SignIn />
        </div>
      )}

      {showSingUpSidebar && (
        <div
          className="w-4/12 h-screen shadow-xl bg-white z-50 top-0 right-0 fixed "
          data-aos="fade-left"
        >
          <div className="w-full flex justify-end py-4">
            <button
              onClick={handleCloseSidebar}
              className="text-black font-bold text-xl pr-4 top-2 right-0"
            >
              ✕
            </button>
          </div>
          <SignUp />
        </div>
      )}

      {showSettingSideBar && (
        <div
          className="w-3/12 h-screen shadow-xl bg-white z-50 top-0 right-0 fixed "
          data-aos="fade-left"
        >
          <div className="w-full flex justify-end mt-4">
            <button
              onClick={handleCloseSidebar}
              className="text-black font-bold text-xl pr-4 top-2 right-0"
            >
              ✕
            </button>
          </div>
          <Setting handleCloseSidebar={handleCloseSidebar} />
        </div>
      )}

      <main>{children}</main>
    </div>
  );
}

export default Body;
