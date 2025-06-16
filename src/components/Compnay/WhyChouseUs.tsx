import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { IoRocketOutline } from "react-icons/io5";
import { MdSchool, MdOutlineFastfood, MdFitnessCenter } from "react-icons/md";
import { FaHospitalSymbol, FaBusAlt, FaChild } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { CgRowFirst } from "react-icons/cg";
import { CiLocationOn } from "react-icons/ci";

const whyChouseUs = {
  companyName: "TechNova Solutions",
  gallery: [
    "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=600&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1551808525-51a94da548ce?w=600&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1501250987900-211872d97eaa?w=600&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1616499452581-cc7f8e3dd3c9?q=80&w=2070&auto=format&fit=crop",
  ],
  verifiedBenefits: [
    {
      title: "Diversity and Inclusion",
      desc: "We foster an inclusive workplace where everyone feels valued.",
    },
    {
      title: "Health and Wellness",
      desc: "Comprehensive insurance and mental health support for all employees.",
    },
    {
      title: "Learning & Development",
      desc: "Career growth through workshops, mentoring, and paid courses.",
    },
  ],
  reportedBenefits: [
    { title: "Jobs Soft Skill training", icon: MdSchool },
    { title: "Cafeteria", icon: MdOutlineFastfood },
    { title: "Health insurance", icon: FaHospitalSymbol },
    { title: "Office gym", icon: MdFitnessCenter },
    { title: "Office Cab", icon: FaBusAlt },
    { title: "Child Care Facility", icon: FaChild },
  ],
};

