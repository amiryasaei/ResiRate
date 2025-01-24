import React from "react";
import "./style.css";
import logo from "../../assets/logo.png";

export default function NavBar() {
    return (
        <nav className="nav">
            <a href="/">
                <div className="logo-container">
                    <img src={logo} alt="Logo" className="logo" />
                </div>
            </a>
            <ul>
                <li>
                    <a
                        href="/login"
                    >
                        Login
                    </a>
                </li>
                <li>
                    <a
                        href="/contact"
                    >
                        Contact
                    </a>
                </li>
            </ul>
        </nav>
    );
}
