"use client";

import { motion } from "framer-motion";

import {
  SiNextdotjs,
  SiLaravel,
  SiTypescript,
  SiReact,
} from "react-icons/si";

import {
  FaDatabase,
  FaCode,
} from "react-icons/fa";


export default function Hero() {
  return (
    <section
      className="
        min-h-screen
        flex
        flex-col
        justify-center
        items-center
        text-center
        px-6
        relative
        overflow-hidden
      "
    >

      {/* Label */}

      <motion.p
        initial={{
          opacity: 0,
          y: -20,
        }}

        animate={{
          opacity: 1,
          y: 0,
        }}

        transition={{
          duration: 0.6,
        }}

        className="
          uppercase
          tracking-[0.35em]
          text-violet-400
          mb-6
          text-sm
        "
      >
        Full Stack Developer
      </motion.p>



      {/* Main Title */}

      <motion.h1

        initial={{
          opacity: 0,
          y: -40,
        }}

        animate={{
          opacity: 1,
          y: 0,
        }}

        transition={{
          duration: 0.8,
        }}

        className="
          text-6xl
          md:text-7xl
          lg:text-8xl
          font-black
          leading-[0.95]
          max-w-6xl
        "
      >

        Building

        <span
          className="
            block
            bg-gradient-to-r
            from-violet-400
            via-fuchsia-400
            to-cyan-400
            bg-clip-text
            text-transparent
          "
        >
          Modern Web Apps
        </span>

        &
        <span>
          {" "}
          Automation Systems
        </span>

      </motion.h1>



      {/* Description */}

      <motion.p

        initial={{
          opacity: 0,
        }}

        animate={{
          opacity: 1,
        }}

        transition={{
          delay: 0.3,
          duration: 0.8,
        }}

        className="
          text-zinc-400
          text-xl
          max-w-3xl
          mt-8
          leading-relaxed
        "
      >

        I build scalable digital experiences using
        Next.js, Laravel, TypeScript, APIs,
        and engineering-focused workflows.

      </motion.p>



      {/* Buttons */}

      <motion.div

        initial={{
          opacity: 0,
          y: 20,
        }}

        animate={{
          opacity: 1,
          y: 0,
        }}

        transition={{
          delay: 0.5,
        }}

        className="
          flex
          gap-4
          mt-10
          flex-wrap
          justify-center
        "
      >

        <a
          href="/projects"

          className="
            px-8
            py-4
            rounded-full
            bg-white
            text-black
            font-semibold
            transition
            hover:scale-105
          "
        >
          View Projects
        </a>


        <a
          href="/contact"

          className="
            px-8
            py-4
            rounded-full
            border
            border-white/20
            bg-white/5
            backdrop-blur-xl
            transition
            hover:bg-white
            hover:text-black
            hover:scale-105
          "
        >
          Contact Me
        </a>


      </motion.div>




      {/* Floating Technology Capsule */}

      <motion.div

        initial={{
          opacity: 0,
          y: 40,
        }}

        animate={{
          opacity: 1,
          y: [0, -8, 0],
        }}

        transition={{
          opacity: {
            delay: 0.8,
            duration: 0.8,
          },

          y: {
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}

        className="
          mt-16
          flex
          items-center
          gap-5
          px-8
          py-5
          rounded-full
          border
          border-white/10
          bg-white/5
          backdrop-blur-2xl
          shadow-[0_0_50px_rgba(139,92,246,.15)]
        "
      >

        <SiNextdotjs
          className="
            text-3xl
            text-white
          "
        />


        <SiReact
          className="
            text-3xl
            text-cyan-300
          "
        />


        <SiTypescript
          className="
            text-3xl
            text-blue-400
          "
        />


        <SiLaravel
          className="
            text-3xl
            text-red-400
          "
        />


        <FaDatabase
          className="
            text-2xl
            text-violet-300
          "
        />


        <FaCode
          className="
            text-2xl
            text-white
          "
        />

      </motion.div>


    </section>
  );
}