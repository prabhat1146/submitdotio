import React, { useState } from "react";
import ApiClient from "../../../utility/api/ApiClient";
import FullScreenLoader from "../FullScreenLoader";
import { useNavigate } from "react-router-dom";

const ApplyUserSignUp = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    setLoading(true);

    try {
      const subUrl = "/u/apply-form/signup"; // backend endpoint for apply user
      const payload = {
        email: formData.email,
        password: formData.password,
      };

      const res = await ApiClient.postJson(subUrl, payload);
      console.log(res)

      if (res?.status >= 200 && res?.status < 300) {
        alert(res?.statusText || "Sign-up successful");
        navigate("/pages/user/verify-email-with-otp",{state:{email:formData.email}}); // redirect to login
      } else {
        setError(res?.statusText || "Something went wrong");
      }
    } catch (err) {
      console.error(err);
      setError(err?.response?.error || "Internal server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {loading && <FullScreenLoader />}
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-10">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Apply User Signup
        </h2>

        {error && <p className="text-red-600 mb-4">{error}</p>}

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition text-lg font-semibold"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default ApplyUserSignUp;
