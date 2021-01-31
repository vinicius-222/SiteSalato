import React, { useState, useEffect, useRef} from 'react';
import { PageContainer, ErrorMessage, SucessoMessage, PageTitle } from '../../components/MainComponents';
import Menu from '../../components/partials/Menu';
import {Area } from './styled';
import { connect } from 'react-redux';
import Cookies from 'js-cookie';
import { useLocation } from 'react-router-dom';
import {Loading} from '../../components/Loading';
import useSalatoDeliveryAPI from '../../helpers/SalatoAPI';

const Email = (props) => {
    const pNewEmail = useRef();
    const API = useSalatoDeliveryAPI();
    const useQueryString = () => {
        return new URLSearchParams( useLocation().search );
    }
    const query = useQueryString();
    const [disabled, setDisabled] = useState(false);
    const [Email, setEmail] = useState('');
    const [newEmail, setNewEmail] = useState('');
    const [ConfNewEmail, setConfNewEmail] = useState('');
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');


    const handleCancelar = (e) => {
        e.preventDefault();
        window.location.href = '/Email?cat=Email';
    }

    const handleSalvar = async(e) => {
        setError('');
        setSuccess('');
        e.preventDefault();
        setDisabled(true);

        /*if (ConfNewSenha !== newSenha){
            setError('Senhas informadas não conferem!!, Verifique!!');
            setDisabled(false);
            return;
        }

        const json = await API.updatePass(
            Cookies.get('token'),
            Cookies.get('hash'),
            props.DadosCliente[0].DsLogin,
            senha,
            newSenha
        )

        if (json.retorno !==''){
            setError('A senha atual informada não confere, verifique!!!')
        }else if (json.Sucess !==''){
            setSenha('');
            setNewSenha('');
            setConfNewSenha('');
            setSuccess('Senha Atualizada com sucesso!!');
        }else{
            setError('A senha foi atualizada, verifique a conexão!!')
        }*/
        setDisabled(false);
    }

    useEffect(()=> {
        setEmail(props.DadosCliente[0].DsLogin);
        pNewEmail.current.focus();
    },[])
    return(
        <Area>
            <PageContainer>
                <PageTitle>Minha Conta</PageTitle>
                {success && <SucessoMessage>{success}</SucessoMessage>}
                {error && <ErrorMessage>{error}</ErrorMessage>}
                <div className='Container'>
                    <Menu DsPath={query.get('cat')} />
                    <div className='Formulario'>
                        <form>
                            <label className='area'>
                                <div className='area--title'>E-mail atual </div>
                                <div className='area--input'>
                                    <input 
                                        type='mail'
                                        value={Email}
                                        onChange={(e)=>setEmail(e.target.value)}
                                        disabled={disabled}
                                    />
                                </div>
                            </label>
                            <label className='area'>
                                <div className='area--title'>Novo E-mail</div>
                                <div className='area--input'>
                                    <input 
                                        ref={pNewEmail}
                                        type='mail'
                                        value={newEmail}
                                        onChange={(e)=>setNewEmail(e.target.value)}
                                        disabled={disabled}
                                    />
                                </div>
                            </label>
                            <label className='area'>
                                <div className='area--title'>Confirmar Novo E-mail</div>
                                <div className='area--input'>
                                    <input 
                                        type='mail'
                                        value={ConfNewEmail}
                                        onChange={(e)=>setConfNewEmail(e.target.value)}
                                        disabled={disabled}
                                    />
                                </div>
                            </label>
                            <label className="area">
                                <div className="area--title"></div>
                                <div className="area--btn">
                                    <button onClick={handleCancelar} disabled={disabled}>Cancelar</button>
                                    <button onClick={handleSalvar} disabled={disabled}>{!disabled ? 'Salvar' :  <Loading color="#FFFFFF" height="20px" width="20px" />}</button>
                                </div>
                            </label>
                        </form>
                    </div>
                </div>
            </PageContainer>
        </Area>
    )
}

const mapStateToProps = (state) => {
    return{
        DadosCliente:state.user.DadosCliente
    }
}


export default connect(mapStateToProps) (Email);