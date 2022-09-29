import React from "react";
import "../custom.css"

export default function Faq() {
  return (
    <div>
      <div className="mt-[150px]">
        <h1 className="text-4xl font-bold mb-5">Frequently Asked Questions</h1>
        <p className="text-lg text-slate-400 mb-20">
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. At commodo
          phasellus vel nibh pretium suspendisse. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. At commodo phasellus vel nibh pretium
          suspendisse.
        </p>
      </div>
      <div className="accordion" id="FAQaccordion">
        <div className="accordion-item bg-white">
          <h2 className="accordion-header mb-0" id="headingOne">
            <button
              className="
              question
        accordion-button
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-2xl text-green-900 text-left
        bg-white
        rounded-none
        transition
        focus:outline-none
        focus:text-green-700
      "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <span className="mr-2 text-3xl text-gray-400">01:</span>Question
              goes here
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show text-xl "
            aria-labelledby="headingOne"
            data-bs-parent="#FAQaccordion"
          >
            <div className="accordion-body text-lg py-4 px-5">
              <strong>This is the first item's accordion body.</strong> It is
              shown by default, until the collapse plugin adds the appropriate
              classNamees that we use to style each element. These classNamees
              control the overall appearance, as well as the showing and hiding
              via CSS transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item bg-white">
          <h2 className="accordion-header mb-0" id="headingTwo">
            <button
              className="
              question
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-2xl text-gray-800 text-left 
        bg-white
        rounded-none
        transition
        focus:outline-none
      "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <span className="mr-2 text-3xl text-gray-400">02:</span>Question
              goes here
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#FAQaccordion"
          >
            <div className="accordion-body text-lg py-4 px-5">
              <strong>This is the second item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classNamees that we use to style each element. These classNamees
              control the overall appearance, as well as the showing and hiding
              via CSS transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item bg-white">
          <h2 className="accordion-header mb-0" id="headingThree">
            <button
              className="
              question
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-2xl text-gray-800 text-left
        bg-white
        rounded-none
        transition
        focus:outline-none
      "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <span className="mr-2 text-3xl text-gray-400">03:</span>Question
              goes here
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#FAQaccordion"
          >
            <div className="accordion-body text-lg py-4 px-5">
              <strong>This is the third item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classNamees that we use to style each element. These classNamees
              control the overall appearance, as well as the showing and hiding
              via CSS transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item bg-white">
          <h2 className="accordion-header mb-0" id="headingFour">
            <button
              className="
              question
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-2xl text-gray-800 text-left 
        bg-white
    
        rounded-none
        transition
        focus:outline-none
      "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              <span className="mr-2 text-3xl text-gray-400">04:</span>Question
              goes here
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="headingFour"
            data-bs-parent="#FAQaccordion"
          >
            <div className="accordion-body text-lg py-4 px-5">
              <strong>This is the fouth item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classNamees that we use to style each element. These classNamees
              control the overall appearance, as well as the showing and hiding
              via CSS transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div></div>
        <div className="accordion-item bg-white">
          <h2 className="accordion-header mb-0" id="headingFive">
            <button
              className="
              question
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-2xl text-gray-800 text-left
        bg-white
        rounded-none
        transition
        focus:outline-none
      "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFive"
              aria-expanded="false"
              aria-controls="collapseFive"
            >
              <span className="mr-2 text-3xl text-gray-400">05:</span>Question
              goes here
            </button>
          </h2>
          <div
            id="collapseFive"
            className="accordion-collapse collapse"
            aria-labelledby="headingFive"
            data-bs-parent="#FAQaccordion"
          >
            <div className="accordion-body text-lg py-4 px-5">
              <strong>This is the fith item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classNamees that we use to style each element. These classNamees
              control the overall appearance, as well as the showing and hiding
              via CSS transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item bg-white">
          <h2 className="accordion-header mb-0" id="headingSix">
            <button
              className="
              question
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-2xl text-gray-800 text-left 
        bg-white
    
        rounded-none
        transition
        focus:outline-none
      "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSix"
              aria-expanded="false"
              aria-controls="collapseSix"
            >
              <span className="mr-2 text-3xl text-gray-400">06:</span>Question
              goes here
            </button>
          </h2>
          <div
            id="collapseSix"
            className="accordion-collapse collapse"
            aria-labelledby="headingSix"
            data-bs-parent="#FAQaccordion"
          >
            <div className="accordion-body text-lg py-4 px-5">
              <strong>This is the sixth item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classNamees that we use to style each element. These classNamees
              control the overall appearance, as well as the showing and hiding
              via CSS transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item bg-white">
          <h2 className="accordion-header mb-0" id="headingSeven">
            <button
              className="
              question
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-2xl text-gray-800 text-left
        bg-white
        rounded-none
        transition
        focus:outline-none
      "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSeven"
              aria-expanded="false"
              aria-controls="collapseSeven"
            >
              <span className="mr-2 text-3xl text-gray-400">07:</span>Question
              goes here
            </button>
          </h2>
          <div
            id="collapseSeven"
            className="accordion-collapse collapse"
            aria-labelledby="headingSeven"
            data-bs-parent="#FAQaccordion"
          >
            <div className="accordion-body text-lg py-4 px-5">
              <strong>This is the seventh item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classNamees that we use to style each element. These classNamees
              control the overall appearance, as well as the showing and hiding
              via CSS transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item bg-white">
          <h2 className="accordion-header mb-0" id="headingEight">
            <button
              className="
              question
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-2xl text-gray-800 text-left 
        bg-white
    
        rounded-none
        transition
        focus:outline-none
      "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseEight"
              aria-expanded="false"
              aria-controls="collapseEight"
            >
              <span className="mr-2 text-3xl text-gray-400">08:</span>Question
              goes here
            </button>
          </h2>
          <div
            id="collapseEight"
            className="accordion-collapse collapse"
            aria-labelledby="headingEight"
            data-bs-parent="#FAQaccordion"
          >
            <div className="accordion-body text-lg py-4 px-5">
              <strong>This is the eighth item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classNamees that we use to style each element. These classNamees
              control the overall appearance, as well as the showing and hiding
              via CSS transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item bg-white">
          <h2 className="accordion-header mb-0" id="headingNine">
            <button
              className="
              question
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-2xl text-gray-800 text-left
        bg-white
        rounded-none
        transition
        focus:outline-none
      "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseNine"
              aria-expanded="false"
              aria-controls="collapseNine"
            >
              <span className="mr-2 text-3xl text-gray-400">09:</span>Question
              goes here
            </button>
          </h2>
          <div
            id="collapseNine"
            className="accordion-collapse collapse"
            aria-labelledby="headingNine"
            data-bs-parent="#FAQaccordion"
          >
            <div className="accordion-body text-lg py-4 px-5">
              <strong>This is the nineth item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classNamees that we use to style each element. These classNamees
              control the overall appearance, as well as the showing and hiding
              via CSS transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item bg-white">
          <h2 className="accordion-header mb-0" id="headingTen">
            <button
              className="
              question
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-2xl text-gray-800 text-left 
        bg-white
    
        rounded-none
        transition
        focus:outline-none
      "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTen"
              aria-expanded="false"
              aria-controls="collapseTen"
            >
              <span className="mr-2 text-3xl text-gray-400">10:</span>Question
              goes here
            </button>
          </h2>
          <div
            id="collapseTen"
            className="accordion-collapse collapse"
            aria-labelledby="headingTen"
            data-bs-parent="#FAQaccordion"
          >
            <div className="accordion-body text-lg py-4 px-5">
              <strong>This is the tenth item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classNamees that we use to style each element. These classNamees
              control the overall appearance, as well as the showing and hiding
              via CSS transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
