import React, { useState }from 'react';
import { PageContainer, ErrorMessage, SucessoMessage,  PageTitle  } from '../../components/MainComponents';
import SalatoAPI  from '../../helpers/SalatoAPI';
import {Loading} from '../../components/Loading';
import {
    Container
} from './styled';


const Recuperar = (props) =>{
    const API = SalatoAPI();
    const [email, setEmail] = useState('');
    const [MsgError, setMsgError] = useState('');
    const [msg, setMsg] = useState('');
    const [disabled, setDisabled] = useState(false);

    const sendEmail = async (e) =>{
        e.preventDefault();
        setMsg('');
        setMsgError('');
        setDisabled(true);
        const json = await API.insertRecuperaSenha(email);

        if (!json.email){
            setMsg('Enviamos um e-mail para voçe com informções para redefinir a senha!!');
            setEmail('');
            setDisabled(false);
        }else{
            setMsgError(json.email);
            setDisabled(false);
        }
    }
    return(
        <PageContainer>
           <Container>
                {MsgError && <ErrorMessage>{MsgError}</ErrorMessage>}
                {msg && <SucessoMessage>{msg}</SucessoMessage>}
                <PageTitle>Redefinir a senha</PageTitle>
                <form className="AreaContainer" onSubmit={sendEmail}>
                    <label className="Area">
                        <div className="Area--AreaTitle">Digite seu e-mail:</div>
                        <div className="Area--AreaInput">
                            <input 
                                type="email"
                                disabled={disabled}
                                required
                                value={email}
                                onChange={(e)=>setEmail(e.target.value)}
                            />
                        </div>
                    </label>
                    <label className="Area">
                        <div className="Area--AreaTitle"></div>
                        <div className="Area--AreaInput">
                        <button disabled={disabled}>{!disabled ? 'Enviar' :  <Loading color="#FFFFFF" height="20px" width="20px" />}</button>
                        </div>
                    </label>
                </form>
            </Container>
        </PageContainer>
    )
}

export default Recuperar;