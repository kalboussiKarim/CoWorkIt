"use client";
import React from "react";
import Link from "next/link";
import { useFormState } from "react-dom";
import { useEffect } from "react";
import createSession from "../actions/createSession";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/authContext";

const LoginPage = () => {
  const [state, formAction] = useFormState(createSession, {});
  const router = useRouter();

  const { isAutheticated, setIsAuthenticated } = useAuth();

  useEffect(() => {
    if (state.error) toast.error(state.error);
    if (state.success) {
      setIsAuthenticated(true);
      toast.success("Logged in successfully !");
      router.push("/");
    }
  }, [state]);

  return (
    <div className="flex items-center justify-center">
      <div className="bg-nav-bg border border-white/40 shadow-lg rounded-lg p-6 w-full max-w-sm mt-20">
        <form action={formAction}>
          <h2 className="text-3xl  text-center text-white mb-6">Login</h2>

          <div className="mb-4">
            <label htmlFor="email" className="block text-white  mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="border  rounded w-full py-2 px-3 bg-input-bg text-white"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-white mb-1">
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

          <div className="flex flex-col gap-5">
            <button
              type="submit"
              className="bg-appwrite-light-pink text-white font-bold px-4 py-2 rounded hover:bg-appwrite-dark-pink"
            >
              Login
            </button>
            <div className="flex justify-center">
              <p className="text-gray-400">
                No account?{"   "}
                <Link href="/register" className="text-appwrite-dark-pink">
                  Register
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
