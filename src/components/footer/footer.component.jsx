import React from 'react';

import {FiInstagram} from 'react-icons/fi'

import './footer.styles.css'

const Footer = () => (
    <>
        <div className="footer">
                <a href="https://www.instagram.com/hgabink/" target="_blank"><FiInstagram className="icon" /></a>
                <div className="nome">
                    <h3>porto, pt</h3>
                </div>
        </div>
        <div className="footerFooter">
           <div className="email"><h5>Gabrielart@icloud.com</h5> <br /></div>
            <div className="copy">Designed and Developed by Wolff © 2020 All rights reserved</div>
        </div>
    </>
)

export default Footer;