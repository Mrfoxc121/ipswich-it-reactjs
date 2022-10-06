import React from "react";
import { Fade } from "react-reveal";
import about from "../images/about.jpg";

export default function About() {
  return (
    <Fade delay={100}>
      <div className="mt-[150px]">
        <h1 className="text-4xl font-bold mb-20">All About Us</h1>

        <div className="grid md:grid-cols-2 gap-5">
          <div className=" flex flex-col justify-center  p-6">
            <h2 className="text-2xl font-semibold mb-5">
              For Us Its all about the customer
            </h2>
            <p className="mb-3 indent-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              neque ullam nostrum sed at placeat quibusdam aut commodi error,
              maxime ipsam eius accusamus, natus hic laborum. Cumque illum culpa
              excepturi autem quod hic animi, sequi quibusdam ab libero sint
              distinctio repellat, repudiandae at earum alias dolore architecto
              fugiat. Nihil, illo. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Assumenda neque ullam nostrum sed at placeat
              quibusdam aut commodi error, maxime ipsam eius accusamus, natus
              hic laborum. Cumque illum culpa excepturi autem quod hic animi,
              sequi quibusdam ab libero sint distinctio repellat, repudiandae at
              earum alias dolore architecto fugiat. Nihil, illo.
            </p>
            <p className="mb-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              neque ullam nostrum sed at placeat quibusdam aut commodi error,
              maxime ipsam eius accusamus, natus hic laborum. Cumque illum culpa
              excepturi autem quod hic animi, sequi quibusdam ab libero sint
              distinctio repellat, repudiandae at earum alias dolore architecto
              fugiat. Nihil, illo.
            </p>
            <p className="mb-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              neque ullam nostrum sed at placeat quibusdam aut commodi error,
              maxime ipsam eius accusamus, natus hic laborum. Cumque illum culpa
              excepturi autem quod hic animi, sequi quibusdam ab libero sint
              distinctio repellat, repudiandae at earum alias dolore architecto
              fugiat. Nihil, illo.
            </p>
            <p className="mb-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              neque ullam nostrum sed at placeat quibusdam aut commodi error,
              maxime ipsam eius accusamus, natus hic laborum. Cumque illum culpa
              excepturi autem quod hic animi, sequi quibusdam ab libero sint
              distinctio repellat, repudiandae at earum alias dolore architecto
              fugiat. Nihil, illo.
            </p>
            <p className="mb-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              neque ullam nostrum sed at placeat quibusdam aut commodi error,
              maxime ipsam eius accusamus, natus hic laborum. Cumque illum culpa
              excepturi autem quod hic animi, sequi quibusdam ab libero sint
              distinctio repellat, repudiandae at earum alias dolore architecto
              fugiat. Nihil, illo.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative">
              <div className="bg-green-900 w-[620px] h-[820px] absolute top-5 left-5 -z-10 "></div>
              <img className="h-[800px]" src={about} alt="" />
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}
