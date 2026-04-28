import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const baseUrl = "https://emm-core-global-networks-updated.vercel.app/api/v1/users/login";

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  /* =========================
        HANDLE INPUT CHANGE
  ==========================*/
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }
  /* =========================
        HANDLE SUBMIT
  ==========================*/
  const handleLogin = async (e) => {
  e.preventDefault();
  setLoading(true);
  setError("");

  try {
    const res = await fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    console.log("Login response:", data);

    if (!res.ok) {
      throw new Error(data.message || "Login failed");
    }

    if (data.status === "success") {
      const user = data.data.user;

      // 🔐 Save auth data
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(user));

      console.log("Login successful", data);

      // ✅ Role based redirect
      if (user.role === "admin") {
        navigate("/admin/dashboard");
      } else {
        navigate("/userDashboard");
      }
    }
  } catch (err) {
    console.error("Login error:", err);
    setError(err.message);
    alert(`Login failed: ${err.message}`);
  } finally {
    setLoading(false);
  }
};
 
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">

      <h2 className="text-2xl font-bold mb-6 text-center">
        Login
      </h2>

      <form className="space-y-4" onSubmit={handleLogin}>

        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          type="email"
          placeholder="Email"
          className="w-full border px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
        />

        <input
          name="password"
          value={formData.password}
          onChange={handleChange}
          type="password"
          placeholder="Password"
          className="w-full border px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
        />

       <button
         type="submit" 
         disabled={loading}
         className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
        {loading ? "Logging In..." : "Login"}
       </button>

      </form>

      <div className="flex justify-between items-center mt-4">
        <span>
        <input type="checkbox" id="remember" className="mr-2" />
        <label htmlFor="remember" className="text-sm">
          Remember Me
        </label>
      </span>

      <span>
        <Link to="/forgot-password" className="text-blue-600 font-semibold">
          Forgot Password?
        </Link>
      </span>
      </div>

      <p className="text-sm text-center mt-6">
        Don't have an account?{" "}
        <Link to="/signup" className="text-blue-600 font-semibold">
          Sign Up
        </Link>
      </p>

    </div>
  );
};

export default Login;