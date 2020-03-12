import React from 'react';
import { connect } from 'react-redux';

import logo from '../../Logo.svg';
import { setSearchId } from '../../redux/actions';
import TicketList from '../TicketList';

// import style from './style.module.css'

class Home extends React.Component {

    componentDidMount() {
	this.props.setSearchId();
    }

    render() {

        return (

            <div >
            <header className="App-header">
                <img src={logo} alt="sorry" className='logo' />
            </header>
            <div className="App-main">
                <TicketList></TicketList>
            </div>
                
            </div>

	);

    }
}

// export default Home;

export default connect(/* mapStateToProps, */null, { setSearchId })(Home);