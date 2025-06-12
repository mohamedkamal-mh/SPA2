import React from 'react'

export default function Footer() {
    return (
        <>
            <div className=' text-center '>
                <div className="container-fluid sub-footer text-white">
                    <div className="row">
                        <div className="col-md-4">
                            <h3 className='text-uppercase'>Location</h3>
                            <p>2215 John Daniel Drive</p>
                            <p>Clark, MO 65243</p>
                        </div>
                        <div className="col-md-4">
                            <h3>AROUND THE WEB</h3>
                            <div className="socialicons">
                                <i className='fa-brands fa-facebook'></i>
                                <i className='fa-brands fa-linkedin'></i>
                                <i className='fa-brands fa-twitter'></i>
                                <i className='fa-solid fa-globe'></i>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <h3>ABOUT FREELANCER</h3>
                            <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                        </div>
                    </div>
                </div>
                <footer >                                <p>Copyright © Your Website 2021</p>
                </footer>

            </div>

        </>
    )
}
