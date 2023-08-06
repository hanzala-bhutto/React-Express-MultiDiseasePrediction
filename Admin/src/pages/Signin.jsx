import React, { useRef, useState } from "react";

import { styles } from "../styles";

import { useNavigate } from 'react-router-dom';

const Signin = () => {

    const navigator = useNavigate();

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
  
      if (!form.email || !form.password) {
        alert("Please fill all the fields");
        setLoading(false);
        return;
      }

      fetch("http://localhost:3001/admin/signin", {
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
          navigator('/');
          
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
      // setLoading(false);
  
    };
  
    return (

      <div
        className={`bg-hero-pattern  flex items-center justify-center xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
        style={{ minHeight: "100vh" }}
      >
        <div
          className='bg-black-100 p-8 rounded-2xl xl:flex-[0.35] md:w-1/2'
        >
          <p className={`${styles.sectionSubText} text-center`}>Admin</p>
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

          </form>
        </div>
  
      </div>
    );

}

export default Signin