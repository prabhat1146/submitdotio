import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUserAuthContext } from "../../../context/AuthContextProvider";

const LogoutPage = () => {
  const { logout } = useUserAuthContext();
  const navigate = useNavigate();

  // Optionally logout immediately on mount
  useEffect(() => {
    logout();
  }, [logout]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-10 rounded-xl shadow-lg text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">You have been logged out</h1>
        <p className="text-gray-600 mb-6">Thank you for using our app.</p>
        <button
          onClick={() => navigate("/")}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default LogoutPage;
