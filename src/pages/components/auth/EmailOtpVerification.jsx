import React, { useState } from "react";
import { MailCheck, XCircle, CheckCircle } from "lucide-react";
import ApiClient from "../../../utility/api/ApiClient";
import FullScreenLoader from "../FullScreenLoader";

const EmailOtpVerification = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1); // 1: email input, 2: otp input
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  // Handle email input change
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // Handle OTP input change
  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  // Send OTP
  const handleSendOtp = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    if (!email) {
      setError("Please enter your email.");
      return;
    }

    setLoading(true);
    try {
      const res = await ApiClient.postJson("/u/verify-email", { email });

      if (res?.statusCode >= 200 && res?.statusCode < 300) {
        setStep(2); // show OTP input
        setSuccess(true);
      } else {
        setError(res?.data?.data?.message || "Failed to send OTP.");
      }
    } catch (err) {
      console.error(err);
      setError(err?.response?.data?.error || "Internal server error");
    } finally {
      setLoading(false);
    }
  };

  // Verify OTP
  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    if (!otp) {
      setError("Please enter the OTP.");
      return;
    }

    setLoading(true);
    try {
      const res = await ApiClient.postJson("/u/verify-otp", { email, otp });

      if (res?.statusCode >= 200 && res?.statusCode < 300) {
        setSuccess(true);
        alert(res?.data?.data?.message || "Email verified successfully!");
        // Proceed to signup or dashboard
      } else {
        setError(res?.data?.data?.message || "Invalid OTP.");
      }
    } catch (err) {
      console.error(err);
      setError(err?.response?.data?.error || "Internal server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {loading && <FullScreenLoader />}
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-10">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Email Verification
        </h2>

        {error && (
          <p className="flex items-center text-red-600 font-medium mb-4 space-x-2">
            <XCircle size={20} /> <span>{error}</span>
          </p>
        )}

        {success && step === 1 && (
          <p className="flex items-center text-green-600 font-medium mb-4 space-x-2">
            <MailCheck size={20} /> OTP sent to {email}
          </p>
        )}

        {success && step === 2 && (
          <p className="flex items-center text-green-600 font-medium mb-4 space-x-2">
            <CheckCircle size={20} /> Email verified successfully!
          </p>
        )}

        {step === 1 && (
          <form onSubmit={handleSendOtp} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Enter your email"
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition text-lg font-semibold flex items-center justify-center space-x-2"
            >
              <MailCheck size={20} /> <span>Send OTP</span>
            </button>
          </form>
        )}

        {step === 2 && (
          <form onSubmit={handleVerifyOtp} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">OTP</label>
              <input
                type="text"
                value={otp}
                onChange={handleOtpChange}
                placeholder="Enter OTP"
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
        )}
      </div>
    </div>
  );
};

export default EmailOtpVerification;
