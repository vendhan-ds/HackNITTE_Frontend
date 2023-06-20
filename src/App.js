import './App.css';
import 'axios';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {

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

export default App;
