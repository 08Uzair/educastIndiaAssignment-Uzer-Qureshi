import React, { useState } from "react";
const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isFormValid = formData.email.trim() !== "" && formData.password.trim() !== "";

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-96 bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-gray-900">
          Signin to your <br /> PopX account
        </h1>
        <p className="text-gray-500 mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <form className="mt-6">
          {[
            { label: "Email Address", name: "email", type: "email" },
            { label: "Password", name: "password", type: "password" },
          ].map(({ label, name, type }) => (
            <div key={name} className="relative my-4">
              <input
                type={type}
                name={name}
                value={formData[name]}
                onChange={handleChange}
                placeholder=" " // Required for floating labels
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

            <button
              type="submit"
              className={`w-full py-2 rounded-md font-medium mt-2 transition-all duration-300 ${
                isFormValid
                  ? "bg-purple-600 text-white hover:bg-purple-700"
                  : "bg-gray-300 text-gray-600 cursor-not-allowed"
              }`}
              disabled={!isFormValid}
            >
              Login
            </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
