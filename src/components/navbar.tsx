import Link from "next/link";
import { usePathname } from "next/navigation";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { FaRegBell } from "react-icons/fa6";
import { useSelector, UseSelector } from "react-redux";
import Image from "next/image";
import { IoSearchOutline } from "react-icons/io5";
import { RxDividerVertical } from "react-icons/rx";

export default function Navbar({ handleOpenSidebar }) {
  const pathname = usePathname();
  // const [userType, setUserType] = useState(null);
  const [navHeader, setNavHeader] = useState(
    "flex justify-between items-center py-2 w-full bg-white px-6 shadow-sm  fixed top-0 z-50 transition-all duration-300"
  );
  const [hasMounted, setHasMounted] = useState(false);
  const userType = useSelector((state) => state.auth.userType);
  const [textcolor, settextcolor] = useState("text-black");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 100) {
        setNavHeader(
          "flex justify-between items-center py-2 w-full bg-white shadow-sm  px-6 fixed top-0 z-50 transition-all duration-300"
        );
        settextcolor("text-black");
      } else {
        setNavHeader(
          "flex justify-between items-center bg-white py-2 w-full   shadow-md  px-6 fixed top-0 z-50 "
        );
        settextcolor("text-black");
      }
    };

    handleScroll();
    setHasMounted(true);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (route) =>
    pathname === route
      ? "bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent  hover:text-sky-500 text-lg"
      : " text-gray-500 text-lg hover:text-sky-500 ";

  return (
    <div id="navbar" className={navHeader}>
      <div className="flex  items-center  gap-4 py-1 w-6/12 justify-start">
        <Link href="/" className="pl-4 pr-2">
          <img
            src="/img/images/logo2.png"
            alt="Logo"
            style={{ width: 42, height: 35 }}
          />
        </Link>
        <Link href="/" className={isActive("/")}>
          Home
        </Link>
        <Link href="/jobs" className={isActive("/jobs")}>
          Jobs
        </Link>
        <Link href="/Services" className={isActive("/Services")}>
          Services
        </Link>
        <Link href="/companies" className={isActive("/companies")}>
          Companies
        </Link>

        {/* search bar  */}

        {/* {!["/", "/jobs"].includes(pathname) && (
          <div className="relative text-gray-600">
            <input
              className="border-2 border-gray-300 bg-white h-10 pl-4 pr-10 rounded-3xl text-sm focus:outline-none focus:ring-1 focus:ring-sky-500"
              type="search"
              name="search"
              placeholder="Search"
            />
            <IoSearchOutline
              type="submit"
              className="absolute right-2 top-0 mt-3 mr-2 cursor-pointer"
              onClick={() => {
                console.log("enter");
              }}
            />
          </div>
        )} */}
      </div>

      <div className="flex items-center gap-2 w-3/12 justify-end">
        {hasMounted && userType === "user" && (
          <div className="flex gap-2 justify-center items-center">
            <div className="relative w-10 h-10 flex justify-center items-center cursor-pointer">
              <FaRegBell className="h-6 w-6" />

              <div className="absolute top-0.5 right-0.5 rounded-full w-4 h-4 bg-sky-300 flex items-center justify-center">
                <p>1</p>
              </div>
            </div>

            <img
              onClick={() => {
                handleOpenSidebar("S");
              }}
              className="h-10 w-10 rounded-full border-2 border-white object-cover cursor-pointer"
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Profile picture"
            />
          </div>
        )}

        {hasMounted && !userType && (
          <div className="flex gap-2 items-center">
            {/* <button
              onClick={() => {
                handleOpenSidebar("L");
              }}
              className={`${textcolor} border cursor-pointer border-gray-300 px-3 py-2 rounded-md hover:bg-gray-100 hover:text-sky-500 transition duration-300`}
            >
              Sign In  
            </button>
            <button
              onClick={() => {
                handleOpenSidebar("R");
              }}
              className="px-4 py-2 bg-gradient-to-r  from-sky-400 to-blue-600 cursor-pointer text-white rounded-md hover:bg-sky-700 transition"
            >
              Sign Up
            </button> */}
            <h1
              className="text-md font-semibold text-sky-400 cursor-pointer hover:text-sky-600"
              onClick={() => {
                handleOpenSidebar("L");
              }}
            >
              Sign In
            </h1>
            <h1 className="text-lg text-gray-400"> | </h1>
            <h1 className="text-md  text-gray-400 cursor-pointer hover:text-gray-600">
              Employers / Post Job
            </h1>
          </div>
        )}
      </div>
    </div>
  );
}
