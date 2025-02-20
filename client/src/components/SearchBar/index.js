import * as React from 'react';
import "./index.css";
import navSearchIcon from '../../assets/img/navSearchIcon.svg';
import Input from "@mui/material/Input";
import { useState } from 'react';

export default function SearchBar({isNavbar, placeholder}) {
    const [input, setInput] = useState("")
    return (
        <>
        {isNavbar ? 
            <div className='navSearch'>
                <img src={navSearchIcon}/>
                Search for a residence or address ...
            </div>
        :
            <div className='titleSearch'>
                <Input 
                    className='input-wrapper'
                    placeholder='Search for a residence or address ...'
                    disableUnderline={true}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <img src={navSearchIcon}/>
            </div>
        }
        </>
    );
}