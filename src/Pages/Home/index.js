import { useEffect, useState } from "react";
import axios from 'axios';
import { Paper,Card,Grid, Image, Text, Badge, Button, Group,Divider } from '@mantine/core';
import { HeaderTabs } from "../../Components/header";
import "./home.css"

const Home=()=>{

    const [contests,setContest]=useState([])

    const getdata=async()=>{
        let t=await axios.get("/api/getContests");
      console.log(t.data.data)
      const lc=t.data.data.leetcode;
      const cc=t.data.data.codechef;
      const cf=t.data.data.codeforces;
      //const obj={};
      const l=[];
      lc.forEach(element => {
        
        const obj={
            name:element.name,
            date:element.start_time.slice(0,10),
            type:"leetcode",
            details:element.start_time.slice(11,19)+" Z",
            link:element.url
        }
        l.push(obj) 
        //setContest(contests.push(obj))
        
        
      });
      cf.forEach(element => {
        
        const obj={
            name:element.name,
            date:element.start_time.slice(0,10),
            type:"codeforces",
            details:element.start_time.slice(11,19)+" Z",
            link:element.url
        }
        l.push(obj)
        //setContest(contests.push(obj))
        
        
      });
      cc.forEach(element => {
        
        const obj={
            name:element.name,
            date:element.start_time.slice(0,10),
            type:"codechef",
            details:element.start_time.slice(10),
            link:element.url
        }
        l.push(obj)
        //setContest(contests.push(obj))
        
        
      });
      setContest(l);

    }
    useEffect(() => {
      getdata();
    }, []);

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
    

    const items2=hackthn.map((item,index)=>(
        <Grid.Col span={3}>
            <a style={{textDecoration:"None",color:"inherit"}} href={`${item.link}`}>
            <Card className="card" key={index} shadow="sm" radius="sm" style={{backgroundColor:"rgba(0, 0, 0, 0.4)", padding:"5%",borderColor:"#4ecdd4", borderWidth:"1.5px",color:"white"}} withBorder >
                <Group position="apart" mt="md" mb="xs">
                    <Text weight={500}>{item.name}</Text>
                    
                </Group>
                <br></br>
                <Text size="sm" >
                    Date:{item.date}
                </Text>
                <br></br>
                

                
            </Card></a>
        </Grid.Col>
    ))

    const items=contests.map((item,index)=>(
        <Grid.Col span={3}>
            <a style={{textDecoration:"None",color:"inherit"}} href={`${item.link}`}>
            <Card className="card" key={index} shadow="sm" radius="sm" style={{backgroundColor:"rgba(0, 0, 0, 0.4)", padding:"5%",borderColor:"#4ecdd4", borderWidth:"1.5px",color:"white" }} withBorder>
                <div style={{display:"flex",justifyContent:"flex-end"}}>
                    <Badge radius="xs" variant="gradient" gradient={{ from: 'black', to: '#4ecdd4', deg: 120 ,opacity:"0.7"}}>
                    {item.type}
                    </Badge>
                </div>
                
                <Group position="apart" mt="md" mb="xs">
                    <Text weight={500}>{item.name}</Text>
                    
                </Group>
                <br></br>
                <Text size="sm">
                    Date:{item.date}
                </Text>
                <br></br>
                <Text size="sm" >
                    {item.details}
                </Text>
                <br></br>
            </Card></a>
        </Grid.Col>
        
    ))

    return (
        <div className="main">
            <HeaderTabs></HeaderTabs>
            
            <div className="content">
                {/* <div className="announcements">
                    <h3>Announcements</h3>

                </div> */}
                <div className="upcomingContests">
                    <h1 style={{textAlign:"left"}}>UPCOMING CONTESTS </h1>
                    <Grid  gutter="md">
                        {items}
                    </Grid>
                    
                </div>
                <br></br>
                <Divider size="md" color="#4ecdd4"></Divider>
                <div className="upcomingHackathons">
                    <h3 style={{textAlign:"left"}}>UPCOMING HACKATHONS</h3>
                    <Grid  gutter="md">
                        {items2}
                    </Grid>
                </div>
                
            </div>
            
        </div>
    )
}

export default Home;