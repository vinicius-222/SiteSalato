import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { SearchArea, PageArea } from './styled';
import Cookies from 'js-cookie';
import { isLogged } from '../../helpers/AuthHandler';
import { Slide} from 'react-slideshow-image';
import Loading from '../../components/Loading';
import  useApi, { BASEAPIIMAGE } from '../../helpers/SalatoAPI'
import { PageContainer } from '../../components/MainComponents';
import AdItem from '../../components/partials/AdItem';

const BASE = BASEAPIIMAGE;
const Page =  (props) => {
    const api = useApi();
    const [adInfo, setAdInfo] = useState({});
    const [getImg, setgetImg] = useState({"Produtos":[
                                            {"IdProduto":"235","CdChamada":"000237","NmProduto":"Bolinha de  4 Queijos  KG  20 Gr","IdUnidadeVenda":"1","VlPreco":"16.0","LinckImage":"Banner02.jpeg","DsTitulo":"Banner geral"},
                                            {"IdProduto":"359","CdChamada":"000361","NmProduto":"Bolinha de Carne Seca c Requeijao  KG  20 Gr","IdUnidadeVenda":"1","VlPreco":"18.0","LinckImage":"Banner03.jpeg","DsTitulo":"Bolinha de Carne Seca"}]});
    useEffect(()=>{

        const getProduto = async () => {
            const json = await api.getProdutoBanner('', 1, 4, 1);  
            setAdInfo(json);
        }

        const getQtCartCompra = async () => {
            let jwt = Cookies.get('token');
            const json = await api.getCountCar(jwt);
            props.setQt(json.QtCartCompra);
            
        }

        getProduto();
        if (isLogged()){
            getQtCartCompra();
        }
        
    },[]);

    return(
        <>
            <SearchArea>
                <div className="Banner">
                    {!getImg.Produtos &&
                        <div className="AreaLoading">
                            <Loading/>
                        </div> 
                    }
                    {getImg.Produtos &&
                        <Slide>
                            {getImg.Produtos.map((i, k) =>
                                <div key={k} className="each-slide">
                                    <Link to="/produtos">
                                        <img className="Imagem" src={`${BASE}${i.LinckImage}`} alt="" />
                                    </Link>
                                </div>      
                            )}
                        </Slide>
                    }
                </div>
            </SearchArea>
            <PageContainer>
                <PageArea>
                    <div className="AreaList">
                        <h2>Produtos</h2>
                        <div className="list">
                            {adInfo.Produtos &&
                                adInfo.Produtos.map((i, k) => 
                                    <AdItem className="adItem" key={k} data={i} onClick={(e)=>{
                                        if (e){
                                            e.preventDefault();   
                                        }
                                    }}/>
                                )
                            }
                        </div>
                    </div>
                    <div className="sideLeft">
                        <h2>Calculadora para sua festa!!</h2>
                        <Link to="/calculadora" className="calcArea">
                            <div className="AreaCalcImg">
                                <img src={`${BASE}foto-croquete.jpg`}/>
                            </div>
                        </Link>
                        <div className="emilArea">
                            <h2>Receba nossa novidades!!</h2> 
                            <div className="AreaTextemail">
                                <h3>Cadastre seu email e receba receitas, promoções e notícias da Salato!!</h3>
                                <div className="email">
                                    <input type="email" placeholder="Digite seu email" />
                                    <button className="Botao">
                                        Enviar
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="negociosArea">
                            <h2>Negócios!!</h2> 
                            <div className="AreaInfo">
                                <div className="info">
                                    <h3>Seja um de nossos fornecedores !!</h3>
                                    <Link to="/contato?q=Fornecedor" className="Botao">
                                        Acesse
                                    </Link>
                                </div>
                                <hr/>
                                <div className="info">
                                    <h3>Seja um de nossos representante !!</h3>
                                    <Link to="/contato?q=Representação" className="Botao">
                                        Acesse
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </PageArea>
            </PageContainer>
        </>
    )
}

const mapStateToProps = (state) =>{
    return{
        nome:state.user.nome,
        qt:state.user.qt,
        StCart:state.user.StCart
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        setNome:(nome)=>dispatch({type:'SET_NOME', payload:{nome}}),
        setQt:(qt)=>dispatch({type:'SET_QT', payload:{qt}}),
        setStCart:(StCart)=>dispatch({type:'SET_CART', payload:{StCart}})

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Page);