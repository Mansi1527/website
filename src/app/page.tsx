import Image from "next/image";
import Hero from "./hero";
import { AnimatePresence } from "framer-motion";

export default function Home() {
  return (
    <div className="bg-gradient-to-br text-white from-pink-500 via-black to-pink-700 grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <AnimatePresence >
  
      <Hero/>
   
    </AnimatePresence>
    </div>
  );
}
