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
  const [isMinesquadHovered, setIsMinesquadHovered] = useState(false);
  const [isWorkHovered, setIsWorkHovered] = useState(false);

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
          className="flex flex-col items-start gap-4 sm:flex-row sm:items-center mb-12"
          onHoverStart={() => setIsAvatarHovered(true)}
          onHoverEnd={() => setIsAvatarHovered(false)}
        >
          <motion.p
            className="text-lg text-gray-600 dark:text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            Hi, I'm Charles
          </motion.p>
          <motion.div
            className="w-12 h-12 rounded-full shadow-lg sm:ml-4"
            initial={{ opacity: 0, scale: 0.5, rotate: 0 }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: isAvatarHovered ? 183 : 3,
            }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <Image
              src="/avatar.jpeg"
              alt="Charles Binet's avatar"
              width={48}
              height={48}
              className="rounded-full"
            />
          </motion.div>
        </motion.div>

        <motion.div
          className="flex flex-col items-start gap-4 sm:flex-row sm:items-center mb-12"
          onHoverStart={() => setIsMinesquadHovered(true)}
          onHoverEnd={() => setIsMinesquadHovered(false)}
        >
          <motion.p
            className="text-lg text-gray-600 dark:text-gray-300"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            I build stuff.
          </motion.p>
          <motion.div
            className="w-12 h-12 rounded-xl shadow-lg sm:ml-4"
            initial={{ opacity: 0, scale: 0.5, rotate: 0 }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: isMinesquadHovered ? 0 : -3,
            }}
            transition={{ duration: 0.1, ease: "easeInOut" }}
          >
            <Image
              src="/minesquad.png"
              alt="Minesquad"
              width={48}
              height={48}
              className="rounded-xl"
            />
          </motion.div>
        </motion.div>

        <motion.div
          className="flex flex-col items-start gap-4 sm:flex-row sm:items-center mb-12 group"
          onHoverStart={() => setIsWorkHovered(true)}
          onHoverEnd={() => setIsWorkHovered(false)}
        >
          <motion.p
            className="text-lg text-gray-600 dark:text-gray-300"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            I head(ed) product & design at
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
            <motion.div
              className="w-12 h-12 rounded-md shadow-lg transition-all duration-100 ease-out 
                         mr-1 md:-mr-[3px] md:group-hover:mr-1"
              custom={{ rotate: 4 }}
              variants={iconVariants}
              transition={iconTransition}
              animate={isWorkHovered ? "hover" : "animate"}
            >
              <Image
                src="/depict.jpg"
                alt="Depict"
                width={48}
                height={48}
                className="rounded-md"
              />
            </motion.div>

            <motion.div
              className="w-12 h-12 rounded-md shadow-lg transition-all duration-100 ease-out
                         mx-1 md:-mx-[3px] md:group-hover:mx-1"
              custom={{ rotate: -2 }}
              variants={iconVariants}
              transition={iconTransition}
              animate={isWorkHovered ? "hover" : "animate"}
            >
              <Image
                src="/validio.png"
                alt="Validio"
                width={48}
                height={48}
                className="rounded-md"
              />
            </motion.div>

            <motion.div
              className="w-12 h-12 rounded-md flex items-center justify-center shadow-lg transition-all duration-100 ease-out
                         mx-1 md:-mx-[3px] md:group-hover:mx-1"
              style={{ backgroundColor: "#CE4129" }}
              custom={{ rotate: -3 }}
              variants={iconVariants}
              transition={iconTransition}
              animate={isWorkHovered ? "hover" : "animate"}
            >
              <Image
                src="/curb.png"
                alt="Curb"
                width={32}
                height={32}
                className="rounded-sm"
              />
            </motion.div>

            <motion.div
              className="w-12 h-12 rounded-md shadow-lg transition-all duration-100 ease-out
                         ml-1 md:-ml-[3px] md:group-hover:ml-1"
              custom={{ rotate: 2 }}
              variants={iconVariants}
              transition={iconTransition}
              animate={isWorkHovered ? "hover" : "animate"}
            >
              <Image
                src="/zettle.png"
                alt="Zettle"
                width={48}
                height={48}
                className="rounded-md"
              />
            </motion.div>
          </motion.div>
        </motion.div>

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
            Find me here
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
              className="w-12 h-12 rounded-sm flex items-center justify-center shadow-lg transition-all duration-100 ease-out 
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
              className="w-12 h-12 rounded-sm flex items-center justify-center shadow-lg transition-all duration-100 ease-out
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
              className="w-12 h-12 rounded-sm flex items-center justify-center shadow-lg transition-all duration-100 ease-out
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
