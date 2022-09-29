import React from "react";
import {  Link } from "react-router-dom"

export default function Services() {
  return (
    <>
      <div>
        <div className="flex items-end mb-20">
          <div className="flex-1">
            <h1 className="text-3xl lg:text-4xl font-bold mb-5">Services</h1>
          <p className="text-lg text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. At commodo phasellus vel nibh pretium suspendisse.</p>
          </div>
          
          <div className="flex items-center gap-2">
            <button className="text-white font-bold bg-green-900 hover:bg-green-700 py-2 px-6"><Link to="/services">See All</Link></button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-10">
        <div className="shaddow-xl min-h-[50px] lg:col-span-2">
          <div className="antialiased text-gray-900">
            <img
              src="https://source.unsplash.com/random/350x350"
              alt=" random imgee"
              className="w-full h-[350px] object-cover object-center shadow-md"
            />
            <div className="relative px-4 -mt-16  ">
              <div className="flex  justify-between items-center bg-green-900 opacity-90 p-6 shadow-lg">
                <h4 className="mt-1 text-lg text-green-100 font-semibold uppercase leading-tight">
                  Cloud Computing
                </h4>
                <div className="flex items-center gap-2">
                  <button className="text-green-100 text-sm font-bold"><Link to="/cloud-computing">See More</Link></button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="shaddow-xl min-h-[50px]">
          <div className="antialiased text-gray-900">
            <img
              src="https://source.unsplash.com/random/350x350"
              alt=" random imgee"
              className="w-full h-[350px] object-cover object-center shadow-md"
            />
            <div className="relative px-4 -mt-16  ">
              <div className="flex  justify-between items-center bg-green-900 opacity-90 p-6 shadow-lg">
                <h4 className="mt-1 text-lg text-green-100 font-semibold uppercase leading-tight">
                  Data Recovery
                </h4>
                <div className="flex items-center gap-2">
                  <button className="text-green-100 text-sm font-bold"><Link to="/data-recovery">See More</Link></button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="shaddow-xl min-h-[50px]">
          <div className="antialiased text-gray-900">
            <img
              src="https://source.unsplash.com/random/350x350"
              alt=" random imgee"
              className="w-full h-[350px] object-cover object-center shadow-md"
            />
            <div className="relative px-4 -mt-16  ">
              <div className="flex  justify-between items-center bg-green-900 opacity-90 p-6 shadow-lg">
                <h4 className="mt-1 text-lg text-green-100 font-semibold uppercase leading-tight">
                  CCTV & Servalence
                </h4>
                <div className="flex items-center gap-2">
                  <button className="text-green-100 text-sm font-bold"><Link to="/cctv-servalence">See More</Link></button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="shaddow-xl min-h-[50px]">
          <div className="antialiased text-gray-900">
            <img
              src="https://source.unsplash.com/random/350x350"
              alt=" random imgee"
              className="w-full h-[350px] object-cover object-center shadow-md"
            />
            <div className="relative px-4 -mt-16  ">
              <div className="flex  justify-between items-center bg-green-900 opacity-90 p-6 shadow-lg">
                <h4 className="mt-1 text-lg text-green-100 font-semibold uppercase leading-tight">
                  Cyber Security
                </h4>
                <div className="flex items-center gap-2">
                  <button className="text-green-100 text-sm font-bold"><Link to="/cyber-security">See More</Link></button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="shaddow-xl min-h-[50px]">
          <div className="antialiased text-gray-900">
            <img
              src="https://source.unsplash.com/random/350x350"
              alt=" random imgee"
              className="w-full h-[350px] object-cover object-center shadow-md"
            />
            <div className="relative px-4 -mt-16  ">
              <div className="flex  justify-between items-center bg-green-900 opacity-90 p-6 shadow-lg">
                <h4 className="mt-1 text-lg text-green-100 font-semibold uppercase leading-tight">
                  Network Services
                </h4>
                <div className="flex items-center gap-2">
                  <button className="text-green-100 text-sm font-bold"><Link to="/network-services">See More</Link></button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="shaddow-xl min-h-[50px] col-span-2">
          <div className="antialiased text-gray-900">
            <img
              src="https://source.unsplash.com/random/350x350"
              alt=" random imgee"
              className="w-full h-[350px] object-cover object-center shadow-md"
            />
            <div className="relative px-4 -mt-16  ">
              <div className="flex  justify-between items-center bg-green-900 opacity-90 p-6 shadow-lg">
                <h4 className="mt-1 text-xl text-green-100 font-semibold uppercase leading-tight">
                  Penetration Testing
                </h4>
                <div className="flex items-center gap-2">
                  <button className="text-green-100 text-sm font-bold"><Link to="/penetration-testing">See More</Link></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
