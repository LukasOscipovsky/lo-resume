import React from 'react';

interface Props {
    triggerClicked(): void;
}

export default class Arrow extends React.Component<Props, {}> {
    render() {
        return (
            <div className="viewmore" onClick={e => this.props.triggerClicked()}>
                <img className="arrow" src={require("../assets/doublearrow.png")} alt="logo" />
            </div>
        )
    }
}