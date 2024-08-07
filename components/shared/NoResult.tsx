"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

interface PropsTypes {
  title: string;
  description: string;
  btn: string;
  linkQuestion: string;
}

const NoResult = ({ title, description, btn, linkQuestion }: PropsTypes) => {
  return (
    <div className="mt-10 flex w-full flex-col items-center justify-center">
      <Image
        src="/assets/images/light-illustration.png"
        alt="No Result Illustration"
        width={270}
        height={200}
        className="block object-contain dark:hidden"
      />
      <Image
        src="/assets/images/light-illustration.png"
        alt="No Result Illustration"
        width={270}
        height={200}
        // eslint-disable-next-line tailwindcss/no-contradicting-classname
        className="hidden object-contain dark:flex"
      />
      <h2 className="h2-bold text-dark200_light800 mt-8">{title}</h2>

      <p className="body-regular text-dark500_light700 my-3.5 max-w-md text-center">
        {description}
      </p>
      <Link href={linkQuestion}>
        <Button
          className="paragraph-medium mt-5 min-h-[46px] rounded-lg bg-primary-500 px-4 py-3 
        text-light-900 hover:bg-primary-500 dark:bg-primary-500 dark:text-light-900"
        >
          {btn}
        </Button>
      </Link>
    </div>
  );
};

export default NoResult;
