"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { TvIcon } from "lucide-react"

// -- SVG Components (unchanged) --

const LockSvg = () => (
  <svg viewBox="0 0 16 16" className="h-4 w-4" aria-hidden="true">
    <path
      fill="#fff"
      fillOpacity=".4"
      d="M3 9a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"
      opacity="0"
    />
    <path
      fill="#fff"
      fillOpacity=".4"
      fillRule="evenodd"
      d="M8 4a2.5 2.5 0 0 0-2.5 2.5V10h-1V6.5a3.5 3.5 0 1 1 7 0V10h-1V6.5A2.5 2.5 0 0 0 8 4Z"
      clipRule="evenodd"
      opacity="0"
    />
    <path
      d="M3 8a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8Z"
      fill="#747686"
    />
    <path
      fillRule="evenodd"
      d="M8 3a2.5 2.5 0 0 0-2.5 2.5V9h-1V5.5a3.5 3.5 0 1 1 7 0V9h-1V5.5A2.5 2.5 0 0 0 8 3Z"
      clipRule="evenodd"
      fill="#747686"
    />
  </svg>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" aria-hidden="true" className="size-10">
    {/* ... SVG paths omitted for brevity ... */}
    <g filter="url(#email-sms-icon-shadow)">
      <path
        fill="#5E5F6E"
        d="m31.661 28.642-1.576 2.465c-.126.197-.266.388-.465.509-1.796 1.084-7.63.18-14.523-6.713-7.302-7.303-7.883-13.416-6.5-14.799l2.761-1.765a2.152 2.152 0 0 1 2.68.291l2.119 2.118c.714.714.835 1.83.29 2.68l-1.18 1.847c-.387.607-.657 1.29-.451 1.98.373 1.253 1.406 3.24 3.047 4.882a12.282 12.282 0 0 0 3.656 2.515c1.425.633 2.997.214 4.311-.626l.742-.474a2.151 2.151 0 0 1 2.68.291l2.118 2.119c.714.714.835 1.829.291 2.68Z"
      ></path>
      <path
        fill="url(#paint0_linear_5116_3351)"
        fillOpacity=".2"
        d="m31.661 28.642-1.576 2.465c-.126.197-.266.388-.465.509-1.796 1.084-7.63.18-14.523-6.713-7.302-7.303-7.883-13.416-6.5-14.799l2.761-1.765a2.152 2.152 0 0 1 2.68.291l2.119 2.118c.714.714.835 1.83.29 2.68l-1.18 1.847c-.387.607-.657 1.29-.451 1.98.373 1.253 1.406 3.24 3.047 4.882a12.282 12.282 0 0 0 3.656 2.515c1.425.633 2.997.214 4.311-.626l.742-.474a2.151 2.151 0 0 1 2.68.291l2.118 2.119c.714.714.835 1.829.291 2.68Z"
      ></path>
    </g>
    <defs>
      <linearGradient
        id="paint0_linear_5116_3351"
        x1="20"
        x2="20"
        y1="9"
        y2="31"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff"></stop>
        <stop offset="1" stopOpacity="0"></stop>
      </linearGradient>
      <filter
        id="email-sms-icon-shadow"
        width="30"
        height="30"
        x="5"
        y="6"
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        ></feColorMatrix>
        <feOffset dy="1"></feOffset>
        <feGaussianBlur stdDeviation="1.5"></feGaussianBlur>
        <feComposite in2="hardAlpha" operator="out"></feComposite>
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"></feColorMatrix>
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_5116_3351"
        ></feBlend>
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_5116_3351"
          result="shape"
        ></feBlend>
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        ></feColorMatrix>
        <feOffset dy="1"></feOffset>
        <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"></feComposite>
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.08 0"></feColorMatrix>
        <feBlend in2="shape" result="effect2_innerShadow_5116_3351"></feBlend>
      </filter>
    </defs>
  </svg>
);

const SmsIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" aria-hidden="true" className="size-10">
    <g fillRule="evenodd" clipRule="evenodd" filter="url(#email-sms-icon-shadow)">
      <path
        fill="#5DE3FF"
        d="M20 32c6.627 0 12-5.373 12-12S26.627 8 20 8 8 13.373 8 20s5.373 12 12 12Zm6-12c0 2.761-2.686 5-6 5a7.2 7.2 0 0 1-1.163-.094 1.227 1.227 0 0 0-.79.14c-.613.34-1.308.571-1.983.72-.82.182-1.314-.759-.895-1.485.04-.07.08-.14.119-.212.21-.382.099-.846-.184-1.178C14.409 22.075 14 21.077 14 20c0-2.761 2.686-5 6-5s6 2.239 6 5Z"
      ></path>
      <path
        fill="url(#paint0_linear_5116_3354)"
        fillOpacity=".2"
        d="M20 32c6.627 0 12-5.373 12-12S26.627 8 20 8 8 13.373 8 20s5.373 12 12 12Zm6-12c0 2.761-2.686 5-6 5a7.2 7.2 0 0 1-1.163-.094 1.227 1.227 0 0 0-.79.14c-.613.34-1.308.571-1.983.72-.82.182-1.314-.759-.895-1.485.04-.07.08-.14.119-.212.21-.382.099-.846-.184-1.178C14.409 22.075 14 21.077 14 20c0-2.761 2.686-5 6-5s6 2.239 6 5Z"
      ></path>
    </g>
    <defs>
      <linearGradient
        id="paint0_linear_5116_3354"
        x1="20"
        x2="20"
        y1="9"
        y2="31"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff"></stop>
        <stop offset="1" stopOpacity="0"></stop>
      </linearGradient>
    </defs>
  </svg>
);

const BooksIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" aria-hidden="true" className="size-10">
    <g filter="url(#email-sms-icon-shadow)">
      <path
        fill="#5E5F6E"
        d="M19.083 13.241a.768.768 0 0 0-.179-.523c-.594-.657-2.828-2.545-8.984-2.718-.506-.014-.92.429-.92.973v16.746c0 .544.414.984.92.998 3.126.088 5.241.617 6.643 1.204.846.354 2.52-.54 2.52-1.515V13.24Z"
      ></path>
      <path
        fill="url(#paint0_linear_5116_3361)"
        fillOpacity=".2"
        d="M19.083 13.241a.768.768 0 0 0-.179-.523c-.594-.657-2.828-2.545-8.984-2.718-.506-.014-.92.429-.92.973v16.746c0 .544.414.984.92.998 3.126.088 5.241.617 6.643 1.204.846.354 2.52-.54 2.52-1.515V13.24Z"
      ></path>
      <path
        fill="#5E5F6E"
        d="M20.917 13.241c0-.194.053-.383.179-.523.594-.657 2.828-2.545 8.984-2.718.506-.014.92.429.92.973v16.746c0 .544-.414.984-.92.998-3.126.088-5.241.617-6.643 1.204-.846.354-2.52-.54-2.52-1.515V13.24Z"
      ></path>
      <path
        fill="url(#paint1_linear_5116_3361)"
        fillOpacity=".2"
        d="M20.917 13.241c0-.194.053-.383.179-.523.594-.657 2.828-2.545 8.984-2.718.506-.014.92.429.92.973v16.746c0 .544-.414.984-.92.998-3.126.088-5.241.617-6.643 1.204-.846.354-2.52-.54-2.52-1.515V13.24Z"
      ></path>
    </g>
    <defs>
      <linearGradient
        id="paint0_linear_5116_3361"
        x1="20"
        x2="20"
        y1="10"
        y2="30"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff"></stop>
        <stop offset="1" stopOpacity="0"></stop>
      </linearGradient>
      <linearGradient
        id="paint1_linear_5116_3361"
        x1="20"
        x2="20"
        y1="10"
        y2="30"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff"></stop>
        <stop offset="1" stopOpacity="0"></stop>
      </linearGradient>
    </defs>
  </svg>
);



