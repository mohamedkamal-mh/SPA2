import React from 'react'
import { useEffect } from 'react';

export default function Contact() {

   useEffect(() => {
      document.title = "Contact";
    }, []);
  
  return (
    <>
      <div className="container">
        <div>
          <h2 className='special text-center mt-5'>contact section</h2>
        </div>
        <div className="icon d-flex justify-content-center align-items-center  mb-5 ">
          <div className="line-l mx-2 linespecial"></div>
          <i className='fa-solid fa-star '></i>
          <div className="line-r mx-2 linespecial "></div>
        </div>
        <div className='formm w-50  m-auto  mb-5'>
          <form action="">
            <div class="input-group mb-4">
              <input type="text" class="form-control border-0 border-bottom" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"></input>
            </div>
            <div class="input-group mb-4">
              <input type="text" class="form-control border-0 border-bottom" placeholder="User Age" aria-label="Username" aria-describedby="basic-addon1"></input>
            </div>
            <div class="input-group mb-4">
              <input type="email" class="form-control border-0 border-bottom" placeholder="User Email" aria-label="Username" aria-describedby="basic-addon1"></input>
            </div>
            <div class="input-group mb-4">
              <input type="password" class="form-control border-0 border-bottom" placeholder="User Password" aria-label="Username" aria-describedby="basic-addon1"></input>
            </div>
            <button className='btn btn-success'>Send message </button>
          </form>
        </div>
      </div>


    </>
  )
}
