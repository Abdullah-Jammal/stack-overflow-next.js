"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface PropsType {
  title: string;
  imgUrl: string;
  value: number | string;
  alt: string;
  textStyle?: string;
  href?: string;
  isAuthor?: boolean;
}

const Metric = ({
  title,
  imgUrl,
  value,
  textStyle,
  alt,
  href,
  isAuthor,
}: PropsType) => {
  const metricContent = (
    <>
      <Image
        src={imgUrl}
        width={16}
        height={16}
        alt={alt}
        className={`object-contain ${href ? "rounded-full" : ""}`}
      />
      <p className={`${textStyle} flex items-center gap-1`}>
        <span>{value}</span>
        <span
          className={`small-regular line-clamp-1 ${
            isAuthor ? "max-sm:hidden" : ""
          }`}
        >
          <span>{title}</span>
        </span>
      </p>
    </>
  );
  if (href) {
    return (
      <Link href={href} className="flex-center gap-1">
        {metricContent}
      </Link>
    );
  }
  return <div className="flex-center flex-wrap gap-2">{metricContent}</div>;
};

export default Metric;
