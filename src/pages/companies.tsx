import Navbar from "@/components/navbar";
import { FaStar } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import React, { useState } from "react";
import { companies_list, industries } from "@/components/sample_data.tsx/data";
import Link from "next/link";

const types = ["IT", "Retail", "Manufacturing", "Media", "Software"];

function Companies() {
  const [selectedIndustries, setSelectedIndustries] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const companiesPerPage = 8;

  const toggleSelection = (item, list, setList) => {
    setList((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  const filteredCompanies = companies_list.filter((company) => {
    const industryMatch =
      selectedIndustries.length === 0 ||
      selectedIndustries.includes(company.industry);
    const typeMatch =
      selectedTypes.length === 0 || selectedTypes.includes(company.type);
    return industryMatch && typeMatch;
  });

  // Pagination calculations
  const indexOfLastCompany = currentPage * companiesPerPage;
  const indexOfFirstCompany = indexOfLastCompany - companiesPerPage;
  const paginatedCompanies = filteredCompanies.slice(
    indexOfFirstCompany,
    indexOfLastCompany
  );
  const totalPages = Math.ceil(filteredCompanies.length / companiesPerPage);
  return (
    <div className="w-full flex justify-center items-center flex-col pt-20">
      <section className="flex flex-col gap-3 py-6  max-w-screen-2xl w-full px-3 sm:px-8 lg:px-16 xl:px-32">
        {/* <h3 className="text-4xl font-semibold tracking-tight sm:max-md:text-center">
          Companies
        </h3> */}

        <div className="w-full flex justify-center gap-10  ">
          {/* Sidebar Filters */}
          <div className="w-3/12 p-3 flex items-center justify-center">
            <div className="w-full">
              <div className="p-4 bg-white shadow-xl rounded space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold text-lg">All Filters</h2>
                  <span className="text-blue-600 cursor-pointer text-sm">
                    Applied 0
                  </span>
                </div>

                {/* Industry Filter */}
                <div>
                  <h3 className="font-medium mb-2">Industry</h3>
                  <div className="space-y-2 text-sm text-gray-700">
                    {industries.map((ind) => (
                      <label key={ind} className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={selectedIndustries.includes(ind)}
                          onChange={() =>
                            toggleSelection(
                              ind,
                              selectedIndustries,
                              setSelectedIndustries
                            )
                          }
                          className="accent-blue-600"
                        />
                        {ind}
                      </label>
                    ))}
                  </div>
                </div>

                {/* Type Filter */}
                <div>
                  <h3 className="font-medium mb-2">Company Type</h3>
                  <div className="space-y-2 text-sm text-gray-700">
                    {types.map((type) => (
                      <label key={type} className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={selectedTypes.includes(type)}
                          onChange={() =>
                            toggleSelection(
                              type,
                              selectedTypes,
                              setSelectedTypes
                            )
                          }
                          className="accent-blue-600"
                        />
                        {type}
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Company List */}
          <div className="w-8/12">
            <p className="text-gray-400 py-5 pb-6">
              Showing {filteredCompanies.length} results
            </p>
            <div className="grid gap-y-6 grid-cols-1 sm:grid-cols-2 gap-x-4">
              {paginatedCompanies.map((company, index) => (
                <div
                  key={index}
                  className="px-2 py-3 rounded-lg shadow-2xl flex gap-3"
                >
                  {/* Logo */}
                  <div className="py-2 w-3/12 px-3 flex items-center justify-center rounded-xl border border-slate-200">
                    <img
                      src={company.logo}
                      alt={company.name}
                      className="w-12 h-12 object-contain"
                    />
                  </div>

                  {/* Info */}
                  <div className="w-8/12 flex flex-col gap-1">
                    <p className="text-lg font-semibold tracking-tight">
                      {company.name}
                    </p>
                    <div className="flex gap-1 justify-start items-center">
                      <FaStar className="text-yellow-400 text-sm" />
                      <p className="text-gray-400 text-sm">{company.rating}</p>
                      <span className="text-gray-200 text-md">|</span>
                      <p className="text-gray-400 text-sm">
                        {company.reviews.toLocaleString()} <span>reviews</span>
                      </p>
                    </div>
                    <div className="flex gap-1 flex-wrap">
                      <p className="px-3 py-0.5 rounded-4xl border text-sm border-slate-200 text-gray-400">
                        {company.type}
                      </p>
                      <p className="px-3 py-0.5 rounded-4xl border text-sm border-slate-200 text-gray-400">
                        {company.industry}
                      </p>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="w-1/12 flex items-center justify-center">
                    <Link href={"/CompanyInfo"} rel="noopener noreferrer">
                      <IoIosArrowForward className="text-xl cursor-pointer text-gray-500" />
                    </Link>
                  </div>
                </div>
              ))}

              {filteredCompanies.length === 0 && (
                <div className="text-center text-gray-500 w-full col-span-2">
                  No companies match your filter criteria.
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Pagination */}
        <div className="w-full pr-8 flex justify-end items-center mt-6">
          <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              className="relative inline-flex items-center cursor-pointer px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              disabled={currentPage === 1}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>

            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`relative inline-flex items-center cursor-pointer px-4 py-2 border text-sm font-medium ${
                  currentPage === i + 1
                    ? "bg-blue-500 text-white border-blue-500"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                }`}
              >
                {i + 1}
              </button>
            ))}

            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              className="relative inline-flex items-center px-2 py-2 cursor-pointer rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              disabled={currentPage === totalPages}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </nav>
        </div>
      </section>
    </div>
  );
}

export default Companies;
