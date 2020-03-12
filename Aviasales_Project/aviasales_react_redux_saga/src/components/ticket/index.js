import React from 'react';

import Segment from '../segment'
// import { connect } from 'react-redux';

import style from './style.module.css'

class Ticket extends React.Component {



    // componentDidMount() {
    //     this.props.setSearchId();
    // }

    price(price){
        return String(price).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
    }

    render() {
        return (
            <div className={style.ticket}>
                <div className={style.header}> 
                        <div className={style.price}>{this.price(this.props.ticket.price)} р</div>
                        <img src={`//pics.avs.io/99/36/${this.props.ticket.carrier}.png`} alt="sorry" className={style.logo} />
                </div>
                <div className={style.segment}>
                    <Segment segm={this.props.ticket.segments[0]}></Segment>
                </div>
                <div className={style.segment}>
                    <Segment segm={this.props.ticket.segments[1]}></Segment>
                </div>
            </div>

        );

    }
}

// *до використання селекторів
// const mapStateToProps = state => {
//     ///// !state.tickets.tiсkets/* .length>0 */?console.log(state.tickets.tiсkets[0], "state o props"):console.log(state.tickets.tickets, "state null");
//     console.log(state.tickets.tickets.length>0?( state.tickets.tickets[0]): 0 ,"mapStateToProps");
//     return {
//         tick: (state.tickets.tickets.length>0?( state.tickets.tickets[0]): null),
        
//     };
// };

export default Ticket;

// export default connect( mapStateToProps, /*null,*/ /* { setSearchId } */)(Ticket);