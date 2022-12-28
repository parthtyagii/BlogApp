import React from 'react';
import { SiGithub } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';
import './Footer.css';

export default function Footer() {
    return (
        <footer>
            <div className="footer-container">
                <h4><span>Developed By :</span> Parth Tyagi</h4>
                <ul>
                    <li>
                        <a href="https://github.com/parthtyagii/BlogApp">
                            <SiGithub className="footer-icons" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/parth-tyagi-0724a81b7/">
                            <FaLinkedin className='footer-icons' />
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}
