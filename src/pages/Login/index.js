import React, { useState } from 'react';
import { connect } from 'react-redux';
import Loading from '../../components/Loading';
import { SearchArea } from './styled';
import useApi from '../../helpers/SalatoAPI'
import { PageContainer, ErrorMessage, SucessoMessage,  PageTitle  } from '../../components/MainComponents';
import { doLogin } from '../../helpers/AuthHandler';

const Page =  (props) => {
    const api = useApi();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberPassword, setRememberPassword] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [error, setError] = useState('');
    const [sucess, setsucess] = useState('');
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        setDisabled(true);
        setError('');
        setsucess('');

        const json = await api.login(email,password);

        if (json.error){
            setError(json.error);
        }else{
            doLogin(json.jwt, rememberPassword, json.NmVendedor, json.hash);
            setsucess('Login efetuado com sucesso!!');
            window.location.href = '/';
        }
        setDisabled(false);
    }
    return(
        <PageContainer>
            <SearchArea>
               <PageTitle>Login</PageTitle>
                    {error && <ErrorMessage>{error}</ErrorMessage>}
                    {sucess && <SucessoMessage>{sucess}</SucessoMessage>}
                   <form className="Container" onSubmit={handleSubmit}>
                        <label className="area">
                            <div className="area--title">E-mail</div>
                            <div className="area--input">
                                <input
                                    type="email"
                                    disabled={disabled}
                                    value={email}
                                    onChange={e=>setEmail(e.target.value)}
                                    required
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
                                <button disabled={disabled}>{!disabled ? 'Fazer Login' :  <Loading color="#FFFFFF" height="20px" width="20px" />}</button>
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