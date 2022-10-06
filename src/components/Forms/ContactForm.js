import React from "react";

export default function ContactForm() {
  return (
        <div className="flex justify-center items-center bg-white py-20">
          <form className=" w-[70%] flex flex-col  ">
            <div className="flex flex-col mb-5">
              <label className="text-lg mb-2" htmlFor="">
                Name:
              </label>
              <input
                className="border-b-2 border-green-900 outline-none"
                type="text"
                placeholder="John Doe"
              />
            </div>
            <div className="flex flex-col mb-5">
              <label className="text-lg mb-2" htmlFor="">
                Email:
              </label>
              <input
                className="border-b-2 border-green-900  outline-none"
                type="text"
                placeholder="johnDoe@email.com"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-lg mb-2" htmlFor="">
                Message:
              </label>
              <textarea
                className="border-b-2 border-green-900  mb-4 outline-none "
                type="text"
                placeholder="Leave message here..."
              />
            </div>
            <button className="py-2 px-4 bg-green-900 hover:bg-green-700 text-green-100 ">
              Send Message
            </button>
          </form>
        </div>
  );
}
