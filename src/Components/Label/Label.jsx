import React from 'react';

export class Label extends React.Component {
    render() {
        return (<label htmlFor={this.props.id} className={'label'}>{this.props.text}</label>)
    }
}
