import QuestionCard from "@/components/cards/QuestionCard";
import HomeFilters from "@/components/home/HomeFilters";
import Filter from "@/components/shared/Filter";
import LocalSearchbar from "@/components/shared/Navbar/search/LocalSearchbar";
import NoResult from "@/components/shared/NoResult";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filter";
import Link from "next/link";

const questions = [
  {
    _id: 1,
    title: "Cascading Deletes in SQLAlchemy ?",
    tags: [
      {
        _id: 1,
        name: "python",
      },
      {
        _id: 2,
        name: "sql",
      },
    ],
    views: 10,
    votes: 5,
    author: {
      _id: 1,
      name: "John Doe",
      picture: "john-doe.jpg",
    },
    answers: [],
    createAt: new Date("2024-09-01T12:00:00.000z"),
  },
  {
    _id: 2,
    title: "How to center a div ?",
    tags: [
      {
        _id: 1,
        name: "python",
      },
      {
        _id: 2,
        name: "sql",
      },
    ],
    views: 700000,
    votes: 2,
    author: {
      _id: 1,
      name: "John Doe",
      picture: "john-doe.jpg",
    },
    answers: [],
    createAt: new Date("2024-09-01T12:00:00.000z"),
  },
  {
    _id: 3,
    title: "HTML stand for ............. ?",
    tags: [
      {
        _id: 1,
        name: "python",
      },
      {
        _id: 2,
        name: "sql",
      },
    ],
    views: 10,
    votes: 10000003321,
    answers: [],
    author: {
      _id: 1,
      name: "John Doe",
      picture: "john-doe.jpg",
    },
    createAt: new Date("2022-09-01T12:00:00.000z"),
  },
];

export default function Home() {
  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Link href="/ask-question" className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
            Ask a Questions
          </Button>
        </Link>
      </div>
      <div className="flex justify-between mt-11 gap-5 sm:flex-col max-sm:items-center">
        <LocalSearchbar
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for questions..."
          otherClasses="flex-1"
        />
        <Filter
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px] hidden max-md:flex"
          containerClasses="hidden max-md:flex"
        />
      </div>
      <HomeFilters />
      <div className="mt-10 flex w-full flex-col gap-6">
        {questions.length > 0 ? (
          questions.map((question) => (
            <QuestionCard
              key={question._id}
              _id={question._id}
              title={question.title}
              tags={question.tags}
              author={question.author}
              votes={question.votes}
              views={question.views}
              answers={question.answers}
              createAt={question.createAt}
            />
          ))
        ) : (
          <NoResult
            title="There’s no question to show"
            description="Be the first to break the silence! 🚀 Ask a Question and kickstart the discussion. our query could be the next big thing others learn from. Get involved!"
            btn="Ask a Question"
            linkQuestion="/ask-questions"
          />
        )}
      </div>
    </>
  );
}
