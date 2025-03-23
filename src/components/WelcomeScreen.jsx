import React from "react";
import { NavLink } from "react-router-dom";

const WelcomeScreen = () => {
  return (
    <>
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="w-96 bg-white p-6 rounded-lg shadow-md">
          <div className="flex flex-col items-center justify-end h-[90vh]">
            <h1 className="text-2xl font-bold gidole text-gray-900">
              Welcome to PopX
            </h1>
            <p className="text-gray-500 text-center gidole mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            </p>
            <div className="w-full mt-6">
              <NavLink to='/auth/signUp'>
                <button className="w-full bg-[#6c25ff] text-[#e1d3ff]  py-2 rounded-md font-medium">
                  Create Account
                </button>
              </NavLink>
              <NavLink to='/auth/signIn'>

              <button className="w-full bg-[#cebafb] text-[#393a47] py-2 rounded-md font-bold mt-2">
                Already Registered? Login
              </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WelcomeScreen;
