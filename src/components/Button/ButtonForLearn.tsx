import Link from "next/link";
import Image from "next/image";
import React from "react";

interface ButtonForLearnProps {
  innerText: string;
  image: string;
  path: string;
}

function ButtonForLearn({ innerText, image, path }: ButtonForLearnProps) {
   return (
      <Link href={`/learn${path}`} >
      <button
        type="button"
        className={`rounded-md w-max h-[40px] items-center justify-center text-lg font-semibold text-white bg-[var(--primaryColor)] shadow-[var(--boxShadow)] transition transform duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-[var(--highlightColor)] flex gap-3  px-4 py-2`}
      >
        <Image
          src={image}
          alt={image}
          className="z-10"
          width={20}
          height={20}
        />
        <p className="z-10">{innerText}</p>
      </button>
    </Link>
  );
}

export default ButtonForLearn;
