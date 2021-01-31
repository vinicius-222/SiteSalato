import React from 'react';
import {
    AreaLoja
} from './styled';
import { PageContainer, ErrorMessage, SucessoMessage, PageTitle } from '../../components/MainComponents';

const lojas = (props) => {
    return(
        <PageContainer>
            <PageTitle>Nossas Lojas</PageTitle>
            <AreaLoja>
                <div className="AreaLeft">
                    <h1>Loja Salato em Magé</h1>
                    <span>Praça Dr. Nilo Peçanha, N 52 </span>
                    <span>em frente a prefeitura</span>
                    <span>antiga loja SubWay</span>
                    <h4>WhatsApp (21) 98485-6295</h4>
                </div>
            </AreaLoja>
            <AreaLoja>
                <div className="AreaLeft">
                    <h1>Loja Salato em Piabetá</h1>
                    <span>Rua Brasil, N 221 </span>
                    <span>antiga loja SubWay</span>
                    <h4>WhatsApp (21) 98485-6084</h4>
                </div>
            </AreaLoja>
        </PageContainer>
    )
} 

export default lojas;
