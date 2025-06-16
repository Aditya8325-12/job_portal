import { FcGoogle } from "react-icons/fc";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { signIn } from "@/redux/authSlice";

function SignIn() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();

    const dummyUser = {
      email: "test@gmail.com",
      password: "123456",
      type: "user",
      id: "1",
    };

    if (email === dummyUser.email && password === dummyUser.password) {
      dispatch(signIn({ type: "user", id: dummyUser.id }));
      router.refresh();
    } else {
      alert("Invalid credentials. Try test@gmail.com / 123456");
    }
  };

  return (
    <div className="backdrop-blur-lg  p-8 space-y-12 transition-all duration-500 max-w-md mx-auto">
      <div className="text-center">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
          Welcome Back
        </h2>
        <p className="text-gray-500 mt-2">Please sign in to continue</p>
      </div>

      <form className="space-y-6" onSubmit={handleLogin}>
        <div>
          <label className="block text-gray-700 text-sm font-medium mb-2">
            Email Address
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full pl-4 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 bg-white/50"
          />
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-medium mb-2">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full pl-4 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 bg-white/50"
          />
        </div>

        <div className="flex items-center justify-between">
          <label className="flex items-center text-gray-600 text-sm">
            <input
              type="checkbox"
              className="h-4 w-4 text-blue-600 border-gray-300 rounded"
            />
            <span className="ml-2">Remember me</span>
          </label>
          <a
            href="#"
            className="text-sm text-blue-600 hover:text-blue-800 font-medium transition-colors"
          >
            Forgot password?
          </a>
        </div>

        <button
          type="submit"
          className="w-full cursor-pointer  bg-gradient-to-r  from-sky-400 to-blue-600 text-white py-3 rounded-xl hover:opacity-90 transition duration-200 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
        >
          Sign In
        </button>

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

        <button
          type="button"
          onClick={() => {
            console.log("Google Sign-In clicked");
          }}
          className="w-full flex items-center justify-center gap-3 py-3 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition duration-200 transform hover:-translate-y-0.5 shadow-md hover:shadow-lg group"
        >
          <FcGoogle className="w-5 h-5" />
          <span className="text-gray-600 group-hover:text-gray-900">
            Sign in with Google
          </span>
        </button>
      </form>

      <p className="text-center text-sm text-gray-600">
        Don't have an account?{" "}
        <a
          href="registration/User"
          className="text-blue-600 cursor-pointer hover:text-blue-800 font-semibold"
        >
          Sign up
        </a>
      </p>
    </div>
  );
}

export default SignIn;
