import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Signup = () => {
  const navigate = useNavigate();

  const baseUrl = "https://emm-core-global-networks-updated.vercel.app/api/v1/users/signup";

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    country: "",
    address: "",
    email: "",
    password: "",
    passwordConfirm: "",
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
  };

  /* =========================
        HANDLE SUBMIT
  ==========================*/
  const handleSubmit = async (e) => {
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

      // ✅ Check API response
      const data = await res.json();
      if (data.status === "success") {
        console.log("User registered successfully", data);
        alert("Signup successful");
        navigate("/userDashboard");
      }
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Create Account</h2>

      {error && (
        <p className="text-red-500 text-sm mb-3 text-center">{error}</p>
      )}

      <form className="space-y-4" onSubmit={handleSubmit}>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          type="text"
          placeholder="Full Name"
          className="input"
        />

        <input
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          type="tel"
          placeholder="Phone Number"
          className="input"
        />

        <input
          name="country"
          value={formData.country}
          onChange={handleChange}
          type="text"
          placeholder="Country"
          className="input"
        />

        <input
          name="address"
          value={formData.address}
          onChange={handleChange}
          type="text"
          placeholder="Address"
          className="input"
        />

        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          type="email"
          placeholder="Email"
          className="input"
        />

        <input
          name="password"
          value={formData.password}
          onChange={handleChange}
          type="password"
          placeholder="Password"
          className="input"
        />

        <input
          name="passwordConfirm"
          value={formData.passwordConfirm}
          onChange={handleChange}
          type="password"
          placeholder="Confirm Password"
          className="input"
        />

        <label className="text-sm flex items-center">
          <input type="checkbox" required className="mr-2" />I agree to the
          Terms of Service
        </label>

        {/* ✅ DO NOT wrap button with Link */}
        <button
          type="submit"
          disabled={loading}
          className="w-full mt-4 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
        >
          {loading ? "Creating Account..." : "Sign Up"}
        </button>
      </form>

      <p className="text-sm text-center mt-6">
        Already have an account?{" "}
        <Link to="/login" className="text-blue-600 font-semibold">
          Login
        </Link>
      </p>
    </div>
  );
};

export default Signup;
