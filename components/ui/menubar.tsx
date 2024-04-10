import React from "react";

interface Modalprops {
  isOpen: boolean;
  isModalOpen: (isOpen: boolean) => void;
}
const MenuBar = ({ isOpen, isModalOpen }: Modalprops) => {
  return (
    <>
      <main className="overflow-hidden z-[150]">
        <div
          className={`absolute h-screen inset-[-100px]  bg-[#76898A99] flex items-center justify-center`}
        >
          <div className="max-w-[550px] bg-[#FFFFFF] rounded-md">
            <div className="bg-[#ffffff] w-full h-[70px] flex flex-col justify-start rounded-md">
              <h2 className="p-title text-left text-[#071437] pl-9 mt-7">
                Patient Demographic
              </h2>
              <p className="text-sm pl-9 text-gray-600 pb-10 pt-2">
                Add patient demographic and make sure to submit.
              </p>
            </div>
            <div className="pr-9 mb-9 pt-4">
              <div className="h-[600px]  max-h-[500px] md:px-10 mt-5">
                
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default MenuBar;
