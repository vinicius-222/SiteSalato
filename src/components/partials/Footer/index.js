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
            <span id="siteseal"><script async type="text/javascript" src="https://seal.godaddy.com/getSeal?sealID=d2kWYxdK0jnqtNa3nPlZByJLmOtYCgjoh7zIjQ9ZmVskWtoM8quVvLmvLlE1"></script></span>
        </FooterArea>
    );
}

export default Footer;