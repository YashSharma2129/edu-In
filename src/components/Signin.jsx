import { useState } from "react";
import { Button } from "./ui/button";
import Footer from "./footer";

export default function Signin() {
  const [formData, setFormData] = useState({
    applicationNumber: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <div className="flex flex-col items-center justify-between min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <h1 className="text-4xl font-light mt-12">
        STUDY<span className="text-black font-bold">table</span>
      </h1>

      {/* Form Section */}
      <div className="flex flex-col items-center w-full max-w-md mt-6">
        <div className="relative w-full mb-10">
          <input
            type="text"
            name="applicationNumber"
            value={formData.applicationNumber}
            onChange={handleChange}
            placeholder="Application Number"
            className="border-b border-gray-400 outline-none text-lg w-full py-2"
          />
          {formData.applicationNumber && (
            <label className="absolute left-0 top-0 text-blue-600 text-xl transform -translate-y-8">
              Application Number
            </label>
          )}
        </div>
        <div className="relative w-full mb-2">
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className="border-b border-gray-400 outline-none text-lg w-full py-2"
          />
          {formData.password && (
            <label className="absolute left-0 top-0  text-blue-600 text-xl transform -translate-y-8">
              Password
            </label>
          )}
        </div>
        <div className="w-full text-right mb-10">
          <a href="#" className="text-blue-500 hover:underline">
            Forgot Password?
          </a>
        </div>

        {/* Signin Button */}
        <Button className="px-8 py-2 bg-blue-500 text-white rounded-lg">
          Signin
        </Button>
      </div>

      <Footer />
    </div>
  );
}