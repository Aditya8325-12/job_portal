import Link from "next/link";
import FeaturesSection from "@/components/feature";
import RecentJob from "@/components/recentjob";
import NewsLeter from "@/components/news";
function Home() {
  return (
    <div className="w-full pt-20 pb-6 flex flex-col justify-center items-center bg-white">
      <div className="w-full  flex flex-col  items-center justify-center py-20 gap-6">
        <h1 className="heading text-sky-500">Fulambri Naukari Bank</h1>
        {/* <p className="subheading">Find Jobs,Careers and Employment</p> */}
        <form className="w-full max-w-4xl mx-auto flex flex-col md:flex-row gap-4  p-4  rounded-md">
          {/* Keyword Input */}
          <input
            type="text"
            placeholder="Enter keyword"
            className="flex-1 px-4 py-2 placeholder:text-black border text-black border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-sky-500"
          />
          {/* Location Dropdown */}
          <select className="w-full text-black md:w-48 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-sky-500">
            <option className="text-black" value="">
              Select Location
            </option>
            <option className="text-black" value="mumbai">
              Mumbai
            </option>
            <option className="text-black" value="delhi">
              Delhi
            </option>
            <option className="text-black" value="bangalore">
              Bangalore
            </option>
            <option className="text-black" value="pune">
              Pune
            </option>
          </select>
          {/* Category Dropdown */}
          <select className="w-full md:w-48 px-4 py-2 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-sky-500">
            <option className="text-black" value="">
              Select Category
            </option>
            <option className="text-black" value="engineering">
              Engineering
            </option>
            <option className="text-black" value="design">
              Design
            </option>
            <option className="text-black" value="marketing">
              Marketing
            </option>
            <option className="text-black" value="sales">
              Sales
            </option>
          </select>
          {/* Submit Button */}
          <Link href={"/jobs"}>
            <button
              // type="submit"
              className="px-6 py-2 bg-sky-600 text-white rounded-md hover:bg-sky-700 transition"
            >
              Search
            </button>
          </Link>
        </form>
        <NewsLeter />
      </div>

      <RecentJob />
      <FeaturesSection />
    </div>
  );
}
export default Home;
