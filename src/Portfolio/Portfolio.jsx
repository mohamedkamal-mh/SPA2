import React from 'react'
import  poert1 from '../assets/images/poert1.png'
import  poert2 from '../assets/images/port2.png'
import  poert3 from '../assets/images/port3.png'
import { useEffect } from 'react';

export default function Portfolio() {
   useEffect(() => {
      document.title = "Portofolio";
    }, []);
  
  return (

    <>
      <div className="container">
         <div>
          <h2 className='special text-center mt-5'>portfolio component</h2>
        </div>
        <div className="icon d-flex justify-content-center align-items-center m-2 ">
          <div className="line-l mx-2 linespecial"></div>
          <i className='fa-solid fa-star  '></i>
          <div className="line-r mx-2 linespecial"></div>

        </div>
        <div className="row">
          <div className="col-md-6 col-lg-4 mb-2 p-3  ">
            <div className='position-relative'>
              <div className="layer position-absolute rounded-3 d-flex justify-content-center align-items-center">
                <i className='fa-solid fa-plus'></i>
              </div>
            <img src={poert1} className='w-100 rounded-3' alt="s" />
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-2 p-3  ">
            <div className='position-relative'>
              <div className="layer position-absolute rounded-3 d-flex justify-content-center align-items-center">
                <i className='fa-solid fa-plus'></i>
              </div>
            <img src={poert2} className='w-100 rounded-3' alt="s" />
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-2 p-3  ">
            <div className='position-relative'>
              <div className="layer position-absolute rounded-3 d-flex justify-content-center align-items-center">
                <i className='fa-solid fa-plus'></i>
              </div>
            <img src={poert3} className='w-100 rounded-3' alt="s" />
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-2 p-3  ">
            <div className='position-relative'>
              <div className="layer position-absolute rounded-3 d-flex justify-content-center align-items-center">
                <i className='fa-solid fa-plus'></i>
              </div>
            <img src={poert3} className='w-100 rounded-3' alt="s" />
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-2 p-3  ">
            <div className='position-relative'>
              <div className="layer position-absolute rounded-3 d-flex justify-content-center align-items-center">
                <i className='fa-solid fa-plus'></i>
              </div>
            <img src={poert1} className='w-100 rounded-3' alt="s" />
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-2 p-3  ">
            <div className='position-relative'>
              <div className="layer position-absolute rounded-3 d-flex justify-content-center align-items-center">
                <i className='fa-solid fa-plus'></i>
              </div>
            <img src={poert2} className='w-100 rounded-3' alt="s" />
            </div>
          </div>
         
          
          
        </div>
      </div>

    </>



  )
}
