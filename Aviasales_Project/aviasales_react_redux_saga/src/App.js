import React from 'react';
import './App.css';
import Home from './components/home';
import ErPage from './components/ErPage';

import { BrowserRouter } from 'react-router-dom';
import { Route, /* Redirect, */ Switch } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/*" component={ErPage} />
                </Switch>
                {/* <Home></Home> */}
            </div>
        </BrowserRouter>
    );
}

export default App;
