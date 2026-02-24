import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ClubDetail from './pages/ClubDetail';
import './styles/main.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/club/:id" component={ClubDetail} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;