import React from "react";
import { Fade } from "react-reveal";
import ClientOneModal from "./modals/ClientOneModal";
import ClientThreeModal from "./modals/ClientThreeModal";
import ClientTwoModal from "./modals/ClientTwoModal";

export default function OurClients() {
  return (
  
      <div className="mt-[150px]">  <Fade>
        <div className="mb-10">
          <h1 className="text-4xl font-bold mb-5">Meet Our Clients</h1>
          <p className="text-lg text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. At commodo
            phasellus vel nibh pretium suspendisse.
          </p>
        </div>
        <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
          {/* Card one */}
          <div className="rounded overflow-hidden shadow-lg">
            <img
              className="w-full"
              src="https://cdn.pixabay.com/photo/2019/11/04/01/11/cellular-4599956_1280.jpg"
              alt="Mountain"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Martin Fox</div>
              <div className="font-bold text-xs text-green-500 mb-2">
                CEO / Lazy Chicken Wing
              </div>
              <p className="text-slate-500 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, Nonea! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2 mb-2">
              <button
                className="text-green-100 bg-green-900 py-2 px-6 hover:bg-green-700 transition duration-150 ease-in-out"
                data-bs-toggle="modal"
                data-bs-target="#ClientOne"
              >
                Read Clients Story
              </button>
            </div>
          </div>
          <ClientOneModal />

          {/* card two */}
          <div className="rounded overflow-hidden shadow-lg">
            <img
              className="w-full"
              src="https://cdn.pixabay.com/photo/2016/10/06/03/30/man-1718099_1280.jpg"
              alt="Mountain"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl text-black font-bold mb-2">
                Danny Carrington
              </div>
              <div className="font-bold text-xs text-gray-300 mb-2">
                CEO / Tic Tic Boom
              </div>
              <p className="text-slate-500 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, Nonea! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2 mb-2">
              <button
                className="text-green-100 bg-green-900 py-2 px-6 hover:bg-green-700 transition duration-150 ease-in-out"
                data-bs-toggle="modal"
                data-bs-target="#clientTwo"
              >
                Read Clients Story
              </button>
            </div>
          </div>
          <ClientTwoModal />

          {/* card three */}
          <div className="rounded overflow-hidden shadow-lg">
            <img
              className="w-full"
              src="https://cdn.pixabay.com/photo/2017/09/21/19/06/woman-2773007_1280.jpg"
              alt="Mountain"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-slate-900 text-xl mb-2">
                James Olly
              </div>
              <div className="font-bold text-xs text-green-500 mb-2">
                CEO / NanncyTech
              </div>
              <p className="text-slate-500 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, Nonea! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2 mb-2">
              <button
                className="text-green-100 bg-green-900 py-2 px-6 hover:bg-green-700 transition duration-150 ease-in-out"
                data-bs-toggle="modal"
                data-bs-target="#clientThree"
              >
                Read Clients Story
              </button>
            </div>
          </div>
          <ClientThreeModal />
          
        </div> </Fade>
      </div>
   
  );
}
