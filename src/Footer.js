import React from 'react';
import github from './img/github.png';

const Footer = props => {
    return (
        <footer className="footer">
            <a href="https://www.github.com/benbasuni1"><img className="social-media" src={github} alt="github-icon"/></a>
            <div>&copy; '18</div>
        </footer>
    )
}

export default Footer;
