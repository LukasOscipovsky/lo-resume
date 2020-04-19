import React from 'react';

export default class Layout extends React.Component<{}, {}> {
    render() {

        return (
            <div className="main">
                <div className="linkedin">
                    <img
                        style={{ width: 40, height: 40, margin: 5 }}
                        src={require("../assets/linkedin.png")}
                        alt="logo" />
                    <a className="link"
                        href={`https://www.linkedin.com/in/lukas-oscipovsky-612326aa/`} >Oscipovsky</a>
                </div>
                <div className="email">
                    <img
                        style={{ width: 40, height: 40, margin: 5 }}
                        src={require("../assets/gmail.jpg")}
                        alt="logo" />
                    <label className="link">lukas.oscipovsky@gmail.com</label>
                </div>
                <div className="mobile">
                    <img
                        style={{ width: 40, height: 40, margin: 5 }}
                        src={require("../assets/mobile.png")}
                        alt="logo" />
                    <label className="link">+421915101566</label>
                </div>
            </div>
        );
    }
}