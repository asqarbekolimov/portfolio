import React from "react";
import { motion } from "framer-motion";
import { education, workExp } from "../constants/data";

function About() {
  return (
    <motion.div
      className="md:px-36 px-6  mt-16 text-secondary"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.5 } }}
    >
      <section>
        <h1 className=" md:text-6xl text-4xl mb-7 font-bold">About Me</h1>
        <p className="font-poppins text-base lg:max-w-3xl">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </section>
      <section>
        <h1 className="pt-10 md:text-6xl text-4xl font-bold">
          Work Experience
        </h1>
        {workExp.map((item) => (
          <article
            className="pt-8 border-b-2 border-secondary pb-5 "
            key={item.id}
          >
            <div className="flex justify-between items-center">
              <h1>{item.work}</h1>
              <div className="bg-green-200 text-green-600 rounded-2xl text-sm font-poppins py-1 px-2">
                {item.status}
              </div>
            </div>
            <div className="flex justify-between pt-2">
              <div className="flex  justify-between flex-col">
                <div className="flex  gap-2 items-center pr-5">
                  <svg
                    aria-hidden="true"
                    height="16"
                    viewBox="0 0 16 16"
                    version="1.1"
                    width="16"
                    data-view-component="true"
                    className="octicon octicon-organization"
                  >
                    <path
                      fill="white"
                      d="M1.5 14.25c0 .138.112.25.25.25H4v-1.25a.75.75 0 01.75-.75h2.5a.75.75 0 01.75.75v1.25h2.25a.25.25 0 00.25-.25V1.75a.25.25 0 00-.25-.25h-8.5a.25.25 0 00-.25.25v12.5zM1.75 16A1.75 1.75 0 010 14.25V1.75C0 .784.784 0 1.75 0h8.5C11.216 0 12 .784 12 1.75v12.5c0 .085-.006.168-.018.25h2.268a.25.25 0 00.25-.25V8.285a.25.25 0 00-.111-.208l-1.055-.703a.75.75 0 11.832-1.248l1.055.703c.487.325.779.871.779 1.456v5.965A1.75 1.75 0 0114.25 16h-3.5a.75.75 0 01-.197-.026c-.099.017-.2.026-.303.026h-3a.75.75 0 01-.75-.75V14h-1v1.25a.75.75 0 01-.75.75h-3zM3 3.75A.75.75 0 013.75 3h.5a.75.75 0 010 1.5h-.5A.75.75 0 013 3.75zM3.75 6a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5zM3 9.75A.75.75 0 013.75 9h.5a.75.75 0 010 1.5h-.5A.75.75 0 013 9.75zM7.75 9a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5zM7 6.75A.75.75 0 017.75 6h.5a.75.75 0 010 1.5h-.5A.75.75 0 017 6.75zM7.75 3a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5z"
                    ></path>
                  </svg>
                  <p>{item.company.title}:</p>
                </div>
                <div className="flex items-center justify-between w-full">
                  <div className="flex gap-2 items-center">
                    <svg
                      className=" octicon octicon-location"
                      viewBox="0 0 16 16"
                      version="1.1"
                      width="16"
                      height="16"
                      aria-hidden="true"
                    >
                      <path
                        fill="white"
                        d="M11.536 3.464a5 5 0 010 7.072L8 14.07l-3.536-3.535a5 5 0 117.072-7.072v.001zm1.06 8.132a6.5 6.5 0 10-9.192 0l3.535 3.536a1.5 1.5 0 002.122 0l3.535-3.536zM8 9a2 2 0 100-4 2 2 0 000 4z"
                      ></path>
                    </svg>
                    <p>{item.company.name}</p>
                  </div>
                </div>
              </div>
              <p>{item.date}</p>
            </div>
          </article>
        ))}
      </section>
      <section>
        <h1 className="pt-10 md:text-6xlxl text-4xl font-bold">Education</h1>
        {education.map((item) => (
          <article
            className="pt-8 border-b-2 border-secondary  pb-5 "
            key={item.id}
          >
            <div className="flex justify-between items-center">
              <h1>{item.category}</h1>
              <div className="bg-green-200 text-green-600 rounded-2xl text-sm font-poppins py-1 px-2">
                {item.status}
              </div>
            </div>
            <div className="flex justify-between pt-2">
              <div className="flex justify-between flex-col">
                <div className="flex gap-2 items-center pr-5">
                  <svg
                    aria-hidden="true"
                    height="16"
                    viewBox="0 0 16 16"
                    version="1.1"
                    width="16"
                    data-view-component="true"
                    className="octicon octicon-organization"
                  >
                    <path
                      fill="white"
                      d="M1.5 14.25c0 .138.112.25.25.25H4v-1.25a.75.75 0 01.75-.75h2.5a.75.75 0 01.75.75v1.25h2.25a.25.25 0 00.25-.25V1.75a.25.25 0 00-.25-.25h-8.5a.25.25 0 00-.25.25v12.5zM1.75 16A1.75 1.75 0 010 14.25V1.75C0 .784.784 0 1.75 0h8.5C11.216 0 12 .784 12 1.75v12.5c0 .085-.006.168-.018.25h2.268a.25.25 0 00.25-.25V8.285a.25.25 0 00-.111-.208l-1.055-.703a.75.75 0 11.832-1.248l1.055.703c.487.325.779.871.779 1.456v5.965A1.75 1.75 0 0114.25 16h-3.5a.75.75 0 01-.197-.026c-.099.017-.2.026-.303.026h-3a.75.75 0 01-.75-.75V14h-1v1.25a.75.75 0 01-.75.75h-3zM3 3.75A.75.75 0 013.75 3h.5a.75.75 0 010 1.5h-.5A.75.75 0 013 3.75zM3.75 6a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5zM3 9.75A.75.75 0 013.75 9h.5a.75.75 0 010 1.5h-.5A.75.75 0 013 9.75zM7.75 9a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5zM7 6.75A.75.75 0 017.75 6h.5a.75.75 0 010 1.5h-.5A.75.75 0 017 6.75zM7.75 3a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5z"
                    ></path>
                  </svg>
                  <p>{item.company.title}</p>
                </div>
                <div className="flex items-center justify-between w-full">
                  <div className="flex gap-2 items-center">
                    <svg
                      className=" octicon octicon-location"
                      viewBox="0 0 16 16"
                      version="1.1"
                      width="16"
                      height="16"
                      aria-hidden="true"
                    >
                      <path
                        fill="white"
                        d="M11.536 3.464a5 5 0 010 7.072L8 14.07l-3.536-3.535a5 5 0 117.072-7.072v.001zm1.06 8.132a6.5 6.5 0 10-9.192 0l3.535 3.536a1.5 1.5 0 002.122 0l3.535-3.536zM8 9a2 2 0 100-4 2 2 0 000 4z"
                      ></path>
                    </svg>
                    <p>{item.company.name}</p>
                  </div>
                </div>
              </div>
              <p>{item.date}</p>
            </div>
          </article>
        ))}
      </section>
    </motion.div>
  );
}

export default About;
