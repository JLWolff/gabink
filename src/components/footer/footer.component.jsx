import React from 'react';

import {FiInstagram} from 'react-icons/fi'

import './footer.styles.css'

const Footer = () => (
    <div className="footer">
            <a href="https://www.instagram.com/hgabink/"><FiInstagram className="icon" /></a>
            <div className="nome">
                <h3>porto, pt</h3>
            </div>
    </div>
)

export default Footer;