function WhyChouseUs() {
  return (
    <div className="w-full flex">
      <div className="w-8/12 px-2 flex flex-col gap-4">
        {/* Life At Company */}
        <div className="w-full rounded-lg bg-white shadow-2xl p-2 py-4">
          <div className="flex justify-between items-center pb-6 pt-1">
            <h1 className="text-md font-semibold">
              Life At {whyChouseUs.companyName}
            </h1>
            <p className="text-md pr-4 font-semibold text-sky-600 cursor-pointer">
              View Gallery
            </p>
          </div>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={10}
            slidesPerView={2}
            autoplay={{ delay: 3000 }}
            loop={true}
          >
            {whyChouseUs.gallery.map((img, i) => (
              <SwiperSlide key={i}>
                <div className="h-46">
                  <img
                    className="h-full w-full rounded-lg shadow-xl object-cover"
                    src={img}
                    alt={`gallery-${i}`}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Company Verified Benefits */}
        <div className="w-full rounded-lg bg-white shadow-2xl p-2 py-8">
          <div className="flex justify-between items-center pb-6 pt-1">
            <h1 className="text-lg font-semibold">Company Verified Benefits</h1>
            <p className="text-md pr-4 font-semibold text-sky-600 cursor-pointer">
              View all benefits
            </p>
          </div>
          <div className="w-full px-2">
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={10}
              slidesPerView={2}
              loop={true}
            >
              {whyChouseUs.verifiedBenefits.map((item, i) => (
                <SwiperSlide key={i}>
                  <div className="h-32">
                    <div className="border border-slate-200 rounded-lg w-full h-full p-4">
                      <h1 className="text-md font-semibold py-0.5">
                        {item.title}
                      </h1>
                      <p className="text-md text-gray-600">
                        {item.desc}
                        <span className="text-sky-400"> Read more...</span>
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* Benefits reported by employees */}
        <div className="w-full rounded-lg bg-white shadow-2xl p-2 py-8">
          <div className="flex justify-between items-center pb-6 pt-1">
            <h1 className="text-lg font-semibold">
              Benefits reported by employees
            </h1>
            <p className="text-md pr-4 font-semibold text-sky-600 cursor-pointer">
              View all benefits
            </p>
          </div>
          <div className="w-full px-2">
            <Swiper modules={[Navigation]} spaceBetween={10} slidesPerView={5}>
              {whyChouseUs.reportedBenefits.map((benefit, i) => {
                const Icon = benefit.icon;
                return (
                  <SwiperSlide key={i}>
                    <div className="h-32">
                      <div className="border border-slate-300 rounded-lg w-full h-full flex flex-col justify-center items-center gap-2 overflow-hidden">
                        <div className="w-10 h-10 flex justify-center items-center">
                          <Icon className="w-6 h-6 text-gray-700" />
                        </div>
                        <p className="text-sm text-gray-500 font-semibold text-center px-2">
                          {benefit.title}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>

      <div className="w-4/12 flex flex-col gap-2 ">
        <div className="w-full p-4 pr-0 pt-0 ">
          <div className="w-full px-4 py-4 border border-slate-200 shadow-xl rounded-md  ">
            <h1 className="text-lg text-gray-500">Overall Rating</h1>
            <div className="lg:col-span-2 hidden lg:flex flex-col space-y-4">
              <div className="flex items-center">
                <span className="text-yellow-400 text-xl">★★★★★</span>
                <p className="ml-2 text-sm font-medium text-gray-900">
                  0 out of 0
                </p>
              </div>
              <div className="flex items-center mt-2">
                <span className="text-sm font-medium text-blue-600 hover:underline shrink-0">
                  5 star
                </span>
                <div className="w-3/4 h-4 mx-2 bg-gray-200 rounded">
                  <div
                    className="h-4 bg-yellow-400 rounded"
                    style={{ width: "50%" }}
                  />
                </div>
                <span className="text-sm font-medium text-gray-500">0%</span>
              </div>
              <div className="flex items-center">
                <span className="text-sm font-medium text-blue-600 hover:underline shrink-0">
                  4 star
                </span>
                <div className="w-3/4 h-4 mx-2 bg-gray-200 rounded">
                  <div
                    className="h-4 bg-yellow-400 rounded"
                    style={{ width: "25%" }}
                  />
                </div>
                <span className="text-sm font-medium text-gray-500">0%</span>
              </div>
              <div className="flex items-center">
                <span className="text-sm font-medium text-blue-600 hover:underline shrink-0">
                  3 star
                </span>
                <div className="w-3/4 h-4 mx-2 bg-gray-200 rounded">
                  <div
                    className="h-4 bg-yellow-400 rounded"
                    style={{ width: "10%" }}
                  />
                </div>
                <span className="text-sm font-medium text-gray-500">0%</span>
              </div>
              <div className="flex items-center">
                <span className="text-sm font-medium text-blue-600 hover:underline shrink-0">
                  2 star
                </span>
                <div className="w-3/4 h-4 mx-2 bg-gray-200 rounded">
                  <div
                    className="h-4 bg-yellow-400 rounded"
                    style={{ width: "5%" }}
                  />
                </div>
                <span className="text-sm font-medium text-gray-500">0%</span>
              </div>
              <div className="flex items-center">
                <span className="text-sm font-medium text-blue-600 hover:underline shrink-0">
                  2 star
                </span>
                <div className="w-3/4 h-4 mx-2 bg-gray-200 rounded">
                  <div
                    className="h-4 bg-yellow-400 rounded"
                    style={{ width: "10%" }}
                  />
                </div>
                <span className="text-sm font-medium text-gray-500">0%</span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full p-4 pr-0 pt-0 ">
          <div className="w-full px-4 py-4 border border-slate-200 shadow-xl rounded-md  ">
            <div className="w-full flex gap-2 justify-start items-center">
              <img
                className="w-12 h-12 border border-slate-300 shadow-2xl rounded-lg"
                src="https://logo.clearbit.com/microsoft.com"
                alt="Company Logo"
              />
              <div className="w-full  flex flex-col justify-center items-start gap-1">
                <p className="px-3 py-1 rounded-4xl border text-sm border-slate-200 text-red-300 flex justify-center items-center">
                  automobile
                </p>
                <h1 className="text-md text-gray-600 px-1">88 job openings </h1>
              </div>
            </div>
            <div className="w-full flex justify-between pt-4">
              <div className="w-full flex flex-col gap-2">
                <h1 className="text-md font-semibold">
                  Hiring Freshers (Customer Service UK/US)
                </h1>
                <div className="flex justify-between items-center">
                  <div className="flex gap-1 justify-start items-center">
                    <CgRowFirst className="w-6 h-6" />
                    <h1 className="text-md text-gray-400">0 Yrs</h1>
                  </div>
                  <div className="flex gap-1 justify-start items-center pr-4">
                    <CiLocationOn className="w-4 h-4" />
                    <h1 className="text-md text-gray-400">Pune Maharshtra</h1>
                  </div>
                </div>
              </div>
              <div className=" flex items-center justify-end ">
                <IoIosArrowForward className="text-sky-400 cursor-pointer w-6 h-6 " />
              </div>
            </div>

            <hr className="border-b-2/2 my-4 w-full border-gray-400" />

            <div className="w-full flex justify-between ">
              <div className="w-full flex flex-col gap-2">
                <h1 className="text-md font-semibold">
                  Walkin Drive For Fresher Australian Chat Process
                </h1>
                <div className="flex justify-between items-center">
                  <div className="flex gap-1 justify-start items-center">
                    <CgRowFirst className="w-6 h-6" />
                    <h1 className="text-md text-gray-400">0 Yrs</h1>
                  </div>
                  <div className="flex gap-1 justify-start items-center pr-4">
                    <CiLocationOn className="w-4 h-4" />
                    <h1 className="text-md text-gray-400">Pune Maharshtra</h1>
                  </div>
                </div>
              </div>
              <div className=" flex items-center justify-end ">
                <IoIosArrowForward className="text-sky-400 cursor-pointer w-6 h-6 " />
              </div>
            </div>

            <div className="w-full flex justify-center items-center pt-8 pb-4 ">
              <button className="bg-gradient-to-r  from-sky-400 to-blue-600 py-2 px-6 rounded-full text-white cursor-pointer">
                View all Openings
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyChouseUs;
