"use client";

import { useState, useRef, useEffect } from "react";
import { Transition } from "@headlessui/react";
import Image from "next/image";
import FeaturesBg from "@/public/images/features-bg.png";
import FeaturesElement from "@/public/images/features-element.png";
import feature1 from "@/public/images/instant-answers.png";
import feature2 from "@/public/images/voice-prompts.png";
import feature3 from "@/public/images/image-recognition.png";

export default function Features() {
  const [tab, setTab] = useState<number>(1);

  const tabs = useRef<HTMLDivElement>(null);

  const heightFix = () => {
    if (tabs.current && tabs.current.parentElement)
      tabs.current.parentElement.style.height = `${tabs.current.clientHeight}px`;
  };

  useEffect(() => {
    heightFix();
  }, []);

  return (
    <section id="features" className="relative">
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div
        className="absolute inset-0 mb-16 bg-gray-100 pointer-events-none"
        aria-hidden="true"
      ></div>
      <div className="absolute left-0 right-0 w-px h-20 p-px m-auto transform -translate-y-1/2 bg-gray-200"></div>

      <div className="relative max-w-6xl px-4 mx-auto sm:px-6">
        <div className="pt-12 md:pt-20">
          {/* Section header */}
          <div className="max-w-3xl pb-12 mx-auto text-center md:pb-16">
            <h1 className="mb-4 h2">AI-powered Chat Companion</h1>
            <p className="text-xl text-gray-600">
              Find creative inspiration, get tailored advice, and learn
              something new!
            </p>
          </div>

          {/* Section content */}
          <div className="md:grid md:grid-cols-12 md:gap-6">
            {/* Content */}
            <div
              className="max-w-xl mx-auto md:max-w-none md:w-full md:col-span-7 lg:col-span-6 md:mt-6"
              data-aos="fade-right"
            >
              <div className="mb-8 md:pr-4 lg:pr-12 xl:pr-16">
                <h3 className="mb-3 h3">Key Features</h3>
                <p className="text-xl text-gray-600">
                  Chatteru offers a suite of advanced capabilities designed to
                  enhance your productivity, learning, and creativity.
                </p>
              </div>
              {/* Tabs buttons */}
              <div className="mb-8 md:mb-0">
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                    tab !== 1
                      ? "bg-white shadow-md border-gray-200 hover:shadow-lg"
                      : "bg-gray-200 border-transparent"
                  }`}
                  href="#0"
                  onClick={(e) => {
                    e.preventDefault();
                    setTab(1);
                  }}
                >
                  <div>
                    <div className="mb-1 font-bold leading-snug tracking-tight">
                      Instant Answers
                    </div>
                    <div className="text-gray-600">
                      Immediate, accurate responses at the speed of thought.
                    </div>
                  </div>
                  <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 ml-3 bg-white rounded-full shadow">
                    <svg
                      className="w-3 h-3 fill-current"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M11.953 4.29a.5.5 0 00-.454-.292H6.14L6.984.62A.5.5 0 006.12.173l-6 7a.5.5 0 00.379.825h5.359l-.844 3.38a.5.5 0 00.864.445l6-7a.5.5 0 00.075-.534z" />
                    </svg>
                  </div>
                </a>
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                    tab !== 2
                      ? "bg-white shadow-md border-gray-200 hover:shadow-lg"
                      : "bg-gray-200 border-transparent"
                  }`}
                  href="#0"
                  onClick={(e) => {
                    e.preventDefault();
                    setTab(2);
                  }}
                >
                  <div>
                    <div className="mb-1 font-bold leading-snug tracking-tight">
                      Voice Prompts
                    </div>
                    <div className="text-gray-600">
                      Provision of speech and guidance, providing user-friendly,
                      hands-free navigation through the app.
                    </div>
                  </div>
                  <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 ml-3 bg-white rounded-full shadow">
                    <svg
                      className="w-3 h-3 fill-current"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.854.146a.5.5 0 00-.525-.116l-11 4a.5.5 0 00-.015.934l4.8 1.921 1.921 4.8A.5.5 0 007.5 12h.008a.5.5 0 00.462-.329l4-11a.5.5 0 00-.116-.525z"
                        fillRule="nonzero"
                      />
                    </svg>
                  </div>
                </a>
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                    tab !== 3
                      ? "bg-white shadow-md border-gray-200 hover:shadow-lg"
                      : "bg-gray-200 border-transparent"
                  }`}
                  href="#0"
                  onClick={(e) => {
                    e.preventDefault();
                    setTab(3);
                  }}
                >
                  <div>
                    <div className="mb-1 font-bold leading-snug tracking-tight">
                      Image Recognition
                    </div>
                    <div className="text-gray-600">
                      Advanced feature for identifying and interpreting visual
                      data in real-time.
                    </div>
                  </div>
                  <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 ml-3 bg-white rounded-full shadow">
                    <svg
                      className="w-3 h-3 fill-current"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.854.146a.5.5 0 00-.525-.116l-11 4a.5.5 0 00-.015.934l4.8 1.921 1.921 4.8A.5.5 0 007.5 12h.008a.5.5 0 00.462-.329l4-11a.5.5 0 00-.116-.525z"
                        fillRule="nonzero"
                      />
                    </svg>
                  </div>
                </a>
              </div>
            </div>

            {/* Tabs items */}
            <div className="max-w-xl mx-auto mt-8 mb-8 md:max-w-none md:w-full md:col-span-5 lg:col-span-6 md:mb-0 md:order-1">
              <div className="transition-all">
                <div
                  className="relative flex flex-col text-center lg:text-right"
                  data-aos="zoom-y-out"
                  ref={tabs}
                >
                  {/* Item 1 */}
                  <Transition
                    show={tab === 1}
                    appear={true}
                    className="w-full"
                    enter="transition ease-in-out duration-700 transform order-first"
                    enterFrom="opacity-0 translate-y-16"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in-out duration-300 transform absolute"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-16"
                    beforeEnter={() => heightFix()}
                    unmount={false}
                  >
                    <div className="relative inline-flex flex-col">
                      <Image
                        className="mx-auto rounded md:max-w-none"
                        src={feature1}
                        width={280}
                        // height="200"
                        alt="Features bg"
                      />
                      {/* <Image
                        className="absolute left-0 w-full transform md:max-w-none animate-float"
                        src={FeaturesElement}
                        width={500}
                        height="44"
                        alt="Element"
                        style={{ top: "30%" }}
                      /> */}
                    </div>
                  </Transition>
                  {/* Item 2 */}
                  <Transition
                    show={tab === 2}
                    appear={true}
                    className="w-full"
                    enter="transition ease-in-out duration-700 transform order-first"
                    enterFrom="opacity-0 translate-y-16"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in-out duration-300 transform absolute"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-16"
                    beforeEnter={() => heightFix()}
                    unmount={false}
                  >
                    <div className="relative inline-flex flex-col">
                      <Image
                        className="mx-auto rounded md:max-w-none"
                        src={feature2}
                        width={280}
                        // height="462"
                        alt="Features bg"
                      />
                      {/* <Image
                        className="absolute left-0 w-full transform md:max-w-none animate-float"
                        src={FeaturesElement}
                        width={500}
                        height="44"
                        alt="Element"
                        style={{ top: "30%" }}
                      /> */}
                    </div>
                  </Transition>
                  {/* Item 3 */}
                  <Transition
                    show={tab === 3}
                    appear={true}
                    className="w-full"
                    enter="transition ease-in-out duration-700 transform order-first"
                    enterFrom="opacity-0 translate-y-16"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in-out duration-300 transform absolute"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-16"
                    beforeEnter={() => heightFix()}
                    unmount={false}
                  >
                    <div className="relative inline-flex flex-col">
                      <Image
                        className="mx-auto rounded md:max-w-none"
                        src={feature3}
                        width={280}
                        // height="462"
                        alt="Features bg"
                      />
                      {/* <Image
                        className="absolute left-0 w-full transform md:max-w-none animate-float"
                        src={FeaturesElement}
                        width={500}
                        height="44"
                        alt="Element"
                        style={{ top: "30%" }}
                      /> */}
                    </div>
                  </Transition>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
