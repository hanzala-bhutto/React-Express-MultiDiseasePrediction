import React from 'react';
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { models, modelSelection } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { useNavigate } from 'react-router-dom';

const ModelCard = ({
  index,
  name,
  description,
  tags,
  image,
  navigate,
}) => {

  const navigator = useNavigate();

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      onClick={() => {
        navigator(`/${navigate}/`);
        window.scrollTo(0, 0);
      }
    }
      className='cursor-pointer'
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Model = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>Select Model</p>
        <h2 className={`${styles.sectionHeadText}`}>Models.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          {modelSelection}
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7 justify-center'>
        {models.map((model, index) => (
          <ModelCard key={`project-${index}`} index={index} {...model} />
        ))}
      </div>
    </>
  );
}

export default SectionWrapper(Model,"model");