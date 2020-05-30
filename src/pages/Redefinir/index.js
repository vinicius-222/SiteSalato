import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { PageContainer, ErrorMessage, SucessoMessage,  PageTitle  } from '../../components/MainComponents';
import SalatoAPI  from '../../helpers/SalatoAPI';
import {
    Container
} from './styled';


const Redefinir = (props) =>{
    const API = SalatoAPI();
    const useQueryString = () =>{
        return new URLSearchParams ( useLocation().search );
    }
    const query = useQueryString();

    const [token, setToken] = useState(query.get('token') !== null ? query.get('token') : '');
    const [newPass, setNewPass] = useState('');
    const [oldNewPass, setOldNewPass] = useState('');
    const [StMostraForm, setStMostraForm] = useState(true);
    const [MsgError, setMsgError] = useState('');
    const [msg, setMsg] = useState('');
    
    const getHandleRecuperaSenha = async() =>{
        const json = await API.getHandleRecuperaSenha(token);
        if (!json.error){
            setStMostraForm(false);
        }
    }

    const handleSalvar = async (e) =>{
        e.preventDefault();

        setMsgError('');
        setMsg('');

        if (newPass !== oldNewPass){
            setMsgError('Senhas informadas não conferem!!, Verifique!!');
            return;
        }

        const json = await API.updateHandleRecuperSenha(
            token, newPass
        )
        setMsg(json.retorno);

        setTimeout(()=>{
            window.location.href = '/'
        },800)
    }
    useEffect(()=>{
        getHandleRecuperaSenha();
    },[]);

    return(
        <PageContainer>
            <Container>
                {MsgError && <ErrorMessage>{MsgError}</ErrorMessage>}
                {msg && <SucessoMessage>{msg}</SucessoMessage>}
                {StMostraForm ? <div> ERROR 404 Pagina nao encontrada</div>
                    :
                    <>
                        <PageTitle>Redefinir Senha</PageTitle>
                        <form className="AreaContainer" onSubmit={handleSalvar}>
                            <label className="Area">
                                <div className="Area--AreaTitle">Digite a nova senha:</div>
                                <div className="Area--AreaInput">
                                    <input 
                                        type="password"
                                        required
                                        value={newPass}
                                        onChange={(e)=>setNewPass(e.target.value)}
                                    />
                                </div>
                            </label>
                            <label className="Area">
                                <div className="Area--AreaTitle">Confirme a nova senha:</div>
                                <div className="Area--AreaInput">
                                    <input 
                                        type="password"
                                        required
                                        value={oldNewPass}
                                        onChange={(e)=>setOldNewPass(e.target.value)}
                                    />
                                </div>
                            </label>
                            <label className="Area">
                                <div className="Area--AreaTitle"></div>
                                <div className="Area--AreaInput">
                                <button>Atualizar senha</button>
                                </div>
                            </label>
                        </form>
                    </>
                }
            </Container>
        </PageContainer>
    )
};

export default Redefinir;