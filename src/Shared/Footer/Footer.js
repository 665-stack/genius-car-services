import React from 'react';
import './Footer.css'

const Footer = () => {
    const today = new Date()
    const year = today.getFullYear()
    return (
        <footer>
            <p className='text-center mt-5'><small>Copyright &#169;	 {year} Genius-Car-Services</small></p>
        </footer>
    );
};

export default Footer;