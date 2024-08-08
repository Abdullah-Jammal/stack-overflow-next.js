"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import RenderTags from "./RenderTags";

const hotQuestions = [
  {
    _id: 1,
    title: "Is it only me or the font is bolder than necessary?",
  },
  {
    _id: 2,
    title: "Redux Toolkit Not Updating State as Expected",
  },
  {
    _id: 3,
    title: "Can I get the course for free?",
  },
  {
    _id: 4,
    title: "Async/Await Function Not Handling Errors Properly",
  },
  {
    _id: 5,
    title:
      "Would it be appropriate to point out an error in another paper during a referee report?",
  },
];
const popularTags = [
  {
    _id: 1,
    name: "javascript",
    totalQuestions: 5,
  },
  {
    _id: 2,
    name: "react",
    totalQuestions: 16,
  },
  {
    _id: 3,
    name: "next.js",
    totalQuestions: 15,
  },
  {
    _id: 4,
    name: "postgress",
    totalQuestions: 3,
  },
  {
    _id: 5,
    name: "css",
    totalQuestions: 10,
  },
];
const RightSidebar = () => {
  return (
    <section
      className="background-light900_dark200 light-border custom-scrollbar sticky right-0 top-0 flex h-screen w-[350px] flex-col overflow-y-auto border-l
        p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden max-sm:hidden"
    >
      <div>
        <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {hotQuestions.map((question) => (
            <Link
              href={`/questions/${question._id}`}
              key={question._id}
              className="flex-between cursor-pointer
                gap-7"
            >
              <p className="text-dark500_light700 body-medium">
                {question.title}
              </p>
              <Image
                src="/assets/icons/chevron-right.svg"
                alt="arrow"
                width={20}
                height={20}
                className="invert-colors"
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
        <div className="mt-7 flex flex-col gap-4">
          {popularTags.map((tag) => (
            <RenderTags
              key={tag._id}
              _id={tag._id}
              name={tag.name}
              totalQuestions={tag.totalQuestions}
              showCount
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightSidebar;
