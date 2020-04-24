import React from 'react';
import { render } from '@testing-library/react';

export default class Menu extends React.Component<{}, {}> {
    render() {
        return (
            <div>
                <div className="menu spin circle" onClick={e => console.log("test")}>
                    <img className="burger" src={require("../assets/burger2.png")} alt="logo" />
                </div>
                <div className="menuinfo" >
                    <div className="linkedin">
                        <img
                            style={{ width: 30, height: 30, margin: 5 }}
                            src={require("../assets/linkedin.png")}
                            alt="logo" />
                        <a className="link"
                            href={`https://www.linkedin.com/in/lukas-oscipovsky-612326aa/`} >Oscipovsky</a>
                    </div>
                    <div className="email">
                        <img
                            style={{ width: 30, height: 30, margin: 5 }}
                            src={require("../assets/gmail.jpg")}
                            alt="logo" />
                        <label className="link">lukas.oscipovsky@gmail.com</label>
                    </div>
                    <div className="mobile">
                        <img
                            style={{ width: 30, height: 30, margin: 5 }}
                            src={require("../assets/mobile.png")}
                            alt="logo" />
                        <label className="link">+421915101566</label>
                    </div>
                </div>
            </div >
        );
    }
}