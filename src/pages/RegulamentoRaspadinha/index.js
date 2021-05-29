import React from 'react';
import { Container } from './styled';
import { Link } from 'react-router-dom';
import { PageContainer, ErrorMessage, SucessoMessage, PageTitle } from '../../components/MainComponents';

const RegulamentoRaspadinha = () =>{
    return(
        <PageContainer>
            <PageTitle>Regulamento da promocão</PageTitle>
            <Container>
                <h3>Regras para participação na promoção Raspou, Achou! Ganhou!!!!</h3>
                <label>
                    <p>Para participar de nossa promoção é muito simples! A cada R$15,00 em compras você tem direito a uma RASPADINHA.</p>
                    <p>Ex.: Comprou R$90,00! Ganha 6 raspadinha.</p>
                    <p>1-	A raspadinha só estará valida após o cadastramento em nossa plataforma;</p>
                    <p>2-	A raspadinha com desconto só poderá ser resgatada uma por compra, não sendo acumulativa; Ex.: Raspadinha A =20% de desconto, Raspadinha B =30% de desconto , não será permitido somar A+B ou seja 50% de desconto, o que está coberto pela promoção é o uso de uma por compra;</p>
                    <p>3-	Para resgatar é simples basta utilizar os Qrcode disponíveis nas lojas ou <a href="/raspadinha" target="_blank">salato.com.br/raspadinha</a> realizar seu cadastro, solicitar na loja o resgate, a raspadinha deverá  ser entregue no caixa no momento do pagamento;</p>
                    <p>4-	Para garantir a segurança dos ganhadores, será solicitado nome completo, data de nascimento e numero de celular e estar de posse da raspadinha para liberação do premio;</p>
                    <p>5-	Os prêmios podem ser resgatados apenas nas lojas de Magé e Piabeta;</p>

                    <h2>Agora borá brincar, porque para se divertir não são necessárias muitas regras.</h2>
                </label>
            </Container>
        </PageContainer>
    )
}

export default RegulamentoRaspadinha;