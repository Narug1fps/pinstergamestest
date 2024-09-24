"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import TypeIt from "typeit-react";

//TypeIt
export default function Cards() {
  return (
    <>
      <div className="bg-black">
        <section className=" grid grid-cols-1 gap-6 p-4 md:grid-cols-3 md:p-6">
          <motion.div
            initial={{ scale: 0.1, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 1.5 }}
          >
            {" "}
            <div className=" bg-white border-4 relative overflow-hidden transition-transform duration-300 ease-in-out rounded-lg  shadow-lg group hover:shadow-xl hover:-translate-y-2">
              <Image
                src="/1.png"
                alt="Product 1"
                width={500}
                height={400}
                className="object-cover w-full h-64"
                style={{ aspectRatio: "500/400", objectFit: "cover" }}
              />
              <div className="p-4 bg-background">
                <h3 className="text-3xl font-bold">
                  <TypeIt
                    options={{
                      strings: ["Pistas"],
                      speed: 150,
                      waitUntilVisible: true,
                    }}
                  />
                </h3>
                <p className="text-lg text-muted-foreground">
                  {" "}
                  <TypeIt
                    options={{
                      speed: 50,
                      waitUntilVisible: true,
                      delay: true,
                    }}
                    getBeforeInit={(instance) => {
                      instance
                        .type("Descubra todos os mistérios")
                        .pause(750)
                        .delete(27)
                        .pause(500)
                        .type(
                          "Encontre todas as pistas e descubra toda a história"
                        )
                        .pause(1200)
                        .delete(24)
                        .pause(500)
                        .type("use-as para descobrir mais sobre o caso.");

                      return instance;
                    }}
                  />
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ scale: 0.1, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 1.5, delay: 11 }}
          >
            <div className="bg-white border-4 relative overflow-hidden transition-transform duration-300 ease-in-out rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2">
              <Image
                src="/2.png"
                alt="Product 2"
                width={500}
                height={400}
                className="object-cover w-full h-64"
                style={{ aspectRatio: "500/400", objectFit: "cover" }}
              />
              <div className="p-4 bg-background">
                <h3 className="text-3xl font-bold">
                  <TypeIt
                    options={{
                      strings: ["Itens"],
                      speed: 150,
                      waitUntilVisible: true,
                    }}
                  />
                </h3>
                <p className="text-lg text-muted-foreground">
                  <TypeIt
                    options={{
                      speed: 50,
                      waitUntilVisible: true,
                      delay: true,
                    }}
                    getBeforeInit={(instance) => {
                      instance
                        .type("Use sua Luz negra, para descobrir detalhes escondido.")
                        .pause(750)
                        .delete(53)
                        .pause(500)
                        .type(
                          "E use sua câmera para ver pistas menores."
                        )
                

                      return instance;
                    }}
                  />
                 
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ scale: 0.1, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 1.5, delay: 18 }}
          >
            <div className="bg-white border-4 relative overflow-hidden transition-transform duration-300 ease-in-out rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2">
              <Image
                src="/3.png"
                alt="Product 3"
                width={500}
                height={400}
                className="object-cover w-full h-64"
                style={{ aspectRatio: "500/400", objectFit: "cover" }}
              />
              <div className="p-4 bg-background">
                <h3 className="text-3xl font-bold">
                  <TypeIt
                    options={{
                      strings: ["Prancheta"],
                      speed: 150,
                      waitUntilVisible: true,
                    }}
                  />
                </h3>
                <p className="text-lg text-muted-foreground">
                  Responda todas perguntas feitas em sua prancheta para
                  progredir.
                </p>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
      <div className="w-full h-1 bg-gradient-to-r from-black via-red-600  via-red-600 via-red-600 to-black"></div>
    </>
  );
}
