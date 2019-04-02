import * as React from 'react';
import {Link} from 'react-router-dom';

const HomePage = () => {
    return (
        <div className="jumbotron">
            <h1>Medo Administration</h1>
            <p>React Redux Test Project</p>
            <Link to='about' className="btn btn-primary btn-lg">Learn More</Link>
        </div>
    );
};

export default HomePage