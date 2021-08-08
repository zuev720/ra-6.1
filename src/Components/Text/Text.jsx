import React from 'react';

export class Text extends React.Component {
    render() {
        return <p className={'clockText'}>{this.props.children}</p>
    }
}
