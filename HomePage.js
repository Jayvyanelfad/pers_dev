import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div>
            <h1>Welcome to Personal Development Academy</h1>
            <p>Your journey to personal growth begins here.</p>
            <Link to="/help">Need Help?</Link>
        </div>
    );
};

export default HomePage;
