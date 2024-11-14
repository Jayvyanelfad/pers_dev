import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './pages/HomePage';
import RateTimeManagement from './pages/RateTimeManagement';
import RateEffectiveCommunication from './pages/RateEffectiveCommunication';
import RateLeadership from './pages/RateLeadership';
import RateEmotionalIntelligence from './pages/RateEmotionalIntelligence';
import './App.css';
import './styles.css';
import submitAlert from './scripts.js';

function App() {
    return (
        <Router>
            <div className="container">
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/rate-time-management">Rate Time Management</Link>
                    <Link to="/rate-effective-communication">Rate Effective Communication</Link>
                    <Link to="/rate-leadership">Rate Leadership and Teamwork</Link>
                    <Link to="/rate-emotional-intelligence">Rate Emotional Intelligence</Link>
                </nav>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/rate-time-management" component={RateTimeManagement} />
                    <Route path="/rate-effective-communication" component={RateEffectiveCommunication} />
                    <Route path="/rate-leadership" component={RateLeadership} />
                    <Route path="/rate-emotional-intelligence" component={RateEmotionalIntelligence} />
                </Switch>
                <footer>
                    <p>&copy; 2024 Personal Development Academy. All rights reserved.</p>
                </footer>
            </div>
        </Router>
    );
}

export default App;
