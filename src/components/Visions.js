import React from "react";
import {
  BsFillHeartFill,
  BsFillPhoneVibrateFill,
  BsGlobe,
  BsPersonCircle,
} from "react-icons/bs";

export default function Visions() {
  return (
    <>
      <div className="mt-[150px]">
        <h1 className="text-4xl font-bold mb-5 ">Company Visions & Values</h1>
        <p className="text-lg text-gray-500 mb-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit. At commodo phasellus vel nibh pretium suspendisse.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mt-10">
        <div className="flex items-start gap-10">
          <div className="">
            <BsPersonCircle className="h-10 w-10 text-green-900" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-400 border-b-2 border-slate-900 mb-5">
              01
            </h2>
            <h3 className="text-2xl text-green-900 font-bold mb-5">
              Some title goes here{" "}
            </h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid
              quisquam ullam voluptates nihil soluta quo tenetur nulla quae
              corrupti? Dicta laborum molestias aut veniam adipisci recusandae
              ducimus similique ea facilis?
            </p>
          </div>
        </div>
        <div className="flex items-start gap-10">
          <div className="">
            <BsFillHeartFill className="h-10 w-10 text-green-900" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-400 border-b-2 border-slate-900 mb-5">
              02
            </h2>
            <h3 className="text-2xl text-green-900 font-bold mb-5">
              Some title goes here{" "}
            </h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid
              quisquam ullam voluptates nihil soluta quo tenetur nulla quae
              corrupti? Dicta laborum molestias aut veniam adipisci recusandae
              ducimus similique ea facilis?
            </p>
          </div>
        </div>
        <div className="flex items-start gap-10">
          <div className="">
            <BsFillPhoneVibrateFill className="h-10 w-10 text-green-900" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-400 border-b-2 border-slate-900 mb-5">
              03
            </h2>
            <h3 className="text-2xl text-green-900 font-bold mb-5">
              Some title goes here{" "}
            </h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid
              quisquam ullam voluptates nihil soluta quo tenetur nulla quae
              corrupti? Dicta laborum molestias aut veniam adipisci recusandae
              ducimus similique ea facilis?
            </p>
          </div>
        </div>
        <div className="flex items-start gap-10">
          <div className="">
            <BsGlobe className="h-10 w-10 text-green-900" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-400 border-b-2 border-slate-900 mb-5">
              04
            </h2>
            <h3 className="text-2xl text-green-900 font-bold mb-5">
              Some title goes here{" "}
            </h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid
              quisquam ullam voluptates nihil soluta quo tenetur nulla quae
              corrupti? Dicta laborum molestias aut veniam adipisci recusandae
              ducimus similique ea facilis?
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
