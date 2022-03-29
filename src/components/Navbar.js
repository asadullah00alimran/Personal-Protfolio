import React from 'react'
import logo from "../logo.webp";

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-dark">
            <div class="container">

                <a class="navbar-brand" href="#"> <img class="logo" src={logo} alt="logo......."></img></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Home <span class="sr-only"></span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">about me</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">expriences</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">my works</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">contacts</a>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    )
}

export default Navbar