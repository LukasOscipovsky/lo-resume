import React from 'react';
import './App.css';
import Menu from './components/Menu'
import MainPage from './components/pages/MainPage'
import JavaPage from './components/pages/JavaPage'

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

interface State {
  i: number;
}
export default class App extends React.Component<{}, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      i: 0
    }
  }

  r() {
    console.log(this.state.i)
    if (this.state.i === 0) {
      return <div>
        <MainPage name={me.name} role={me.role} id={0} triggerRender={j => this.setState({ i: j })} />
        <Menu info={me.info} />
      </div>
    } else {
      return <div>
        <JavaPage name={me.name} role={me.role} id={1} triggerRender={j => this.setState({ i: j })} />
        <Menu info={me.info} />
      </div>
    }

  }

  render() {
    return (
      this.r()
    );
  }
}
