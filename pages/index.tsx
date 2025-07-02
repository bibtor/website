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

  // Tooltip states for individual icons
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);

  // Email interaction states
  const [isEmailRevealed, setIsEmailRevealed] = useState(false);
  const [isEmailCopied, setIsEmailCopied] = useState(false);
  const [isEmailHovered, setIsEmailHovered] = useState(false);

  const handleEmailClick = async () => {
    if (!isDesktop && !isEmailRevealed) {
      // Mobile: first tap reveals email
      setIsEmailRevealed(true);
    } else {
      // Desktop click or mobile second tap: copy to clipboard
      try {
        await navigator.clipboard.writeText("charlesbinet@proton.me");
        setIsEmailCopied(true);
        setTimeout(() => setIsEmailCopied(false), 2000);
      } catch (err) {
        console.error("Failed to copy email:", err);
      }
    }
  };

  const handleEmailHover = () => {
    if (isDesktop) {
      setIsEmailRevealed(true);
      setIsEmailHovered(true);
    }
  };

  const handleEmailLeave = () => {
    if (isDesktop) {
      setIsEmailHovered(false);
      setIsEmailRevealed(false);
    }
  };

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
            className="w-12 h-12 rounded-full shadow-lg sm:ml-4 relative"
            initial={{ opacity: 0, scale: 0.5, rotate: 0 }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: isAvatarHovered ? 183 : 3,
            }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            onHoverStart={() => setHoveredIcon("avatar")}
            onHoverEnd={() => setHoveredIcon(null)}
          >
            <Image
              src="/avatar.jpeg"
              alt="Charles Binet's avatar"
              width={48}
              height={48}
              className="rounded-full"
            />
            {hoveredIcon === "avatar" && (
              <div
                className="absolute -top-10 left-1/2 transform -translate-x-1/2 
                             bg-dark-bg dark:bg-light-bg text-light-bg dark:text-dark-bg
                             px-2 py-1 rounded text-sm whitespace-nowrap z-10"
              >
                Heyyy!
              </div>
            )}
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
            className="w-12 h-12 rounded-xl shadow-lg sm:ml-4 relative"
            initial={{ opacity: 0, scale: 0.5, rotate: 0 }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: isMinesquadHovered ? 0 : -3,
            }}
            transition={{ duration: 0.1, ease: "easeInOut" }}
            onHoverStart={() => setHoveredIcon("minesquad")}
            onHoverEnd={() => setHoveredIcon(null)}
          >
            <Image
              src="/minesquad.png"
              alt="Minesquad"
              width={48}
              height={48}
              className="rounded-xl"
            />
            {hoveredIcon === "minesquad" && (
              <div
                className="absolute -top-10 left-1/2 transform -translate-x-1/2 
                             bg-dark-bg dark:bg-light-bg text-light-bg dark:text-dark-bg
                             px-2 py-1 rounded text-sm whitespace-nowrap z-10"
              >
                Minesquad - A giveback game
              </div>
            )}
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
            <motion.a
              href="https://depict.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-xl shadow-lg transition-all duration-100 ease-out 
                         mr-1 md:-mr-[3px] md:group-hover:mr-1 relative"
              custom={{ rotate: 4 }}
              variants={iconVariants}
              transition={iconTransition}
              animate={isWorkHovered ? "hover" : "animate"}
              onHoverStart={() => setHoveredIcon("depict")}
              onHoverEnd={() => setHoveredIcon(null)}
            >
              <Image
                src="/depict.jpg"
                alt="Depict"
                width={48}
                height={48}
                className="rounded-xl"
              />
              {hoveredIcon === "depict" && (
                <div
                  className="absolute -top-10 left-1/2 transform -translate-x-1/2 
                               bg-dark-bg dark:bg-light-bg text-light-bg dark:text-dark-bg
                               px-2 py-1 rounded text-sm whitespace-nowrap z-10"
                >
                  Depict AI
                </div>
              )}
            </motion.a>

            <motion.a
              href="https://validio.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-xl shadow-lg transition-all duration-100 ease-out
                         mx-1 md:-mx-[3px] md:group-hover:mx-1 relative"
              custom={{ rotate: -2 }}
              variants={iconVariants}
              transition={iconTransition}
              animate={isWorkHovered ? "hover" : "animate"}
              onHoverStart={() => setHoveredIcon("validio")}
              onHoverEnd={() => setHoveredIcon(null)}
            >
              <Image
                src="/validio.png"
                alt="Validio"
                width={48}
                height={48}
                className="rounded-xl"
              />
              {hoveredIcon === "validio" && (
                <div
                  className="absolute -top-10 left-1/2 transform -translate-x-1/2 
                               bg-dark-bg dark:bg-light-bg text-light-bg dark:text-dark-bg
                               px-2 py-1 rounded text-sm whitespace-nowrap z-10"
                >
                  Validio
                </div>
              )}
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/company/curb-food/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg transition-all duration-100 ease-out
                         mx-1 md:-mx-[3px] md:group-hover:mx-1 relative"
              style={{ backgroundColor: "#CE4129" }}
              custom={{ rotate: -3 }}
              variants={iconVariants}
              transition={iconTransition}
              animate={isWorkHovered ? "hover" : "animate"}
              onHoverStart={() => setHoveredIcon("curb")}
              onHoverEnd={() => setHoveredIcon(null)}
            >
              <Image
                src="/curb.png"
                alt="Curb"
                width={32}
                height={32}
                className="rounded-xl"
              />
              {hoveredIcon === "curb" && (
                <div
                  className="absolute -top-10 left-1/2 transform -translate-x-1/2 
                               bg-dark-bg dark:bg-light-bg text-light-bg dark:text-dark-bg
                               px-2 py-1 rounded text-sm whitespace-nowrap z-10"
                >
                  Curb Food
                </div>
              )}
            </motion.a>

            <motion.a
              href="https://www.zettle.com/se"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-xl shadow-lg transition-all duration-100 ease-out
                         mx-1 md:-mx-[3px] md:group-hover:mx-1 relative"
              custom={{ rotate: 2 }}
              variants={iconVariants}
              transition={iconTransition}
              animate={isWorkHovered ? "hover" : "animate"}
              onHoverStart={() => setHoveredIcon("zettle")}
              onHoverEnd={() => setHoveredIcon(null)}
            >
              <Image
                src="/zettle.png"
                alt="Zettle"
                width={48}
                height={48}
                className="rounded-xl"
              />
              {hoveredIcon === "zettle" && (
                <div
                  className="absolute -top-10 left-1/2 transform -translate-x-1/2 
                               bg-dark-bg dark:bg-light-bg text-light-bg dark:text-dark-bg
                               px-2 py-1 rounded text-sm whitespace-nowrap z-10"
                >
                  Zettle by PayPal
                </div>
              )}
            </motion.a>

            <motion.a
              href="https://daresay.co/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg transition-all duration-100 ease-out
                         ml-1 md:-ml-[3px] md:group-hover:ml-1 relative"
              style={{ backgroundColor: "#000000" }}
              custom={{ rotate: -1 }}
              variants={iconVariants}
              transition={iconTransition}
              animate={isWorkHovered ? "hover" : "animate"}
              onHoverStart={() => setHoveredIcon("daresay")}
              onHoverEnd={() => setHoveredIcon(null)}
            >
              <Image
                src="/daresay.png"
                alt="Daresay"
                width={22}
                height={22}
                style={{ filter: "invert(1)" }}
              />
              {hoveredIcon === "daresay" && (
                <div
                  className="absolute -top-10 left-1/2 transform -translate-x-1/2 
                               bg-dark-bg dark:bg-light-bg text-light-bg dark:text-dark-bg
                               px-2 py-1 rounded text-sm whitespace-nowrap z-10"
                >
                  Daresay
                </div>
              )}
            </motion.a>
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
              className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg transition-all duration-100 ease-out 
                         mr-1 md:-mr-[3px] md:group-hover:mr-1 relative"
              style={{ backgroundColor: "#0B66C2" }}
              custom={{ rotate: -3 }}
              variants={iconVariants}
              transition={iconTransition}
              animate={isHovered ? "hover" : "animate"}
              onHoverStart={() => setHoveredIcon("linkedin")}
              onHoverEnd={() => setHoveredIcon(null)}
            >
              <Linkedin className="w-6 h-6 text-white" />
              {hoveredIcon === "linkedin" && (
                <div
                  className="absolute -top-10 left-1/2 transform -translate-x-1/2 
                               bg-dark-bg dark:bg-light-bg text-light-bg dark:text-dark-bg
                               px-2 py-1 rounded text-sm whitespace-nowrap z-10"
                >
                  @charles-binet
                </div>
              )}
            </motion.a>

            <motion.a
              href="https://dribbble.com/charles_b"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg transition-all duration-100 ease-out
                         mx-1 md:-mx-[3px] md:group-hover:mx-1 relative"
              style={{ backgroundColor: "#EA4C89" }}
              custom={{ rotate: 4 }}
              variants={iconVariants}
              transition={iconTransition}
              animate={isHovered ? "hover" : "animate"}
              onHoverStart={() => setHoveredIcon("dribbble")}
              onHoverEnd={() => setHoveredIcon(null)}
            >
              <Dribbble className="w-6 h-6 text-white" />
              {hoveredIcon === "dribbble" && (
                <div
                  className="absolute -top-10 left-1/2 transform -translate-x-1/2 
                               bg-dark-bg dark:bg-light-bg text-light-bg dark:text-dark-bg
                               px-2 py-1 rounded text-sm whitespace-nowrap z-10"
                >
                  @charles_b
                </div>
              )}
            </motion.a>

            <motion.a
              href="https://github.com/bibtor"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg transition-all duration-100 ease-out
                         ml-1 md:-ml-[3px] md:group-hover:ml-1 relative"
              style={{ backgroundColor: "#5C6BC0" }}
              custom={{ rotate: -2 }}
              variants={iconVariants}
              transition={iconTransition}
              animate={isHovered ? "hover" : "animate"}
              onHoverStart={() => setHoveredIcon("github")}
              onHoverEnd={() => setHoveredIcon(null)}
            >
              <Github className="w-6 h-6 text-white" />
              {hoveredIcon === "github" && (
                <div
                  className="absolute -top-10 left-1/2 transform -translate-x-1/2 
                               bg-dark-bg dark:bg-light-bg text-light-bg dark:text-dark-bg
                               px-2 py-1 rounded text-sm whitespace-nowrap z-10"
                >
                  @bibtor
                </div>
              )}
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Line divider */}
        <motion.hr
          className="w-full border-t border-gray-300 dark:border-gray-600 mt-16 mb-8 ml-0"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          style={{ transformOrigin: "left" }}
        />

        {/* Coaching text */}
        <motion.p
          className="text-lg text-gray-600 dark:text-gray-300"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.5 }}
        >
          You need to level up your design career with coaching?{" "}
          <a
            href="https://adplist.org/mentors/charles-binet"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black dark:text-white hover:underline transition-all duration-200"
          >
            Book me here
          </a>
        </motion.p>

        {/* Advising text */}
        <motion.p
          className="text-lg text-gray-600 dark:text-gray-300 mt-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          Your company needs advising?{" "}
          <button
            onClick={handleEmailClick}
            onMouseEnter={handleEmailHover}
            onMouseLeave={handleEmailLeave}
            className="text-black dark:text-white hover:underline transition-all duration-200 cursor-pointer bg-transparent border-none p-0 relative"
          >
            {isEmailRevealed ? "charlesbinet@proton.me" : "Click here"}
            {isEmailCopied && (
              <div
                className="absolute -top-10 left-1/2 transform -translate-x-1/2 
                             bg-dark-bg dark:bg-light-bg text-light-bg dark:text-dark-bg
                             px-2 py-1 rounded text-sm whitespace-nowrap z-10"
              >
                Copied to clipboard!
              </div>
            )}
          </button>
        </motion.p>

        {/* Chat text */}
        <motion.p
          className="text-lg text-gray-600 dark:text-gray-300 mt-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.5 }}
        >
          Just want to chat?{" "}
          <a
            href="https://x.com/CharlesTenib"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black dark:text-white hover:underline transition-all duration-200"
          >
            DM me here
          </a>
        </motion.p>
      </div>
    </main>
  );
}
