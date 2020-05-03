import React from 'react';
import Arrow from '../Arrow'

interface Props {
    name: string,
    role: Array<String>,
    id: number;
    triggerRender(id: number): void
}

interface State {
    scaleUpWidth: string;
    scaleDownWidth: string;
    scaleUpHeight: string;
    scaleDownHeight: string;
}

export default class JavaPage extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            scaleUpWidth: '5vw',
            scaleUpHeight: '25%',
            scaleDownWidth: '50vw',
            scaleDownHeight: '90%'
        }
    }


    trigger() {
        let id = this.props.id;
        this.props.triggerRender(id++);
    }

    render() {
        return (
            <div className="jpl">
                <div className="techs">
                    <div className="tech" style={{ width: '25vw', height: '90%' }}>
                        <img className="img"
                            src={require("../../assets/Java-Logo-Wallpaper.jpg")}
                            alt="javalogo" />
                        <label className="label">Java</label>
                    </div>
                    <div className="tech" style={{ width: '5vw', height: '25%' }}>
                        <img className="img"
                            src={require("../../assets/OG-Spring.png")}
                            alt="springlogo" />
                        <label className="label">Spring</label>
                    </div>
                    <div className="tech" style={{ width: '17vw', height: '75%' }}>
                        <img className="img"
                            src={require("../../assets/hibernate.jpg")}
                            alt="hiblogo" />
                        <label className="label">Hibernate</label>
                    </div>
                    <div className="tech" style={{ width: '17vw', height: '75%' }}>
                        <img className="img"
                            src={require("../../assets/springdata.png")}
                            alt="sdlogo" />
                        <label className="label">Spring Data</label>
                    </div>
                    <div className="tech" style={{ width: '17vw', height: '75%' }}>
                        <img className="img"
                            src={require("../../assets/springboot.jpg")}
                            alt="sblogo" />
                        <label className="label">Spring Boot</label>
                    </div>
                </div>
                <Arrow triggerClicked={() => this.trigger()} />
            </div>
        )
    }
}