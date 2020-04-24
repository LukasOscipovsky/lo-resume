import React from 'react';
import './App.css';
import Menu from './components/Menu'

const me = {
  name: "LUKAS OSCIPOVSKY",
  role: [
    "Software Engineer",
    "Developer",
    "Team Lead"
  ],
  info: {
    linkedin: "https://www.linkedin.com/in/lukas-oscipovsky-612326aa",
    email: "lukas.oscipovsky@gmail.com",
    mobile: "+421915101566"
  }
}


export default function App() {
  return (
    <div className="app">
      <div className="info">
        <label className="name">{me.name}</label>
        <label className="role">{me.role.join(",")}</label>
      </div>
      <div className="viewmore" onClick={e => alert("Clicked")}>
        <img className="arrow" src={require("./assets/doublearrow.png")} alt="logo" />
      </div>
      <Menu />
    </div>
  );
}
