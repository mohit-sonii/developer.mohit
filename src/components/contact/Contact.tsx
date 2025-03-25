"use client";

import React, { useEffect, useTransition } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { DotLoader } from "react-spinners";
import toast from "react-hot-toast";

import { contactformValidations } from "@/validations/contactFormValidation";
import { InputField, SelectField } from "../InputField";
import { submission } from "./submitAction";

const Contact: React.FC = () => {
  const [isPending, startTransition] = useTransition();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<z.infer<typeof contactformValidations>>({
    resolver: zodResolver(contactformValidations),
  });

  const handleSubmitRequest = handleSubmit(async (data:any) => {
    const loading_toast = toast.loading("Please wait...");
    startTransition(async () => {
      try {
        // console.log(data);
        const res = await submission(data);
        if (!res.success) {
          toast.error(res.message);
          return;
        }
        toast.success(res.message);
        reset();
      } catch (err: any) {
        toast.error(err.message || "Something went wrong !!!");
      } finally {
        toast.dismiss(loading_toast);
        return;
      }
    });
  });

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      for (const key in errors) {
        if (errors.hasOwnProperty(key)) {
          const errorKey = key as keyof typeof errors;
          toast.error(errors[errorKey]?.message || "An error occurred");
        }
      }
    }
  }, [errors]);

  return (
    <div className="buttons flex gap-5 md:gap-20 h-auto">
      <form
        onSubmit={handleSubmitRequest}
        className="w-full flex flex-col gap-10"
      >
        <div className="flex-wrap w-full flex-row flex items-center justify-between gap-10">
          <InputField
            register={register}
            nameForRegister="name"
            label_text="Name"
          />
          <InputField
            register={register}
            nameForRegister="contact"
            label_text="Contact"
          />
          <InputField
            register={register}
            nameForRegister="email"
            label_text="Email"
          />
          <SelectField
            register={register}
            nameForRegister="service"
            label="Select Service"
            values={["Web Development", "App Development", "SEO"]}
          />
        </div>

        <button
          type="submit"
          className="rounded-md w-[150px] h-[35px] flex items-center justify-center text-lg font-semibold text-white bg-[var(--accentColor)] shadow-[var(--boxShadow)] transition transform duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-[var(--highlightColor)]"
        >
          {isPending ? <DotLoader color="white" size={20} /> : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default Contact;
