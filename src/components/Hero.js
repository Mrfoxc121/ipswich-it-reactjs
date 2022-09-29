import React from "react";
import { Link } from "react-router-dom"
import hero from "../images/heroImg.png";
import Form from "./Form";
import { OVERLAY_STYLES } from "./Styles";

export default function Hero() {
  return (
    <>
      <div className="container h-[85vh] flex flex-col-reverse lg:flex-row items-center gap-12 mt-14 lg:mt-28">
        {/*  content */}
        <div className="flex flex-1 flex-col items-center lg:items-start">
          <h2 className="text-slate-900 text-4xl md:text-5xl lg:text-7xl text-center lg:text-left mb-6 font-bold">
            Smart IT Solutions And Services
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl  text-slate-500 text-center lg:text-left mb-6">
            Your trusted IT partner, working hard throughout Suffolk, Norfolk,
            Essex and London to serve you.
          </p>
          <div className="flex justify-center flex-wrap gap-6">
            <button
              type="button"
              className="btn btn-green hover:bg-green-700  transition duration-150 ease-in-out"
              data-bs-toggle="modal"
              data-bs-target="#contactModal"
            >
              Contact us
            </button>
            <button type="button" className="btn btn-white border-2 border-green-900 hover:bg-green-100"><Link to="/remote">Remote Help</Link>
              
            </button>
          </div>
        </div>

        {/*  image */}
        <div className="flex flex-1 justfiy-center mb-10 md:mb-16 lg:mb-0 z-10">
          <img
            src={hero}
            alt="hero"
            className="w-5/6 h-5/6 sm:h-3.4 sm:w3/4 md:w-full md:h-full"
          />
        </div>
      </div>

      {/*  Contact Modal */}
      <div
        style={OVERLAY_STYLES}
        className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
        id="contactModal"
        tabindex="-1"
        aria-labelledby="contactModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-scrollable relative w-auto pointer-events-none">
          <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding outline-none text-current">
            <div className="modal-header flex flex-shrink-0 gap-5 items-center justify-between p-4  border-gray-200 rounded-t-md">
              <div className="">
                <h5
                  className="text-4xl leading-normal text-black font-bold my-2"
                  id="contactModalLabel"
                >
                  Contact Us
                </h5>
              </div>

              <button
                type="button"
                className=" btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body relative p-4">
              <p className="text-sm text-black">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Exercitationem eligendi quis expedita vitae eveniet perferendis
                minima! Nostrum omnis reprehenderit ab!
              </p>
              <Form />
            </div>
            <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-gray-200 rounded-b-md">
              <button
                type="button"
                className="inline-block px-6 py-2.5 bg-green-900 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
