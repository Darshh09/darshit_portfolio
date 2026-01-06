"use client";
import React from 'react'

export const LeftShadowSvg = () => {
  return (
    <svg
      viewBox="0 0 208 248"
      fill="none"
      aria-hidden="true"
      className="absolute left-full top-[calc(122/16*1rem)] ml-1.5 w-52"
    >
      <g filter="url(#filter0_bd_29_5466)" shapeRendering="crispEdges">
        <path
          fill="#fff"
          fillOpacity=".04"
          d="M4.229 24.678 23.639 4.46A8 8 0 0 1 29.409 2H198a8 8 0 0 1 8 8v228a8 8 0 0 1-8 8H10a8 8 0 0 1-8-8V30.219a8 8 0 0 1 2.229-5.54Z"
        ></path>
        <path
          stroke="#fff"
          strokeOpacity=".05"
          d="M24 4.806 4.59 25.024a7.5 7.5 0 0 0-2.09 5.194V238a7.5 7.5 0 0 0 7.5 7.5h188a7.5 7.5 0 0 0 7.5-7.5V10a7.5 7.5 0 0 0-7.5-7.5H29.41A7.5 7.5 0 0 0 24 4.806Z"
        ></path>
      </g>
      <defs>
        <filter
          id="filter0_bd_29_5466"
          width="220"
          height="260"
          x="-6"
          y="-6"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="4"></feGaussianBlur>
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_29_5466"
          ></feComposite>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset></feOffset>
          <feGaussianBlur stdDeviation="1"></feGaussianBlur>
          <feComposite in2="hardAlpha" operator="out"></feComposite>
          <feColorMatrix
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          ></feColorMatrix>
          <feBlend
            in2="effect1_backgroundBlur_29_5466"
            result="effect2_dropShadow_29_5466"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_29_5466"
            result="shape"
          ></feBlend>
        </filter>
      </defs>
    </svg>
  );
};

const RightShadowSvg = () => (
  <svg
    viewBox="0 0 208 248"
    fill="none"
    aria-hidden="true"
    className="absolute right-full top-[calc(122/16*1rem)] mr-1.5 w-52 -scale-x-100"
  >
    <g filter="url(#filter0_bd_29_5466)" shapeRendering="crispEdges">
      <path
        fill="#fff"
        fillOpacity=".04"
        d="M4.229 24.678 23.639 4.46A8 8 0 0 1 29.409 2H198a8 8 0 0 1 8 8v228a8 8 0 0 1-8 8H10a8 8 0 0 1-8-8V30.219a8 8 0 0 1 2.229-5.54Z"
      ></path>
      <path
        stroke="#fff"
        strokeOpacity=".05"
        d="M24 4.806 4.59 25.024a7.5 7.5 0 0 0-2.09 5.194V238a7.5 7.5 0 0 0 7.5 7.5h188a7.5 7.5 0 0 0 7.5-7.5V10a7.5 7.5 0 0 0-7.5-7.5H29.41A7.5 7.5 0 0 0 24 4.806Z"
      ></path>
    </g>
    <defs>
      <filter
        id="filter0_bd_29_5466"
        width="220"
        height="260"
        x="-6"
        y="-6"
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="4"></feGaussianBlur>
        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_29_5466"></feComposite>
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        ></feColorMatrix>
        <feOffset></feOffset>
        <feGaussianBlur stdDeviation="1"></feGaussianBlur>
        <feComposite in2="hardAlpha" operator="out"></feComposite>
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
        <feBlend in2="effect1_backgroundBlur_29_5466" result="effect2_dropShadow_29_5466"></feBlend>
        <feBlend in="SourceGraphic" in2="effect2_dropShadow_29_5466" result="shape"></feBlend>
      </filter>
    </defs>
  </svg>
);


export const SecondAnimation = () => {
  return (
    <div className="group isolate flex flex-col rounded-2xl bg-gray-900 shadow-[inset_0_1px,inset_0_0_0_1px] shadow-white/[0.025] overflow-hidden row-span-2">
        <div className="relative z-10 flex-none px-6 pt-6">
            <h3 className="text-sm font-medium text-white">
                Session Management
            </h3>
            <p className="mt-2 font-inter text-pretty text-sm/5 text-gray-400">Clerk manages the full session lifecycle, including critical security functionality like active device monitoring and session revocation.</p>
        </div>
        <div className="relative min-h-[10.25rem] flex-auto pointer-events-none">
          <div className="relative flex h-full flex-col items-center justify-center">
            <div className="relative">
               <div className="relative z-10 mx-auto mt-12 w-64 rounded-lg bg-gray-500/5 bg-gradient-to-br from-white/5 to-65% px-6 pb-6 pt-14 backdrop-blur-sm">
               </div>
               <RightShadowSvg />
                <LeftShadowSvg />
                <div className="absolute left-1/2 top-[calc(20/16*1rem)] ml-[calc(-600/2/16*1rem)] aspect-[600/87] w-[calc(600/16*1rem)]">
                  <svg viewBox="0 0 600 87" fill="none" aria-hidden="true" className="absolute inset-0 size-full stroke-white/5">
                    <path d="M0 86h136.686a8 8 0 0 0 5.657-2.343l80.314-80.314A8 8 0 0 1 228.314 1h143.372a8 8 0 0 1 5.657 2.343l80.314 80.314A8 8 0 0 0 463.314 86H600"></path>
                  </svg>
                </div>
            </div>
             <div className="absolute inset-0 bg-[radial-gradient(97.14%_100%_at_top,rgba(33,33,80,0)_45.04%,#212226_89.82%)]" />
          </div>
        </div>
    </div>
  )
}

