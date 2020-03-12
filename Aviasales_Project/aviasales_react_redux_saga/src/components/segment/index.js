import React from 'react';

import style from './style.module.css'

class Segment extends React.Component {

    flightTime(date, duration){
        const dateClg = new Date(date);
        const dateArrival = new Date(date);
        dateArrival.setUTCMinutes(dateArrival.getMinutes() + duration);

        return `${this.setTimeStr(dateClg.getHours())}:${this.setTimeStr(dateClg.getMinutes())} - ${this.setTimeStr(dateArrival.getHours())}:${this.setTimeStr(dateArrival.getMinutes())}`;
    }

    setTimeStr(timeVal){
        return timeVal<10? `0${timeVal}`: `${timeVal}`;
    }

    transfers(stops){
        return `${stops.length} пересадки`;
    }

    render() {

        return (

            <div className={style.segment}>
                    <div className={style.segmentBlock}>
                            <div className={style.title}> {this.props.segm.origin} - {this.props.segm.destination}</div>
                            <div className={style.value}>{this.flightTime(this.props.segm.date, this.props.segm.duration)}</div>
                    </div>
                    <div className={style.segmentBlock}>
                            <div className={style.title}>В дорозі</div>
                            <div className={style.value}>{Math.round(this.props.segm.duration/60, 0)}ч {Math.round(this.props.segm.duration%60, 0)}м</div>
                    </div>
                    <div className={style.segmentBlock}>
                            <div className={style.title}>{this.transfers(this.props.segm.stops)}</div>
                            <div className={style.value} >
                                {this.props.segm.stops.map(item => {
                                    return <div key={item}>{item}</div>
                                })}
                            </div>
                    </div>

            </div>


        );

    }
}



export default Segment;