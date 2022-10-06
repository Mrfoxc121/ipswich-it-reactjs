import React from "react";
import ContactUsModal from "./modals/ContactUsModal";
import Fade from "react-reveal/Fade";
import hero from "../images/heroImg.png";
import RemoteRemoteContactModal from "./modals/RemoteContactModal";

export default function Hero() {
  return (
    <>
      <div className="container h-[85vh] flex flex-col-reverse lg:flex-row items-center gap-12 mt-14 lg:mt-28">
        {/*  content */}
        <div className="flex flex-1 flex-col items-center lg:items-start">
          <Fade delay={100}>
            <h2 className="text-slate-900 text-4xl md:text-5xl lg:text-7xl text-center lg:text-left mb-6 font-bold">
              Smart IT Solutions And Services
            </h2>
          </Fade>
          <Fade delay={200}>
            <p className="text-lg md:text-xl lg:text-2xl  text-slate-500 text-center lg:text-left mb-6">
              Your trusted IT partner, working hard throughout Suffolk, Norfolk,
              Essex and London to serve you.
            </p>
          </Fade>

          <Fade delay={300}>
            <div className="flex justify-center flex-wrap gap-6">
              <button
                type="button"
                className=" bg-green-900 border-2 border-green-900 text-white py-2 px-6 hover:bg-green-700  transition duration-150 ease-in-out rounded"
                data-bs-toggle="modal"
                data-bs-target="#contactModal"
              >
                Contact us
              </button>
              <button
                type="button"
                className="py-2 px-6 border-2 border-green-900 hover:bg-green-100 hover:border-white rounded transition duration-150 ease-in-out "
                data-bs-toggle="modal"
                data-bs-target="#RemoteContactModal"
              >
                Remote Contact
              </button>
            </div>
          </Fade>
        </div>

        {/*  image */}
        <div className="flex flex-1 justfiy-center mb-10 md:mb-16 lg:mb-0 z-10">
          <Fade delay={400}>
            <img
              src={hero}
              alt="hero"
              className="w-5/6 h-5/6 sm:h-3.4 sm:w3/4 md:w-full md:h-full"
            />
          </Fade>
        </div>
      </div>

      {/* Contact Modals */}
      <ContactUsModal />
      <RemoteRemoteContactModal />
    </>
  );
}
