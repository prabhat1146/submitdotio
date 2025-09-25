import React, { useState } from "react";
import ApiClient from "../../../utility/api/ApiClient";
import FullScreenLoader from "../FullScreenLoader";

const UploadUserSignUp = () => {
  const [loading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    headName: "not available",
    instituteAddress: "not available",
    instituteContactNumber: "1234567890",
    instituteMailId: "submitdotio@gmail.com",
    instituteName: "not available",
    loginMailId: "",
    websitelink: "businessbasket",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    console.log("Signup data:", formData);
    const subUrl = "/u/upload-form/signup";

    const payload = formData;
    ApiClient.postJson(subUrl, payload)
      .then((res) => {
        if (res.status >= 200 && res.status <= 299) {
          alert(res?.statusText || "Signup successfull.");
        } else {
          alert(res?.statusText || "Something went wrong.");
        }
        console.log(res)
      })
      .catch((err) => {
        console.log(err);
        alert(err?.response?.data?.error || "Error");
      })
      .finally((final) => {
        setIsLoading(false);
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen ">
      {loading && <FullScreenLoader />}

      <div className="w-full bg-white rounded-2xl shadow-xl p-10">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Create Your Account
        </h2>
        <form
          onSubmit={handleSubmit}
          className=" m-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          <div>
            <label className="block text-sm font-medium mb-1">Head Name</label>
            <input
              type="text"
              name="headName"
              value={formData.headName}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Institute Name
            </label>
            <input
              type="text"
              name="instituteName"
              value={formData.instituteName}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Institute Address
            </label>
            <input
              type="text"
              name="instituteAddress"
              value={formData.instituteAddress}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Institute Contact Number
            </label>
            <input
              type="text"
              name="instituteContactNumber"
              value={formData.instituteContactNumber}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Institute Mail ID
            </label>
            <input
              type="email"
              name="instituteMailId"
              value={formData.instituteMailId}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Login Mail ID
            </label>
            <input
              type="email"
              name="loginMailId"
              value={formData.loginMailId}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Website Link
            </label>
            <input
              type="text"
              name="websitelink"
              value={formData.websitelink}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
            />
          </div>

          <div className="md:col-span-2 mt-4">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition text-lg font-semibold"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UploadUserSignUp;
