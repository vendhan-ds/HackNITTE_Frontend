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
      <div className='title'>
        <h1>HackNITTe</h1>
      </div>
      
      <nav className='containerNav'>
        
        <ul className='pages'>
          <li value="home"><Link style={{
            textDecoration:"None",color:"inherit"
          }} to="/home"> Home</Link></li>
          <li value="learn"><Link style={{
            textDecoration:"None",color:"inherit"
          }} to="/learn"> Learn</Link></li>
          <li value="compete"><Link style={{
            textDecoration:"None",color:"inherit"
          }} to="/contest"> Compete</Link></li>
          <li value="about"><Link style={{
            textDecoration:"None",color:"inherit"
          }} to="/leaderboard"> LeaderBoard</Link></li>
        </ul>
        <div className='profilepic'>
          <Link style={{
            textDecoration:"None",color:"inherit"
          }} to="/profile"><img className='profilepic' src="./profile.svg"/></Link>
        </div>
        
        
      </nav>
    </div>
  );
}