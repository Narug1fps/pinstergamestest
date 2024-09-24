'use client'
import React from "react";
import {motion} from 'framer-motion'
import TypeIt from "typeit-react";

export default function Footer () {
	return (
		<>		

			<footer>
				<div className="bg-black h-48  items-center text-center   ">
					<motion.h1
					initial={{ scale: 0.1, opacity: 0 }}
					whileInView={{ scale: 1, opacity: 1}}
					transition={{ ease: "easeInOut", duration: 1.5}}
					 className="text-white text-lg md:text-xl pt-20">
						 <TypeIt
              options={{
                speed:150,
                waitUntilVisible:true,
                
              }}
getBeforeInit={(instance) => {
    instance.type(" Copyright © 2023").pause(1200).delete(1).pause(500).type("4, Codelabs & Pinster Studios.").pause(750).delete(27).pause(500).type(" DevWays & Pinster Games. All rights reserved. ")
  

    return instance;
  }} />

					</motion.h1>
				</div>
			</footer>

		</>
	);
}
