import React from 'react';

export class Button extends React.Component {
    render() {
        return (
            <button id={this.props.id} className={this.props.className} type={this.props.type} onClick={this.props.click}>
                {this.props.children}
            </button>
        )
    }
}
