import React, { useState } from "react";
import BusinessProfileModal from "../../Modals/BusinessProfileModal/BusinessProfileModal";

const BusinessProfileSection = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div class="relative overflow-hidden mt-[70px] ">
        <div
          class="max-w-[100%]  mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-8"
          style={{ backgroundColor: "#E8F2FE" }}
        >
          <div class="mt-5 max-w-2xl text-center mx-auto">
            <h1 class="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-gray-200">
              Let's Build
              <span class="bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent">
                Together
              </span>
            </h1>
          </div>

          <div class="mt-5 max-w-3xl text-center mx-auto">
            <p class="text-lg text-gray-600 dark:text-gray-400">
              Preline UI is an open-source set of prebuilt UI components,
              ready-to-use examples and Figma design system based on the
              utility-first Tailwind CSS framework.
            </p>
          </div>

          <div class="mt-8 grid gap-3 w-full sm:inline-flex sm:justify-center">
            <a
              class="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 border border-transparent text-white text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white py-3 px-4 dark:focus:ring-offset-gray-800"
              onClick={() => setOpen(true)}
            >
              Get started
              <svg
                class="w-3 h-3"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
      {open && <BusinessProfileModal setOpen={setOpen} />}
    </>
  );
};

export default BusinessProfileSection;
