import React from 'react';

interface Props {
    background: string;
    backgroundImage: string;
    size: number;
    gridColumn: number;
}

export default class Layout extends React.Component<Props, {}> {
    render() {
        return (
            <div className="item" style={{ gridColumn: this.props.gridColumn, background: this.props.background, width: this.props.size, height: this.props.size }}>
                <img className="image" src={require("../assets/" + this.props.backgroundImage)} alt="logo" />
            </div >
        );
    }
}