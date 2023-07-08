
import { useState,useEffect } from "react";
import "./styles.css";
import axios from "axios";
import { Button,Textarea,SegmentedControl,Select, Title } from '@mantine/core';


const NativeContest = () => {

    const [problems,setproblems] =  useState([['A','Strings are beautiful'],['B','Help Texy'],['C','Maximize Cost'],['D','Texy and his trees']]);
    const [prob,setprob] = useState("-");
    const [dict,setdict] = useState({});
    const [lang,setlang] = useState("70");
    const [status,setStatus] = useState({"A" : 0, "B" : 0, "C" : 0,"D" : 0});

    const updateProblem = (problem) => {
        if(dict[problem] == undefined){
            return 0;
        }
        document.querySelector("#desc").innerHTML = dict[problem][1];
        document.querySelector("#input").innerHTML = dict[problem][2];
        document.querySelector("#output").innerHTML = dict[problem][3];
        document.querySelector("#samples").innerHTML = dict[problem][4];
    }

    const fetchProblem = async() => {
        let req = await axios("/api/nativeContest/getContests");
        let res = req.data.data;
        let temp = [];
        console.log(dict);
        for(let i of problems){
            temp.push([i[0],res[i[0]][0]]);
        }
        setproblems(temp);
        setdict(res);
    }

    const fetchDetails = async() => {
        let req = await axios.get("/api/nativeContest/getContestName");
        console.log(req);
        document.querySelector("#problemName").innerText = req.data.data;
    }

    const getStatus = async() => {
        let req = await axios.get("/api/nativeContest/status");
        let t2 = req.data.data;
        setStatus({"A" : t2[0], "B" : t2[1], "C" : t2[2], "D" : t2[3]});
    }

    useEffect(() => {
        fetchDetails();
        fetchProblem();
        updateProblem('A');
        getStatus();
    },[])

    const setproblem = (problem) => {
        setprob(problem);
        updateProblem(problem);
    }

    const submit = async() =>{
        document.querySelector('#verdict').innerText = "Running TestCases";
        let data = {'lang' : lang, 'prob' : prob, 'code' : document.querySelector('#code').value};
        let res = await axios.post("/api/nativeContest/submit",data);
        document.querySelector("#verdict").innerText = res.data.data;
        let t2 = res.data.Status;
        setStatus({"A" : t2[0], "B" : t2[1], "C" : t2[2], "D" : t2[3]});
    }
    
    return (
        <div className= "contestcontainer">
            <div className="bg-animation">
                <div id="stars"></div>
                <div id="stars2"></div>
                <div id="stars3"></div>
                <div id="stars4"></div>
            </div>
            <h1 id="problemName">Loading</h1>
            {/* <div className="problemBox">
                {problems.map(problem => 
                    (<div className="problemStatus" id={problem[0]} onClick={() => {setproblem(problem[0])}}>
                    { problem[0] == prob?<h3 className="done">{problem[0] + "." + problem[1]}</h3>:<h3>{problem[0] + "." + problem[1]}</h3>}
                    </div>) ) }
                    
            </div> */}
            
            <SegmentedControl size="lg" onChange={(e) => setproblem(e)}
                        data={[
                            { label: problems[0][1], value: 'A' },
                            { label: problems[1][1], value: 'B' },
                            { label: problems[2][1], value: 'C' },
                            { label: problems[3][1], value: 'D' },
                        ]}
                        styles = {(theme) => ({
                            root : {
                                backgroundColor : '#EFEFEF11',
                                
                            },
                            label : {
                                color : 'white',
                                '&[data-active]' : {
                                    color : "white",
                                },
                                '&:hover' : {
                                    color : "#EFEFEF22",
                                }
                            },
                            indicator : {
                                backgroundImage : theme.fn.gradient({ from: '#24C6DC', to: '#514A9D' }),
                            },
                            

                        })}
                        />
            {status[prob]?<Title order={3} c = "green" style={{marginTop : "1rem"}}>Accepted</Title>:<br></br>}
            <div className="problemStatement">
                <h3>Problem Statement</h3>
                <p id="desc">Click any question to view</p>
                <h3>Input</h3>
                <p id="input">Click any question to view</p>
                <h3>Output</h3>
                <p id="output">Click any question to view</p>
                <h3>Samples</h3>
                
                <div id="samples">
                Click any question to view
                </div>
            </div>
            <div className="codeSpace">
                
            <Textarea
                id="code"
                placeholder="Type your code"
                label="Submit your code"
                minRows={15}
                styles = {(theme) => ({
                            input : {
                                backgroundColor : '#EFEFEF11',
                                color : 'white',
                                border : 'none',
                            },
                            label : {
                                color : "white",
                            },
                            

                        })}
                />
                
                <Select
                    label="Choose Language"
                    placeholder="Pick one"
                    onChange = {(e) => setlang(e)}
                    data={[
                        { value: '70', label: 'pypy3' },
                        { value: '61', label: 'c++ 17' },
                    ]}
                    styles = {(theme) => ({
                            input : {
                                backgroundColor : '#EFEFEF11',
                                color : 'white',
                                border : 'none',
                            },
                            label : {
                                color : "white",
                            },
                            root : {
                                width : '30%',
                                display : 'inline-block',
                                marginRight : '2rem',
                            },
                            dropdown : {
                                backgroundColor : '#EFEFEF11',
                                color : 'white',
                                border : "none",
                            },
                            item : {
                                color : "white",
                              '&[data-selected]' : {
                                '&, &:hover': {
                                    backgroundImage: theme.fn.gradient({ from: '#24C6DC', to: '#514A9D' }),
                                    color: "white",
                                    },
                              },
                              '&[data-hovered]': {
                                backgroundColor : "#EFEFEF11",
                              },
                            }

                        })}
                    />
                    
                <Button onClick={submit} variant="gradient" gradient={{ from: '#24C6DC', to: '#514A9D' }}>Submit</Button>
                <p id="verdict"></p>
            </div>
            
        </div>
    )
}


export default NativeContest;