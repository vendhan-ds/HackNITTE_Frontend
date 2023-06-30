import { useEffect, useState } from "react";
// import axios from 'axios';
import './register.css';
import hacknitte from '../../Images/hacknitte.png'
import show from '../../Images/show.png'
import hide from '../../Images/hide.png';
function Register() {
  const [username, setuserName] = useState('');
  const [email, setEmail] = useState('');
  const [rollno, setrollno] = useState('');
  const [codechefId, setcodechefId] = useState('');
  const [codeforcesId, setcodeforcesId] = useState('');
  const [leetcodeId, setleetcodeId] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleuserNameChange = (e) => {
    setuserName(e.target.value);
  }
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlerollnoChange = (e) => {
    setrollno(e.target.value);
  };
  const handlecodechefIdChange = (e) => {
    setcodechefId(e.target.value);
  };
  const handlecodeforcesIdChange = (e) => {
    setcodeforcesId(e.target.value);
  };
  const handleleetcodeIdChange = (e) => {
    setleetcodeId(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  }

  

  const handleSubmit = (e) => {
    e.preventDefault();
    // const emailPattern  = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;

    // if(!email.match(emailPattern)){
    //   alert("Invalid Email");
    //   return;
    // }
    // authentication here
  };

    //  const [text, setText] = useState("");
    // const getTest = async () => {
    //   let t = await axios.get("/api/test");
    //   setText(t.data.data);
    // }
  
    // useEffect(() => {
    //   getTest();
    // }, []);
  
    return (
      // <div className="App">
      //   <h1>{Text}</h1>
      // </div>
      <div className="App">
      <div className="title-logo-register">
        <div className="logo"><img className="image-hack" src={hacknitte} alt="Logo"/></div>
        <div className="hacknitte">HACKNITTE</div>
        </div>
      <div className="card">
        <h1 className="welcome">HACKNITTE</h1>
        <h4 className="register-text">Register Here</h4>
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <input
              required="true"
              type="text"
              id="username"
              placeholder="Username"
              value={username}
              onChange={handleuserNameChange}
            />
          </div>
          <div className="input-wrapper">
            <input
              required="true"
              type="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className="input-wrapper">
            <input
              required="true"
              type="number"
              id="rollno"
              placeholder="Roll Number"
              value={rollno}
              onChange={handlerollnoChange}
            />
          </div>
          <div className="input-wrapper">
            <input
            required="true"
              type="text"
              id="codechefId"
              placeholder="Code Chef ID"
              value={codechefId}
              onChange={handlecodechefIdChange}
            />
          </div>
          <div className="input-wrapper">
            <input
                required="true"
              type="text"
              id="codeforcesId"
              placeholder="Code Forces ID"
              value={codeforcesId}
              onChange={handlecodeforcesIdChange}
            />
          </div>
          <div className="input-wrapper">
            <input
            required="true"
              type="text"
              id="leetcodeId"
              placeholder="Leetcode ID"
              value={leetcodeId}
              onChange={handleleetcodeIdChange}
            />
          </div>
          <div className="input-wrapper">
            <input
            required="true"
              type={showPassword ? 'text' : 'password'}
              id="password"
              placeholder="Password"
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
          <div className="input-wrapper">
            <input
            required="true"
              type={showConfirmPassword ? 'text' : 'password'}
              id="confirmPassword"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />
            <button className="password-toggle" onClick={toggleConfirmPasswordVisibility}>
              <img
              className="password-eye"
                src={showConfirmPassword ? hide :show}
                alt="Toggle Password Visibility"
              />
            </button>
          </div>
          <button type="submit" className="register-btn">
           <p className="register">Register</p>
          </button>
        </form>
      </div>
      </div>
      
    );
  }
  
export default Register;