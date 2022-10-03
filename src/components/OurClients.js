import React from "react";
import { OVERLAY_STYLES } from "./Styles";


export default function OurClients() {
  return (
    <div className="mt-[150px]">
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
        {/* Card one modal */}
        <div
          style={OVERLAY_STYLES}
          className="modal z-90 fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
          id="ClientOne"
          tabindex="-1"
          aria-labelledby="ClientOneLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-scrollable relative w-auto pointer-events-none">
            <div className="modal-content z-9 border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding outline-none text-current">
              <div className="modal-header flex flex-shrink-0 gap-5 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                <div className="flex flex-col">
                  <h5
                    className="text-3xl leading-normal text-black font-bold my-2"
                    id="ClientOneLabel"
                  >
                    Martin Fox
                  </h5>
                  <p className="text-xs text-black">
                    CEO / Lazy Chicken Wings Inc
                  </p>
                </div>

                <button
                  type="button"
                  className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body relative p-4">
                <h3 className="mb-5 text-xl font-semibold text-green-900">
                  Where we were?
                </h3>
                <p className="mb-5">
                  This is some placeholder content to show the scrolling
                  behavior for modals. We use repeated line breaks to
                  demonstrate how content can exceed minimum inner height,
                  thereby showing inner scrolling. When content becomes longer
                  than the predefined max-height of modal, content will be
                  cropped and scrollable within the modal.
                </p>
                <div className="grid grid-cols-2 gap-2">
                  <img
                    className="mb-5"
                    src="https://cdn.pixabay.com/photo/2017/04/07/08/51/chicken-wings-2210462__480.jpg"
                    alt=""
                  />
                  <img
                    className="mb-5"
                    src="https://cdn.pixabay.com/photo/2019/07/17/08/21/chicken-4343402__480.jpg"
                    alt=""
                  />
                </div>
                <h3 className="mb-5 text-xl font-semibold text-green-900">
                  Where we are heading
                </h3>
                <p className="text-black mb-5">
                  This is some placeholder content to show the scrolling
                  behavior for modals. We use repeated line breaks to
                  demonstrate how content can exceed minimum inner height,
                  thereby showing inner scrolling. When content becomes longer
                  than the predefined max-height of modal, content will be
                  cropped and scrollable within the modal.
                </p>
                <img
                  className="mb-5"
                  src="https://cdn.pixabay.com/photo/2020/11/16/09/44/rooster-5748524__480.jpg"
                  alt=""
                />

                <p>
                  This is some placeholder content to show the scrolling
                  behavior for modals. We use repeated line breaks to
                  demonstrate how content can exceed minimum inner height,
                  thereby showing inner scrolling. When content becomes longer
                  than the predefined max-height of modal, content will be
                  cropped and scrollable within the modal.
                </p>
              </div>
              <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
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
        {/* Card two modal */}
        <div
          style={OVERLAY_STYLES}
          className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
          id="clientTwo"
          tabindex="-1"
          aria-labelledby="clientTwoLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-scrollable relative w-auto pointer-events-none">
            <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
              <div className="modal-header flex flex-shrink-0 gap-5 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                <div className="flex flex-col">
                  <h5
                    className="text-3xl leading-normal text-black font-bold my-2"
                    id="clientTwoLabel"
                  >
                    Danny Carrington
                  </h5>
                  <p className="text-xs text-black">CEO / Tic Tic BOOM PLC</p>
                </div>

                <button
                  type="button"
                  className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body relative p-4">
                <h3 className="mb-5 text-xl font-semibold text-green-900">
                  Where we were?
                </h3>
                <p className="mb-5">
                  This is some placeholder content to show the scrolling
                  behavior for modals. We use repeated line breaks to
                  demonstrate how content can exceed minimum inner height,
                  thereby showing inner scrolling. When content becomes longer
                  than the predefined max-height of modal, content will be
                  cropped and scrollable within the modal.
                </p>
                <div className="grid grid-cols-2 gap-2">
                  <img
                    className="mb-5"
                    src="https://cdn.pixabay.com/photo/2017/04/07/08/51/chicken-wings-2210462__480.jpg"
                    alt=""
                  />
                  <img
                    className="mb-5"
                    src="https://cdn.pixabay.com/photo/2019/07/17/08/21/chicken-4343402__480.jpg"
                    alt=""
                  />
                </div>
                <h3 className="mb-5 text-xl font-semibold text-green-900">
                  Where we are heading
                </h3>
                <p className="text-black mb-5">
                  This is some placeholder content to show the scrolling
                  behavior for modals. We use repeated line breaks to
                  demonstrate how content can exceed minimum inner height,
                  thereby showing inner scrolling. When content becomes longer
                  than the predefined max-height of modal, content will be
                  cropped and scrollable within the modal.
                </p>
                <img
                  className="mb-5"
                  src="https://cdn.pixabay.com/photo/2020/11/16/09/44/rooster-5748524__480.jpg"
                  alt=""
                />

                <p>
                  This is some placeholder content to show the scrolling
                  behavior for modals. We use repeated line breaks to
                  demonstrate how content can exceed minimum inner height,
                  thereby showing inner scrolling. When content becomes longer
                  than the predefined max-height of modal, content will be
                  cropped and scrollable within the modal.
                </p>
              </div>
              <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
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
        {/* Card three modal */}
        <div
          style={OVERLAY_STYLES}
          className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
          id="clientThree"
          tabindex="-1"
          aria-labelledby="clientThreeLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-scrollable relative w-auto pointer-events-none">
            <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white  bg-clip-padding rounded-md outline-none text-current">
              <div className="modal-header flex flex-shrink-0 gap-5 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                <div className="flex flex-col">
                  <h5
                    className="text-3xl leading-normal text-black font-bold my-2"
                    id="clientThreeLabel"
                  >
                    James Olly
                  </h5>
                  <p className="text-xs text-black">
                    CEO / Nanncy Boy Tech LTD
                  </p>
                </div>
                <button
                  type="button"
                  className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body relative p-4">
                <h3 className="mb-5 text-xl font-semibold text-green-900">
                  Where we were?
                </h3>
                <p className="mb-5">
                  This is some placeholder content to show the scrolling
                  behavior for modals. We use repeated line breaks to
                  demonstrate how content can exceed minimum inner height,
                  thereby showing inner scrolling. When content becomes longer
                  than the predefined max-height of modal, content will be
                  cropped and scrollable within the modal.
                </p>
                <div className="grid grid-cols-2 gap-2">
                  <img
                    className="mb-5"
                    src="https://cdn.pixabay.com/photo/2017/04/07/08/51/chicken-wings-2210462__480.jpg"
                    alt=""
                  />
                  <img
                    className="mb-5"
                    src="https://cdn.pixabay.com/photo/2019/07/17/08/21/chicken-4343402__480.jpg"
                    alt=""
                  />
                </div>
                <h3 className="mb-5 text-xl font-semibold text-green-900">
                  Where we are heading
                </h3>
                <p className="text-black mb-5">
                  This is some placeholder content to show the scrolling
                  behavior for modals. We use repeated line breaks to
                  demonstrate how content can exceed minimum inner height,
                  thereby showing inner scrolling. When content becomes longer
                  than the predefined max-height of modal, content will be
                  cropped and scrollable within the modal.
                </p>
                <img
                  className="mb-5"
                  src="https://cdn.pixabay.com/photo/2020/11/16/09/44/rooster-5748524__480.jpg"
                  alt=""
                />

                <p>
                  This is some placeholder content to show the scrolling
                  behavior for modals. We use repeated line breaks to
                  demonstrate how content can exceed minimum inner height,
                  thereby showing inner scrolling. When content becomes longer
                  than the predefined max-height of modal, content will be
                  cropped and scrollable within the modal.
                </p>
              </div>
              <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                <button
                  type="button"
                  className="inline-block px-6 py-2.5 bg-green-900 text-slate-200 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
