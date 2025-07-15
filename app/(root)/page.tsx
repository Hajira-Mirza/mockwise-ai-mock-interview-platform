import InterviewCard from "@/components/InterviewCard";
import { Button } from "@/components/ui/button";
import {
  getCurrentUser,
  getInterviewsByUserId,
  getLatestInterviews,
} from "@/lib/actions/auth.action";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = async () => {
  const user = await getCurrentUser();

  const [userInterviews, latestInterviews] = await Promise.all([
    await getInterviewsByUserId(user?.id!),
    await getLatestInterviews({ userId: user?.id! }),
  ]);

  const hasPastInterviews = userInterviews?.length > 0;
  const hasUpcomingInterviews = latestInterviews?.length > 0;
  return (
    <>
      <section className="card-cta flex flex-col-reverse items-center gap-6 p-6 md:flex-row justify-evenly">
        <div className="flex flex-col gap-6 text-center md:text-left max-w-lg">
          <h2 className="text-3xl font-bold">
            Ace Every Interview with AI-Powered Practice.
          </h2>
          <p className="text-lg">
            Practice real-world interview scenarios in a private, interactive
            environment guided by AI to boost your performance and confidence.
          </p>
          <div className="flex justify-center md:justify-start">
            <Button
              asChild
              className="btn-primary pl-8 pr-8 w-full sm:w-auto md:w-auto"
            >
              <Link href="/interview">Start Practicing Now</Link>
            </Button>
          </div>
        </div>
        <Image
          src="/hero.png"
          alt="Hero Image"
          width={300}
          height={300}
          className="rounded-full w-40 sm:w-52 md:w-72 lg:w-[300px] h-auto transition-transform duration-500 hover:scale-110 hover-loading-ring"
          priority
        />
      </section>

      <section className="flex flex-col gap-6 mt-8">
        <h2>Your Past Interviews</h2>
        <div className="interviews-section items-center justify-center">
          {hasPastInterviews ? (
            userInterviews?.map((interview) => (
              <InterviewCard {...interview} key={interview.id} />
            ))
          ) : (
            <p className=" text-lg">
              You haven&apos;t scheduled any interviews yet.
            </p>
          )}
        </div>
      </section>

      <section className="flex flex-col gap-6 mt-8">
        <h2>Pick an Interview</h2>
        <div className="interviews-section items-center justify-center">
          {hasUpcomingInterviews ? (
            latestInterviews?.map((interview) => (
              <InterviewCard {...interview} key={interview.id} />
            ))
          ) : (
            <p className="text-lg">
              There are no upcoming interviews available.
            </p>
          )}
        </div>
      </section>
    </>
  );
};

export default page;
