import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-white flex items-start justify-start mt-10 md:py-32 py-10"
    >
      <div className="wrapper">
        <div className="flex md:flex-col flex-col items-start justify-start md:gap-2 md:px-44 md:ml-1">
          <h1 className="font-bold text-lg text-blue-500">CONTACT</h1>
          <div>
            <h1 className="font-extrabold text-xl flex mr-5 ">
              Don't be shy! Hit me up!{" "}
              <span>
                <img
                  src="/icons/point.png"
                  alt="point"
                  width={30}
                  className="rotate-180 ml-2 pointer-events-none select-none"
                />
              </span>
            </h1>
          </div>
          <div className="flex md:flex-row flex-col mt-10  gap-10">
            <div className="gap-5 flex items-center justify-center md:ml-0 -ml-6">
              <div className="rounded-full shadow-xl w-[60px] h-[60px] flex items-center justify-center">
                <img src="/icons/map.png" alt="map" className="w-[35px] pointer-events-none select-none" />
              </div>
              <div className=" flex flex-col">
                <h1 className="font-bold">Location</h1>
                <h1 className="cursor-pointer hover:text-blue-500">Davao City, Philippines</h1>
              </div>
            </div>
            <div className="gap-5 flex items-center justify-center">
              <div className="rounded-full shadow-xl w-[60px] h-[60px] flex items-center justify-center">
                <img src="/icons/mail.png" alt="map" className="w-[35px] pointer-events-none select-none" />
              </div>
              <div className=" flex flex-col">
                <h1 className="font-bold">Mail</h1>
                <h1 className="cursor-pointer hover:text-blue-500">kentjohnliloc@gmail.com</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
