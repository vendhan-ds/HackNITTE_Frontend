import { useEffect, useState } from "react";
import axios from 'axios';
import { Paper,Card,Grid, Image, Text, Badge, Button, Group,Divider } from '@mantine/core';
import { HeaderTabs } from "../../Components/header";
import "./home.css"

const Home=()=>{
    const hackthn=[
        {
            name:"Flipkart grid 5.0",
            date:73783837,
        },
        {
            name:"Flipkart grid 6.0",
            date:93783837,
        }
    ]
    const contests=[
        {
            name:"biweekly",
            date:123,
            type:"leetcode",
            link:"hfigs@leetcode"
        },
        {
            name:"starter",
            date:129243,
            type:"codechef",
            link:"hfigs@leetcode"
        },
        {
            name:"codeTON",
            date:122233,
            type:"codeforces",
            link:"hfigs@leetcode"
        },
        {
            name:"starter",
            date:129243,
            type:"codechef",
            link:"hfigs@leetcode"
        },
        {
            name:"codeTON",
            date:122233,
            type:"codeforces",
            link:"hfigs@leetcode"
        }
    ]

    const [ann,setann] = useState("Announcement : ");

    const getann = async() => {
        let res = await axios.get('/api/announcement');
        setann("Announcement : " + res.data.data);
    }
    useEffect(() => {
        getann();
    },[])

    const items2=hackthn.map((item,index)=>(
        <Grid.Col span={3}>
            <Card className="card" key={index} shadow="sm" radius="sm" style={{backgroundColor:"rgba(0, 0, 0, 0.2)", padding:"1rem",borderColor:"#4ecdd4", borderWidth:"1.5px",color:"white",textAlign : 'left'}} withBorder >
                <Text weight={500}>{item.name}</Text>
                <Text size="sm" style={{marginTop : "1rem"}} >
                    Registration Ends on : <span className="blue">{item.date}</span>
                </Text>
                

                
            </Card>
        </Grid.Col>
    ))

    const items=contests.map((item,index)=>(
        <Grid.Col span={3}>
            <Card className="card" key={index} shadow="sm" radius="sm" style={{backgroundColor:"rgba(0, 0, 0, 0.2)", padding:"1rem",borderColor:"#4ecdd4", borderWidth:"1.5px",color:"white",textAlign :"left", height : '7rem' }} withBorder>
                <div style={{display:"flex",justifyContent:"flex-end"}}>
                    <Badge radius="xs" variant="gradient" gradient={{ from: 'transparent', to: '#4ecdd4', deg: 120 ,opacity:"0.5"}}>
                    {item.type}
                    </Badge>
                </div>
                
                    <Text weight={500}>{item.name}</Text>
                    
                <Text size="sm" style={{marginTop : "1rem"}}>
                    STARTS ON : <span className="blue">{item.date}</span>
                </Text>
                <Text size="sm" >
                    {item.details}
                </Text>
            </Card>
        </Grid.Col>
        
    ))

    return (
        <div className="main">
            <HeaderTabs></HeaderTabs>
            {/* <div className="bg-animation">
                <div id="stars"></div>
                <div id="stars2"></div>
                <div id="stars3"></div>
                <div id="stars4"></div>
            </div> */}
            <div className="content">
                <div className="announcements">
                    <p>{ann}</p>

                </div>
                <div className="upcomingContests">
                    <h2 style={{textAlign:"left"}}>UPCOMING CONTESTS </h2>
                    <hr></hr>
                    <Grid  gutter="md">
                        {items}
                    </Grid>
                    
                </div>
                <br></br>
                <div className="upcomingHackathons">
                    <h2 style={{textAlign:"left"}}>UPCOMING HACKATHONS</h2>
                    <hr></hr>
                    <Grid  gutter="md">
                        {items2}
                    </Grid>
                </div>
                
            </div>
            
        </div>
    )
}

export default Home;