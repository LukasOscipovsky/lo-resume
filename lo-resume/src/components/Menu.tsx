import React from 'react';

interface Props {
    info: {
        linkedin: string;
        email: string;
        mobile: string;
    };
}

interface State {
    menuVisible: boolean;
}

export default class Menu extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            menuVisible: false
        }
    }

    render() {
        return (
            <div>
                <div className="menu spin circle" onClick={e => this.setState({ menuVisible: !this.state.menuVisible })}>
                    <img className="burger" src={require("../assets/burger2.png")} alt="logo" />
                </div>
                <div className="menuinfo spin circle" style={{ visibility: this.state.menuVisible ? 'visible' : 'hidden' }}>
                    <div className="linkedin">
                        <img
                            style={{ width: 30, height: 30, margin: 5 }}
                            src={require("../assets/linkedin.png")}
                            alt="logo" />
                        <a className="link"
                            href={this.props.info.linkedin}>Oscipovsky</a>
                    </div>
                    <div className="email">
                        <img
                            style={{ width: 30, height: 30, margin: 5 }}
                            src={require("../assets/gmail.jpg")}
                            alt="logo" />
                        <label className="link">{this.props.info.email}</label>
                    </div>
                    <div className="mobile">
                        <img
                            style={{ width: 30, height: 30, margin: 5 }}
                            src={require("../assets/mobile.png")}
                            alt="logo" />
                        <label className="link">{this.props.info.mobile}</label>
                    </div>
                </div>
            </div >
        );
    }
}