import React, { useState } from "react";
import "./Prelogin.css";
import logo from "../Assests/logo.png";



const Prelogin = () => {


    return (
        <div>
            <div style={{textAlign: "left"}}>
                <img className="login-container"src={logo}/>

            </div>
            <div className="prelogin-container">
                <form action="dashboard" class="form">
                    <h1>Login</h1>
                    <input type="email" name="email" class="box" placeholder="Enter your Name"></input>
                    <input type="password" name="password" class="box" placeholder="Enter Password"></input>
                    <input type="submit" value="Login" id="submit" ></input>
                    
                    

                </form>

            </div>
        </div>
    );
};

export default Prelogin;
