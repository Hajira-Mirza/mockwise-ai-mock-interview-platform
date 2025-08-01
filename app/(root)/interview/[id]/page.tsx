import Agent from "@/components/Agent";
import DisplayTechIcons from "@/components/DisplayTechIcons";
import { getCurrentUser } from "@/lib/actions/auth.action";
import { getInterviewsById } from "@/lib/actions/general.action";
import { getRoleIconName } from "@/lib/utils";
import { Icon } from "@iconify/react";
import { redirect } from "next/navigation";
import React from "react";

const Page = async ({ params }: RouteParams) => {
  const { id } = await params;
  const user = await getCurrentUser();
  const interview = await getInterviewsById(id);
  if (!interview) redirect("/");
  console.log(interview);
  console.log(user);
  return (
    <>
      <div className="flex flex-row gap-4 justify-between">
        <div className="flex flex-row gap-4 items-center max-sm:flex-col">
          <div className="flex flex-row gap-4 items-center">
            {interview?.role && (
              <Icon icon={getRoleIconName(interview.role)} width={40} height={40} />
            )}
            <h3 className="capitalize">{interview.role} Interview</h3>
          </div>
          <DisplayTechIcons techStack={interview.techstack} />
        </div>
        <p className="bg-dark-200 px-4 py-2 rounded-lg h-fit capitalize">{interview.type}</p>
      </div>
      <Agent userName={user?.name || ""} userId={user?.id} interviewId={id} type="interview" questions={interview.questions} />
    </>
  );
};

export default Page;
