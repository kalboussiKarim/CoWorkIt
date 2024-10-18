"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useFormState } from "react-dom";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import createUser from "@/app/actions/createUser";

const RegisterPage = () => {
  const [state, formAction] = useFormState(createUser, {});
  const router = useRouter();

  useEffect(() => {
    if (state.error) toast.error(state.error);
    if (state.success) {
      toast.success("You can now log in !");
      router.push("/login");
    }
  }, [state]);
  return (
    <div className="flex items-center justify-center">
      <div className="bg-nav-bg border border-white/40 rounded-lg p-6 w-full max-w-sm mt-10">
        <form action={formAction}>
          <h2 className="text-3xl  text-center text-white mb-6">Register</h2>

          <div className="mb-4">
            <label htmlFor="name" className="block text-white  mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="border rounded w-full py-2 px-3 bg-input-bg text-white"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-white  mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="border rounded w-full py-2 px-3 bg-input-bg text-white"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-white  mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="border rounded w-full py-2 px-3 bg-input-bg text-white"
              required
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="confirm-password"
              className="block text-white  mb-1"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm-password"
              name="confirm-password"
              className="border rounded w-full py-2 px-3 bg-input-bg text-white"
              required
            />
          </div>

          <div className="flex flex-col gap-5 ">
            <button
              type="submit"
              className="bg-appwrite-light-pink text-white font-bold  px-4 py-2 rounded hover:bg-appwrite-dark-pink"
            >
              Register
            </button>
            <div className="flex justify-center">
              <p className="text-gray-400">
                Have an account?{"   "}
                <Link href="/login" className="text-appwrite-dark-pink">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
