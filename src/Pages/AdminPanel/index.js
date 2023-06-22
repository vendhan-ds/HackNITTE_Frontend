import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./styles.module.css";


const AdminPanel = () => {
    const navigate = useNavigate();
    const [admin,setadmin] = useState(false);

    const isAdmin = async()=>{
        let res = await axios.get("/api/admin/isAdmin");
        res = res.data.data;
        setadmin(res);
        if(res == false){
            navigate('/admin/login')
        }
    }

    const query = async() => {
        document.querySelector("#result").textContent = "Querying..";
        let data = {"query" : document.querySelector("#query").value, "key" : document.querySelector("#key").value};
        let res = await axios.post("/api/admin/query",data);
        document.querySelector("#result").textContent = res.data.data;
    }

    useEffect(() => {
        isAdmin();
    },[])

    return (
        <div>
            {admin && <div>
                <h1>Admin Stuff</h1>
                <textarea id="query" rows="4" cols="50" placeholder="query"></textarea>
                <br></br>
                <input type="password" id="key" placeholder="key"></input>
                <button onClick={query}>Submit</button>
                <br></br>
                <br></br>
                <textarea id="result" rows="10" cols="50" placeholder="result" disabled = "true"></textarea>
            </div>}
        </div>
        
    )
}

export default AdminPanel;