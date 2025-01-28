import React from "react";
import "./index.css";
import logo from "../../assets/img/logo.png";
import SearchBar from "../SearchBar";

export default function NavBar({isHome}) {
    return (
        <nav className="nav">
            <a href="/">
                <div className="logo-container" href="/">
                    <img src={logo} alt="Logo" className="logo" />
                    ResiRate
                </div>
            </a>
            {isHome ?
                <ul>
                    <li>
                        <a href="/login">
                            Login
                        </a>
                    </li>
                    <li>
                        <a href="/contact">
                            Contact
                        </a>
                    </li>
                </ul>
            :
                <>
                <SearchBar isNavbar={true}/>
                <ul>
                    <li>
                        <a href="/login">
                            Login
                        </a>
                    </li>
                    <li>
                        <a href="/contact">
                            Contact
                        </a>
                    </li>
                </ul>
            </>
            }
        </nav>
    );
}
