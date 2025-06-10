import { FaStar } from "react-icons/fa6";
import { IoMdAdd } from "react-icons/io";
function Info() {
  return (
    <div className=" w-full  flex gap-4">
      <img
        className="w-40 border border-slate-300 shadow-2xl   h-40 mt-4 rounded-2xl flex items-center justify-center"
        src="https://logo.clearbit.com/netflix.com"
        alt=" "
      />
      <div className="w-full mt-20 ">
        <div className="w-full flex justify-between">
          <div className="w-8/12 flex  gap-3 justify-start items-end">
            <p className="text-3xl font-semibold tracking-tight">Netflix</p>
            <div className="flex gap-1 justify-center items-center">
              <FaStar className="text-yellow-400 text-xl" />
              <p className="text-gray-400 text-lg">3.5</p>
              <span className="text-gray-200 text-xl">|</span>
              <p className="text-gray-400 text-lg">
                245 <span>reviews</span>
              </p>
            </div>
          </div>

          <div className=" w-4/12 flex gap-4 items-center justify-end  ">
            <p className="text-lg text-gray-500">16.4k follwers</p>
            <button className="bg-sky-500 rounded-3xl px-6 py-2 flex items-center  justify-center gap-2 cursor-pointer">
              <IoMdAdd className="text-gray-200 font-semibold " />
              <span className="text-gray-200 font-semibold ">Follow</span>
            </button>
          </div>
        </div>

        <div className="px-1 py-1 ">
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>
        <div className="flex gap-2 ">
          <p className="px-3 py-0.5 rounded-4xl border text-sm border-slate-200 text-gray-400 flex justify-center items-center">
            automobile
          </p>
          <p className="px-3 py-0.5 rounded-4xl border text-sm border-slate-200 text-gray-400 flex justify-center items-center">
            Software
          </p>
          <p className="px-3 py-0.5 rounded-4xl border text-sm border-slate-200 text-gray-400 flex justify-center items-center">
            Marketing
          </p>
        </div>
      </div>
    </div>
  );
}

export default Info;
