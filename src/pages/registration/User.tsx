import Link from "next/link";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import Lottie from "lottie-react";
import register from "../../../public/animation/register.json";
import { FaCheckCircle } from "react-icons/fa";

function User() {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    phone: "",
    password: "",
    terms: false,
    newsletter: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    // You can add your form submission logic here, such as an API call
  };

  return (
    <div className="w-full flex flex-col items-center bg-base-200">
      <div className="w-full flex justify-center items-center bg-white shadow-xl">
        <div className="w-11/12 flex justify-between items-center py-3">
          <Link href="/" className="pl-4 pr-2">
            <img
              src="/img/images/logo2.png"
              alt="Logo"
              style={{ width: 42, height: 35 }}
            />
          </Link>
          <h1 className="text-md text-gray-400 hover:text-gray-600">
            Already Registered?{" "}
            <Link href="/login">
              <span className="text-sky-400 hover:text-sky-600 font-semibold cursor-pointer">
                Login
              </span>
            </Link>{" "}
            here
          </h1>
        </div>
      </div>

      <div className="w-10/12 flex pt-6 pb-4">
        <div className="w-3/12 p-3">
          <div className="w-full p-2 rounded-lg shadow-lg bg-white border border-slate-200 py-4">
            <div className="w-full flex justify-center">
              <Lottie
                animationData={register}
                loop={true}
                className="w-40 h-40"
              />
            </div>
            <ul className="px-3 flex flex-col gap-1 py-4">
              <li className="flex items-start justify-start gap-2">
                <FaCheckCircle className="w-5 h-5 mt-1 text-green-500" />
                <h1>Build your profile and let recruiters find you</h1>
              </li>
              <li className="flex items-start justify-start gap-2">
                <FaCheckCircle className="w-5 h-5 mt-1 text-green-500" />
                <h1>Get job postings delivered right to your email</h1>
              </li>
              <li className="flex items-start justify-start gap-2">
                <FaCheckCircle className="w-5 h-5 mt-1 text-green-500" />
                <h1>Find a job and grow your career</h1>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-9/12 p-3">
          <div className="w-full flex px-6 pt-6 rounded-lg shadow-lg bg-white border border-slate-200">
            <div className="w-9/12">
              <h1 className="text-lg text-gray-600 font-semibold">
                Create your profile
              </h1>
              <h1 className="text-sm text-gray-400">
                Search & apply to jobs from India's No.1 Job Site
              </h1>
              <form className="w-11/12 py-4" onSubmit={handleSubmit}>
                <div className="space-y-4">
                  {/* First Name */}
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      First Name
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-sky-500"
                      placeholder="John"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email Address
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg
                          className="h-5 w-5 text-gray-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                      </div>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        autoComplete="email"
                        className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-sky-500"
                        placeholder="johndoe@example.com"
                      />
                    </div>
                  </div>

                  {/* Password */}
                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Password
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg
                          className="h-5 w-5 text-gray-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <input
                        id="password"
                        name="password"
                        type="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-sky-500"
                        placeholder="••••••••"
                      />
                    </div>
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Phone Number
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg
                          className="h-5 w-5 text-gray-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                      </div>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-sky-500"
                        placeholder="(123) 456-7890"
                      />
                    </div>
                  </div>

                  {/* Terms and Conditions */}
                  <div className="flex items-center">
                    <div className="flex items-center">
                      <input
                        id="terms"
                        name="terms"
                        type="checkbox"
                        checked={formData.terms}
                        onChange={handleChange}
                        className="h-4 w-4 text-sky-400 focus:ring-indigo-500 border-gray-300 rounded"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="terms"
                        className="font-medium text-gray-700"
                      >
                        I agree to the
                        <a
                          href="#"
                          className="text-sky-400 hover:text-indigo-500"
                        >
                          {" "}
                          Terms of Service{" "}
                        </a>
                        and
                        <a
                          href="#"
                          className="text-sky-400 hover:text-indigo-500"
                        >
                          {" "}
                          Privacy Policy
                        </a>
                      </label>
                    </div>
                  </div>

                  {/* Newsletter Subscription */}
                  <div className="flex items-center">
                    <div className="flex items-center">
                      <input
                        id="newsletter"
                        name="newsletter"
                        type="checkbox"
                        checked={formData.newsletter}
                        onChange={handleChange}
                        className="h-4 w-4 text-sky-400 focus:ring-indigo-500 border-gray-300 rounded"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="newsletter"
                        className="font-medium text-gray-700"
                      >
                        Subscribe to our newsletter
                      </label>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="w-full flex justify-start mt-4">
                    <button
                      type="submit"
                      className="w-4/12 flex justify-center py-2.5 px-4 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-gradient-to-r from-blue-400 to-blue-600 cursor-pointer"
                    >
                      Register
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="w-3/12 flex justify-start items-center">
              <div className="flex flex-col gap-2 justify-center items-center">
                <div className="border-gray-300 border-l-2 border-2/3 h-28" />
                <h1 className="text-md text-gray-500">Or</h1>
                <div className="border-gray-300 border-l-2 border-2/3 h-28" />
              </div>
              <div className="w-full flex flex-col gap-2 justify-center items-center">
                <button className="flex items-center justify-center px-6 py-3 gap-2 cursor-pointer bg-white border border-gray-200 hover:border-sky-400 rounded-xl hover:bg-gray-50 transition duration-200 transform hover:-translate-y-0.5 shadow-md hover:shadow-lg group">
                  <FcGoogle className="w-5 h-5" />
                  <span className="text-gray-600 group-hover:text-sky-400">
                    Google
                  </span>
                </button>
                <h1 className="text-md text-gray-400">Continue With</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;
