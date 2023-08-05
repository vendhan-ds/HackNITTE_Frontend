import { useState,useEffect } from "react";
import "./styles.css";
import axios from "axios";
import { Button,Textarea,SegmentedControl,Select, Title,Text } from '@mantine/core';
import { HeaderTabs } from "../../Components/header";
import { Link } from 'react-router-dom';

const Contest=()=>{
    const data={
        time:"July 15, 2023 23:30:00",
        name:"CONTEST 101",
        isActive:1,
                     
    }
    const [timeRem,setTimeRem]=useState("");
    useEffect(()=>{
        
        const setTime=setInterval(()=>{
            const d=new Date(data.time);
            const cur=new Date();
            const x=Math.abs((d-cur));
        
        const hours=Math.floor(((x)/(1000*60*60)));
        const minutes=Math.floor(((x)/(1000*60))%60);
        const seconds=Math.floor(((x)/(1000))%60);
            setTimeRem(` ${hours} hrs ${minutes} mins ${seconds} seconds`);
        },1000);

        return () => {
            clearInterval(setTime);
        };
        
    },[])
    const rules=`One user submitting with multiple accounts during a contest.
LCUS (leetcode.com) account and LCCN (leetcode-cn.com) account are considered to be separate accounts, even if both accounts belong to the same user.
Multiple accounts submitting similar code for the same problem. Creating unwanted disturbances which interrupt other users' participation in a contest. Disclosing contest solutions in public discuss posts before the end of a contest.
LeetCode heavily emphasizes on the justice and fairness of our contests. We have absolutely ZERO TOLERANCE for violation behaviors (such as plagiarism, cheating, etc). When a user is deemed violating contest rules, we will apply the following penalties on this user: First violation: LeetCoin amount resets to zero and a contest and discuss ban for 1 month. Second violation: Permanent account deactivation without appeal.
Furthermore, we encourage all participants to contribute to maintaining the justice and fairness of our contest. Users who submit valid violation report(s) will earn additional`

    

    return(
        <div >
            <HeaderTabs></HeaderTabs>
            <div className="contents">
                <h1 className="blue">{data.name}</h1>
                <h3>RULES</h3>
                <Text>
                    {rules}
                </Text>
                <br></br>
                <br></br>
                {data.isActive?(
                    <Link style={{
            textDecoration:"None",color:"inherit"
          }} to="/nativeContest">
                <div style={{display:"flex",justifyContent:"center"}}>
                    <Button> Start Contest</Button>
                </div>
                    
                    </Link>
                    
                    
                ):(
                    <Text size="xl" fw={500}>
                        STARTS IN:   <span className="blue">
                            {timeRem}
                        </span> 
                    </Text>
                )
                }
            </div>
        </div>
    )
}

export default Contest;