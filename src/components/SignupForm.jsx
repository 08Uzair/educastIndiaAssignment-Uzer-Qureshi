import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    isAgency: "yes",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-96 bg-white p-6 rounded-lg shadow-md h-[90vh] relative">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Create your <br /> PopX account
        </h1>

        {[
          { label: "Full Name", name: "fullName" },
          { label: "Phone number", name: "phone" },
          { label: "Email address", name: "email" },
          { label: "Password", name: "password", type: "password" },
          { label: "Company name", name: "company" },
        ].map(({ label, name, type = "text" }) => (
          <div key={name} className="relative my-4">
            <input
              type={type}
              name={name}
              value={formData[name]}
              onChange={handleChange}
              placeholder=" " // This ensures peer-placeholder-shown works
              className="peer w-full border border-gray-300 px-3 py-3 rounded-md focus:border-purple-600 focus:ring-1 focus:ring-purple-600 outline-none"
              required
            />
            <label
              className={`absolute left-3 top-3 text-gray-500 transition-all duration-200 ease-in-out bg-white px-1 
                ${formData[name] ? "top-[-8px] text-xs text-purple-600" : "peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-[-8px] peer-focus:text-xs peer-focus:text-purple-600"}`}
            >
              {label} *
            </label>
          </div>
        ))}

        <div className="my-4">
          <p className="text-gray-700 mb-2">Are you an Agency?*</p>
          <div className="flex gap-4">
            {["Yes", "No"].map((option) => (
              <label key={option} className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="isAgency"
                  value={option.toLowerCase()}
                  checked={formData.isAgency === option.toLowerCase()}
                  onChange={handleChange}
               className="scale-150 accent-purple-600 cursor-pointer"
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
        </div>

        <NavLink to='/account'>

        <button className="w-[85%] bg-purple-600 text-white py-2 rounded-md font-medium absolute bottom-6">
          Create Account
        </button>
        </NavLink>
      </div>
    </div>
  );
};

export default SignupForm;
