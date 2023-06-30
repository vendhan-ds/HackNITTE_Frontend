import { useEffect, useState } from "react";
import axios from 'axios';
import "./Navbar.css";


const Navbar=({onValueChange})=> {

    const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    const nam = event.target.name;
    const value=1;
    if(nam=="home")value=1;
    else if(nam=="rank")value=2;
    setInputValue(value);
    onValueChange(value); // Invoke the callback function and pass the value to the parent
  };

    return (
        <nav>
            <button name="home" onClick={handleInputChange}>Home</button>
            <button name="rank" onClick={handleInputChange}>Rankings</button>
        </nav>
    );
}

return Navbar;