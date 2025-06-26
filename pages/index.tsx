import { motion } from "framer-motion";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Linkedin, Dribbble, Github } from "lucide-react";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const [isHovered, setIsHovered] = useState(false);
  const [isAvatarHovered, setIsAvatarHovered] = useState(false);

  const iconVariants = {
    initial: {
      opacity: 0,
      scale: 0.5,
    },
    animate: (custom: { rotate: number }) => ({
      opacity: 1,
      scale: 1,
      rotate: isDesktop ? custom.rotate : 0,
    }),
    hover: {
      rotate: 0,
    },
  };

  const iconTransition = {
    duration: 0.2,
    ease: "easeOut",
  };

  return (
    <main className="min-h-screen bg-light-bg dark:bg-dark-bg text-gray-900 dark:text-white transition-colors duration-300">
      <ThemeToggle />

      <div className="max-w-[640px] mx-auto p-8 min-h-screen flex flex-col justify-center">
        <motion.div
          className="flex flex-col items-start gap-4 sm:flex-row sm:items-center mb-4"
          onHoverStart={() => setIsAvatarHovered(true)}
          onHoverEnd={() => setIsAvatarHovered(false)}
        >
          <motion.h3
            className="text-5xl font-bold font-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            Hi, I'm Charles
          </motion.h3>
          <motion.div
            className="w-12 h-12 rounded-sm shadow-lg sm:ml-4"
            initial={{ opacity: 0, scale: 0.5, rotate: 0 }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: isAvatarHovered ? 183 : 3,
            }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <Image
              src="/avatar.jpeg"
              alt="Charles Binet's avatar"
              width={48}
              height={48}
              className="rounded-sm"
            />
          </motion.div>
        </motion.div>

        <motion.p
          className="text-lg text-gray-600 dark:text-gray-300 mb-12"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          I build stuff.
        </motion.p>

        <motion.div
          className="flex flex-col items-start gap-4 sm:flex-row sm:items-center group"
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
        >
          <motion.p
            className="text-lg text-gray-600 dark:text-gray-300"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            You can find me here
          </motion.p>

          <motion.div
            className="flex items-center"
            variants={{
              animate: {
                transition: { staggerChildren: 0.1, delayChildren: 0.4 },
              },
            }}
            initial="initial"
            animate="animate"
          >
            <motion.a
              href="https://www.linkedin.com/in/charles-binet/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-sm flex items-center justify-center shadow-lg transition-all duration-200 ease-out 
                         mr-1 md:-mr-[3px] md:group-hover:mr-1"
              style={{ backgroundColor: "#0B66C2" }}
              custom={{ rotate: -3 }}
              variants={iconVariants}
              transition={iconTransition}
              animate={isHovered ? "hover" : "animate"}
            >
              <Linkedin className="w-6 h-6 text-white" />
            </motion.a>

            <motion.a
              href="https://dribbble.com/charles_b"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-sm flex items-center justify-center shadow-lg transition-all duration-200 ease-out
                         mx-1 md:-mx-[3px] md:group-hover:mx-1"
              style={{ backgroundColor: "#EA4C89" }}
              custom={{ rotate: 4 }}
              variants={iconVariants}
              transition={iconTransition}
              animate={isHovered ? "hover" : "animate"}
            >
              <Dribbble className="w-6 h-6 text-white" />
            </motion.a>

            <motion.a
              href="https://github.com/bibtor"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-sm flex items-center justify-center shadow-lg transition-all duration-200 ease-out
                         ml-1 md:-ml-[3px] md:group-hover:ml-1"
              style={{ backgroundColor: "#5C6BC0" }}
              custom={{ rotate: -2 }}
              variants={iconVariants}
              transition={iconTransition}
              animate={isHovered ? "hover" : "animate"}
            >
              <Github className="w-6 h-6 text-white" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}
