import React from 'react';
import './Navbar.css';
import { VscAccount } from 'react-icons/vsc';
import { useState } from 'react';

export default function Navbar() {

    const [showAccountInfo, setShowAccountInfo] = useState(false);

    const accountInfoHandler = () => {
        setShowAccountInfo(!showAccountInfo);
    }

    return (
        <nav>
            <div className="nav-logo">
                <h1>The Written Journey</h1>
            </div>

            <div className="nav-pages">
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">Create</a></li>
                </ul>
            </div>

            <div className="nav-account">
                <VscAccount id="account-logo" onClick={accountInfoHandler} />

                {showAccountInfo &&
                    <div className="account-info">
                        <ul>
                            <li>My Blogs</li>
                            <li>Published Blogs</li>
                            <li>Un-Published Blogs</li>
                            <li>Logout</li>
                        </ul>
                    </div>
                }

            </div>
        </nav>
    );
}
