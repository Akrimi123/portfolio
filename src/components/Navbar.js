import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import logo from '../logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


export function Navv() {
    return(
        <div>
        
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <div className="container">
                        <a className="navbar-brand" href=""> <img className="logo" src={logo} alt="logo..."></img> </a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <FontAwesomeIcon  icon={faBars} style={{color:'white'}}/>
                            </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ">
                            <li className="nav-item active">
                                <a className="nav-link" href=""style={{color:'white'}}>Home <span className="sr-only"></span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#ABOUT ME" style={{color:'white'}}>About me</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"style={{color:'white'}}>Experiences</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"style={{color:'white'}}>Contacts</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )





}