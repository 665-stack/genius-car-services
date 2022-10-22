import React from 'react';
import './Footer.css'

const Footer = () => {
    const copyrightYear = 2022;
    return (
        <footer>
            <p className='text-center'><small>Copyright @ {copyrightYear} Genius-Car-Services</small></p>
        </footer>
    );
};

export default Footer;