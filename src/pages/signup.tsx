import Link from "next/link";

function Signup() {
  return (
    <div className="overlay2">
      <div
        className="container mx-auto flex flex-col justify-center items-center  px-4 py-10"
        data-aos="fade-up"
      >
        <div
          className="w-full mt-3 flex items-center gap-2 text-white"
          data-aos="fade-right"
          data-aos-delay="100"
        >
          <Link href="/" className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              fill="currentColor"
              className="bi bi-arrow-left-short text-white"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5"
              />
            </svg>
            <p className="m-0 p-0">Home</p>
          </Link>
        </div>

        <div
          className="w-full py-24 grid grid-cols-1 md:grid-cols-2 gap-6"
          data-aos="zoom-in-up"
          data-aos-delay="100"
        >
          <div
            className="col-span-2 text-center py-8"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h1 className="text-3xl font-bold text-white">Sign Up</h1>
            <p className="text-white text-lg">
              Choose the right portal to access job opportunities or find top
              talent.
            </p>
          </div>

          {/* Employer Section */}
          <div
            className="bg-gray-900 text-white p-6 rounded-lg"
            data-aos="fade-up-right"
            data-aos-delay="100"
          >
            <h2 className="text-2xl font-semibold">For Employers</h2>
            <p className="mt-2">
              Post jobs, manage applicants, and find the perfect candidates to
              grow your team. Join us to streamline your hiring process with
              powerful tools tailored for employers.
            </p>
            <Link href="/page-login-company" className="inline-block mt-4">
              <button className="btn btn-outline-light border px-4 py-2 cursor-pointer  bg-sky-300 text-white rounded shadow font-semibold hover:bg-sky-500 transition">
                Company Login
              </button>
            </Link>
          </div>

          {/* Job Seeker Section */}
          <div
            className="bg-white text-gray-800 p-6 rounded-lg border"
            data-aos="fade-up-left"
            data-aos-delay="100"
          >
            <h2 className="text-2xl font-semibold">For Job Seekers</h2>
            <p className="mt-2">
              Create your profile, upload your resume, and apply to thousands of
              job opportunities across multiple industries. Let your next career
              move start here.
            </p>
            <Link href="/page-login" className="inline-block mt-4">
              <button className="btn btn-outline-secondary border px-4 py-2 border-sky-300 text-black rounded hover:text-sky-500 transition">
                Candidate Login
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
