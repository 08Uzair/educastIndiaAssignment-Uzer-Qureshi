import React from "react";

const Account = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="max-w-sm mx-auto bg-[#f7f8f9] shadow-md rounded-lg border p-5 h-[90vh]">
        <div className="text-lg font-semibold w-full rounded-lg bg-white text-gray-800 mb-4 p-2">
          Account Settings
        </div>

        <div className="border-b-2 border-dashed border-gray-500">
          <div className="flex items-center gap-4">
            <div className="relative">
              <img
                src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"
                alt="User"
                className="w-16 h-16 rounded-full border"
              />
              <div className="absolute bottom-[-10px] right-[-10px] bg-[#6c25ff] border p-1 rounded-full">
                <span className="text-purple-600 text-lg">📷</span>
              </div>
            </div>
            <div>
              <h3 className="text-md font-bold text-gray-900">Marry Doe</h3>
              <p className="text-sm text-gray-500">Marry@Gmail.Com</p>
            </div>
          </div>

          <p className="text-gray-600 text-sm mt-3 mb-4">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
            Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
            Erat, Sed Diam
          </p>
        </div>
      </div>
    </div>
  );
};

export default Account;
