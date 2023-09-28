import React from "react";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { SiValorant, SiFifa } from "react-icons/si";
import { useSession, signOut } from "next-auth/react";

import Link from "next/link";
import Image from "next/image";
import auth from "@/Firebase/firebase.init";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [user, loading, error] = useAuthState(auth);
  const [FireSignOut, signoutloading, signouterror] = useSignOut(auth);
  console.log(session?.user, user);
  const itemNames = [
    "CPU",
    "RAM",
    "MOTHERBOARD",
    "MONITOR",
    "PSU",
    "ROM",
    "CASING",
    "CPU COOLER",
    "GPU",
    "KEYBOARD",
    "MOUSE",
    "SPEAKER",
    "SSD",
    "UPS",
  ];
  return (
    <div className="px-[5%]">
      <Navbar className=" bg-gray-600 w-full ">
        <Link className="flex mx-auto md:mx-0 mb-2 md:mb-0" href="/">
          <Image
            width={30}
            height={30}
            alt="PC Arena LOgoo"
            className="mr-3 h-6 sm:h-9 rounded-full"
            src="https://i.ibb.co/YDkdhf5/logo.png"
          ></Image>
          <span className="self-center whitespace-nowrap text-xl font-bold text-white">
            Pc Arena
          </span>
        </Link>
        <div className="flex mx-auto md:mx-0">
        <Link
                href="/pcbuilder"
                class="relative inline-flex items-center justify-center px-3 py-2 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group"
              >
                <span class="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-purple-600 rounded-md group-hover:mt-0 group-hover:ml-0"></span>
                <span class="absolute inset-0 w-full h-full bg-white rounded-md "></span>
                <span class="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-purple-600 rounded-md opacity-0 group-hover:opacity-100 "></span>
                <span class="relative text-purple-600 transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">
                 Pc Build
                </span>
              </Link>
          <Dropdown
            inline
            label={
              <div class="relative font-bold inline-flex items-center justify-start py-3 pl-3 pr-9 overflow-hidden text-indigo-600 transition-all duration-150 ease-in-out  me-3 rounded hover:pl-10 hover:pr-6 ml-4 md:ml-4 bg-gray-50 group">
                <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
                <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                  <svg
                    class="w-5 h-5 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                  <svg
                    class="w-5 h-5 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white ">
                  Category
                </span>
              </div>
            }
            className="w-[90%]   bg-gray-600 border-black shadow-md"
            arrowIcon={false}
          >
            {/* <Dropdown.Header className=''>
            <span className="block text-sm">
              Bonnie Green
            </span>
            <span className="block truncate my-0 text-sm font-medium">
              name@flowbite.com
            </span>
          </Dropdown.Header> */}
            <Dropdown.Item className="grid text-center  font-mono font-semibold text-white grid-cols-2 hover:bg-gray-600 focus:bg-gray-600 ">
              {itemNames.map((category) => (
              <p  key={category}>  <Link
              className="hover:text-cyan-400   font-mono font-semibold"
             
              href={`/category/${category}`}
            >{category}</Link></p>
              ))}
            </Dropdown.Item>
            {/*   <Dropdown.Divider  />
          <Dropdown.Item>
            Settings
          </Dropdown.Item>
          <Dropdown.Item>
            Earnings
          </Dropdown.Item>
          <Dropdown.Divider  />
          <Dropdown.Item>
            Sign out
          </Dropdown.Item> */}
          </Dropdown>
          {/* //login */}
          <div>
            {session?.user || user ? (
              <div
                onClick={async () => {
                  if (session?.user) {
                    await signOut({ redirect: false });
                  } else {
                    await FireSignOut(auth);
                  }
                  router.push("/");
                }}
                class="relative cursor-pointer inline-flex items-center justify-center px-3 py-2 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group"
              >
                <span class="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-purple-600 rounded-md group-hover:mt-0 group-hover:ml-0"></span>
                <span class="absolute inset-0 w-full h-full bg-white rounded-md "></span>
                <span class="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-purple-600 rounded-md opacity-0 group-hover:opacity-100 "></span>
                <span class="relative text-purple-600 transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">
                  Logout
                </span>
              </div>
            ) : (
              <Link
                href="/login"
                class="relative inline-flex items-center justify-center px-3 py-2 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group"
              >
                <span class="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-purple-600 rounded-md group-hover:mt-0 group-hover:ml-0"></span>
                <span class="absolute inset-0 w-full h-full bg-white rounded-md "></span>
                <span class="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-purple-600 rounded-md opacity-0 group-hover:opacity-100 "></span>
                <span class="relative text-purple-600 transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">
                  Login
                </span>
              </Link>
            )}
          </div>
          {/* <Navbar.Toggle
            className="bg-red-800 text-black ml-3 rounded-full"
            barIcon={SiValorant}
          /> */}
        </div>
        {/* <Navbar.Collapse>
          <Navbar.Link title="arafat" href="#">
            <p>Home</p>
          </Navbar.Link>
          <Link href="/login">Login</Link>
          <Navbar.Link href="#">Services</Navbar.Link>
          <Navbar.Link href="#">Pricing</Navbar.Link>
          <Navbar.Link href="#">Contact</Navbar.Link>
        </Navbar.Collapse> */}
      </Navbar>
    </div>
  );
};

export default Header;
