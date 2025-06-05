"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "./ui/form";
import { Button } from "@/components/ui/button";
import Logo from "./Logo";
import Link from "next/link";
import { toast } from "sonner";
import CustomFormField from "./CustomFormField";
import { useRouter } from "next/navigation";

const authFormSchema = ({ type }: { type: "sign-in" | "sign-up" }) => {
  return z.object({
    name:
      type === "sign-up"
        ? z
            .string({
              required_error: "Name is required",
              invalid_type_error: "Name must be a string",
            })
            .min(2, { message: "Name must be at least 2 characters" })
            .max(30, { message: "Name must be at most 30 characters" })
        : z.string().optional(),

    email: z
      .string({ required_error: "Email is required" })
      .min(2, { message: "Email must be at least 2 characters" })
      .max(100, { message: "Email must be at most 100 characters" })
      .email({ message: "Please enter a valid email address" }),

    password: z
      .string({ required_error: "Password is required" })
      .min(6, { message: "Password must be at least 6 characters" })
      .max(100, { message: "Password must be at most 100 characters" }),
  });
};

const AuthForm = ({ type }: { type: FormType }) => {
  const router = useRouter();
  const formSchema = authFormSchema({ type });
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      if (type === "sign-up") {
        toast.success(
          "Your account has been created successfully! Please sign in."
        );
        router.push("/sign-in");
      } else {
        toast.success("You have signed in successfully!");
        router.push("/");
      }
    } catch (error) {
      console.log(error);
      toast.error(`An error occurred: ${error}`);
    }
  }

  const isSignIn = type === "sign-in";

  return (
    <div className="card-border lg:min-w-[566px]">
      <div className="flex flex-col gap-6 card py-14 px-10 items-center">
        <Logo />
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full space-y-6 mt-4 form"
          >
            {!isSignIn && (
              <CustomFormField
                control={form.control}
                name="name"
                label="Name"
                placeholder="Enter your name"
              />
            )}
            <CustomFormField
              control={form.control}
              name="email"
              label="Email"
              placeholder="Enter your email address"
            />
            <CustomFormField
              control={form.control}
              name="password"
              label="Password"
              placeholder="Enter your password"
              type="password"
            />
            <Button className="btn" type="submit">
              {isSignIn ? "Sign In" : "Sign Up"}
            </Button>
          </form>
          <p className="text-center">
            {isSignIn ? "Don't have an account?" : "Already have an account?"}
            <Link
              href={!isSignIn ? "/sign-in" : "/sign-up"}
              className="font-bold text-primary ml-1"
            >
              {!isSignIn ? "Sign In" : "Sign Up"}
            </Link>
          </p>
        </Form>
      </div>
    </div>
  );
};

export default AuthForm;
