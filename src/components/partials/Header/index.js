import React, {useState} from 'react';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';
import SalatoAPI from '../../../helpers/SalatoAPI';
import { HeaderArea } from './styled';
import { connect } from 'react-redux';
import { isLogged, doLogout, doLogin } from '../../../helpers/AuthHandler';


const Header = (props) => {
    let logged = isLogged();
    const api = SalatoAPI();
    const [StDisplay, setStDisplay] = useState(false);

    const handleLogout = () => {
        doLogout();
        window.location.href = '/';
    }


    return (
        <HeaderArea style={{display : window.location.pathname === '/raspadinha' ? 'none' : 'flex'}}>
            <div className="container">
                <div className="logo">
                    <Link to="/">
                        <img src={require('../../../assets/images/Logo.png')}/>
                    </Link>
                </div>
               
                <div className="AreaMenu">
                    <>  
                        <div className="nomePessoa">                           
                            <div className="AreaLink">
                                <Link to="/">
                                    <img src={require('../../../assets/images/home.png')}/>
                                </Link>
                                <a href="https://www.facebook.com/salatoalimentos" target="_blank">
                                    <img src={require('../../../assets/images/facebook.png')}/>
                                    Facebook
                                </a>
                                
                                <a href="https://www.instagram.com/salato_alimentos/" target="_blank">
                                    <img src={require('../../../assets/images/instagram.png')}/>
                                    Instagram
                                </a>
                                <div onClick={()=> setStDisplay(!StDisplay)} className="BotaoMenu">
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                            </div>
                            {logged && 
                                <>
                                    <Link to="/produtos" onClick={()=>props.setCart(true)} className="AreaCarrino">
                                        <img src={require('../../../assets/images/Carrinho.png')} />
                                        {props.qt > 0 &&
                                            <div className="areaBdge">
                                                {props.qt}
                                            </div>
                                        }
                                    </Link>
                            
                            
                                    <div className="AreaNmPessoa">
                                        Olá, {Cookies.get('NmPessoa')}
                                    </div>
                                </>
                            }
                        </div>
                        <div className="LineHeader">
                            <>
                            </>
                        </div>
                        <div className="AreaNavPC">
                            <nav>
                                <ul>
                                    {logged &&
                                        <>  <li>
                                                <Link to="/historia">História</Link>
                                            </li>
                                            <li>
                                                <Link to="/regulamentoraspadinha">Promocão</Link>
                                            </li>
                                            <li>
                                                <Link to="/produtos">Cardápio</Link>
                                            </li>
                                            <li>
                                                <Link to="/lojas">Lojas</Link>
                                            </li>
                                            <li>
                                                <Link to="/contato">Contato</Link>
                                            </li>
                                            <li>
                                                <Link to="/MinhaConta?cat=MinhaConta">Minha Conta</Link>
                                            </li>
                                            <li>
                                                <button className="button" onClick={handleLogout}>Sair</button>
                                            </li>
                                        </>
                                    }{!logged &&
                                        <>  
                                            <li>
                                                <Link to="/historia">História</Link>
                                            </li>
                                            <li>
                                                <Link to="/regulamentoraspadinha">Promocão</Link>
                                            </li>
                                            <li>
                                                <Link to="/produtos">Cardápio</Link>
                                            </li>
                                            <li>
                                                <Link to="/lojas">Lojas</Link>
                                            </li>
                                            <li>
                                                <Link to="/contato">Contato</Link>
                                            </li>
                                            <li>
                                                <Link to="/cadastrar">Cadastrar</Link>
                                            </li>
                                            <li>
                                                <Link to="/Login" className="button">Login</Link>
                                            </li>
                                        
                                        </>
                                    }
                                </ul>
                            </nav>
                        </div>

                        <div style={{height: StDisplay ? '64px' : '0px'}} className="AreaNavTablet">
                            <nav style={{display: StDisplay ? 'flex' : 'none' }}>
                                <ul>
                                    {logged &&
                                        <>  <li>
                                                <Link to="/historia">História</Link>
                                            </li>
                                            <li>
                                                <Link to="/regulamentoraspadinha">Promocão</Link>
                                            </li>
                                            <li>
                                                <Link to="/produtos">Cardápio</Link>
                                            </li>
                                            <li>
                                                <Link to="/lojas">Lojas</Link>
                                            </li>
                                            <li>
                                                <Link to="/contato">Contato</Link>
                                            </li>
                                            <li>
                                                <Link to="/MinhaConta?cat=MinhaConta">Minha Conta</Link>
                                            </li>
                                            <li>
                                                <button className="button" onClick={handleLogout}>Sair</button>
                                            </li>
                                        </>
                                    }{!logged &&
                                        <>  
                                            <li>
                                                <Link to="/historia">História</Link>
                                            </li>
                                            <li>
                                                <Link to="/regulamentoraspadinha">Promocão</Link>
                                            </li>
                                            <li>
                                                <Link to="/produtos">Cardápio</Link>
                                            </li>
                                            <li>
                                                <Link to="/lojas">Lojas</Link>
                                            </li>
                                            <li>
                                                <Link to="/contato">Contato</Link>
                                            </li>
                                            <li>
                                                <Link to="/cadastrar">Cadastrar</Link>
                                            </li>
                                            <li>
                                                <Link to="/Login" className="button">Login</Link>
                                            </li>
                                        
                                        </>
                                    }
                                </ul>
                            </nav>
                        </div>

                        <div style={{height: StDisplay ? '300px' : '0px'}} className="AreaNavSmart">
                            <nav style={{display: StDisplay ? 'flex' : 'none' }}>
                                <ul>
                                    {logged &&
                                        <>  <li>
                                                <Link to="/historia">História</Link>
                                            </li>
                                            <li>
                                                <Link to="/regulamentoraspadinha">Promocão</Link>
                                            </li>
                                            <li>
                                                <Link to="/produtos">Cardápio</Link>
                                            </li>
                                            <li>
                                                <Link to="/lojas">Lojas</Link>
                                            </li>
                                            <li>
                                                <Link to="/contato">Contato</Link>
                                            </li>
                                            <li>
                                                <Link to="/MinhaConta?cat=MinhaConta">Minha Conta</Link>
                                            </li>
                                            <li>
                                                <button className="button" onClick={handleLogout}>Sair</button>
                                            </li>
                                        </>
                                    }{!logged &&
                                        <>  
                                            <li>
                                                <Link to="/historia">História</Link>
                                            </li>
                                            <li>
                                                <Link to="/regulamentoraspadinha">Promocão</Link>
                                            </li>
                                            <li>
                                                <Link to="/produtos">Cardápio</Link>
                                            </li>
                                            <li>
                                                <Link to="/lojas">Lojas</Link>
                                            </li>
                                            <li>
                                                <Link to="/contato">Contato</Link>
                                            </li>
                                            <li>
                                                <Link to="/cadastrar">Cadastrar</Link>
                                            </li>
                                            <li>
                                                <Link to="/Login" className="button">Login</Link>
                                            </li>
                                        
                                        </>
                                    }
                                </ul>
                            </nav>
                        </div>
                    </>
                </div>
            </div>
        </HeaderArea>
    );
}

const mapStateToProps = (state) => {
    return{
        nome:state.user.nome,
        qt:state.user.qt,
        StCart:state.user.StCart,
        DisplayNone:state.user.DisplayNone,
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        setNome:(nome)=>dispatch({type:'SET_NOME', payload:{nome}}),
        setCart:(StCart)=>dispatch({type:'SET_CART', payload:{StCart}})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);