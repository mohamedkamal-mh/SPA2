import React from 'react'
import { Link ,NavLink } from 'react-router-dom'



export default function Navbar() {
    return (
        <>
            <nav class="navbar navbar-expand-lg   ">
                <div class="container">
                    <Link to="" className="text-decoration-none text-white titlee">START FRAMEWORK</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 p-3 ">
                            <li class="nav-item ">
                            </li>
                            <li class="nav-item p-2">
                                <NavLink to="" className='text-decoration-none text-white'>About</NavLink>
                            </li>
                            <li class="nav-item p-2 ">
                                <NavLink to="Portfolio" className='text-decoration-none text-white'>Portfolio</NavLink>
                            </li>
                            <li class="nav-item p-2">
                                <NavLink to="Contact" className='text-decoration-none text-white'>Contact</NavLink>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>

        </>
    )
}
