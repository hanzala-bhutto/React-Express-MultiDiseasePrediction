import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../../styles";

import { slideIn } from "../../utils/motion";

import { useNavigate } from 'react-router-dom';
import { useContext } from "react";
import UserContext from "../../UserContext";

const Signin = () => {

    const navigator = useNavigate();

    const {user, setUser} = useContext(UserContext);

    const formRef = useRef();
    const [form, setForm] = useState({
      email: "",
      password: "",
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
  
      fetch("http://localhost:3001/signin", {
        method:'post',
        headers:{'Content-Type': 'application/json'},
        body : JSON.stringify({
          email: form.email,
          password: form.password,
        })
      })
      .then(response => response.json())
      .then(response => {
        if(response.email){
          setLoading(false);
          console.log(response);
          alert("Logged In Successfully");
          navigator('/mainpage');
          
          setUser({
            userName:response.name,
            email:response.email,
            isLoggedIn:true,
          })
          
          setForm({
            email: "",
            password: "",
          });        
          
        }
        else{
          setLoading(false);
          alert(user);
        }
      })
      setLoading(false);
        // .then(
        //     () => {
        //     setLoading(false);
        //     alert("Thank you. I will get back to you as soon as possible.");

        //     setForm({
        //         name: "",
        //         email: "",
        //         message: "",
        //     });
        //     },
        //     (error) => {
        //     setLoading(false);
        //     console.error(error);

        //     alert("Ahh, something went wrong. Please try again.");
        //     }
        // );
    };
  
    return (

      <div
        className={`bg-hero-pattern flex items-center justify-center xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
        style={{ minHeight: "100vh" }}
      >
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className=' bg-black-100 p-8 rounded-2xl xl:flex-[0.35] md:w-1/2'
        >
          <p className={`${styles.sectionSubText} text-center`}>Fill in Credentials</p>
          <h3 className={`${styles.sectionHeadText} text-center`}>Sign In.</h3>
  
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className='mt-12 flex flex-col gap-6'
          >

            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Your email</span>
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
              <span className='text-white font-medium mb-4'>Your Password</span>
              <input
                type='password'
                name='password'
                value={form.password}
                onChange={handleChange}
                placeholder="Enter Your Password?"
                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              />
            </label>
  
            <button
              type='submit'
              className='self-center bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
            >
              {loading ? "Logging..." : "Login"}
            </button>

            <p 
                className="text-center text-[14px] text-white cursor-pointer"
                onClick={() => {
                    navigator(`/signup`);
                }}
            >Register</p>
            

          </form>
        </motion.div>
  
      </div>
    );

}

export default Signin