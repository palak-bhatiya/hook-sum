import React from 'react';
import {useState} from 'react'
import './App.css';

function App() {
  const [num1,setnum1] = useState('');
  const [num2,setnum2] = useState('');
  const [ans,setans] = useState('');
  const [ans1,setans1] = useState('');

  function sum()
  {
    var a = num1;
    var b = num2;
    var c = parseInt(a) + parseInt(b);
    setans(c);
  }
  function sum1()
  {
    var a = num1;
    var b = num2;
    var c = parseInt(a) + parseInt(b);
    setans1(c);
  }
  function sub()
  {
    var a = num1;
    var b = num2;
    var c = parseInt(a) - parseInt(b);
    setans1(c);
  }
  function mul()
  {
    var a = num1;
    var b = num2;
    var c = parseInt(a) * parseInt(b);
    setans1(c);
  }
  function div()
  {
    var a = num1;
    var b = num2;
    var c = parseInt(a) / parseInt(b);
    setans1(c);
  }
  return (
    <div className="App">
      <input type="text" onChange={(e) => {setnum1(e.target.value)}}/>
      <br />
      <input type="text" onChange={(l) => {setnum2(l.target.value)}}/>
      <br />
      <input type="button" value="+" onClick={sum} />
      <br />
      <input type="text" value={ans} />
      <br />
      <br />
      <input type="text" onChange={(e) => {setnum1(e.target.value)}}/>
      <br />
      <input type="text" onChange={(l) => {setnum2(l.target.value)}}/>
      <br />
      <input type="button" value="+" onClick={sum1} />
      <input type="button" value="-" onClick={sub} />
      <input type="button" value="*" onClick={mul} />
      <input type="button" value="/" onClick={div} />
      <br />
      <input type="text" value={ans1} />
    </div>
  );
}

export default App;
