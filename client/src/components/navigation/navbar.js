import React from 'react';
import './navbar.css'

class Navbar extends React.Component {
    render() {
        return (
            <div className="Navbar">
                <nav className="nav">
                    <a>Chat.IO</a>
                </nav>
            </div>
        );
    }
}

export default Navbar;