import React from 'react';

export class Input extends React.Component {
    render() {
        return <input
            id={this.props.name}
            type="text"
            className={'inputForm'}
            name={this.props.name}
            value={this.props.value}
            onChange={this.props.handleChange}
            pattern={this.props.pattern}
            required={true}
        />
    }
}
