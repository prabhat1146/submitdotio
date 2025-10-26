import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuthContext } from "../../../context/AuthContextProvider";
import ApiClient from "../../../utility/api/ApiClient";
import FullScreenLoader from "../FullScreenLoader";

const Login = () => {
  const { login, setAction, userType } = useUserAuthContext();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Call backend API for login
    if (userType === "apply-user") {
      setLoading(true);
      const subUrl = `/u/apply-form/login`;
      const payload = formData;
      console.log("Login data:", formData);
      ApiClient.postJson(subUrl, payload)
        .then((res) => {
          console.log(res.data);
          if (res.status >= 200 && res.status < 300) {
            alert(res?.statusText || "Login Success");
            // setIsAuthenticated(true);
            //send auth token only
            login(res?.data.data);
            navigate("/pages/user/in/dashboard");
          } else {
            alert(res?.statusText || "Something went wrong.");
          }
        })
        .catch((err) => {
          console.log(err);
          alert(err?.response?.error || "Server error");
        })
        .finally((final) => {
          setLoading(false);
        });
    } else if (userType === "upload-user") {
    } else if (userType === "admin") {
      setLoading(true);
      const subUrl = `/u/admin/login`;
      const payload = formData;
      console.log("Login data:", formData);
      ApiClient.postJson(subUrl, payload)
        .then((res) => {
          console.log(res.data);
          if (res.status >= 200 && res.status < 300) {
            alert(res?.statusText || "Login Success");
            // setIsAuthenticated(true);
            //send auth token only
            login(res?.data.data);
            navigate("/pages/user/in/dashboard/admin");
          } else {
            alert(res?.statusText || "Something went wrong.");
          }
        })
        .catch((err) => {
          console.log(err);
          alert(err?.response?.error || "Server error");
        })
        .finally((final) => {
          setLoading(false);
        });
    }
  };

  const gotoSignUp = () => {
    setAction("sign-up");
    navigate("/pages/user/user-type");
  };
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      {loading && <FullScreenLoader />}
      <div className="bg-white p-6 rounded-2xl shadow-md w-96">
        <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Login
          </button>
          <button onClick={() => gotoSignUp()}>
            Not have an account? Sign up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
