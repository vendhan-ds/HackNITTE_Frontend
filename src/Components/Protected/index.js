
import { useEffect,useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Protected = (props) =>{
    const navigate = useNavigate();
    const {children} = props;
    const [logged, setlogged] = useState(false);
    
    const getLogin = async() => {
        let login = await axios.get("/api/auth/isLoggedIn");
        setlogged(login.data.data);
        if(login.data.data === false){
            navigate('/');
        }
    }

    useEffect(() => {
        getLogin();
    },[])

    return logged? children: <h1>Loading</h1>;
}

export default Protected;