import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../../styles";

import { slideIn } from "../../utils/motion";
import { useNavigate } from "react-router-dom";

const Signup = () => {

    const navigator = useNavigate();

    const formRef = useRef();
    const [form, setForm] = useState({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
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
      e.preventDefault();
      setLoading(true);

      if(form.password !== form.confirmPassword){
        alert("Passwords do not match");
        setLoading(false);
      }
      else{
        fetch("http://localhost:3001/signup", {
          method:'post',
          headers:{'Content-Type': 'application/json'},
          body : JSON.stringify({
            name: form.name,
            email: form.email,
            password: form.password
          })
        })
        .then(response => response.json())
        .then(user => {
          if(user.affectedRows==1){
            alert("Registered Successfully");
            setLoading(false);
            navigator('/mainpage');
          }
          else{
            alert(user);
            setLoading(false);
          }
        })
  
        
        setForm({
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
        });
      }


        // .then(
        //     () => {
        //     setLoading(false);
        //     alert("Thank you. I will get back to you as soon as possible.");

        //     setForm({
        //         name: "",
        //         email: "",
        //         password: "",
        //         confirmPassword: "",
        //     });
        //     },
        //     (error) => {
        //     setLoading(false);
        //     console.error(error);

        //     alert("Ahh, something went wrong. Please try again.");
        //     }
        // );
        setLoading(false);
    };
  
    return (

      <div
        className={`bg-hero-pattern flex items-center justify-center xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
        style={{ minHeight: "100vh" }}
      >
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className=' bg-black-100 px-8 py-3 rounded-2xl xl:flex-[0.4] md:w-1/2'
        >
          <p className={`${styles.sectionSubText} text-center`}>Fill in Credentials</p>
          <h3 className={`${styles.sectionHeadText} text-center`}>Sign Up.</h3>
  
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className='mt-8 flex flex-col gap-2'
          >

            <label className='flex flex-col'>
              <span className='text-white font-medium mb-[0.5]'>Your Name</span>
              <input
                type='text'
                name='name'
                value={form.name}
                onChange={handleChange}
                placeholder="Enter name?"
                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              />
            </label>

            <label className='flex flex-col'>
              <span className='text-white font-medium mb-[0.5]'>Your email</span>
              <input
                type='email'
                name='email'
                value={form.email}
                onChange={handleChange}
                placeholder="Enter Email?"
                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              />
            </label>

            <label className='flex flex-col'>
              <span className='text-white font-medium mb-[0.5]'>Your Password</span>
              <input
                type='password'
                name='password'
                value={form.password}
                onChange={handleChange}
                placeholder="Enter Your Password?"
                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              />
            </label>
  
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-[0.5]'>Confirm Password</span>
              <input
                type='password'
                name='confirmPassword'
                value={form.confirmPassword}
                onChange={handleChange}
                placeholder="Enter Your Password Again?"
                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              />
            </label>

            <button
              type='submit'
              className='self-center bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
            >
              {loading ? "Registering..." : "Register"}
            </button>

            <p 
                className="text-center text-[14px] text-white cursor-pointer"
                onClick={() => {
                    navigator(`/`);
                }}
            >Login</p>



          </form>
        </motion.div>
  
      </div>
    );
}

export default Signup