import React, { useState, useRef, useEffect} from 'react';
import { PageContainer, ErrorMessage, SucessoMessage, PageTitle } from '../../components/MainComponents';
import Menu from '../../components/partials/Menu';
import {Area } from './styled';
import { connect } from 'react-redux';
import Cookies from 'js-cookie';
import { useLocation } from 'react-router-dom';
import {Loading} from '../../components/Loading';
import useSalatoDeliveryAPI from '../../helpers/SalatoAPI';

const Senha = (props) => {
    const pSenha = useRef();
    const API = useSalatoDeliveryAPI();
    const useQueryString = () => {
        return new URLSearchParams( useLocation().search );
    }
    const query = useQueryString();
    const [disabled, setDisabled] = useState(false);
    const [senha, setSenha] = useState('');
    const [newSenha, setNewSenha] = useState('');
    const [ConfNewSenha, setConfNewSenha] = useState('');
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');


    const handleCancelar = (e) => {
        e.preventDefault();
        window.location.href = '/Senha?cat=Senha';
    }

    const VerificaCampos = () => {
        let r = new Promise((resolve, reject) =>{
            if (!senha){
                resolve(false);
            }else if(!newSenha){
                resolve(false);
            }else if(!ConfNewSenha){
                resolve(false);
            }else{
                resolve(true);
            }
        });
        return r;
    }

    const handleSalvar = async(e) => {
        setError('');
        setSuccess('');
        e.preventDefault();
        setDisabled(true);

        VerificaCampos().then(async(r)=>{
            if(!r){
                setError('Existe campos vazior, verifique!!!');
            }else{
                if (ConfNewSenha !== newSenha){
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
                }
            }
            setDisabled(false);
        })
    }

    useEffect(()=>{
        pSenha.current.focus();
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
                                <div className='area--title'>Senha Atual</div>
                                <div className='area--input'>
                                    <input 
                                        ref={pSenha}
                                        type='password'
                                        value={senha}
                                        onChange={(e)=>setSenha(e.target.value)}
                                        disabled={disabled}
                                    />
                                </div>
                            </label>
                            <label className='area'>
                                <div className='area--title'>Novo Senha</div>
                                <div className='area--input'>
                                    <input 
                                        type='password'
                                        value={newSenha}
                                        onChange={(e)=>setNewSenha(e.target.value)}
                                        disabled={disabled}
                                    />
                                </div>
                            </label>
                            <label className='area'>
                                <div className='area--title'>Confirmar Nova Senha</div>
                                <div className='area--input'>
                                    <input 
                                        type='password'
                                        value={ConfNewSenha}
                                        onChange={(e)=>setConfNewSenha(e.target.value)}
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


export default connect(mapStateToProps) (Senha);