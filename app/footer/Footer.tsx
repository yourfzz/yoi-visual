import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedBody from "../animations/AnimatedBody";

const Footer = () => {
  return (
    <motion.section
      className=" h-[15vh] w-full  items-center justify-center border-t-2 border-[#e4ded7]/30 bg-[#ee7214] pt-10  font-bold uppercase md:h-[20vh] md:py-16 lg:h-[10vh] lg:pt-6 lg:pb-0"
      initial="initial"
      animate="animate"
    >
      <motion.div className="mx-auto flex w-[90%] flex-col items-center justify-center text-center text-[12px] text-[#f9e8d9] sm:text-[12px] md:flex-row md:justify-between md:text-[14px] lg:max-w-[1440px] lg:text-[14px]">
        <div className="flex flex-row items-center gap-1">
          <AnimatedBody
            text={"Design & Development by"}
            className={"m-0 p-0"}
          />
          <Link
            href="https://www.instagram.com/yourfzz_"
            target="_blank"
            aria-label="yourfzz's Instagram Profile"
          >
            <span className="underline underline-offset-2 hover:no-underline">
              <AnimatedBody text={"yourfzz"} className={"m-0 p-0"} />
            </span>{" "}
          </Link>
        </div>
        <AnimatedBody
          text={`Copyright ©${new Date().getFullYear()}`}
          className={"m-0 p-0"}
        />
        {/* <div className="flex flex-col sm:flex-row  sm:gap-1 md:gap-2">
          <AnimatedBody
            text={"Design & Development by"}
            className={"m-0 p-0"}
          />
          <Link href="#" target="_blank" aria-label="Hafidz's GitHub Profile">
            <span className="underline underline-offset-2 hover:no-underline">
              <AnimatedBody text={"🥶"} className={"m-0 p-0"} />
            </span>{" "}
          </Link>
        </div> */}
      </motion.div>
    </motion.section>
  );
};

export default Footer;
