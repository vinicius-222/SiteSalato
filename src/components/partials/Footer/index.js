import React from 'react';
import { FooterArea } from './styled';
const Footer = () => {
    return (
        <FooterArea style={{display: window.location.pathname == '/raspadinha' ? 'none' : 'flex'}}>
            <div className="container">
                <img src={require('../../../assets/images/Logo.png')}/><br/>
                Salato Alimentos<br/>
                Todos os direiros reservados
            </div>
        </FooterArea>
    );
}

export default Footer;