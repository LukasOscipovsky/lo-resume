import React from 'react';

interface State {
    background: string;
}

interface Props {
    background: string;
}

export default class Layout extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.setState({
            background: this.props.background
        })
    }

    // componentWillReceiveProps(props: Props) {
    //     this.setState({
    //         background: props.background
    //     })
    // }

    render() {
        return (
            <div className="item" style={{ background: this.props.background }}>
                <label>Lukas</label>
            </div >
        );
    }
}