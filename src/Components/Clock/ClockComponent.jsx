import React from 'react';
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';
import {Text} from '../Text/Text';
import {Button} from '../Button/Button';
import {getTime} from '../Functions/getTime';

export class ClockComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: getTime(this.props.userOffset)};
    }

    componentDidMount() {
        this.timerId = setInterval(() => this.tick(), 1000);
    }

    tick() {
        this.setState({date: getTime(this.props.userOffset)});
    }

    componentWillUnmount() {
        clearInterval(this.timerId)
    }

    render() {
        return (
            <li className={'ClockComponent'}>
                <Text>{this.props.name}</Text>
                <div className={'clockComponentBody'}>
                    <Clock value={this.state.date} size={120} renderNumbers={true} hourMarksWidth={2} hourMarksLength={8}/>
                    <Button id={this.props.name} className={'deleteClockButton'} type={'button'} click={this.props.onDeleteClock}>&#9587;</Button>
                </div>
            </li>
        )
    }
}
