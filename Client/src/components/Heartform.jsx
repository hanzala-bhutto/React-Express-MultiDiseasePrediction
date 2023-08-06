import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { slideIn } from "../utils/motion";
import { SectionWrapper } from '../hoc';
import { useNavigate } from "react-router-dom";

// 63,1,3,145,233,1,0,150,0,2.3,0,0,1,1

const Heartform = () => {

    const inputRef = React.useRef();
    const navigator = useNavigate();

    const formRef = useRef();
    const [form, setForm] = useState({
        age: "",
        sex: "",
        cp: "",
        trestbps: "",
        chol: "",
        fbs: "",
        restecg: "",
        thalach: "",
        exang: "",
        oldpeak: "",
        slope: "",
        ca: "",
        thal:"",
    });
  
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { target } = e;
        const { name, value } = target;
    
        setForm({
          ...form,
          [name]: value,
        });
      };
    
      const handleSubmit = (e) => {
        // console.log(form);
        e.preventDefault();
        setLoading(true);

        if(Object.values(form).every(x => x === '')){
            alert("Please fill all the fields");
            setLoading(false);
        }

        fetch("http://localhost:3001/heart/insert", {
          method:'post',
          headers:{'Content-Type': 'application/json'},
          body : JSON.stringify({
            age: form.age,
            sex: form.sex,
            cp: form.cp,
            trestbps: form.trestbps,
            chol: form.chol,
            fbs: form.fbs,
            restecg: form.restecg,
            thalach: form.thalach,
            exang: form.exang,
            oldpeak: form.oldpeak,
            slope: form.slope,
            ca: form.ca,
            thal:form.thal,
          })
        })
        .then(response => response.json())
        .then(response => {
          if(response.age){
            setLoading(false);
            console.log(response);
            alert("Cardiac Form Submitted Successfully!.");

            navigator('/heart/#result' , {state: {target: response.target}});      
            inputRef.current.click();
          }
          else{
            setLoading(false);
            alert("Cardiac Form Submission Failed.");
            console.log(response);
          }
        })
        // setLoading(false);

      }

    return (
        <div
          className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
        >
          <motion.div
            variants={slideIn("left", "tween", 0.2, 1)}
            className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
          >
            <p className={styles.sectionSubText}>Cardiac Particulars</p>
            <h3 className={styles.sectionHeadText}>Cardiac Form.</h3>
    
            <a href="#result">
              <button ref={inputRef}></button>
            </a>

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className='mt-12 flex flex-col gap-8'
            >
              <label className='flex flex-col'>
                <span className='text-white font-medium mb-4'>Your Age</span>
                <input
                  type='number'
                  name='age'
                  value={form.age}
                  min="0"
                  max="100"
                  required
                  onChange={handleChange}
                  placeholder="What's your age?"
                  className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                />
              </label>
              <label className='flex flex-col'>
                <span className='text-white font-medium mb-4'>Your Gender</span>
                <input
                  type='number'
                  name='sex'
                  value={form.sex}
                  min="0"
                  max="1"
                  required
                  onChange={handleChange}
                  placeholder="What's your sex 0-1?"
                  className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                />
              </label>
              <label className='flex flex-col'>
                <span className='text-white font-medium mb-4'>Chest Pain Type</span>
                <input
                  type='number'
                  name='cp'
                  value={form.cp}
                  min="0"
                //   max="100"
                  required
                  onChange={handleChange}
                  placeholder="Chest Pain Type?"
                  className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                />
              </label>
              <label className='flex flex-col'>
                <span className='text-white font-medium mb-4'>Resting Blood Pressure</span>
                <input
                  type='number'
                  name='trestbps'
                  value={form.trestbps}
                  min="0"
                //   max="100"
                  required
                  onChange={handleChange}
                  placeholder="Resting Blood Pressure?"
                  className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                />
              </label>
              <label className='flex flex-col'>
                <span className='text-white font-medium mb-4'>Serum Cholestoral</span>
                <input
                  type='number'
                  name='chol'
                  value={form.chol}
                  min="0"
                //   max="100"
                  required
                  onChange={handleChange}
                  placeholder="Serum Cholestoral in mg/dl?"
                  className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                />
              </label>

              <label className='flex flex-col'>
                <span className='text-white font-medium mb-4'>Fasting Blood Sugar</span>
                <input
                  type='number'
                  name='fbs'
                  value={form.fbs}
                  min="0"
                //   max="100"
                  required
                  onChange={handleChange}
                  placeholder="Fasting Blood Sugar > 120 mg/dl?"
                  className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                />
              </label>

              <label className='flex flex-col'>
                <span className='text-white font-medium mb-4'>Resting Electrocardiographic Results</span>
                <input
                  type='number'
                  name='restecg'
                  value={form.restecg}
                  min="0"
                //   max="100"
                  required
                  onChange={handleChange}
                  placeholder="Resting Electrocardiographic Result"
                  className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                />
              </label>

              <label className='flex flex-col'>
                <span className='text-white font-medium mb-4'>Maximum Heart Rate Achieved</span>
                <input
                  type='number'
                  name='thalach'
                  value={form.thalach}
                  min="0"
                //   max="100"
                  required
                  onChange={handleChange}
                  placeholder="Max Heart Rate?"
                  className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                />
              </label>

              <label className='flex flex-col'>
                <span className='text-white font-medium mb-4'>Exercise Induced Angina</span>
                <input
                  type='number'
                  name='exang'
                  value={form.exang}
                  min="0"
                //   max="100"
                  required
                  onChange={handleChange}
                  placeholder="Exercise Induced Angina?"
                  className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                />
              </label>

              <label className='flex flex-col'>
                <span className='text-white font-medium mb-4'>ST Depression Induced By Exercise</span>
                <input
                  type='number'
                  name='oldpeak'
                  value={form.oldpeak}
                  min="0"
                  step="0.01"
                //   max="100"
                  required
                  onChange={handleChange}
                  placeholder="ST Depression Induced By Exercise?"
                  className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                />
              </label>

              <label className='flex flex-col'>
                <span className='text-white font-medium mb-4'>Slope Of The Peak Exercise ST Segment</span>
                <input
                  type='number'
                  name='slope'
                  value={form.slope}
                  min="0"
                //   max="100"
                  required
                  onChange={handleChange}
                  placeholder="ST Segment?"
                  className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                />
              </label>

              <label className='flex flex-col'>
                <span className='text-white font-medium mb-4'>Major Vessels Colored By Flourosopy</span>
                <input
                  type='number'
                  name='ca'
                  value={form.ca}
                  min="0"
                //   max="100"
                  required
                  onChange={handleChange}
                  placeholder="Major Vessels Colored By Flourosopy?"
                  className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                />
              </label>

              <label className='flex flex-col'>
                <span className='text-white font-medium mb-4'>Thalassemia</span>
                <input
                  type='number'
                  name='thal'
                  value={form.thal}
                  min="0"
                //   max="100"
                  required
                  onChange={handleChange}
                  placeholder="Thalassemia?"
                  className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                />
              </label>




              <button
                type='submit'
                className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            </form>
          </motion.div>
    
          {/* <motion.div
            variants={slideIn("right", "tween", 0.2, 1)}
            className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
          >
            <EarthCanvas />
          </motion.div> */}
        </div>
    );
};
    
export default SectionWrapper(Heartform, "form");