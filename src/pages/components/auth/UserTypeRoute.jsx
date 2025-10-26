import React, { useState } from "react";
import { useUserAuthContext } from "../../../context/AuthContextProvider";
import { useNavigate } from "react-router-dom";
import { beautifyText } from "../../../utility/utilityFunctions/beautifyText";

const UserTypeRoute = ({ onNext }) => {
  const [selectedUser, setSelectedUser] = useState("");
  const { action, userType, setUserType } = useUserAuthContext();
  const navigate = useNavigate();
  const handleCheckboxChange = (userType) => {
    setSelectedUser(userType);
    setUserType(userType);
  };

  const handleNext = () => {
    // if (selectedUser && onNext) {
    //   onNext(selectedUser); // pass the selected type to parent or next step
    // }
    if (action === "login") {
      navigate("/pages/user/login");
    } else if (action === "sign-up") {
      if (userType === "apply-user") {
        navigate("/pages/user/apply-user-sign-up");
      } else if (userType === "upload-user") {
        navigate("/pages/user/upload-user-sign-up");
      }else{
        navigate('/pages/error');
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-sm text-center">
        <h1 className="font-bold text-2xl text-green-500">{beautifyText(action)}</h1>
        <h2 className="text-lg font-bold mb-6">Select User Type</h2>

        <div className="flex flex-col space-y-4 mb-6">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={selectedUser === "admin"}
              onChange={() => handleCheckboxChange("admin")}
            />
            <span>Admin</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={selectedUser === "apply-user"}
              onChange={() => handleCheckboxChange("apply-user")}
            />
            <span>Apply User</span>
          </label>

          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={selectedUser === "upload-user"}
              onChange={() => handleCheckboxChange("upload-user")}
            />
            <span>Upload User</span>
          </label>
        </div>

        <button
          onClick={handleNext}
          disabled={!selectedUser}
          className={`w-full py-2 rounded-lg text-white font-semibold transition ${
            selectedUser
              ? "bg-blue-600 hover:bg-blue-700"
              : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          Next
        </button>

        {selectedUser && (
          <p className="mt-4 text-blue-600 font-medium">
            Selected: {selectedUser}
          </p>
        )}
      </div>
    </div>
  );
};

export default UserTypeRoute;
