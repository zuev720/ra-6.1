import React from 'react';

export class Button extends React.Component {
    render() {
        return (
        <button className={this.props.className} type={this.props.value} onClick={this.props.onDeleteClock}>
            {this.props.children}
        </button>
        )
    }
}
