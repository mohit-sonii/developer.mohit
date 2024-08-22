"use client";
import Image from "next/image";
import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
   items,
   direction = "left",
   speed = "fast",
   pauseOnHover = true,
   className,
}: {
   items: {
      image: string;
      name: string;
   }[];
   direction?: "left" | "right";
   speed?: "fast" | "normal" | "slow";
   pauseOnHover?: boolean;
   className?: string;
}) => {
   const containerRef = React.useRef<HTMLDivElement>(null);
   const scrollerRef = React.useRef<HTMLUListElement>(null);

   // useEffect(() => {
      addAnimation();
   // }, []);
   
   const [start, setStart] = useState(false);
   function addAnimation() {
      if (containerRef.current && scrollerRef.current) {
         const scrollerContent = Array.from(scrollerRef.current.children);

         scrollerContent.forEach((item) => {
            const duplicatedItem = item.cloneNode(true);
            if (scrollerRef.current) {
               scrollerRef.current.appendChild(duplicatedItem);
            }
         });

         getDirection();
         getSpeed();
         setStart(true);
      }
   }
   const getDirection = () => {
      if (containerRef.current) {
         if (direction === "left") {
            containerRef.current.style.setProperty(
               "--animation-direction",
               "forwards"
            );
         } else {
            containerRef.current.style.setProperty(
               "--animation-direction",
               "reverse"
            );
         }
      }
   };
   const getSpeed = () => {
      if (containerRef.current) {
         if (speed === "fast") {
            containerRef.current.style.setProperty("--animation-duration", "20s");
         } else if (speed === "normal") {
            containerRef.current.style.setProperty("--animation-duration", "40s");
         } else {
            containerRef.current.style.setProperty("--animation-duration", "80s");
         }
      }
   };
   return (
      <div
         ref={containerRef}
         className={cn(
            "scroller relative z-20  w-full overflow-hidden ",
            className
         )}
      >
         <ul
            ref={scrollerRef}
            className={cn(
               "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
               start && "animate-scroll",
               pauseOnHover && "hover:[animation-play-state:paused]"
            )}
         >
            {items.map((item) => (
               <li
                  className="w-max relative flex justify-center items-center rounded-2xl border border-b-0  border-slate-800 px-10 py-5"
                  style={{
                     background:
                        "linear-gradient(180deg, var(--slate-800), var(--slate-900)",
                  }}
                  key={item.name}
               >
                  <div className="relative justify-center  gap-4 flex flex-row items-center">
                     <Image
                        src={item.image}
                        alt="Tech image"
                        width={30}
                        height={30}
                     />
                     <span className=" text-lg leading-[1.6] text-gray-400 font-bold">
                        {item.name}
                     </span>
                  </div>
               </li>
            ))}
         </ul>
      </div>
   );
};
