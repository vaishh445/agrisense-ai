import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-100">
      <button
        onClick={() => navigate("/dashboard")}
        className="bg-green-700 text-white px-8 py-4 rounded-xl text-xl"
      >
        Login
      </button>
    </div>
  );
}

export default Login;