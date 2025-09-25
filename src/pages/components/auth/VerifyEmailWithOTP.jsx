import React, { useState } from "react";
import { CheckCircle, XCircle } from "lucide-react";
import ApiClient from "../../../utility/api/ApiClient";
import FullScreenLoader from "../FullScreenLoader";
import { useLocation, useNavigate } from "react-router-dom";
import { useUserAuthContext } from "../../../context/AuthContextProvider";

const VerifyEmailWithOTP = () => {
    const {setAction}=useUserAuthContext();
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const location=useLocation();
  const email=location?.state?.email || "";

  const navigate = useNavigate();

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const handleVerify = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    if (!otp) {
      setError("Please enter the OTP.");
      return;
    }

    setLoading(true);
    try {
      const payload = { email, userInputOtp:otp };
      console.log(payload)
      const res = await ApiClient.postJson("/u/apply-form/verify-otp", payload);

      if (res?.status >= 200 && res?.status < 300) {
        setSuccess(true);
        alert(res?.statusText || "OTP verified successfully!");
        // Redirect to next step, e.g., signup page
        setAction('login');
        navigate("/pages/user/user-type");
      } else {
        setError(res?.statusText || "Invalid OTP.");
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
          Verify OTP
        </h2>

        {error && (
          <p className="flex items-center text-red-600 font-medium mb-4 space-x-2">
            <XCircle size={20} /> <span>{error}</span>
          </p>
        )}

        {success && (
          <p className="flex items-center text-green-600 font-medium mb-4 space-x-2">
            <CheckCircle size={20} /> <span>OTP verified successfully!</span>
          </p>
        )}

        <form onSubmit={handleVerify} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Enter OTP</label>
            <input
              type="text"
              value={otp}
              onChange={handleOtpChange}
              placeholder="Enter the OTP sent to your email"
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition text-lg font-semibold flex items-center justify-center space-x-2"
          >
            <CheckCircle size={20} /> <span>Verify OTP</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default VerifyEmailWithOTP;
