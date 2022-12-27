import React from 'react';
import { SiGithub } from 'react-icons/si';
import './Footer.css';

export default function Footer() {
    return (
        <footer>
            <div className="footer-container">
                <h4><span>Developed By :</span> Parth Tyagi</h4>
                <a href="https://github.com/parthtyagii/BlogApp">
                    <SiGithub id="footer-github" />
                </a>
            </div>
        </footer>
    );
}
