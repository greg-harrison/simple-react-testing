import React from 'react'

export default class HorizontalSplit extends React.Component {
    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
            <div className="horizontal-split-layout flex-container">
                <div>{this.props.leftSide}</div>
                <div>{this.props.rightSide}</div>
            </div>
        )
    }
}  