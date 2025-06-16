import { IoIosArrowDown } from "react-icons/io";
import { FaStar } from "react-icons/fa6";
import { reviews } from "../sample_data.tsx/data";
import { useState } from "react";
function Review() {
  const reviewsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(reviews.length / reviewsPerPage);
  const startIndex = (currentPage - 1) * reviewsPerPage;
  const currentReviews = reviews.slice(startIndex, startIndex + reviewsPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };
  return (
    <div>
      <div className="flex w-full">
        <div className="w-4/12  p-4 ">
          <div className="w-full">
            <h1 className="text-lg text-gray-500">Overall Rating</h1>
            <div className="lg:col-span-2 hidden lg:flex flex-col space-y-4">
              <div className="flex items-center">
                <span className="text-yellow-400 text-xl">★★★★★</span>
                <p className="ml-2 text-sm font-medium text-gray-900">
                  0 out of 0
                </p>
              </div>
              <p className="text-sm font-medium text-gray-500">
                0 global ratings
              </p>
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
        <div className="w-8/12 p-4">
          <div className="w-full flex justify-between items-center">
            <h1 className="text-lg text-gray-500">{reviews.length} Reviews</h1>
            <div className="dropdown dropdown-end">
              <button
                tabIndex={0}
                role="button"
                className="border flex gap-6 justify-between items-center border-gray-300 text-gray-700 px-3 py-2 rounded-lg hover:bg-gray-100 transition duration-300"
              >
                <span>Filter</span>
                <IoIosArrowDown />
              </button>
              <ul
                tabIndex={0}
                className="menu dropdown-content bg-base-200 rounded-box z-1 mt-4 w-32 shadow-sm flex flex-col justify-end"
              >
                <li>
                  <a>Highest</a>
                </li>
                <li>
                  <a>Lowest</a>
                </li>
                <li>
                  <a>Newest</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Display current reviews */}
          <div className="w-full flex flex-col gap-4 p-4">
            {currentReviews.map((review, index) => (
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

          {/* Pagination */}
          <div className="w-full flex justify-end">
            <div className="flex justify-center items-center mt-6">
              <nav
                className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
                aria-label="Pagination"
              >
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                  disabled={currentPage === 1}
                >
                  <span className="sr-only">Previous</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 19.5L8.25 12l7.5-7.5"
                    />
                  </svg>
                </button>

                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => handlePageChange(i + 1)}
                    className={`relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium ${
                      currentPage === i + 1
                        ? "bg-gray-200"
                        : "bg-white text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}

                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                  disabled={currentPage === totalPages}
                >
                  <span className="sr-only">Next</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Review;
