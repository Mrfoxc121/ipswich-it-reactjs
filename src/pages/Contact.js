import React from "react";
import { MdOutlineSupportAgent, MdLocalPhone, MdPeople } from "react-icons/md";
import Form from "../components/Forms/ContactForm";

export default function Contact() {
  return (
    <div className="mt-[150px] h-[65vh]">
      <h1 className="text-4xl font-bold mb-5">Get in touch here</h1>
      <p className="text-lg text-slate-400 mb-20">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. At commodo
        phasellus vel nibh pretium suspendisse. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. At commodo phasellus vel nibh pretium
        suspendisse.
      </p>
      <div className="grid grid-cols-2">
        <div className="-z-10">
          <Form />
        </div>
        <div className="flex flex-col justify-center px-10">
          <h3 className="text-2xl mb-2">Other ways to contact us</h3>
          <p className="mb-5 text-lg">
            Call, email, smoke rings, whatever works for you. We will be here
            for you
          </p>
          <div className="flex border-b-2 mt-5">
            <MdLocalPhone className="text-2xl mr-2 text-green-900" />
            <p className="text-lg text-green-900 mb-5">
              Telephone: 0756883388499
            </p>
          </div>
          <div className="flex border-b-2 mt-5">
            <MdOutlineSupportAgent className="text-2xl mr-2 text-green-900" />
            <p className="text-lg text-green-900 mb-5">Remote Support</p>
          </div>
          <div className="flex border-b-2 mt-5">
            <MdPeople className="text-2xl mr-2 text-green-900" />
            <p className="text-lg text-green-900">carrers</p>
          </div>
        </div>
      </div>
    </div>
  );
}
