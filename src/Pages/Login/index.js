import { useEffect, useState } from "react";
import axios from 'axios';
import './login.css';
import hacknitte from '../../Images/hacknitte.png'
import show from '../../Images/show.png'
import hide from '../../Images/hide.png';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const login = async() => {
    let data = {'username' : email, 'password' : password};
    let req = await axios.post('/api/auth/login',data);
    req = req.data.res;
    if(req){
      navigate('/home');
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    login();
    // const emailPattern  = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;

    // if(!email.match(emailPattern)){
    //   alert("Invalid Email");
    //   return;
    // }
    // authentication here
  };
    // const [text, setText] = useState("");
  
    // const getTest = async () => {
    //   let t = await axios.get("/api/test");
    //   setText(t.data.data);
    // }
  
    // useEffect(() => {
    //   getTest();
    // }, []);
  
    return (
      <div className="App">
      <div className="bg-animation">
                <div id="stars"></div>
                <div id="stars2"></div>
                <div id="stars3"></div>
                <div id="stars4"></div>
            </div>
        {/* <h1>{text}</h1> */}
        <div className="title-logo">
        {/* <div className="logo"><img className="image-hack" src={hacknitte} alt="Logo"/></div> */}
        {/* <div className="hacknitte">HACKNITTE</div> */}
        </div>
        
        <div className="cardReg">
        <h1 className="welcome">WELCOME BACK</h1>
        <h4 className="login-text">Login to your account</h4>
        <form onSubmit={handleSubmit}>
          <label className="label">Username</label>
          <div className="input-wrapper">
          
            <input
              required="true"
              type="text"
              id="text"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <label>Password</label>

          <div className="input-wrapper">
            <input
            required="true"
              type={showPassword ? 'text' : 'password'}
              id="password"
              value={password}
              onChange={handlePasswordChange}
            />
            <button className="password-toggle" onClick={togglePasswordVisibility}>
              <img
                className="password-eye"
                src={showPassword ? hide :  show}
                alt="Toggle Password Visibility"
              />
            </button>
          </div>
          <div className="no-account-div">
          <Link className="no-account" style={{
            textDecoration:"None"
          }} to="/register"> Don't have an account?</Link>
          </div>
          
          <button type="submit" className="login-btn">
            <p className="login"><b>Log in</b></p>
          </button>
        </form>
      </div>
      </div>
    );
  }
  
export default Login;