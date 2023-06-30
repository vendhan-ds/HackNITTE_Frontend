import { useEffect, useState ,} from "react";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Navbar=()=>{
    return(
        <nav class="navbar">
            <Link to="/home">About</Link>
            <Link to="/leaderboard">Contact</Link>
        </nav>
    )
}
export default Navbar;