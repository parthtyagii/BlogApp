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
                    <li><button>Home</button></li>
                    <li><button>Create</button></li>
                </ul>
            </div>

            <div className="nav-account">
                <button>
                    <VscAccount id="account-logo" onClick={accountInfoHandler} />
                </button>

                {showAccountInfo &&
                    <div className="account-info">
                        <ul>
                            <li><button>My Blogs</button></li>
                            <li><button>Published Blogs</button></li>
                            <li><button>Un-Published Blogs</button></li>
                            <li><button>Logout</button></li>
                        </ul>
                    </div>
                }

            </div>
        </nav>
    );
}
