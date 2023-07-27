import axios from 'axios'
import React, { Component, useState } from 'react'
import Navbar from './Navbar';
import './Feedback.css';


const Feedback=()=>{
    const [name,setName]=useState('');
    const [feedback,setFeed]=useState('');
    
    const handleChange = (e, setter) => {
        setter(e.target.value);
      };

    const Token={
        name:name,
        feedback:feedback
    }
   const Submit=(e)=>{
    e.preventDefault()
        axios.post('http://localhost:8181/api/v1/demo/send',Token,{
            headers: {
              // "Authorization": `Bearer ${token}`,
              'Content-Type': 'application/json',
              "Authorization":`Bearer ${localStorage.getItem('token')}`
            },
           })
           .then((res)=>{
              console.log(res.data)
           })
    }
    

    return (
      <div>
        <Navbar/>
      <div className='bod' > 

        <div className='body-in'>
                <h1 >GIVE FEEDBACK FOR ON OUR MAKEFOLIO!!!</h1>


                <div className='area' >
                    <form onSubmit={Submit}  >
                <input value={name} onChange={(e)=>{handleChange(e,setName)}} required placeholder='Enter Your User Name' className='input'  />
              
                <textarea value={feedback} onChange={(e)=>{handleChange(e,setFeed)}} required placeholder='Enter Your Valuable FeedBack' className='text' />

                <div >
                    <button  type='submit'>Feed</button>
                </div>
                
                
                </form>
                {/* <h4 style={{marginLeft:'3em'}}>dont have an account? Register</h4> */}
                </div>
        </div>
      </div>
      </div>
    )
  }
export default Feedback;