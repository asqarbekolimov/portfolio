"use client";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import MobileMenu from "./mobile-menu";
import { motion } from "motion/react";

const TopHeader = () => {
  const [isMobileNav, setIsMobileNav] = useState<boolean>(false);

  const handleMobileNav = () => {
    setIsMobileNav((prev) => !prev);
  };
  return (
    <>
      <div className="fixed top-0 z-50 flex h-[10vh] w-full items-center justify-between border-b border-[#232627] bg-[#141416]/90 backdrop-blur-xl">
        <div
          className="flex h-full w-60 items-center gap-2 border-[#232627] px-7 text-center sm:cursor-pointer sm:border-r sm:px-10 sm:hover:bg-[#232627]/80"
          onClick={() => setIsMobileNav(false)}
        >
          <svg
            className="animate-bounce"
            width="33"
            height="33"
            viewBox="0 0 33 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_1_10074)">
              <path
                d="M19.449 16.2053C19.449 13.9817 17.0412 12.5844 15.1254 13.6962C13.2096 14.808 13.2096 17.6027 15.1254 18.7145C17.0412 19.8263 19.449 18.429 19.449 16.2053ZM26.0488 10.8645C27.9563 1.74686 23.7599 -1.11432 16.626 5.48547C9.91178 -0.809124 5.13044 1.17463 7.16505 10.8263C-2.21723 13.6548 -1.5956 18.9792 7.24135 21.6988C5.21945 30.5875 8.99621 33.8302 16.626 27.116C24.0269 33.7539 27.9548 30.646 25.9344 21.6607C35.5734 18.3926 34.7087 13.6621 26.0488 10.8645ZM24.7518 10.5211C23.2396 10.1801 21.7765 9.93176 20.2883 9.79631C19.5043 8.64986 18.5911 7.50467 17.5416 6.43919C23.2611 0.953001 26.6321 2.66722 24.7518 10.5211ZM9.98808 17.9602C10.554 19.1682 11.2979 20.2746 11.8574 21.2029C10.9463 21.1097 9.96474 20.9682 8.91991 20.7832C9.2547 19.8461 9.61114 18.905 9.98808 17.9602ZM9.91178 14.6794C9.49556 13.6803 9.11575 12.716 8.80546 11.8182C9.88408 11.5946 10.941 11.3916 11.8574 11.3223C11.1754 12.3936 10.5276 13.5137 9.91178 14.6794ZM10.7129 16.3579C11.6458 14.4896 12.6326 12.7162 13.7267 11.1315C15.668 11.0199 17.5886 11.0298 19.4872 11.1697C20.552 12.6534 21.5458 14.4267 22.501 16.3579C21.7862 17.8349 20.7713 19.5372 19.6016 21.3555C17.6487 21.5033 15.6462 21.4829 13.6122 21.3555C12.5813 19.7761 11.6132 18.1126 10.7129 16.3579ZM23.2258 17.9602C23.5962 18.8591 23.9386 19.7753 24.2558 20.7069C23.2767 20.9131 22.3108 21.0633 21.3565 21.1647C22.0097 20.1527 22.6294 19.0781 23.2258 17.9602ZM21.3565 11.3223C22.3967 11.4647 23.4015 11.6425 24.3703 11.8564C24.0462 12.8194 23.6779 13.7607 23.2639 14.6794C22.6735 13.5147 22.0395 12.3939 21.3565 11.3223ZM18.419 9.64371C17.2309 9.5971 16.0222 9.59859 14.7949 9.64371C15.3322 8.93705 15.931 8.19889 16.5879 7.43107C17.228 8.12201 17.8344 8.8657 18.419 9.64371ZM15.6723 6.43919C14.6228 7.50467 13.7096 8.61171 12.9256 9.75816C11.4374 9.89362 9.93611 10.1419 8.42397 10.483C6.63097 2.50984 9.95275 0.953001 15.6723 6.43919ZM7.58469 20.4399C-0.363023 18.0492 0.0184679 14.3233 7.50839 12.1234C7.96656 13.5137 8.52123 14.9257 9.1488 16.2816C8.539 17.6839 7.99914 19.1242 7.58469 20.4399ZM8.57657 22.0421C9.9245 22.3728 11.3529 22.5315 12.8493 22.6907C13.7496 23.9613 14.682 25.1425 15.6723 26.1622C9.8482 31.7447 6.60147 29.7165 8.57657 22.0421ZM16.5879 25.2085C15.8977 24.4938 15.2534 23.684 14.6423 22.8051C16.0044 22.8338 17.32 22.837 18.5716 22.8051C17.9655 23.6651 17.3034 24.4654 16.5879 25.2085ZM17.5416 26.1622C18.6042 25.0077 19.541 23.8373 20.3646 22.6525C21.7704 22.5491 23.1946 22.3331 24.6373 22.004C26.6303 30.1726 23.0116 31.3788 17.5416 26.1622ZM25.591 20.3636C25.1824 19.0479 24.6663 17.6839 24.0651 16.2816C24.6839 14.9257 25.2156 13.5519 25.6673 12.1615C32.9792 14.3742 33.5642 17.9093 25.591 20.3636Z"
                fill="#26A2C1"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_10074">
                <rect
                  width="32.4881"
                  height="32.4881"
                  fill="white"
                  transform="translate(0.368469 0.0358582)"
                />
              </clipPath>
            </defs>
          </svg>
          <Link href={"/"} className="font-sora font-bold">
            DEV
          </Link>
        </div>
        <div className="flex w-full flex-1 items-center justify-between px-7">
          <div className="flex items-center gap-2">
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="hidden animate-pulse sm:block"
            >
              <rect width="10" height="10" rx="5" fill="#31EE33" />
            </svg>

            <div className="hidden font-sora text-sm text-white sm:block">
              Available for freelance projects
            </div>
          </div>
          <div className="hidden justify-self-end font-sourceCodePro text-xs uppercase text-[#888a8b] xl:block">
            Based in Tashkent, GMT+5
          </div>
          <div
            className="flex h-[10vh] cursor-pointer items-center justify-center border-l border-[#232627] pl-7 xl:hidden"
            onClick={() => handleMobileNav()}
          >
            {!isMobileNav ? (
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Menu size={30} className="text-[#5a5a5b]" />
              </motion.div>
            ) : (
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <X size={30} className="text-[#5a5a5b]" />
              </motion.div>
            )}
          </div>
        </div>
      </div>
      <MobileMenu
        isMobileNav={isMobileNav}
        setIsMobileNav={setIsMobileNav}
        handleMobileNav={handleMobileNav}
      />
    </>
  );
};

export default TopHeader;
