import { generateText } from "ai";
import { google } from "@ai-sdk/google";
import { db } from "@/firebase/admin";
export async function GET() {
  return Response.json({ success: true, data: "Thank You" }, { status: 200 });
}

export async function POST(request: Request) {
  const { type, role, level, amount, techstack, userid, coverurl, } =
    await request.json();
  try {
    const { text: questions } = await generateText({
      model: google("gemini-2.0-flash-001"),
      prompt: `Prepare questions for a job interview.
      The job role is: ${role}.
      The job cover URL is: ${coverurl}.
      The job experience is: ${level}.
      The number of questions to generate is: ${amount}.
      The tech stack used in the job is: ${techstack}.
      The focus between behavioral and technical questions should lean towards: ${type}.
      Please return only the questions, without any additional text.
      The questions are going to be read by a voice assistant so do not use "/" or * or any other special characters.
      Return the questions formatted like this:
    ["Question 1",
    "Question 2",
    "Question 3"]
    Thank you! <3`,
    });

    const interview = {
      role,
      type,
      level,
      techstack: techstack.split(","),
      questions: JSON.parse(questions),
      userId: userid,
      finalized: true,
      coverImage: coverurl,
      createdAt: new Date().toISOString(),
    };

    await db.collection("interviews").add(interview);
    return Response.json({ success: true }, { status: 200 });
  } catch (error) {
    console.log("Error in POST request:", error);
    return Response.json(
      {
        success: false,
        error: "An error occurred while processing your request.",
      },
      { status: 500 }
    );
  }
}
