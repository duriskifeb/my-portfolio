import Image from "next/image";
import { Label } from "../Label";
import { motion } from "framer-motion";

function Hero() {
  // Variants untuk animasi gambar saja
  const imageVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      rotate: -5,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        delay: 0.3,
      },
    },
    hover: {
      y: -10,
      rotate: 3,
      transition: {
        type: "spring",
        stiffness: 300,
      },
    },
  };

  return (
    <div className="page-center grid grid-cols-3 items-center md:pt-40 md:pb-24 pt-12 pb-12">
      <div className="grid col-span-2 gap-6">
        <Label label="Muhammad Rizky Febriyanto" />
        <div className="overflow-hidden">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-ink md:text-5xl lg:text-6xl dark:text-white">
            Software Engineering Student TUS '23
          </h1>
        </div>
        <p className="text-ink font-light md:text-xl text-lg md:w-9/12">
          <b>#MulaiAjaDulu</b> lalu bikin yang lebih baik kalau tidak maka tidak
          akan bertumbuh!. 📝
        </p>
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        whileHover="hover"
        variants={imageVariants}
        className="mx-auto"
      >
        <Image
          src="/images/rizkyUP2.png"
          width={224}
          height={189}
          alt="profile picture"
          className="relative rounded-lg shadow-xl"
          style={{
            border: "2px solid #fff",
            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
          }}
        />
      </motion.div>
    </div>
  );
}

export { Hero };
