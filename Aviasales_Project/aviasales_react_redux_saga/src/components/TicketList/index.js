import React, { Component } from 'react'
import Ticket from '../ticket'

import { connect } from 'react-redux';

import style from './style.module.css';

export class TicketList extends Component {
    render() {
        if (this.props.tick.length<=1) {
            return null
        }
        return (
            <div>
                {this.props.tick.map((item, index) => {
                    return (
                        <div key={index} className={style.ticket}>
                                <Ticket ticket={item}/>
                        </div>
                    )
                })}
                
            </div>
        )
    }
}

//до використання селекторів
const mapStateToProps = state => {
    return {
        tick: (state.tickets.tickets.length>0?( state.tickets.tickets.slice(0, 5)): [null]),
        
    };
};

// export default TicketList;

export default connect( mapStateToProps, /*null,*/ /* { setSearchId } */)(TicketList);
