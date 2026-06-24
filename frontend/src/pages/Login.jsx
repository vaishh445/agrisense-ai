import { Leaf } from "lucide-react";
import { useNavigate } from "react-router-dom";
import AuthInput from "../components/AuthInput";

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center">

      <div className="bg-white w-[420px] rounded-3xl shadow-2xl p-10">

        <div className="flex justify-center">
          <Leaf size={55} className="text-green-700" />
        </div>

        <h1 className="text-4xl font-bold text-center text-green-700 mt-3">
          AgriSense AI
        </h1>

        <p className="text-center text-gray-500 mt-2 mb-8">
          AI Powered Smart Farming Platform
        </p>

        <AuthInput
          type="email"
          placeholder="Enter your email"
        />

        <div className="mt-4">
          <AuthInput
            type="password"
            placeholder="Enter your password"
          />
        </div>

        <div className="text-right mt-2">
          <button className="text-green-700 hover:underline text-sm">
            Forgot Password?
          </button>
        </div>

        <button
          onClick={handleLogin}
          className="w-full bg-green-700 text-white py-3 rounded-xl mt-6 hover:bg-green-800 transition duration-300"
        >
          Login
        </button>

        <p className="text-center mt-6 text-gray-500">
          Don't have an account?{" "}
          <span className="text-green-700 font-semibold cursor-pointer">
            Register
          </span>
        </p>

      </div>

    </div>
  );
}

export default Login;