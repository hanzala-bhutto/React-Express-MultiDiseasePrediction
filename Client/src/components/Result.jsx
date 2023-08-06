import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { useLocation } from "react-router-dom";

// import { testimonials } from "../../constants";

const FlipCard = () => {

    const result = useLocation();
    // console.log(result)

    // download image remaining
    const imgSrc = "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/83/0254d751d54c6cb270c97076aca15f/ICD-CourseImage-01-2-.png?auto=format%2Ccompress&dpr=1"
    return (
        result.state
        ? 
        <motion.div className="group h-96 w-80 [perspective:1000px]">
            <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div className="absolute inset-0">
                    <img className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40 opacity-50" src={imgSrc} alt="" />
                    <h1 className="absolute font-bold text-3xl text-center text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">Disease Status</h1>
                </div>
                <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div className="flex min-h-full flex-col items-center justify-center">
                    <h1 className="text-3xl font-bold">Status</h1>
                    {result.state.target===1 ?
                    <p className="text-lg">Disease Positive</p>
                    :
                    <p className="text-lg">Disease Negative</p>
                    }
                </div>
                </div>
            </div>
        </motion.div>
        :
        <motion.div className="group h-96 w-80 [perspective:1000px]" 
        // onClick={() => {
        //     window.location.href="/heart/#form";
        // }}
        >
            <a href="#form">
                <div className="relative h-full w-full rounded-xl shadow-xl cursor-pointer">
                    <div className="absolute inset-0">
                        <img className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40 opacity-50" src={imgSrc} alt="" />
                        <h1 className="absolute font-bold text-3xl text-center text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">Form Not Submitted</h1>
                    </div>
                </div>
            </a>
        </motion.div>

        // </div>
        
    );
}

const Result = () => {

  
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      {/* {console.log(ref.current)} */}
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Prediction</p>
          <h2 className={styles.sectionHeadText}>Result.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-row justify-center`}>
        <FlipCard />
      </div>
    </div>
  );
};

export default SectionWrapper(Result, "result");
