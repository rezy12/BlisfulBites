import React from 'react';
import Logo from "../../Images/logo.png";
import "./navbar.css";
import { Link } from "react-router-dom";

const navbar = () => {
    return (

        <>

            <header>
                <div class="logo">
                    <img src={Logo} alt="Logo" />
                </div>
                <nav>
                    <a><Link to="/">Home</Link></a>
                    <a><Link to="/menu">Menu</Link></a>
                    <a><Link to="/location">Location/Contact</Link></a>
                </nav>
                <div class="boxes">
                    <div class="box" id="box2">Login/SignUp</div>
                    <div class="box" id="box3">
                        <input type="text" placeholder="Search" />
                        
                    </div>
                    <button class="seachButton">Search</button>

                </div>
            </header>

        </>

    )
}

export default navbar