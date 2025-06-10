import Navbar from "@/components/navbar";

function Services() {
  return (
    <div className="w-full  flex justify-center items-center flex-col pt-20">
      <div className="container w-10/12   mt-9 flex flex-col justify-between">
        <h2
          className="mb-1 text-3xl font-extrabold leading-tight text-gray-900"
          data-aos="fade-up"
        >
          Services
        </h2>
        <p
          className="mb-12 text-lg text-gray-500"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Here is a few of the awesome Services we provide.
        </p>

        {/* Services Cards */}
        <div className="w-full">
          <div className="flex flex-col w-full mb-10 sm:flex-row">
            {/* DAPP */}
            <div
              className="w-full mb-10 sm:mb-0 sm:w-1/2"
              data-aos="fade-right"
            >
              <div className="relative h-full ml-0 mr-0 sm:mr-10">
                <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-indigo-500 rounded-lg" />
                <div className="relative h-full p-5 bg-white border-2 border-indigo-500 rounded-lg">
                  <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                    DAPP Development
                  </h3>
                  <p className="mt-3 mb-1 text-xs font-medium text-indigo-500 uppercase">
                    ------------
                  </p>
                  <p className="mb-2 text-gray-600">
                    A decentralized application (dapp) is an application built
                    on a decentralized network that combines a smart contract
                    and a frontend user interface.
                  </p>
                </div>
              </div>
            </div>
            {/* Web 3.0 */}
            <div className="w-full sm:w-1/2" data-aos="fade-left">
              <div className="relative h-full ml-0 md:mr-10">
                <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-purple-500 rounded-lg" />
                <div className="relative h-full p-5 bg-white border-2 border-purple-500 rounded-lg">
                  <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                    Web 3.0 Development
                  </h3>
                  <p className="mt-3 mb-1 text-xs font-medium text-purple-500 uppercase">
                    ------------
                  </p>
                  <p className="mb-2 text-gray-600">
                    Web 3.0 is the third generation of Internet services that
                    will focus on understanding and analyzing data to provide a
                    semantic web.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col w-full mb-5 sm:flex-row">
            {/* Project Audit */}
            <div
              className="w-full mb-10 sm:mb-0 sm:w-1/2"
              data-aos="zoom-in-up"
            >
              <div className="relative h-full ml-0 mr-0 sm:mr-10">
                <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-blue-400 rounded-lg" />
                <div className="relative h-full p-5 bg-white border-2 border-blue-400 rounded-lg">
                  <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                    Project Audit
                  </h3>
                  <p className="mt-3 mb-1 text-xs font-medium text-blue-400 uppercase">
                    ------------
                  </p>
                  <p className="mb-2 text-gray-600">
                    A Project Audit is a formal review of a project, which is
                    intended to assess the extent up to which project management
                    standards are being upheld.
                  </p>
                </div>
              </div>
            </div>

            {/* Hacking / RE */}
            <div
              className="w-full mb-10 sm:mb-0 sm:w-1/2"
              data-aos="zoom-in-up"
              data-aos-delay="100"
            >
              <div className="relative h-full ml-0 mr-0 sm:mr-10">
                <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-yellow-400 rounded-lg" />
                <div className="relative h-full p-5 bg-white border-2 border-yellow-400 rounded-lg">
                  <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                    Hacking / RE
                  </h3>
                  <p className="mt-3 mb-1 text-xs font-medium text-yellow-400 uppercase">
                    ------------
                  </p>
                  <p className="mb-2 text-gray-600">
                    A security hacker is someone who explores methods for
                    breaching defenses and exploiting weaknesses in a computer
                    system or network.
                  </p>
                </div>
              </div>
            </div>

            {/* Bot/Script Dev */}
            <div
              className="w-full sm:w-1/2"
              data-aos="zoom-in-up"
              data-aos-delay="200"
            >
              <div className="relative h-full ml-0 md:mr-10">
                <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-green-500 rounded-lg" />
                <div className="relative h-full p-5 bg-white border-2 border-green-500 rounded-lg">
                  <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                    Bot/Script Development
                  </h3>
                  <p className="mt-3 mb-1 text-xs font-medium text-green-500 uppercase">
                    ------------
                  </p>
                  <p className="mb-2 text-gray-600">
                    Bot development frameworks were created as advanced software
                    tools that eliminate a large amount of manual work and
                    accelerate the development process.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-50 w-full" data-aos="fade-up">
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16" data-aos="fade-up">
              <span className="inline-block px-3 py-1 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full mb-4">
                FEATURES
              </span>
              <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">
                Designed for modern teams
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
                Powerful features to boost your productivity and workflow.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Feature 1 */}
              <div
                className="group bg-white p-8 rounded-xl border border-gray-200 hover:border-blue-500 transition-all duration-300 hover:-translate-y-2"
                data-aos="flip-left"
              >
                <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-6">
                  <svg
                    className="h-6 w-6 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Blazing Fast
                </h3>
                <p className="text-gray-600 mb-6">
                  Optimized performance with near-instant load times and smooth
                  animations.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <span className="text-sm font-medium">Learn more</span>
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

              {/* Feature 2 */}
              <div
                className="group bg-white p-8 rounded-xl border border-gray-200 hover:border-blue-500 transition-all duration-300 hover:-translate-y-2"
                data-aos="flip-up"
              >
                <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-6">
                  <svg
                    className="h-6 w-6 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Enterprise Security
                </h3>
                <p className="text-gray-600 mb-6">
                  Military-grade encryption and regular security audits to
                  protect your data.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <span className="text-sm font-medium">Learn more</span>
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

              {/* Feature 3 */}
              <div
                className="group bg-white p-8 rounded-xl border border-gray-200 hover:border-blue-500 transition-all duration-300 hover:-translate-y-2"
                data-aos="flip-right"
              >
                <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-6">
                  <svg
                    className="h-6 w-6 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Customizable
                </h3>
                <p className="text-gray-600 mb-6">
                  Tailor the interface to your workflow with modular components
                  and themes.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <span className="text-sm font-medium">Learn more</span>
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
    </div>
  );
}

export default Services;
