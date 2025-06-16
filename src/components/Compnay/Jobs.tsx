import { useState } from "react";
import { CompanyJobsData } from "../sample_data.tsx/data";

const jobsPerPage = 5;

function Jobs() {
  const jobsData = CompanyJobsData;
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // Filter jobs based on keyword and location
  const filteredJobs = jobsData.filter((job) => {
    return (
      job.title.toLowerCase().includes(keyword.toLowerCase()) &&
      job.location.toLowerCase().includes(location.toLowerCase())
    );
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);
  const startIndex = (currentPage - 1) * jobsPerPage;
  const currentJobs = filteredJobs.slice(startIndex, startIndex + jobsPerPage);

  const [selectedJob, setSelectedJob] = useState(filteredJobs[0] || null);

  return (
    <div className="w-full p-4">
      {/* Search Form */}
      <form className="w-full flex gap-4 mt-4">
        <input
          type="text"
          placeholder="Enter keyword"
          value={keyword}
          onChange={(e) => {
            setKeyword(e.target.value);
            setCurrentPage(1); // Reset to page 1 on search
          }}
          className="flex-1 px-4 py-2 w-5/12 placeholder:text-black border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
        />

        <select
          value={location}
          onChange={(e) => {
            setLocation(e.target.value);
            setCurrentPage(1); // Reset to page 1 on filter
          }}
          className="w-5/12 text-black px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
        >
          <option value="">Select Location</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Delhi">Delhi</option>
          <option value="Bangalore">Bangalore</option>
          <option value="Pune">Pune</option>
        </select>

        <button
          type="button"
          className="w-2/12 px-6 py-2 bg-gradient-to-r  from-sky-400 to-blue-600  text-white rounded-md hover:bg-sky-700 transition"
        >
          Find Jobs
        </button>
      </form>

      <h1 className="text-lg text-gray-400 mt-10">
        {filteredJobs.length} job(s) found
      </h1>

      <div className="w-full flex mt-2">
        {/* LEFT COLUMN - JOB LIST */}
        <div className="w-4/12 p-2">
          {currentJobs.map((job) => (
            <div
              key={job.id}
              onClick={() => setSelectedJob(job)}
              className={`cursor-pointer w-full border border-slate-300 shadow-xl rounded-lg p-4 mb-4 flex flex-col hover:bg-gray-100 ${
                selectedJob?.id === job.id ? "bg-gray-100" : ""
              }`}
            >
              <h1 className="font-semibold text-xl">{job.title}</h1>
              <p className="text-gray-600 py-1 text-md">{job.location}</p>
              <div className="flex gap-2 mt-1">
                <p className="px-2 py-1 rounded-sm bg-gray-200 text-sm">
                  {job.type}
                </p>
                <p className="px-2 py-1 rounded-sm bg-gray-200 text-sm">
                  {job.salary}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT COLUMN - JOB DETAIL */}
        <div className="w-8/12 p-2">
          {selectedJob && (
            <div className="w-full rounded-lg shadow-xl border border-slate-200 flex flex-col">
              <div className="w-full px-4 py-6 flex flex-col gap-6">
                <div className="w-full flex justify-start items-center gap-3">
                  <img
                    className="w-14 h-14 border border-slate-300 shadow-2xl rounded-lg"
                    src={selectedJob.logo}
                    alt="Company Logo"
                  />
                  <div className="flex flex-col w-full">
                    <h1 className="text-xl font-semibold">
                      {selectedJob.title}
                    </h1>
                    <p className="text-md text-gray-500">
                      {selectedJob.company} – {selectedJob.location}
                    </p>
                  </div>
                </div>
                <button className="px-10 py-2 bg-gradient-to-r  from-sky-400 to-blue-600  text-white rounded-md hover:bg-sky-700 transition w-fit">
                  Apply
                </button>
              </div>

              <hr className="w-full border-gray-400" />

              <div className="w-full px-4 py-6 flex flex-col gap-4">
                <h2 className="text-lg font-semibold">Job Description</h2>

                <div>
                  <h3 className="font-semibold">Responsibilities</h3>
                  <ul className="list-disc list-inside text-sm px-2">
                    {selectedJob.responsibilities.map((res, index) => (
                      <li key={index}>{res}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold">Skills Required</h3>
                  <ul className="list-disc list-inside text-sm px-2">
                    {selectedJob.skills.map((skill, index) => (
                      <li key={index}>{skill}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold">Qualifications</h3>
                  <ul className="list-disc list-inside text-sm px-2">
                    {selectedJob.qualifications.map((q, index) => (
                      <li key={index}>{q}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold">Perks & Benefits</h3>
                  <ul className="list-disc list-inside text-sm px-2">
                    {selectedJob.perks.map((perk, index) => (
                      <li key={index}>{perk}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="w-full pr-8 flex justify-end items-center mt-6">
          <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              className="relative inline-flex items-center cursor-pointer px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              disabled={currentPage === 1}
            >
              &larr;
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
              &rarr;
            </button>
          </nav>
        </div>
      )}
    </div>
  );
}

export default Jobs;
