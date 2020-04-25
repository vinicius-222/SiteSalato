import React, { useState } from 'react';
import { connect } from 'react-redux';
import { SearchArea } from './styled';
import useApi from '../../helpers/SalatoAPI'
import Loading from '../../components/Loading';
import { PageContainer, ErrorMessage, SucessoMessage, PageTitle  } from '../../components/MainComponents';
import { doLogin } from '../../helpers/AuthHandler';

const Page =  (props) => {
    const api = useApi();
    const [email, setEmail] = useState('');
    const [NmPessoa, setNmPessoa] = useState('');
    const [password, setPassword] = useState('');
    const [confpassword, setconfPassword] = useState('');
    const [rememberPassword, setRememberPassword] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [error, setError] = useState('');
    const [sucess, setSucess] = useState('');
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        setDisabled(true);
        setError('');
        setSucess('');

        setTimeout(async () => {
            //verifica as senhas
            if (password !== confpassword){
                setError('Senhas informadas não conferem!!, Verifique!!');
                setDisabled(false);
                return;
            }
            //faz a requisicao 
            const json = await api.newLogin(NmPessoa, email, password);

            //trata o retorno da requisicao
            if (json.error){
                setError(json.error);
            }else{
                doLogin(json.jwt, rememberPassword, NmPessoa);
                setSucess('Cadastro efetuado com sucesso!!');
                setTimeout(() => {
                    window.location.href = '/';    
                }, 800);
            }
            setDisabled(false);
        },1000)
       
        
        
    }
    return(
        <PageContainer>
            <SearchArea>
               <PageTitle>Cadastro</PageTitle>
                    {error && <ErrorMessage>{error}</ErrorMessage>}
                    {sucess && <SucessoMessage>{sucess}</SucessoMessage>}
                   <form className="Container" onSubmit={handleSubmit}>
                        <label className="area">
                            <div className="area--title">Nome Completo</div>
                            <div className="area--input">
                                <input
                                    type="text"
                                    disabled={disabled}
                                    value={NmPessoa}
                                    onChange={e=>setNmPessoa(e.target.value)}
                                    required
                                    autoComplete
                                />
                            </div>
                        </label>
                        <label className="area">
                            <div className="area--title">E-mail</div>
                            <div className="area--input">
                                <input
                                    type="email"
                                    disabled={disabled}
                                    value={email}
                                    onChange={e=>setEmail(e.target.value)}
                                    required
                                    autoComplete
                                />
                            </div>
                        </label> 
                        <label className="area">
                            <div className="area--title">Senha</div>
                            <div className="area--input">
                                <input 
                                    type="password"
                                    disable={disabled}
                                    value={password}
                                    onChange={e=>setPassword(e.target.value)}
                                    required
                                />
                            </div>
                        </label> 
                        <label className="area">
                            <div className="area--title">Confirmar senha</div>
                            <div className="area--input">
                                <input 
                                    type="password"
                                    disable={disabled}
                                    value={confpassword}
                                    onChange={e=>setconfPassword(e.target.value)}
                                    required
                                />
                            </div>
                        </label>
                        <label className="area">
                            <div className="area--title">Lembrar senha</div>
                            <div className="area--input">
                                <input 
                                    type="checkbox"
                                    disabled={disabled}
                                    value={rememberPassword}
                                    onChange={()=>setRememberPassword(!rememberPassword)}

                                />
                            </div>
                        </label>
                        <label className="area">
                            <div className="area--title"></div>
                            <div className="area--input">
                                <button disabled={disabled}>{!disabled ? 'Cadastrar' : <Loading width="20px" height="20px" color="#FFFFFF"/>}</button>
                            </div>
                        </label>
                   </form>
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