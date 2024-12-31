import React from "react";
import ButtonWithRedirect from "@/components/Button/ButtonWithRedirect";

export default function Hero() {
  return (
    <main className="my-6 w-[90%] min-h-max flex justify-center m-auto items-center">
      <section className="flex flex-col py-10 gap-14 m-auto justify-center content-center">
        <div className="headings-subheadings font-bold flex flex-col gap-8 md:gap-10">
          <h1
            style={{ color: "var(--primaryColor)" }}
            className=" text-7xl md:text-9xl"
          >
            Namaste, I am{" "}
            <span style={{ color: "var(--accentColor)" }}>Mohit</span>
          </h1>
          <h3
            style={{ color: "var(--textColor)" }}
            className="text-4xl md:text-6xl md:w-4/5"
          >
            A Passionate Software Developer from Bharat
          </h3>
        </div>
        <div className="buttons flex gap-9 md:gap-20 h-auto">
          <ButtonWithRedirect
            innerText="Instagram"
            href="https://instagram.com/developer.mohit"
          />
          <ButtonWithRedirect
            innerText="GitHub"
            href="https://github.com/mohit-sonii"
          />
          <ButtonWithRedirect
            innerText="LinkedIn"
            href="https://www.linkedin.com/in/mohit-soni-808984265/"
          />
        </div>
      </section>
    </main>
  );
}
