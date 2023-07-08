import { useEffect, useState } from "react";
import axios from 'axios';
import { Paper,Card,Grid, Image, Text, Badge, Button, Group,Divider, RingProgress } from '@mantine/core';
import { HeaderTabs } from "../../Components/header";
import "./profile.css"
import { async } from "q";


const Profile = () => {
    const [data,setdata]=useState({
        name:"John Doe",
        roll:106121039,
        dept:"CSE",
        batch : "2025",
        codechef:"JohnChef",
        codeforces:"JohnCodes",
        leetcode:"coderJohn",
        contributions:0,
        contests:0,
        rating:4859,
        deptrank:13,
        overallrank:23,
        batchRank : 4,
    })

    const getDetails = async() => {
        let res = await axios.get("/api/auth/getUserDetails");
        res = res.data.data;
        setdata({
            name : res[0],
            roll : res[2],
            dept : 'pending',
            batch : 'pending',
            codechef : res[3],
            codeforces : res[4],
            leetcode : res[5],
            rating : parseInt(res[6]) + parseInt(res[7]) + parseInt(res[8]),
            deptrank : '-',
            overallrank : '-',
            batchRank : '-',
            contributions : '-',
            contests : '-',
        })
    }

    useEffect(() => {
        getDetails();
    },[])

    return (
        <div>
            <HeaderTabs></HeaderTabs>
            <div className="maincontent">
                <div className="details">
                    <div>
                        <Text align="left" style={{fontSize:"200%",fontWeight:"400"}} >{data.name}</Text>
                    <hr></hr>
                    </div>
                    <div className="data">
                    <div className="left">
                        
                    
                    <br></br>
                        <Text align="left">ROLL NO : {data.roll}</Text>
                        <br></br>
                        <Text align="left">DEPARTMENT : {data.dept}</Text>
                        <br></br>
                        <Text align="left">BATCH : {data.batch}</Text>
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
      thickness={30} label={<Text size="md" align="center">{data.rating}</Text>} sections={[
          { value: 50, color: 'cyan', tooltip: 'Codechef' },
          { value: 25, color: 'orange', tooltip: 'codeforces' },
          { value: 25, color: 'grape', tooltip: 'leetcode' },
        ]}
                        />
                    </div>
                    </div>
                    
                </div>
                <div className="stats">
                    <div style={{paddingTop:"10%"}}>
                        <p>Total rating</p>
                        <p style={{fontSize:"200%",letterSpacing:"1px", marginBottom : "2rem"}}><span className="blue">{data.rating}</span></p>

                        <div style={{display:"flex",justifyContent:"space-between",marginLeft:"5%",marginRight:"5%",marginBottom:"10%"}}>
                            <div>
                                <p style={{fontSize:"150%",letterSpacing:"1px"}}><span className="blue">{data.deptrank}</span></p>
                                <p>Dept rank</p>
                            </div>
                            <div>
                                <p style={{fontSize:"150%",letterSpacing:"1px"}}><span className="blue">{data.overallrank}</span></p>
                                <p>Overall</p>
                            </div>
                            <div>
                                <p style={{fontSize:"150%",letterSpacing:"1px"}}><span className="blue">{data.batchRank}</span></p>
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