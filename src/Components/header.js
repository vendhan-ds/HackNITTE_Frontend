import { useState } from 'react';
import {
  
  Tabs,
  
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import "./header.css";
import { Link } from 'react-router-dom';







export function HeaderTabs() {
 // const { classes, theme, cx } = useStyles();
  const [opened, { toggle }] = useDisclosure(false);
  const [userMenuOpened, setUserMenuOpened] = useState(false);
  
 

  return (
    <div className='headerdiv'>
      <nav className='container'>
        <h1>HackNITT</h1>
        <ul>
          <li value="home"><Link style={{
            textDecoration:"None",color:"inherit"
          }} to="/home"> Home</Link></li>
          <li value="learn"><Link style={{
            textDecoration:"None",color:"inherit"
          }} to="#"> Learn</Link></li>
          <li value="compete"><Link style={{
            textDecoration:"None",color:"inherit"
          }} to="#"> Compete</Link></li>
          <li value="about"><Link style={{
            textDecoration:"None",color:"inherit"
          }} to="#"> About</Link></li>
        </ul>
        <Link style={{
            textDecoration:"None",color:"inherit"
          }} to="/prof"><img className='profilepic' src="./profile.jpg"/></Link>
        
      </nav>
    </div>
  );
}