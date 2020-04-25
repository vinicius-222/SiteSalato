import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, useLocation, useHistory } from 'react-router-dom';
import Loading from '../../components/Loading';
import { SearchArea, PageArea, Fake } from './styled';
import { Slide} from 'react-slideshow-image';
import useApi from '../../helpers/SalatoAPI'
import { PageContainer, ErrorMessage, SucessoMessage, PageTitle } from '../../components/MainComponents';
import { doLogin, doLogout } from '../../helpers/AuthHandler';

const Page =  (props) => {
    const api = useApi();
    
    const useQueryString = () => {
        return new URLSearchParams( useLocation().search );
    }
    const query = useQueryString();

    const [q, setq] = useState(query.get('q') != null ? query.get('q') : '' )
    const [disabled, setDisabled] = useState(false);
    const [error, setError] = useState('');
    const [sucess, setSucess] = useState('');
    const [NmPessoa, setNmPessoa] = useState('');
    const [DsEmail, setDsEmail] = useState('');
    const [DsAssunto, setDsAssunto] = useState('');
    const [DsMsg, setDsMsg] = useState('');

    const SendEmail = async (e) => {
        e.preventDefault();
        setDisabled(true);
        setError('');
        setSucess('');

        const json = await api.senEmail(NmPessoa, DsEmail, DsMsg,DsAssunto);

        if (json.sucesso){
            setSucess(json.sucesso);
        }else {
            setError('Email não enviado!!!');
        }
        setDisabled(false);
        clearCampos();
    }

    useEffect(() => {
        if (q){
            setDsAssunto(q);
        }
    },[])

    const clearCampos = () => {
        setNmPessoa('');
        setDsEmail('');
        setDsAssunto('');
        setDsMsg('');
    }
   
    return(
        <PageContainer>
            <SearchArea>
                <PageTitle>Contatos</PageTitle>
                {error && <ErrorMessage>{error}</ErrorMessage>}
                {sucess && <SucessoMessage>{sucess}</SucessoMessage>}
                <div className="container">
                    <form onSubmit={SendEmail}>
                        <label className="area">
                            <div className="area--title">Nome Completo</div>
                            <div className="area--input">
                                <input 
                                    type="text"
                                    disabled={disabled}
                                    value={NmPessoa}
                                    onChange={e=>setNmPessoa(e.target.value)}
                                    required
                                />
                            </div>
                        </label>
                        <label className="area">
                            <div className="area--title">E-mail</div>
                            <div className="area--input">
                                <input 
                                    type="email"
                                    disabled={disabled}
                                    value={DsEmail}
                                    onChange={e=>setDsEmail(e.target.value)}
                                    required
                                />
                            </div>
                        </label>
                        <label className="area">
                            <div className="area--title">Assunto</div>
                            <div className="area--input">
                                <select 
                                    type="email"
                                    disabled={disabled}
                                    value={DsAssunto}
                                    onChange={e=>setDsAssunto(e.target.value)}
                                    required
                                >
                                    <option></option>
                                    <option>Pedidos</option>
                                    <option>Fornecedor</option>
                                    <option>Representação</option>
                                    <option>Dúvidas</option>
                                    <option>Sugestões</option>
                                    <option>Reclamações</option>
                                </select>
                            </div>
                        </label>
                        <label className="area">
                            <div className="area--title">Mensagem</div>
                            <div className="area--input">
                                <textarea
                                    disabled={disabled}
                                    value={DsMsg}
                                    onChange={e=>setDsMsg(e.target.value)}
                                    required
                                ></textarea>
                            </div>
                        </label>
                        <label className="area">
                            <div className="area--title"></div>
                            <div className="area--input">
                                <button disabled={disabled}>{!disabled ? 'Enviar' :  <Loading color="#FFFFFF" height="20px" width="20px" />}</button>
                            </div>
                        </label>
                    </form>
                    <div className="sideRigth">
                        <div className="areaContact">
                            <img className="areaContact--wahtsapp" src={require('../../assets/images/whatsApp.png')}/>
                            <h3>Nosso WahtsApp (21) 98691-1946</h3>
                        </div>
                        <div className="areaContact">
                            <img className="areaContact--wahtsapp" src={require('../../assets/images/telefone-icone-png.png')}/>
                            <h3>Nosso Telefone (21) 2647-9635</h3>
                        </div>
                        <div className="areaContact">
                            <img className="areaContact--wahtsapp" src={require('../../assets/images/messenger.png')}/>
                            <h3>facebook/salatoalimentos</h3>
                        </div>
                        <div className="areaContact">
                            <img className="areaContact--wahtsapp" src={require('../../assets/images/email.png')}/>
                            <h3>comercial@salato.com.br</h3>
                        </div>
                    </div>
                </div>
            </SearchArea>
       </PageContainer>
    )
}

const mapStateToProps = (state) =>{
    return{
        nome:state.user.nome
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        setNome:(nome)=>dispatch({type:'SET_NOME', payload:{nome}})

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Page);