export default function FirstAnimation() {
  const [isParentHovered, setIsParentHovered] = useState(false);

  const containerVariants = {
    initial: {
      scale: 0.98,
      y: 0,
    },
    hover: {
      scale: 1,
      y: -39,
    }
  };

  const childVariants = {
    initial: {
      opacity: 0,
      y: "-4.5rem",
      scale: 0.9,
      filter: "blur(2px)",
      boxShadow: "rgba(19,19,22,0.6) 0px 6px 12px , rgba(255,255,255,0.03) 0px 1px inset",
    },
    hover: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      boxShadow: "rgba(19,19,22,0.6) 0px 6px 12px , rgba(255,255,255,0.03) 0px 1px inset",
    }
  };

  return (
    <div className="w-full mx-auto   flex flex-col rounded-2xl bg-gray-900 shadow-[inset_0_1px,inset_0_0_0_1px] shadow-white/[0.025]">
      {/* Description block */}
      <div className="relative z-20 flex-none px-6 order-last pb-6 ">

        <h3 className="font-inter text-sm font-medium text-white">
          Email and SMS one-time passcodes
        </h3>
        <p className="mt-2 font-inter text-pretty text-sm/5 text-gray-400">
          Fast and reliable one-time passcode delivery with built-in brute force prevention.
        </p>
      </div>
      {/* Animated card area */}
      <div className="relative min-h-[10.25rem]">
      <motion.div
           variants={containerVariants}
           initial="initial"
           whileHover="hover"
           onHoverStart={() => setIsParentHovered(true)}
           onHoverEnd={() => setIsParentHovered(false)}
           transition={{ type: "spring",damping: 20,stiffness: 200,
             duration: 1, ease: "linear" }}
           className="absolute inset-x-0 top-0 isolate h-[calc(206/16*1rem)] overflow-hidden pt-6 group/parent"
         >

           <div className="mx-auto z-10 h-60 w-[calc(294/16*1rem)] bg-gray-800 p-1.5 rounded-[calc(44/16*1rem)] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05),0_2px_5px_0_rgba(0,0,0,0.4)] bg-gradient-to-b from-white/5 from-0% to-white/0 to-[67.19%]">
            <div className="relative h-[calc(200/16*1rem)] bg-gray-950/50 rounded-[calc(38/16*1rem)] px-5 pt-3 ring-1 ring-inset ring-black/5">
              <motion.div animate={{ backgroundColor: isParentHovered ? "#5DE3FF" : "" }} className="relative z-10 mx-auto flex h-6 w-6 items-center justify-center rounded-full bg-gray-900/50">
                <LockSvg />
              </motion.div>
              <motion.span className="perspective-[1000px]">
                <motion.div
                  className="group absolute inset-x-2 top-12 z-20 flex origin-top items-center gap-x-3 rounded-2xl bg-gray-800 p-2"
                  variants={childVariants}
                  initial="initial"
                  animate={isParentHovered ? "hover" : "initial"}
                  whileHover="hover"
                  transition={{ ease: "circInOut", duration: 0.3, delay: 0.2 }}
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-[calc(10/16*1rem)] bg-gray-900 [background-image:radial-gradient(circle_at_center_top,rgba(114,233,255,0.2),rgba(114,233,255,0))] [box-shadow:rgba(255,255,255,0.05)_0px_1px_inset]">
                    <SmsIcon />
                  </div>
                  <div className="min-w-0">
                  <div className="text-[0.625rem]/4 font-medium font-inter text-[#5DE3FF]">Security alert</div>
                  <div className="truncate  text-xs/5 text-gray-200">
                    Your security passcode is <span className="text-white text-xs/5 font-inter">764676</span>
                  </div>
                  </div>
                </motion.div>
              </motion.span>
              <div className="mt-6 flex flex-wrap justify-between items-center gap-2 text-center">
              <div className="flex-none flex flex-col items-center">
                <div
                  className="relative size-10 rounded-[calc(10/16*1rem)] bg-gray-800"
                  style={{ boxShadow: "rgba(255, 255, 255, 0.05) 0px 1px inset" }}
                >
                 <PhoneIcon />
                </div>
                <div className="mt-1.5 text-[0.625rem]/4 font-medium font-inter text-gray-300">Phone</div>
              </div>
              <div className="flex-none flex flex-col items-center">
                <div
                  className="relative size-10 rounded-[calc(10/16*1rem)] bg-gray-800"
                  style={{ boxShadow: "rgba(255, 255, 255, 0.05) 0px 1px inset" }}
                >
                 <SmsIcon />
                  <motion.div
                    animate={{ scale: isParentHovered ? 0.75 : 1 , backgroundColor: isParentHovered ? "#5DE3FF" : "rgba(255, 255, 255, 0.25)" }}
                    className="absolute -left-1.5 -top-1.5 z-10 flex h-5 w-5 items-center justify-center rounded-full text-[0.625rem]/none font-semibold text-gray-950 backdrop-blur"
                  >
                    1
                  </motion.div>
                </div>
                <div className="mt-1.5 text-[0.625rem]/4 font-medium font-inter text-gray-300">SMS</div>
              </div>
              <div className="flex-none flex flex-col items-center">
                <div
                  className="relative size-10 rounded-[calc(10/16*1rem)] bg-gray-800"
                  style={{ boxShadow: "rgba(255, 255, 255, 0.05) 0px 1px inset" }}
                >
                 <BooksIcon />
                </div>
                <div className="mt-1.5 text-[0.625rem]/4 font-medium font-inter text-gray-300">Books</div>
              </div>
              <div className="flex-none flex flex-col items-center">
                <div
                  className="relative size-10 flex items-center justify-center rounded-[calc(10/16*1rem)] bg-gray-800"
                  style={{ boxShadow: "rgba(255, 255, 255, 0.05) 0px 1px inset" }}
                >
                 <TvIcon />
                </div>
                <div className="mt-1.5 text-[0.625rem]/4 font-medium font-inter text-gray-300">TV</div>
              </div>
              </div>
            </div>
           </div>

         </motion.div>

      </div>
    </div>
  );
}
