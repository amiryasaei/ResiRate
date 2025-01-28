import * as React from 'react';
import "./index.css";
import navSearchIcon from '../../assets/img/navSearchIcon.svg';

export default function SearchBar({isNavbar}) {
    return (
        <>
        {isNavbar ? 
            <div className='navSearch'>
                <img src={navSearchIcon}/>
                Search for a residence or address ...
            </div>
        :
            <div className='titleSearch'>
                Search for a residence or address ...
                <img src={navSearchIcon}/>
            </div>
        }
        </>
    );
}