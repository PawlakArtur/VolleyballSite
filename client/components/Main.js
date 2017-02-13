import React from 'react';
import { Link } from 'react-router';

const Main = React.createClass({
    render() {
        return (
            <main>
                <nav>
                    <div className="nav-wrapper">
                        <div className="brand-logo"><Link to="/">Volleyball</Link></div>
                        <ul id="nav-mobile" className="right">
                            <li><Link to="/">Drużyny</Link></li>
                        </ul>
                    </div>
                </nav>
                {React.cloneElement(this.props.children, this.props)}
            </main>
        )
    }
});

export default Main;