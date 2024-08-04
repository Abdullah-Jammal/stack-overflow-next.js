"use client";
import Link from "next/link";
import React from "react";
import RenderTags from "../shared/RenderTags";
import Metric from "../shared/Metric";
import { formatNumber, getTimestamp } from "@/lib/utils";

interface PropsTypes {
  _id: number;
  tags: {
    _id: number;
    name: string;
  }[];
  votes: number;
  views: number;
  answers: Array<object>;
  createAt: Date;
  author: {
    _id: number;
    name: string;
    picture: string;
  };
  title: string;
}

const QuestionCard = ({
  _id,
  tags,
  votes,
  title,
  views,
  answers,
  createAt,
  author,
}: PropsTypes) => {
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
          {getTimestamp(createAt)}
        </span>
        <Link href={`/question/${_id}`}>
          <h3 className="base-semibold sm:h3-semibold line-clamp-1 flex-1 text-dark200_light900">
            {title}
          </h3>
        </Link>
        {/* if signed in add edit delete action */}
      </div>

      <div className="mt-3.5 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <RenderTags key={tag._id} name={tag.name} _id={tag._id} />
        ))}
      </div>
      <div className="flex-between mt-6 w-full flex-wrap gap-3">
        <Metric
          imgUrl="/assets/icons/avatar.svg"
          alt="user"
          value={author.name}
          title={`- asked ${getTimestamp(createAt)}`}
          href={`/profile/${author._id}`}
          isAuthor
          textStyle="body-medium text-dark400_light700"
        />
        <Metric
          imgUrl="/assets/icons/like.svg"
          alt="Upvotes"
          value={formatNumber(votes)}
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
