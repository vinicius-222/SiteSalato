import React from 'react';
import {
    AreaLoja
} from './styled';
import { Link } from 'react-router-dom';
import { PageContainer, ErrorMessage, SucessoMessage, PageTitle } from '../../components/MainComponents';

const lojas = (props) => {
    return(
        <PageContainer>
            <PageTitle>Nossas Lojas</PageTitle>
            <AreaLoja>
                <div className="AreaLeft">
                    <h1>Loja Salato em Magé</h1>
                    <a href="https://wa.me/message/24LM7D7OPSCAL1">Clique e vá direto para o WhatsApp da loja</a>
                    <span>Praça Dr. Nilo Peçanha, N 52 </span>
                    <span>em frente a prefeitura</span>
                    <span>antiga loja SubWay</span>
                    <h4>WhatsApp (21) 98485-6295</h4>
                </div>
            </AreaLoja>
            <AreaLoja>
                <div className="AreaLeft">
                    <h1>Loja Salato em Piabetá</h1>
                    <a href="https://wa.me/message/2SVBFJJT7MI7N1">Clique e vá direto para o WhatsApp da loja</a>
                    <span>Rua Brasil, N 221 </span>
                    <span>antiga loja SubWay</span>
                    <h4>WhatsApp (21) 98485-6084</h4>
                </div>
            </AreaLoja>
        </PageContainer>
    )
} 

export default lojas;
