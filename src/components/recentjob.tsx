function RecentJob() {
  return (
    <div className="bg-gray-50 w-full" data-aos="fade-up">
      <section className="py-30 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10" data-aos="fade-up">
            <span className="inline-block px-3 py-1 text-sm font-semibold text-sky-600 bg-sky-100 rounded-full mb-4">
              JOB LISTINGS
            </span>
            <p className="mt-2 max-w-2xl mx-auto text-xl text-gray-600">
              Explore the latest job opportunities in the tech industry.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Job 1 */}
            <div
              className="group bg-white p-8 rounded-xl border border-gray-200 hover:border-sky-500 transition-all duration-300 hover:-translate-y-2"
              data-aos="flip-left"
            >
              <div className="w-12 h-12 rounded-lg bg-sky-50 flex items-center justify-center mb-6">
                💻
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Front-End Developer
              </h3>
              <p className="text-gray-600 mb-6">
                Work with React.js to build intuitive UIs for web platforms.
                Prior experience with TailwindCSS is a plus.
              </p>
              <a
                href="#"
                className="inline-flex items-center text-sky-600 hover:text-sky-800 transition-colors"
              >
                <span className="text-sm font-medium">Apply Now</span>
                <svg
                  className="h-4 w-4 ml-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>

            {/* Job 2 */}
            <div
              className="group bg-white p-8 rounded-xl border border-gray-200 hover:border-sky-500 transition-all duration-300 hover:-translate-y-2"
              data-aos="flip-up"
            >
              <div className="w-12 h-12 rounded-lg bg-sky-50 flex items-center justify-center mb-6">
                ☁️
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Cloud Engineer (AWS)
              </h3>
              <p className="text-gray-600 mb-6">
                Maintain and deploy scalable cloud solutions using AWS services
                like EC2, S3, and Lambda.
              </p>
              <a
                href="#"
                className="inline-flex items-center text-sky-600 hover:text-sky-800 transition-colors"
              >
                <span className="text-sm font-medium">Apply Now</span>
                <svg
                  className="h-4 w-4 ml-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>

            {/* Job 3 */}
            <div
              className="group bg-white p-8 rounded-xl border border-gray-200 hover:border-sky-500 transition-all duration-300 hover:-translate-y-2"
              data-aos="flip-right"
            >
              <div className="w-12 h-12 rounded-lg bg-sky-50 flex items-center justify-center mb-6">
                📊
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Data Analyst
              </h3>
              <p className="text-gray-600 mb-6">
                Analyze user data and trends using SQL, Excel, and Power BI.
                Work closely with marketing and product teams.
              </p>
              <a
                href="#"
                className="inline-flex items-center text-sky-600 hover:text-sky-800 transition-colors"
              >
                <span className="text-sm font-medium">Apply Now</span>
                <svg
                  className="h-4 w-4 ml-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default RecentJob;
