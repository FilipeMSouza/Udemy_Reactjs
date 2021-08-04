import './erro.css';

import {Link} from 'react-router-dom';
export default function Error(){
    return(
        <div className="not-found">
            <h1>Error 404</h1>
            <h2>Page not found</h2>
            <h3>Maybe you're lost, click this button to go back</h3>
            <Link to="/">Go Back</Link>
        </div>
    )
}