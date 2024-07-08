import React from "react";

export default function UnlockSection() {
  return (
    <>
      <div className="md:p-16 p-8">
        <div className="w-full outline outline-1 outline-gray-600 bg-gray-400 mt-8 p-8 h-96 flex flex-col  justify-center">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-[32px] font-bold">
                Unlock everything for 50% OFF
              </div>
              <div className="text-lg">
                Get access to all current and future templates with one single
                payment.
              </div>
              <button className="border-none px-4 py-3 bg-purple-600 w-max text-white rounded-lg mt-2">
                Get All Access
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr className="mt-8 w-full border-t border-gray-400" />
    </>
  );
}
