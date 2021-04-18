import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

var stringInput = "";
var strList = [];

function App() {
  const [name, setName] = useState('');
  const [replacement, setReplacement] = useState('');
  const [noReplacement, setNoReplacement] = useState('');

  const withReplace = () => {
    const strList = name.split(" ");
    var randStr = strList[Math.floor(Math.random() * strList.length)];
    setReplacement(randStr);
  };

  const withoutReplace = () => {
    var strList = name.split(" ");
    var randStr = strList[Math.floor(Math.random() * strList.length)];
    setNoReplacement(randStr);

    const newList = [].concat(strList);
    newList.splice(strList.indexOf(randStr), 1);
    strList = newList;

    setName(strList.join(" "));
  };

  const clear = () => {
    setName('');
    setReplacement('');
    setNoReplacement('');
  };

  const handleNameInput = (e) => {
    setName(e.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1> The World's Most Advanced Text Processor in React </h1>
        <p>
          I know you came to this website again because you were too lazy to sort words by yourself. Now give me your list of strings in the box below!
        </p>

        <label id="inputLabel" for="stringInput">Your Input:</label>
        <input type="text" id="stringInput" onChange={handleNameInput} value={name} name="Your Input" size="100"></input>


        <button type="submit" name="operation" value="With Replacement" onClick = {withReplace}>With Replacement</button>
        <button type="submit" name="operation" value="Without Replacement" onClick = {withoutReplace}>Without Replacement</button>
        <button type="submit" name="operation" value="Clear Text Fields" onClick = {clear}>Clear Text Fields</button>

        <div className="output">
          <p>With Replacement: {replacement} </p>
        </div>
        <div className="output">
          <p>Without Replacement: {noReplacement} </p>
        </div>

        <p> Collaboration summary: Minhyuk worked on implementing the basic algorithms for this website, such as returning a string with or without replacement. Harshil worked on setting up the project environment & structure, and also deploying to Heroku. Sid came up with the design of the website. </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
