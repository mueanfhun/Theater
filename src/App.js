import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Main from './page/Main';
import Dashboard from './component/Dashboard';
import Showtime from './component/showtime';
import Seat from './component/Seat';
import Ticket from './component/Ticket';

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Main} />
        <Route path="/Dashboard" component={Dashboard} />
        <Route path="/Showtime" component={Showtime} />
        <Route path="/Seat" component={Seat} />
        <Route path="/Ticket" component={Ticket} />
      </div>
    </Router>
  );
}


export default App;
