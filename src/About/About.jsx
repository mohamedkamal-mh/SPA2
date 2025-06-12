import React from 'react'
import { useEffect } from 'react';


export default function About() {
  
  useEffect(() => {
    document.title = "Home";
  }, []);

  return (
    <>
      <div className=" container-fluid  text-center about-container d-flex justify-content-center align-items-center ">
        <div className='head'>
          <div className='mb-3'>
            <h2>about component</h2>
          </div>
          <div className="icon d-flex justify-content-center align-items-center m-2 mb-3">
            <div className="line-l mx-2"></div>
            <i className='fa-solid fa-star text-white '></i>
            <div className="line-r mx-2"></div>
          </div>
          <div className="container">
          <div className="row px-5">
            <div className="col-md-6">
              < p className='parag '>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.

              </p>
            </div>
            <div className="col-md-6">
              <p className=' parag'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.

              </p>
            </div>
            </div>
          </div>
        </div>

      </div>


    </>

  )
}
