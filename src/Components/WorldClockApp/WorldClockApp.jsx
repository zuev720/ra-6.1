import React from 'react';
import {Label} from '../Label/Label';
import {Input} from '../Input/Input';
import {Button} from '../Button/Button';
import './WorldClockApp.css';
import {ClockComponent} from '../Clock/ClockComponent';

export class WorldClockApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: '', timeZone: '', timeObjects: []};
        this.handleChange = this.handleChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.onDeleteClock = this.onDeleteClock.bind(this);
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    handleFormSubmit(e) {
        e.preventDefault();
        const clockObj = [...e.target.elements].filter(elem => elem.name).reduce((obj, elem) => {
            obj[elem.name] = elem.value.trim();
            return obj;
        }, {});
        const arrayClockObj = this.state.timeObjects;
        arrayClockObj.push(clockObj);
        this.setState({name: '', timeZone: '', timeObjects: arrayClockObj});
    }

    onDeleteClock(e) {
        const townName = e.target.id;
        const arrayClocks = this.state.timeObjects.filter((elem) => elem.name !== townName);
        this.setState({timeObjects: arrayClocks});
    }

    render() {
        return (
            <div className={'WorldClockApp'}>
                <form className={'WorldClockForm'} onSubmit={this.handleFormSubmit}>
                    <div className={'inputBlock'}>
                        <Label id={'name'} text={'Название'}/>
                        <Input name={'name'} handleChange={this.handleChange} value={this.state.name} pattern={'^[A-Za-zА-Яа-яЁё ]+$'}/>
                    </div>
                    <div className={'inputBlock'}>
                        <Label id={'timeZone'} text={'Временная зона'}/>
                        <Input name={'timeZone'} handleChange={this.handleChange} value={this.state.timeZone} pattern={'^[ 0-9]+$'}/>
                    </div>
                    <Button className={'formButton'} type={'submit'}>Добавить</Button>
                </form>
                <ul className={'ClockList'}>
                    {this.state.timeObjects.map((elem, index) =>
                        <ClockComponent
                            key={index}
                            size={'120px'}
                            userOffset={elem.timeZone}
                            name={elem.name}
                            onDeleteClock={this.onDeleteClock}
                        />
                    )}
                </ul>
            </div>
        )
    }
}
