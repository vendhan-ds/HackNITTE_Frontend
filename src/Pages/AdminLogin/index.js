import axios from "axios"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.module.css"

const Admin = () => {
    const navigate = useNavigate();

    const submit = async() => {
        
        let data = {"username" : document.querySelector('#username').value, "password" : document.querySelector("#password").value}
        console.log(data);
        let res = await axios.post("/api/admin/login",data);
        console.log(res);
        isAdmin();
    }

    const isAdmin = async()=>{
        let res = await axios.get("/api/admin/isAdmin");
        res = res.data.data;
        if(res == true){
            navigate('/admin/home')
        }
    }

    useEffect(() => {
        isAdmin();
    },[])

    return (
        <div>
            <input type="text" id="username"></input>
            <input type="password" id="password"></input>
            <button onClick={submit}>Submit</button>
        </div>
    )
}

export default Admin;