"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { UserRegisterInput } from "../api/register/types";
import { userRegiterSchema } from "@/schemas/user.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useApi } from "@/providers/apiProvider";
import Cookie from "js-cookie";
import { cookieKeys } from "@/config/cookies.config";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UserRegisterInput>({
    mode: "onSubmit",
    shouldFocusError: true,
    resolver: zodResolver(userRegiterSchema),
  });

  const [isLoading, setIsLoading] = useState(false);
  const { apiClient } = useApi();
  const router = useRouter();

  return (
    <form
      onSubmit={handleSubmit(async (userData) => {
        try {
          setIsLoading(true);
          const { data: user } = await apiClient.post("register", userData);
          const token = user.token;

          Cookie.set(cookieKeys.USER_TOKEN, token);
          console.log({ user });
          reset();

          router.push("/");
        } catch (error) {
          console.log({ error });
        } finally {
          setIsLoading(false);
        }
      })}
      className="w-full mb-10"
    >
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col gap-1 mb-5">
          <h1 className="text-gray-900 text-bold text-3xl md:text-4xl text-center">
            Create an Account
          </h1>
          <p className="text-sm text-center text-gray-500">
            Sign up, sip in style daily
          </p>
        </div>
        <div className="w-full max-w-xs space-y-2">
          {/*firstName*/}
          <div className="flex flex-col">
            <label htmlFor="firstName" className="text-sm text-gray-900 mb-1">
              First Name
            </label>

            <input
              type="text"
              placeholder="enter the first name"
              className={`p-[0.18rem] pl-2 bg-white border-1 border-gray-400 text-md rounded-md outline-none placeholder:text-sm ${
                errors.firstName
                  ? "border-red-500 focus:ring-1 focus:ring-red-500 "
                  : "border-gray-400 focus:ring-2 focus:ring-gray-900 "
              }`}
              {...register("firstName")}
            />

            {errors.firstName && (
              <p className="text-red-500 text-[0.7rem]">
                {errors.firstName.message}
              </p>
            )}
          </div>

          {/*lastName*/}
          <div className="flex flex-col">
            <label htmlFor="lastName" className="text-sm text-gray-900 mb-1">
              Last Name
            </label>

            <input
              type="text"
              placeholder="enter the last name"
              className={`p-[0.18rem] pl-2 bg-white border border-gray-400 text-md rounded-md outline-none placeholder:text-sm ${
                errors.lastName
                  ? "border-red-500 focus:ring-1 focus:ring-red-500"
                  : "border-gray-200 focus:ring-2 focus:ring-gray-900"
              }`}
              {...register("lastName")}
            />

            {errors.lastName && (
              <p className="text-red-500 text-[0.7rem]">
                {errors.lastName.message}
              </p>
            )}
          </div>

          {/*email*/}
          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm text-gray-900 mb-1">
              Email
            </label>

            <input
              type="email"
              placeholder="enter the email"
              className={`p-[0.18rem] pl-2 bg-white border border-gray-400 text-md rounded-md outline-none placeholder:text-sm ${
                errors.email
                  ? "border-red-500 focus:ring-1 focus:ring-red-500"
                  : "border-gray-200 focus:ring-2 focus:ring-gray-900"
              }`}
              {...register("email")}
            />

            {errors.email && (
              <p className="text-red-500 text-[0.7rem]">
                {errors.email.message}
              </p>
            )}
          </div>

          {/*password*/}
          <div className="flex flex-col">
            <label htmlFor="password" className="text-sm text-gray-900 mb-1">
              Password
            </label>

            <input
              type="password"
              placeholder="enter the password"
              className={`p-[0.18rem] pl-2 bg-white border border-gray-400 text-md rounded-md outline-none placeholder:text-sm ${
                errors.password
                  ? "border-red-500 focus:ring-1 focus:ring-red-500"
                  : "border-gray-200 focus:ring-2 focus:ring-gray-900"
              }`}
              {...register("password")}
            />

            {errors.password && (
              <p className="text-red-500 text-[0.7rem]">
                {errors.password.message}
              </p>
            )}
          </div>

          <button
            className="w-full mt-2 px-2 py-[0.395rem] text-white bg-gradient-to-r border-1 border-gray-300 from-gray-900 via-gray-600 to-gray-900 rounded-md hover:-translate-y-0.5 cursor-pointer"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? "registering..." : "Register"}
          </button>

          {/*line*/}
          <div className="flex items-center mt-1">
            <hr className="flex-grow border-t border-gray-300" />
            <span className="px-3 text-xs text-gray-500">Or Register With</span>
            <hr className="flex-grow border-t border-gray-300" />
          </div>

          {/*connect with buttons*/}
          <div className="w-full flex items-center space-x-2 mt-2">
            <button className="flex w-1/2 items-center justify-center gap-2 bg-gray-100 p-1 rounded-md hover:scale-102 cursor-pointer">
              <FcGoogle />
              <p>Google</p>
            </button>
            <button className="flex w-1/2 items-center justify-center gap-2 bg-gray-100 p-1 rounded-md hover:scale-102 cursor-pointer">
              <FaApple />
              <p>Apple</p>
            </button>
          </div>

          <div className="flex justify-center">
            <p className="text-xs text-gray-500">
              Already Have An Account?{" "}
              <span className="text-blue-500 cursor-pointer">
                <a onClick={() => router.push("/login")}>Login</a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </form>
  );
};

export default RegisterForm;

{
  /*
          <button
            className="bg-gray-900 p-[0.7] rounded-2xl overflow-hidden w-full"
            type="submit"
            disabled={isLoading}
          >
            <div
              className="relative bg-white/5 px-4 py-2 text-white rounded-2xl border border-white/10
                  before:absolute before:inset-0.5 before:rounded-2xl before:border-t before:border-white/20"
            >
              {isLoading ? "registering..." : "Register"}
            </div>
          </button>
    */
}
