import React from 'react';
import Arrow from '../Arrow'

interface Props {
    name: string,
    role: Array<String>,
    id: number;
    triggerRender(id: number): void
}

export default class JavaPage extends React.Component<Props, {}> {
    trigger() {
        let id = this.props.id;
        this.props.triggerRender(id++);
    }

    render() {
        return (
            <div className="app">
                <div className="info">
                    <label className="name">{this.props.name}</label>
                    <label className="role">{this.props.role.join(",")}</label>
                </div>
                <Arrow triggerClicked={() => this.trigger()} />
            </div>
        )
    }
}