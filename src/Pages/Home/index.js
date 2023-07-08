import { useEffect, useState } from "react";
import axios from 'axios';
import { Paper,Card,Grid, Image, Text, Badge, Button, Group,Divider,Notification } from '@mantine/core';
import { HeaderTabs } from "../../Components/header";
import "./home.css"
import { Link } from "react-router-dom";

const Home=()=>{
    const [contests,setContest]=useState([])
    const [log, setLog] = useState(1);
    useEffect(() => {
    const timer = setTimeout(() => {
      setLog(0);
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, []);
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
        <Link target={"_blank"} style={{
            textDecoration:"None",color:"inherit"
          }} to={item.link}>
            <Card className="card" key={index} shadow="sm" radius="sm" style={{backgroundColor:"rgba(0, 0, 0, 0.2)", padding:"1rem",borderColor:"#4ecdd4", borderWidth:"1.5px",color:"white",textAlign :"left", height : '9rem' }} withBorder>
                <div style={{display:"flex",justifyContent:"flex-end"}}>
                    <Badge radius="none" variant="gradient" gradient={{ from: 'transparent', to: '#4ecdd4', deg: 120 ,opacity:"0.5"}} style={{position : "absolute", right : "0rem", top : "0.5rem" }}>
                    {item.type}
                    </Badge>
                </div>
                
                    <Text weight={500}  style={{marginTop : "1rem"}}>{item.name}</Text>
                    
                <Text size="sm" style={{marginTop : "0.5rem"}}>
                    DATE : <span className="blue">{item.date}</span>
                </Text>
                <Text size="sm" >
                    TIME : <span className="blue">{item.details}</span>
                </Text>
            </Card>
          </Link>
            
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
                        {contests.length == 0?<h3>Loading...</h3>:items}
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
            {log ?(
      <Notification style={{
        position:"absolute",
        right:"5rem",
        bottom:"5rem"
      }}
        color="teal"
        title="Login successful."
        description="Please check your credentials"
        onClose={()=>setLog(0)}
        position="bottom-right"
        withCloseButton
        
      />
    ):(<></>)}
        </div>
    )
}

export default Home;