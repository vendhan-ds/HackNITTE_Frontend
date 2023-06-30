import { useEffect, useState } from "react";
import axios from 'axios';
import { Paper,Card,Grid, Image, Text, Badge, Button, Group,Divider, RingProgress } from '@mantine/core';
import { HeaderTabs } from "../../Components/header";
import "./profile.css"


const Profile = () => {
    const [data,setdata]=useState({
        name:"John Doe",
        roll:106121039,
        dept:"cse",
        codechef:"JohnChef",
        codeforces:"JohnCodes",
        leetcode:"coderJohn",
        contributions:0,
        contests:0,
        rating:4859,
        deptrank:13,
        overallrank:23,
        batch:4
    })


    return (
        <div>
            <HeaderTabs></HeaderTabs>
            <div className="maincontent">
                <div className="details">
                    <div>
                        <Text align="left" style={{fontSize:"300%",fontWeight:"400"}} >{data.name}</Text>
                    <Divider></Divider>
                    </div>
                    <div className="data">
                    <div className="left">
                        
                    
                    <br></br>
                        <Text align="left">ROLL NO : {data.roll}</Text>
                        <br></br>
                        <Text align="left">DEPARTMENT : {data.dept}</Text>
                        <br></br>
                        <Text align="left">CODECHEF HANDLE : {data.codechef}</Text>
                        <br></br>
                        <Text align="left">CODEFORCES HANDLE : {data.codeforces}</Text>
                        <br></br>
                        <Text align="left">LEETCODE HANDLE : {data.leetcode}</Text>
                        <br></br>
                        <Text align="left">CONTRIBUTIONS : {data.contributions}</Text>
                        <br></br>
                        <Text align="left">CONTESTS : {data.contests}</Text>
                        
                    </div>
                    <div className="right">
                        <RingProgress style={{marginTop:"30%"}} size={200}
      thickness={30} label={<Text size="md" align="center">4859</Text>} sections={[{ value: 30, color: 'cyan' },
                        { value: 50, color:  'orange' },{ value: 20, color: 'grape' },]}
                        />
                    </div>
                    </div>
                    
                </div>
                <div className="stats">
                    <div style={{paddingTop:"10%"}}>
                        <p>Total rating</p>
                        <p style={{fontSize:"200%",letterSpacing:"1px"}}>{data.rating}</p>

                        <div style={{display:"flex",justifyContent:"space-between",marginLeft:"5%",marginRight:"5%",marginBottom:"10%"}}>
                            <div>
                                <p style={{fontSize:"150%",letterSpacing:"1px"}}>{data.deptrank}</p>
                                <p>Dept rank</p>
                            </div>
                            <div>
                                <p style={{fontSize:"150%",letterSpacing:"1px"}}>{data.overallrank}</p>
                                <p>Overall</p>
                            </div>
                            <div>
                                <p style={{fontSize:"150%",letterSpacing:"1px"}}>{data.batch}</p>
                                <p>Batch</p>
                            </div>

                        </div>
                    </div>
                </div>
                

            </div>
        </div>
    )
}

export default Profile;