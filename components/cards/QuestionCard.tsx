"use client";
import Link from "next/link";
import React from "react";
// import RenderTags from "../shared/RenderTags";
import Metric from "../shared/Metric";
import { formatNumber, getTimestamp } from "@/lib/utils";

interface QuestionProps {
  _id: string;
  title: string;
  tags: {
    _id: string;
    name: string;
  }[];
  author: {
    _id: string;
    name: string;
    picture: string;
    clerkId: string;
  };
  upvotes: string[];
  views: number;
  answers: Array<object>;
  createdAt: Date;
  clerkId?: string | null;
}

// eslint-disable-next-line no-empty-pattern
const QuestionCard = ({
  clerkId,
  _id,
  title,
  tags,
  author,
  upvotes,
  views,
  answers,
  createdAt,
}: QuestionProps) => {
  console.log(author);
  return (
    <div className="card-wrapper rounded-[10px] p-9 sm:px-11">
      <div
        className="flex flex-col-reverse items-start justify-between
      gap-5 sm:flex-row"
      >
        <span
          className="subtle-regular text-dark400_light700 line-clamp-1
        flex sm:hidden"
        >
          {getTimestamp(createdAt)}
        </span>
        <Link href={`/question/${_id}`}>
          <h3 className="base-semibold sm:h3-semibold text-dark200_light900 line-clamp-1 flex-1">
            {title}
          </h3>
        </Link>
      </div>

      <div className="mt-3.5 flex flex-wrap gap-2">
        {/* {tags.map((tag) => (
          <RenderTags key={tag._id} _id={tag._id} name={tag.name} />
        ))} */}
      </div>
      <div className="flex-between mt-6 w-full flex-wrap gap-3">
        <Metric
          imgUrl={"/assets/icons/avatar.svg"}
          alt="user"
          value={author}
          title={`- asked ${getTimestamp(createdAt)}`}
          href={`/profile/2`}
          isAuthor
          textStyle="body-medium text-dark400_light700"
        />
        <Metric
          imgUrl="/assets/icons/like.svg"
          alt="Upvotes"
          value={formatNumber(Number(upvotes))}
          title="Votes"
          textStyle="small-medium text-dark400_light800"
        />
        <Metric
          imgUrl="/assets/icons/message.svg"
          alt="Upvotes"
          value={answers.length}
          title="Answers"
          textStyle="small-medium text-dark400_light800"
        />
        <Metric
          imgUrl="/assets/icons/eye.svg"
          alt="eye"
          value={formatNumber(views)}
          title="Views"
          textStyle="small-medium text-dark400_light800"
        />
      </div>
    </div>
  );
};

export default QuestionCard;
