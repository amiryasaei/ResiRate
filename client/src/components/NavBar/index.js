import React from "react";
import "./index.css";
import logo from "../../assets/img/logo.png";

export default function NavBar() {
    return (
        <nav className="nav">
            <a href="/">
                <div className="logo-container">
                    <img src={logo} alt="Logo" className="logo" />
                    ResiRate
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
