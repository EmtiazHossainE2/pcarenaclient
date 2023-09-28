import auth from "@/Firebase/firebase.init";
import RootLayout from "@/components/Layouts/RootLayout";
import { signIn } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";

const Login = () => {
  const img = "https://i.ibb.co/G3T7mwQ/onur-binay-4-Ykxp-t4i08-unsplash.jpg";
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const router = useRouter();
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    await signInWithEmailAndPassword(data.email, data.password);

    if (loading) {
      return <p>Loading...</p>;
    }
    if(!error){
      router.push("/");
    }
  };
  return (
    <div class="py-16 shadow-lg shadow-indigo-500/40">
       <Head>
        <title>Login Page</title>
        <meta name="description"
                    content="This page id Login Page for site" />
                <meta name="keywords"
                    content="HTML, CSS, JavaScript, NextJS" />
      </Head>
      <div class="shadow-lg shadow-cyan-500/50 flex bg-white rounded-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
        <div
          class="hidden md:block md:w-1/3 lg:w-1/2 bg-cover"
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: "fit",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        ></div>

        <div class="w-full p-8 md:w-2/3 lg:w-1/2">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h2 class="text-2xl font-semibold text-gray-700 text-center">
              PC ARENA
            </h2>
            <p class="text-xl text-gray-600 text-center">Welcome back!</p>
            <div
              
              class="flex cursor-pointer items-center justify-center mt-4 text-white rounded-lg shadow-md hover:bg-gray-100"
            >
              <div class="px-4 py-3">
                <svg class="h-6 w-6" viewBox="0 0 40 40">
                  <path
                    d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                    fill="#FFC107"
                  />
                  <path
                    d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                    fill="#FF3D00"
                  />
                  <path
                    d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                    fill="#4CAF50"
                  />
                  <path
                    d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                    fill="#1976D2"
                  />
                </svg>
              </div>
              <h1
                onClick={async () => {
                  await signIn("google", {
                    callbackUrl: "https://pcwebclient.vercel.app/",redirect: false 
                  });
                }}
                class="px-4 py-3 w-5/6 text-center text-gray-600 font-bold"
              >
                Sign in with Google
              </h1>
            </div>
            <div class="mt-4 flex items-center justify-between">
              <span class="border-b w-1/5 lg:w-1/4"></span>
              <div  class="text-xs text-center text-gray-500 uppercase">
                or login with email
              </div>
              <span class="border-b w-1/5 lg:w-1/4"></span>
            </div>
            <div class="mt-4">
              <div class="flex justify-between">
                <label class="block text-gray-700 text-sm font-bold mb-2">
                  Email Address
                </label>
                {/* <a href="#" class="text-xs text-gray-500">Forget Password?</a> */}
              </div>
              <div class="bg-white  rounded-lg">
                <div class="relative bg-inherit ">
                  <input
                    {...register("email", { required: true })}
                    required
                    type="email"
                    id="email"
                    name="email"
                    class="peer bg-transparent text-black h-auto w-full rounded-lg  placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none "
                    placeholder="Type inside me"
                  />
                  <label
                    for="email"
                    class="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all"
                  >
                    email hacking
                  </label>
                </div>
              </div>
            </div>
            <div class="mt-4">
              <div class="flex justify-between">
                <label class="block text-gray-700 text-sm font-bold mb-2">
                  Password
                </label>
                {/* <a href="#" class="text-xs text-gray-500">Forget Password?</a> */}
              </div>
              <div class="bg-white  rounded-lg">
                <div class="relative bg-inherit ">
                  <input
                    {...register("password", {
                      required: true,
                      minLength: { value: 6, message: "Min length is 6" },
                    })}
                    required
                    type="password"
                    id="password"
                    name="password"
                    class="peer bg-transparent text-black h-auto w-full rounded-lg  placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none "
                    placeholder="Type inside me"
                  />
                  <label
                    for="password"
                    class="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all"
                  >
                    password watching
                  </label>
                </div>
              </div>
            </div>
            <div class="mt-8">
              <button
                type="submit"
                class="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600"
              >
                Login
              </button>
            </div>
            {error && <p className="text-red-600">Error: {error.message}</p>}
            <div class="mt-4 flex items-center justify-between">
              <span class="border-b w-1/5 md:w-1/4"></span>
              <Link href="/signup" class="text-xs text-gray-500 uppercase">
                or sign up
              </Link>
              <span class="border-b w-1/5 md:w-1/4"></span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
Login.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
