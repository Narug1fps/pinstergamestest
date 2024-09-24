"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {motion} from 'framer-motion'

const Header = () => {
  const [isClick, setisClick] = useState(false);

  const toogleNavbar = () => {
    setisClick(!isClick);
  };
  return (
    <>
   
      <nav className="bg-opacity-0 backdrop-blur-3xl   z-10   ">
        {"DevWays Forever"}
  
      
          <div className="max-w-7xl mx-auto  px-4 sm:px-6 lg:px-8">
            <div className="flex items center justify-between h-16">
            <motion.div
        		initial={{ x: -500, opacity: 0 }}
            animate={{ x: 0, opacity: 1}}
            transition={{ ease: "easeInOut", duration: 1.9 }}>
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="">
                    <div className="-mt-8">
                      <Image
                        src="/Logo (1).png"
                        alt=""
                        width={100}
                        height={100}
                      />
                    </div>
                  </div>
        </div>
      </div>
        </motion.div>
        <motion.div
        	initial={{ x: 500, opacity: 0 }}
          animate={{ x: 0, opacity: 1}}
          transition={{ ease: "easeInOut", duration: 2 }}
        >
            <div className="hidden md:block">
        <div className="ml-4 fkex items-center space-x-4 ">

      <Link
                  href="/Home"
                  className="duration-500 text-white hover:bg-white hover:text-black rounded-lg p-2 "
                >
                  Home
                </Link>

                <a
                  href="https://www.youtube.com/@pinstergms"
                  target="_blank"
                  className=" duration-500 text-white hover:bg-white hover:text-black rounded-lg p-2"
                >
                  Youtube
                </a>
     
                <a
                  href="https://discord.gg/MAJBHKXAHH"
                  target="_blank"
                  className="duration-500 text-white hover:bg-white hover:text-black rounded-lg p-2"
                >
                  Discord
                </a>
         
                <Link
                  href="/Games"
                  className="duration-500 text-white  hover:bg-white hover:text-black rounded-lg p-2"
                >
                  Games
                </Link>

                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://store.steampowered.com/app/3017570/Mary"
                  className="duration-500 bg-red-600  text-white hover:bg-white hover:text-black rounded-lg p-2"
                >
                  Play Now!
                </a>
               
              </div>
            </div>
            </motion.div>
     
            <div className="md:hidden flex items-center duration-1000 ">
            <motion.div
        		initial={{ x: 500, opacity: 0 }}
           animate={{ x: 0, opacity: 1}}
            transition={{ ease: "easeInOut", duration: 2 }}>       <button
                className=" duration-1000  inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                onClick={toogleNavbar}
              > 
                {isClick ? (
                <svg
                    className=" duration-1000 h-6 0 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  
                ) : (
                  <svg
                    className=" duration-1000 h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                )}
              </button>
              </motion.div>
            </div>
            </div>
            </div>
        <div className="w-full h-1 bg-gradient-to-r from-black via-red-600  via-red-600 via-red-600 to-black"></div>
     {isClick && (
         <motion.div
         initial={{ x: -500, opacity: 0 }}
        animate={{ x: 0, opacity: 1}}
         transition={{ ease: "easeInOut", duration: 2 }}>        <div className="md:hidden duration-1000 ">
            
            <div className=" bg-black px-2 pt-2 pb-3 space-y-1 sm:px-3 duration-1000 ">
              <Link
                href="/Home"
                className=" duration-500 text-white hover:bg-white hover:text-black rounded-lg p-2 block"
              >
                Home
              </Link>
              <a
                href="https://www.youtube.com/@pinstergms"
                target="_blank"
                className=" duration-500 text-white hover:bg-white hover:text-black rounded-lg p-2 block"
              >
                Youtube
              </a>
              <a
                href="https://discord.gg/MAJBHKXAHH"
                target="_blank"
                className=" duration-500 text-white hover:bg-white hover:text-black rounded-lg p-2 block"
              >
                Discord
              </a>
              <Link
                href="/Games"
                className=" duration-500 text-white hover:bg-white hover:text-black rounded-lg p-2 block"
              >
                Games
              </Link>
              <a
                href="https://store.steampowered.com/app/3017570/Mary"
                className=" bg-red-600 duration-500 text-white hover:bg-white hover:text-black rounded-lg p-2 block"
              >
                Play Now!
              </a>
            </div>
          </div>
          </motion.div>
      
        )}
      </nav>
    </>
  );
};

export default Header;
