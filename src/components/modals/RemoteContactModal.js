import React from 'react'
import ReactDOM from "react-dom";
import Form from '../Forms/ContactForm'
import { OVERLAY_STYLES } from "../Styles"; 

export default function RemoteRemoteContactModal() {
  return ReactDOM.createPortal (
    <div
        style={OVERLAY_STYLES}
        className=" modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
        id="RemoteContactModal"
        tabindex="-1"
        aria-labelledby="RemoteContactModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-scrollable relative w-auto pointer-events-none">
          <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding outline-none text-current">
            <div className="modal-header flex flex-shrink-0 gap-5 items-center justify-between p-4  border-gray-200 rounded-t-md">
              <div className="">
                <h5
                  className="text-4xl leading-normal text-black font-bold my-2"
                  id="RemoteContactModalLabel"
                >
                  Remote Contact
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
      </div>,
      document.getElementById("portal")



 
  )
}
