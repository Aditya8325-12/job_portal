import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { IoIosArrowForward } from "react-icons/io";
import {
  comapany_Info_jobData,
  jobLocations,
  reviews,
} from "../sample_data.tsx/data";
import { FaStar } from "react-icons/fa6";
import CompanyReview from "./CompanyReview";
function Overview() {
  const jobData = comapany_Info_jobData;

  // Sample data for job locations

  const [showAllLocations, setShowAllLocations] = useState(false);

  const toggleShowMore = () => {
    setShowAllLocations(true);
  };

  return (
    <section>
      {/* About Company  */}
      <div className="container bg-gray-100 rounded-sm mx-auto mt-10 py-16 px-4 mb-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-1 items-center gap-8">
          <div className="w-full">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              About Us
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
              eros at lacus feugiat hendrerit sed ut tortor. Suspendisse et
              magna quis elit efficitur consequat. Mauris eleifend velit a
              pretium iaculis. Donec sagittis velit et magna euismod, vel
              aliquet nulla malesuada. Nunc pharetra massa lectus, a fermentum
              arcu volutpat vel.
            </p>
            <div className="mt-8">
              <a
                href="#"
                className="text-blue-500 hover:text-blue-600 font-medium"
              >
                Learn more about us
                <span className="ml-2">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* company jobs  */}
      <div className="w-full p-4">
        <div className="w-full pt-10 h-96 mb-16">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={4}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            loop={true}
          >
            {jobData.map((job, index) => (
              <SwiperSlide key={index} className="pb-10">
                <div className="w-full h-96 p-2 pb-10">
                  <div className="border rounded-lg shadow-xl border-slate-200 w-full h-full overflow-hidden p-4 pt-10">
                    <h1 className="text-xl font-bold">{job.title}</h1>
                    <p className="pt-2 text-md">{job.location}</p>
                    <p className="pt-2 text-sm text-gray-400">{job.daysAgo}</p>
                    <div className="w-full flex justify-center items-center pb-4 pt-10">
                      <button className="w-8/12 text-center border rounded-2xl py-1 px-4 cursor-pointer focus:border-none hover:border-sky-400 focus:outline-none focus:ring-1 focus:ring-sky-500">
                        View Job
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      {/* jobs location  */}
      <div className="w-full p-4">
        <h1 className="py-10 text-2xl font-semibold text-gray-600">
          Browse jobs by location
        </h1>
        <div className="w-full grid grid-cols-3 gap-4">
          {jobLocations
            .slice(0, showAllLocations ? jobLocations.length : 5)
            .map((location, index) => (
              <div
                key={index}
                className="flex justify-between items-center gap-4 border border-gray-300 shadow-xl rounded-lg py-3 px-4"
              >
                <div>
                  <h1 className="text-xl font-semibold">{location.name}</h1>
                  <p className="text-lg text-gray-500">{location.jobs}</p>
                </div>
                <div className="flex justify-end items-center cursor-pointer">
                  <IoIosArrowForward />
                </div>
              </div>
            ))}
          {!showAllLocations && (
            <div
              className="flex justify-center items-center border border-gray-300 shadow-xl rounded-lg py-3 cursor-pointer"
              onClick={toggleShowMore}
            >
              <h1 className="text-lg font-semibold text-sky-400">
                Show more locations
              </h1>
            </div>
          )}
        </div>
      </div>

      {/* Reviews */}
      <div className="w-full p-4">
        <h1 className="text-2xl py-4 font-semibold text-gray-600">Reviews</h1>
        <div className="flex w-full">
          {/* reviews  */}
          <div className="w-8/12 flex flex-col gap-4">
            {reviews.map((review, index) => (
              <div key={index} className="w-full p-2">
                <div className="flex w-full justify-start items-center gap-4">
                  <div className="avatar avatar-placeholder">
                    <div className="bg-neutral text-neutral-content w-12 rounded-full">
                      <span>
                        {review.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                  </div>
                  <div>
                    <h1>{review.name}</h1>
                    <div className="flex gap-2 items-center justify-center">
                      <FaStar className="text-yellow-400 text-xl" />
                      <p className="text-gray-400 text-lg">{review.rating}</p>
                      <span className="text-gray-200 text-xl">|</span>
                      <p className="text-gray-400 text-lg">{review.date}</p>
                    </div>
                  </div>
                </div>
                <h1 className="text-lg font-semibold py-2">{review.title}</h1>
                <p className="text-gray-400">{review.description}</p>
              </div>
            ))}
          </div>
          {/* add review  */}
          <div className="w-4/12 p-4 ">
            <div className="border border-slate-200 shadow-xl rounded-sm    px-6 py-4">
              <h1 className="text-xl font-semibold text-gray-700">
                What would you say about your employer?
              </h1>
              <p className="text-lg text-gray-400 py-2">
                Help fellow jobseekers by sharing your unique experience.
              </p>

              <button
                className="w-full bg-sky-500 text-white py-2 rounded-lg mt-6 my-2 cursor-pointer"
                onClick={() => document.getElementById("Creview").showModal()}
              >
                Write a review
              </button>

              <dialog id="Creview" className="modal">
                <div className="modal-box w-11/12 max-w-2xl h-10/12 scroll-smooth mt-5 overflow-auto ">
                  <CompanyReview review={{}} />
                </div>
              </dialog>
            </div>
          </div>
        </div>
        <div className="flex items-center py-4">
          <h1 className="text-lg  font-semibold text-sky-600 cursor-pointer ">
            Show all Reviews
          </h1>
          <IoIosArrowForward className="text-xl  text-sky-600 pt-1 cursor-pointer" />
        </div>
      </div>
    </section>
  );
}

export default Overview;
