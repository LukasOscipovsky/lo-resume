import React from 'react';
import './App.css';
import Layout from './components/Layout'
import Links from './components/Links'

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

const info = <div className="menu">
  <img className="burger" src={require("./assets/burger.png")} alt="logo" />
  <div className="info">
    <label>Test</label>
  </div>
</div>


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
      {info}
    </div>
    /* <div className="data">
      <div className="skills">
        <Layout background="white" backgroundImage="OG-Spring.png" size={150} gridColumn={1 / 2} />
        <Layout background="white" backgroundImage="springdata.png" size={150} gridColumn={1 / 3} />
        <Layout background="white" backgroundImage="graphql.png" size={150} gridColumn={1 / 3} />
        <Layout background="white" backgroundImage="github-logo.jpg" size={150} gridColumn={1 / 3} />
        <Layout background="white" backgroundImage="springboot.jpg" size={150} gridColumn={1 / 3} />
        <Layout background="white" backgroundImage="Java-Logo-Wallpaper.jpg" size={300} gridColumn={1 / 3} />
        <Layout background="white" backgroundImage="typescript.png" size={75} gridColumn={1 / 3} />
        <Layout background="white" backgroundImage="kotlin.png" size={75} gridColumn={1 / 3} />
        <Layout background="white" backgroundImage="python.png" size={75} gridColumn={1 / 3} />
        <Layout background="white" backgroundImage="RabbitMQ.png" size={150} gridColumn={1 / 3} />
        <Layout background="white" backgroundImage="hibernate.jpg" size={150} gridColumn={1 / 3} />
        <Layout background="white" backgroundImage="react.png" size={75} gridColumn={1 / 3} />
        <Layout background="white" backgroundImage="docker.png" size={75} gridColumn={1 / 3} />
      </div>
      <div className="personal">
        <label>test</label>
      </div> */
  );
}
