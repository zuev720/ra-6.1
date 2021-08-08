import React from 'react';
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';
import {Text} from '../Text/Text';
import {getTime} from '../Functions/getTime';
import {Button} from '../Button/Button';

export class ClockComponent extends React.Component {
    constructor(props) {
        super(props);
        this.userOffset = props.userOffset;
        this.state = {date: getTime(this.userOffset)};
    }

    componentDidMount() {
        this.timerId = setInterval(() => this.tick(), 1000);
    }

    tick() {
        this.setState({date: getTime(this.userOffset)});
    }

    componentWillUnmount() {
        clearInterval(this.timerId)
    }

    render() {
        return (
            <li className={'ClockComponent'}>
                <Text>{this.props.text}</Text>
                <div className={'clockComponentBody'}>
                    <Clock value={this.state.date} size={120} renderNumbers={true} hourMarksWidth={2} hourMarksLength={8}/>
                    <Button className={'deleteClockButton'} type={'button'} onDeleteClock={this.props.onDeleteClock}>&#9587;</Button>
                </div>
            </li>
        )
    }
}
