import { motion } from "framer-motion";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      <ThemeToggle />

      <motion.h1
        className="text-5xl font-bold mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Hi, I'm Charles
      </motion.h1>

      <motion.p
        className="text-lg max-w-xl text-gray-600 dark:text-gray-300"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        I build digital experiences.
      </motion.p>

      <div className="mt-8 flex gap-4">
        <a
          href="#projects"
          className="text-blue-600 dark:text-blue-400 hover:underline transition-colors"
        >
          View Projects
        </a>
        <a
          href="mailto:your@email.com"
          className="text-blue-600 dark:text-blue-400 hover:underline transition-colors"
        >
          Contact
        </a>
      </div>
    </main>
  );
}
