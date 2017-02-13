import React from 'react';
import { Link } from 'react-router';

const Main = React.createClass({
    render() {
        return (
            <main>
                <nav>
                    <div class="nav-wrapper">
                        <a href="#" class="brand-logo"><Link to="/">Volleyball</Link></a>
                        <ul id="nav-mobile" className="right">
                            <li><a href="">Drużyny</a></li>
                        </ul>
                    </div>
                </nav>
                {React.cloneElement(this.props.children, this.props)}
            </main>
        )
    }
});

export default Main;