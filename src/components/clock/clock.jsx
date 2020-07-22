import React from 'react';

class Clock extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            seconds: null,
            minutes: null,
            hours: null
        };
    }

    tick() {
        this.setState(state => ({
            seconds: new Date().getSeconds(),
            minutes: new Date().getMinutes(),
            hours: new Date().getHours()
        }));
    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render(){
        const { seconds, minutes, hours } = this.state;
        return(
            <>
                {`${hours}:${minutes < 10? '0' + minutes: minutes }:${seconds <= 10? '0' + seconds: seconds }`}
            </>
        )
    }
} 

export default Clock;
