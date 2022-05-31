import { motion } from "framer-motion";

const ContainerVariants = {
  initial: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const DotVariants = {
  animate: {
    y: ["0%", "100%"],
  },
};

export const Loading = () => {
  return (
    <div className="h-10 flex items-center justify-center">
      <motion.div
        variants={ContainerVariants}
        initial="initial"
        animate="animate"
        className="w-full h-full flex space-x-1"
      >
        <motion.span
          variants={DotVariants}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 0.5,
          }}
          className="w-2 h-2 bg-black rounded-full"
        />
        <motion.span
          variants={DotVariants}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 0.5,
          }}
          className="w-2 h-2 bg-black rounded-full"
        />
        <motion.span
          variants={DotVariants}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 0.5,
          }}
          className="w-2 h-2 bg-black rounded-full"
        />
      </motion.div>
    </div>
  );
};
