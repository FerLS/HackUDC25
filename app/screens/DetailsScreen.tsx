import { motion } from "framer-motion";
import type { JournalEntry } from "@/types/types";
import { code } from "@/fonts/fonts";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";

export default function DetailsScreen({
  entry,
  close,
}: {
  entry: typeof JournalEntry;
  close: Function;
}) {
  return (
    <motion.div
      className="w-full h-full bg-background absolute top-0 justify-start  flex-col flex overflow-scroll "
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.2, delay: 0.1 } }}
      exit={{ opacity: 0, y: 40 }}
    >
      <div className="flex justify-between p-5 items-center w-full  ">
        <Image
          src="/bg-1.png"
          alt="BG"
          fill
          style={{ objectFit: "cover" }}
          className=" -z-10"
        ></Image>
        <motion.button
          initial={{ opacity: 0, y: -50 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.2, delay: 0.2 },
          }}
          exit={{ opacity: 0, y: -50 }}
          className="flex"
        >
          <Button
            size={"icon"}
            className={`bg-background p-5 w-fit  rounded-full justify-start  text-white `}
            onClick={() => close()}
          >
            <ArrowLeft className="min-w-6 min-h-6 stroke-primary" />

            <p>Atras</p>
          </Button>
        </motion.button>

        <p className="text-3xl font-bold text-black text-end">{entry.title}</p>
      </div>
      <div className="w-full p-5 flex flex-col flex-1 justify-end   ">
        <p className="italic text-right w-full  text-xl self-start">
          {new Date(entry.date).toLocaleDateString()}
        </p>
      </div>

      <motion.div
        className="w-full bg-primary h-fit	 rounded-t-[2rem] p-5 space-y-5 shadow-[0_-10px_20px_rgba(0,0,0,0.2)]"
        initial={{ opacity: 0, y: 40 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.2, delay: 0.3 },
        }}
      >
        <motion.div
          className="w-full  bg-chart-2  p-5  space-y-2 rounded-3xl flex flex-col "
          initial={{ opacity: 0, y: 40 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.2, delay: 0.4 },
          }}
        >
          <p
            className="text-3xl font-bold "
            style={{ fontFamily: code.style.fontFamily }}
          >
            Advice
          </p>
          <p className="text-lg  w-full flex-1 text-start align-top ">
            {entry.advice}
          </p>
        </motion.div>
        <div className="flex w-full space-x-5 ">
          <motion.div
            className="aspect-square w-full justify-between space-y-5 "
            initial={{ opacity: 0, y: 40 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.2, delay: 0.5 },
            }}
          >
            <p className="font-semibold text-black text-3xl">
              Emocion mas Frecuente
            </p>
            <p className="w-full  text-xl bg-secondary   rounded-full flex flex-col text-center p-5">
              {entry.emotion}
            </p>
          </motion.div>
          <motion.div
            className="w-full  bg-secondary   rounded-3xl flex flex-col p-5"
            initial={{ opacity: 0, y: 40 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.2, delay: 0.6 },
            }}
          >
            <ul className="list-disc p-5 space-y-2 text-center">
              {entry.bulletpoints.slice(0, 2).map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          className="w-full  flex flex-col space-y-5 "
          initial={{ opacity: 0, y: 40 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.2, delay: 0.7 },
          }}
        >
          <p className="font-bold text-black  text-2xl text-end">
            {" "}
            Resumen del dia
          </p>
          <p className="text-start align-top text-black text-lg">
            {" "}
            {entry.summary}
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
