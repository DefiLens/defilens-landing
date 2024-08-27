import { meta, testimonials_top } from "@/utils/constants";
import Link from "next/link";
import React from "react";

const Testimonial = () => {
  return (
    <section className="flex flex-col items-center py-20 bg-purple-50 bg-opacity-80">
      <h2 className="text-center text-6xl font-semibold mb-12">
        Loved by the community
      </h2>
      <div className="max-w-[99vw]">
        <div className="slider">
          <div className="slide_track">
            {testimonials_top.map((item, index) => (
              <div key={index} className="w-[400px]">
                <div className="bg-gradient-to-b from-white to-[rgba(0,0,0,0.03)] border border-zinc-100 max-w-[380px] w-full h-full rounded-xl p-5 shadow-lg mx-auto">
                  <div className="flex">
                    <img
                      src={item.image}
                      loading="lazy"
                      alt=""
                      className="h-12 w-12 rounded-full shadow-lg"
                    />
                    <div className="flex flex-col ml-3">
                      <p className="text-base text-black">{item.name}</p>
                      <p className="text-zinc-600 text-sm">@{item.userName}</p>
                    </div>
                  </div>

                  <div className="testmonial-title mt-5">
                    <p className="text-sm text-zinc-600 tracking-wider">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            {testimonials_top.map((item, index) => (
              <div key={index} className="w-[400px]">
                <div className="bg-gradient-to-b from-white to-[rgba(0,0,0,0.03)] border border-zinc-100 max-w-[380px] w-full h-full rounded-xl p-5 shadow-lg mx-auto">
                  <div className="flex">
                    <img
                      src={item.image}
                      loading="lazy"
                      alt=""
                      className="h-12 w-12 rounded-full shadow-lg"
                    />
                    <div className="flex flex-col ml-3">
                      <p className="text-base text-black">{item.name}</p>
                      <p className="text-zinc-600 text-sm">@{item.userName}</p>
                    </div>
                  </div>

                  <div className="testmonial-title mt-5">
                    <p className="text-sm text-zinc-600 tracking-wider">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="slider">
          <div className="slide_track_rev">
            {testimonials_top.reverse().map((item, index) => (
              <div key={index} className="w-[400px]">
                <div className="bg-gradient-to-b from-white to-[rgba(0,0,0,0.03)] border border-zinc-100 max-w-[380px] w-full h-full rounded-xl p-5 shadow-lg mx-auto">
                  <div className="flex">
                    <img
                      src={item.image}
                      loading="lazy"
                      alt=""
                      className="h-12 w-12 rounded-full shadow-lg"
                    />
                    <div className="flex flex-col ml-3">
                      <p className="text-base text-black">{item.name}</p>
                      <p className="text-zinc-600 text-sm">@{item.userName}</p>
                    </div>
                  </div>

                  <div className="testmonial-title mt-5">
                    <p className="text-sm text-zinc-600 tracking-wider">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            {testimonials_top.reverse().map((item, index) => (
              <div key={index} className="w-[400px]">
                <div className="bg-gradient-to-b from-white to-[rgba(0,0,0,0.03)] border border-zinc-100 max-w-[380px] w-full h-full rounded-xl p-5 shadow-lg mx-auto">
                  <div className="flex">
                    <img
                      src={item.image}
                      loading="lazy"
                      alt=""
                      className="h-12 w-12 rounded-full shadow-lg"
                    />
                    <div className="flex flex-col ml-3">
                      <p className="text-base text-black">{item.name}</p>
                      <p className="text-zinc-600 text-sm">@{item.userName}</p>
                    </div>
                  </div>

                  <div className="testmonial-title mt-5">
                    <p className="text-sm text-zinc-600 tracking-wider">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
