import { FcGoogle } from "react-icons/fc";
function SignUp() {
  return (
    <div className="backdrop-blur-lg rounded-2xl shadow-2xl px-6 py-4 space-y-2 transition-all duration-500 hover:shadow-xl">
      <div className="text-center">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Create an Account
        </h2>
        <p className="text-gray-500 mt-2">
          Please fill in the details to sign up
        </p>
      </div>
      <form className="space-y-3">
        {/* Full Name Input */}
        <div className="relative">
          <label
            className="block text-gray-700 text-sm font-medium mb-2"
            htmlFor="name"
          >
            Full Name
          </label>
          <div className="relative">
            <i
              data-lucide="user"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
            />
            <input
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/50 transition-all duration-200"
              type="text"
              id="name"
              placeholder="Enter your full name"
              required
            />
          </div>
        </div>
        {/* Email Input */}
        <div className="relative">
          <label
            className="block text-gray-700 text-sm font-medium mb-2"
            htmlFor="email"
          >
            Email Address
          </label>
          <div className="relative">
            <i
              data-lucide="mail"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
            />
            <input
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/50 transition-all duration-200"
              type="email"
              id="email"
              placeholder="Enter your email"
              required
            />
          </div>
        </div>
        {/* Password Input */}
        <div className="relative">
          <label
            className="block text-gray-700 text-sm font-medium mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <div className="relative">
            <i
              data-lucide="lock"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
            />
            <input
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/50 transition-all duration-200"
              type="password"
              id="password"
              placeholder="Create a password"
              required
            />
          </div>
        </div>
        {/* Confirm Password Input */}
        <div className="relative">
          <label
            className="block text-gray-700 text-sm font-medium mb-2"
            htmlFor="confirm-password"
          >
            Confirm Password
          </label>
          <div className="relative">
            <i
              data-lucide="lock"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
            />
            <input
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/50 transition-all duration-200"
              type="password"
              id="confirm-password"
              placeholder="Confirm your password"
              required
            />
          </div>
        </div>
        {/* Sign Up Button */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r cursor-pointer from-blue-600 to-purple-600 text-white py-3 rounded-xl hover:opacity-90 transition duration-200 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
        >
          Sign Up
        </button>
        {/* Divider */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-white/80 text-gray-500">
              Or continue with
            </span>
          </div>
        </div>

        {/* Google Sign In Button */}
        <button
          type="button"
          className="w-full flex items-center justify-center gap-3 py-3 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition duration-200 transform hover:-translate-y-0.5 shadow-md hover:shadow-lg group"
          onClick={() => {
            // Google sign-in logic goes here
            console.log("Google Sign-In clicked");
          }}
        >
          <FcGoogle className="w-5 h-5" />
          <span className="text-gray-600 cursor-pointer group-hover:text-gray-900 transition-colors duration-200">
            Sign up with Google
          </span>
        </button>
      </form>

      {/* Already have an account link */}
      <p className="text-center text-sm py-4 text-gray-600">
        Already have an account?
        <a
          href="#"
          className="text-blue-600 cursor-pointer hover:text-blue-800 font-semibold transition-colors duration-200"
        >
          Sign in
        </a>
      </p>
    </div>
  );
}

export default SignUp;
