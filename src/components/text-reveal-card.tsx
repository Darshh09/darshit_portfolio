"use client";
import React, { useEffect, useRef, useState, memo, useMemo } from "react";
import { motion } from "motion/react";
import { twMerge } from "tailwind-merge";
import { cn } from "@/lib/utils";

export const TextRevealCard = ({
  text,
  revealText,
  children,
  className,
}: {
  text: string | React.ReactNode;
  revealText: string | React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}) => {
  const [widthPercentage, setWidthPercentage] = useState(0);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [left, setLeft] = useState(0);
  const [localWidth, setLocalWidth] = useState(0);
  const [isMouseOver, setIsMouseOver] = useState(false);

  useEffect(() => {
    if (cardRef.current) {
      const { left, width: localWidth } =
        cardRef.current.getBoundingClientRect();
      setLeft(left);
      setLocalWidth(localWidth);
    }
  }, []);

  function mouseMoveHandler(event: React.MouseEvent<HTMLDivElement>) {
    event.preventDefault();

    const { clientX } = event;
    if (cardRef.current) {
      const relativeX = clientX - left;
      setWidthPercentage((relativeX / localWidth) * 100);
    }
  }

  function mouseLeaveHandler() {
    setIsMouseOver(false);
    setWidthPercentage(0);
  }
  function mouseEnterHandler() {
    setIsMouseOver(true);
  }
  function touchMoveHandler(event: React.TouchEvent<HTMLDivElement>) {
    event.preventDefault();
    const clientX = event.touches[0]!.clientX;
    if (cardRef.current) {
      const relativeX = clientX - left;
      setWidthPercentage((relativeX / localWidth) * 100);
    }
  }

  const rotateDeg = (widthPercentage - 50) * 0.1;
  return (
    <div
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      onMouseMove={mouseMoveHandler}
      onTouchStart={mouseEnterHandler}
      onTouchEnd={mouseLeaveHandler}
      onTouchMove={touchMoveHandler}
      ref={cardRef}
      className={cn(
        " rounded-lg  items-center justify-center p-8 w-full relative overflow-hidden",
        className
      )}
    >
      {children}

      <div className="h-40  relative flex items-center overflow-hidden">
        <motion.div
          style={{
            width: "100%",
          }}
          animate={
            isMouseOver
              ? {
                  opacity: widthPercentage > 0 ? 1 : 0,
                  clipPath: `inset(0 ${100 - widthPercentage}% 0 0)`,
                }
              : {
                  clipPath: `inset(0 ${100 - widthPercentage}% 0 0)`,
                }
          }
          transition={isMouseOver ? { duration: 0 } : { duration: 0.4 }}
          className="absolute bg-[#1d1c20] z-20  will-change-transform flex items-center justify-center"
        >
          <div
            style={{
              textShadow: "4px 4px 15px rgba(0,0,0,0.5)",
            }}
            className="text-base sm:text-[3rem] py-10 font-bold text-white bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-300 flex items-center justify-center"
          >
            {typeof revealText === 'string' ? (
              <p>{revealText}</p>
            ) : (
              revealText
            )}
          </div>
        </motion.div>
        <motion.div
          animate={{
            left: `${widthPercentage}%`,
            rotate: `${rotateDeg}deg`,
            opacity: widthPercentage > 0 ? 1 : 0,
          }}
          transition={isMouseOver ? { duration: 0 } : { duration: 0.4 }}
          className="h-40 w-[8px] bg-gradient-to-b from-transparent via-neutral-800 to-transparent absolute z-50 will-change-transform"
        ></motion.div>

        <div className=" overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,white,transparent)] flex items-center justify-center">
          <div className="text-base sm:text-[3rem] py-10 font-bold bg-clip-text text-transparent bg-[#323238] flex items-center justify-center">
            {typeof text === 'string' ? (
              <p>{text}</p>
            ) : (
              text
            )}
          </div>
          <MemoizedStars />
        </div>
      </div>
    </div>
  );
};

export const TextRevealCardTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h2 className={twMerge("text-white text-lg mb-2", className)}>
      {children}
    </h2>
  );
};

export const TextRevealCardDescription = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p className={twMerge("text-[#a9a9a9] text-sm", className)}>{children}</p>
  );
};

// Seeded random number generator for consistent values
function seededRandom(seed: number) {
  let value = seed;
  return () => {
    value = (value * 9301 + 49297) % 233280;
    return value / 233280;
  };
}

const Stars = () => {
  // Generate consistent positions using seeded random
  const starData = useMemo(() => {
    return Array.from({ length: 90 }, (_, i) => {
      const random = seededRandom(i + 1);
      return {
        top: random() * 100,
        left: random() * 100,
        opacity: random(),
        move: random() * 4 - 2,
        duration: random() * 10 + 20,
        initialTop: random() * 100,
        initialLeft: random() * 100,
      };
    });
  }, []);

  return (
    <div className="absolute w-full inset-0">
      {starData.map((star, i) => (
        <motion.span
          key={`star-${i}`}
          animate={{
            top: `calc(${star.top}% + ${star.move}px)`,
            left: `calc(${star.left}% + ${star.move}px)`,
            opacity: star.opacity,
            scale: [1, 1.2, 0],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            top: `${star.initialTop}%`,
            left: `${star.initialLeft}%`,
            width: `2px`,
            height: `2px`,
            backgroundColor: "white",
            borderRadius: "50%",
            zIndex: 1,
          }}
          className="inline-block"
        ></motion.span>
      ))}
    </div>
  );
};

export const MemoizedStars = memo(Stars);

