"use server";

import { auth, db } from "@/firebase/admin";
import { cookies } from "next/headers";

export async function signUp(params: SignUpParams) {
  const { uid, name, email } = params;
  try {
    const userRecord = await db.collection("users").doc(uid).get();
    if (userRecord.exists) {
      return {
        success: false,
        message: "User already exists. Please use a different email.",
      };
    }
    await db.collection("users").doc(uid).set({
      name,
      email,
    });
    return {
      success: true,
      message: "User created successfully. You can now sign in.",
    };
  } catch (error: any) {
    console.error("An error occurred during sign up:", error);
    if (error.code === "auth/email-already-in-use") {
      throw new Error("Email already in use. Please use a different email.");
    }
  }
  return {
    success: false,
    message: "Sign up failed. Please try again later.",
  };
}

export async function signIn(params: SignInParams) {
  const { email, idToken } = params;
  try {
    const userRecord = await auth.getUserByEmail(email);
    if (!userRecord) {
      throw new Error("User not found. Please sign up first.");
    }
    await setSessionCookie(idToken);
  } catch (error: any) {
    console.log(error);

    return {
      success: false,
      message: "Failed to log into account. Please try again.",
    };
  }
}

export async function setSessionCookie(idToken: string) {
  const oneWeek = 60 * 60 * 24 * 7 * 1000; // 1 week in milliseconds
  const cookieStore = await cookies();
  const sessionCookie = await auth.createSessionCookie(idToken, {
    expiresIn: oneWeek,
  });

  cookieStore.set("session", sessionCookie, {
    maxAge: oneWeek,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    sameSite: "lax",
  });
}

export async function getCurrentUser(): Promise<User | null> {
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get("session")?.value;
  if (!sessionCookie) return null;
  try {
    const decodedclaims = await auth.verifySessionCookie(sessionCookie, true);
    const userRecord = await db
      .collection("users")
      .doc(decodedclaims.uid)
      .get();
    if (!userRecord.exists) return null;
    return {
      ...userRecord.data(),
      id: userRecord.id,
    } as User;
  } catch (error: any) {
    console.log("Error getting current user:", error);
    return null;
  }
}

export async function isAuthenticated() {
  const user = await getCurrentUser();
  return !!user;
}

