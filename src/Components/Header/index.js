import React from "react";
import FadeIn from 'react-fade-in';
import "./style.css";

function Header(props) {
  return (
    <FadeIn>
    <div  className="card justify-content-center header-card">
            <FadeIn>
            <div className=" justify-content-center">
                <h1>Eugenia Solana</h1>
            </div>
            </FadeIn>
            <FadeIn>
            <ul className="nav justify-content-center">
                
                <li className="nav-item">
                    <a className="nav-link about"  href={props.link}>About</a>
                </li>
                
                <li className="nav-item">
                    <h1 className="divider">|</h1>
                </li>
                
                <li className="nav-item">
                    <a className="nav-link portfolio"  href={props.link}>Portfolio</a>
                </li>
                
                <li className="nav-item">
                    <h1 className="divider">|</h1>
                </li>
                
                <li className="nav-item">
                    <a className="nav-link contact"  href={props.link}>Contact</a>
                </li>
                
            </ul>
            </FadeIn>
        </div>
        </FadeIn>
  );
}

export default Header;