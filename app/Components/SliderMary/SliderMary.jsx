"use client";
import React from "react";
//These are Third party packages for smooth slideshow
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import {motion} from 'framer-motion'

const SliderMary = () => {
	//Array of Images
	const images = [
		"/images/1.png",
		"/images/2.png",
		"/images/3.png",
		"/images/4.png",
		"/images/5.png",
		"/images/6.png",
		"/images/7.png",
		"/images/8.png",
	];

	//These are custom properties for zoom effect while slide-show
	const zoomInProperties = {
		scale: 1,
		duration: 3000,
		transitionDuration: 300,
		infinite: true,
		prevArrow: (
			<motion.div
			initial={{ x:-500, opacity:0 }}
			animate={{x:0, opacity:1}}
			transition={{ease: "easeInOut", duration: 2}}
			className="ml-10 top-40 md:top-72">
				<ArrowLeftIcon className="h-8 w-8 text-white cursor-pointer" />
			</motion.div>
		),
		nextArrow: (
			<motion.div 
			initial={{ x:500, opacity:0 }}
			animate={{x:0, opacity:1}}
			transition={{ease: "easeInOut", duration: 2}}
			className="mr-10 top-40 md:top-72">
				<ArrowRightIcon className="h-8 w-8 text-white cursor-pointer" />
			</motion.div>
		),
	};
	return (
		<div className="w-xl h-xl md:h-screen justify-center items-center   ">
			<Zoom {...zoomInProperties}>
				{images.map((each, index) => (
					<div
						key={index}
						className="flex justify-center md:items-center items-start w-screen h-xl md:h-screen relative"
					>
						<Image className="w-screen" src={each} alt="" width={1920} height={1080}/>
						<div className=" absolute flex top-3/4 gap-2 md:gap-10  ">
						<motion.div
        		initial={{ scale: 0.1, opacity: 0 }}
            animate={{ scale: 1,  opacity: 1}}
            transition={{ ease: "easeInOut", duration: 2 }}>							<button className="  text-center z-10 bg-red-600 md:w-48 md:h-12 w-28 h-8   rounded-full  md:text-2xl text-lg text-md bold text-white hover:bg-white hover:text-red-600 duration-300 ">
								<Link
									href="https://store.steampowered.com/app/3057080/Mary_Demo/"
									className="hover:text-red-600 duration-300"
								>
									Get Demo{""}
								</Link>
							</button>
							</motion.div>
							<motion.div
        		initial={{ scale: 0.1, opacity: 0 }}
            animate={{ scale: 1,  opacity: 1}}
            transition={{ ease: "easeInOut", duration: 2 }}>	
							<button className="    text-center z-10 bg-red-600 md:w-48 md:h-12 w-28 h-8   rounded-full  md:text-2xl text-lg text-md bold text-white hover:bg-white hover:text-red-600 duration-300 ">
								<Link
									href="https://store.steampowered.com/news/app/3017570"
									className="hover:text-red-600 duration-300"
								>
									Mary News{""}
								</Link>
							</button>
							</motion.div>
						</div>
					</div>
				))}
			</Zoom>
		</div>
	);
};

export default SliderMary;
