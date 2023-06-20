import { useEffect, useState } from "react";
import axios from 'axios';

//This is a test.
function Login() {

    const [text, setText] = useState("");
  
    const getTest = async () => {
      let t = await axios.get("/api/test");
      setText(t.data.data);
    }
  
    useEffect(() => {
      getTest();
    }, []);
  
    return (
      <div className="App">
        <h1>{text}</h1>
      </div>
    );
  }
  
export default Login;