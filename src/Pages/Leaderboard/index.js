import './styles.css';
import { Pagination } from '@mantine/core';
import { useState } from 'react';
import { Bars,UserBar } from '../../Components';



const LeaderBoard = () => {
    const [activePage, setPage] = useState(1);
    let data = {"rank" : 1, "userName" : "HARRISH", "score" : 2340, "dept" : "CSE"};
    return (
        <>  <div className="bg-animation">
                <div id="stars"></div>
                <div id="stars2"></div>
                <div id="stars3"></div>
                <div id="stars4"></div>
            </div>
            <div className="container">
            <div className='leaderboard'>
                <UserBar userRankDetails={data} />
                <Bars data = {data} />
                <Bars data = {data} />
                <Bars data = {data} />
                <Bars data = {data} />
                <Bars data = {data} />
                <Bars data = {data} />
                <Bars data = {data} />
                <Bars data = {data} />
                <Bars data = {data} />
                <Bars data = {data} />
                <Bars data = {data} />
                <Bars data = {data} />
                <Bars data = {data} />
                <Bars data = {data} />
                <Bars data = {data} />
                <Bars data = {data} />
                <Bars data = {data} />
                <Bars data = {data} /><Bars data = {data} />
                <Bars data = {data} />


            </div>
            </div>
            <div className='pageflex'>
            <Pagination value={activePage} className='page' onChange={setPage} styles={(theme) => ({
                control: {
                    '&[data-active]': {
                        backgroundImage: theme.fn.gradient({ from: '#CC1B62', to: '#39317B' }),
                    },
                    '&&:hover': {
                        backgroundColor : '#EFEFEF22',
                    },
                    backgroundColor : "#EFEFEF44",
                    border : 'none',
                    color : 'white'
                },
                dots : {
                    backgroundColor : "#EFEFEF44",
                    border : 'none',
                    color : 'white'
                },
        
      })} total={10} />;
            </div>
            
        </>
       
    )

}

export default LeaderBoard;