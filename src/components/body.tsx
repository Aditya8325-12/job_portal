import Navbar from "./navbar";
import SignIn from "./sidebar/signin";
import Setting from "./sidebar/Setting";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Footer from "./Footer";
function Body({ children }) {
  const [showSinginSidebar, setshowSinginSidebar] = useState(false);
  const [showSettingSideBar, setshowSettingSideBar] = useState(false);

  const handleCloseSidebar = () => {
    setshowSinginSidebar(false);
    setshowSettingSideBar(false);
  };

  const handleSidebar = (cred) => {
    if (cred === "L") {
      setshowSinginSidebar(true);
    } else {
      setshowSettingSideBar(true);
    }
  };
  const pathname = usePathname();
  return (
    <div className="w-full relative  select-none   bg-base-100">
      {pathname !== "/registration/User" && (
        <Navbar handleOpenSidebar={handleSidebar} />
      )}

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

      {["/", "/jobs"].includes(pathname) && <Footer />}
    </div>
  );
}

export default Body;
