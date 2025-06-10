import { CiCircleList } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineLogout } from "react-icons/md";
import { GoQuestion } from "react-icons/go";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useDispatch, UseDispatch } from "react-redux";
import { logOut } from "@/redux/authSlice";
function Setting({ handleCloseSidebar }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(logOut());
    handleCloseSidebar();
    // router.replace(router.pathname);
    router.push("/");
  };
  return (
    <div className="backdrop-blur-lg  p-8 space-y-8 transition-all duration-500  mx-auto">
      <div className="w-full text-center flex  justify-center items-center ">
        <img
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Profile Picture"
          className="rounded-full w-22 h-22  border-4 border-sky-800 dark:border-sky-900 transition-transform duration-300 hover:scale-105"
        />
        <div className="w-full flex flex-col items-center justify-center ">
          <h1 className="text-xl font-bold text-sky-800 dark:text-white ">
            Sample Name
          </h1>
          <p className="text-gray-600 dark:text-gray-300">Software Developer</p>
          <Link href={"/profile"} onClick={handleCloseSidebar}>
            <p className="text-blue-400  cursor-pointers">
              View & Edit Profile
            </p>
          </Link>
        </div>
      </div>
      <hr className="bg-gray-300 h-0.5/3 w-full opacity-20 rounded-xl" />

      <ul className="flex flex-col gap-3 px-4">
        <li className="flex gap-2 justify-start items-center cursor-pointer">
          <CiCircleList className="w-5 h-5 text-gray-500" />
          <p>Career Guidaces</p>
        </li>
        <li className="flex gap-2 justify-start items-center cursor-pointer">
          <IoSettingsOutline className="w-5 h-5 text-gray-500" />
          <p>Settings</p>
        </li>
        <li className="flex gap-2 justify-start items-center cursor-pointer">
          <GoQuestion className="w-5 h-5 text-gray-500" />
          <p>FAQs</p>
        </li>
        <li
          className="flex gap-2 justify-start items-center cursor-pointer"
          onClick={logout}
        >
          <MdOutlineLogout className="w-5 h-5 text-gray-500" />
          <p>Logout</p>
        </li>
      </ul>
    </div>
  );
}

export default Setting;
