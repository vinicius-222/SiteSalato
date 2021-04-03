import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { SearchArea, PageArea} from './styled';
import useApi, {BASEAPIIMAGE, IMAGE} from '../../helpers/SalatoAPI'
import {Loading} from '../../components/Loading';
import { isLogged } from '../../helpers/AuthHandler';
import { PageContainer } from '../../components/MainComponents';
import AdItem from '../../components/partials/AdItem';
import { CEPMask } from '../../components/Mask';

let timer;
let List = [];
const BASE = BASEAPIIMAGE;
const Page =  (props) => {
    const api = useApi();
    const useQueryString = () => {
        return new URLSearchParams( useLocation().search );
    }
    const query = useQueryString();
    
    const [pIdProduto, setpIdProduto] = useState(query.get('IdProduto') !== null ? query.get('IdProduto') : '');
    const [addInfo, setAddInfo] = useState([]);
    const [addGrupo, setAddGRupo] = useState([]);
    const [vlSubTotal, setVlSubTotal] = useState(0);
    const [vlDesconto, setVlDesconto] = useState(0);
    const [VlTotalProduto, setVlTotalProduto] = useState(0);
    const [NmProduto, setNmProduto] = useState('');
    const [ProdutoTotal, setProdutoTotal] = useState(0);
    const [pageCount, setPageCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [resultOpacity, setresultOpacity] = useState(1);
    const [StLoading, setStLoading] = useState(false);
    const [StLoadingCEP, setStLoadingCEP] = useState(false);
    const [idGrupoProduto, setIdGrupoProduto] = useState('36');
    const [modalIsOpen, setmodalIsOpen] = useState(false);
    const [idProduto, setIdProduto] = useState(0);
    const [srcLinck, setsrcLinck] = useState('');
    const [DsNmProduto, setDsNmProduto] = useState('');
    const [Preco, setPreco] = useState(0);
    const [DsProdutoSite, setDsProdutoSite] = useState('');
    const [qtProduto, setQtProduto] = useState(1);
    const [logged] = useState(isLogged);
    const [DsCEP, setDsCEP] = useState('');
    const [DsEndereco, setDsEndereco] = useState([]);
 
    const getGrupoProduto = async () => {
        const json = await api.getGrupoProduto(1, 0);
        setAddGRupo(json.GrupoProduto);
        
    }

    const getInfoProduto = async () => {
        
        let Limit = 8;
        let offset = (currentPage-1) * Limit + 1;
        const json = await api.getProdutoBanner(
            NmProduto,
            1,
            Limit,
            0,
            offset,
            idGrupoProduto
        );
        setAddInfo(json.Produtos);
        setProdutoTotal(json.CountProdutos);
        setresultOpacity(1);
        setStLoading(false);
        if (pIdProduto){
            getProduto();
        }
    }

    const carregaCEP = async (v) => {
        const json = await api.getEndereco(v);
        setDsEndereco(json);   
        setStLoadingCEP(false);
        Cookies.set('CEP', v);
    }

    const changeCEP = () =>{
        if (timer){
            clearTimeout(timer);
        }   
        setStLoadingCEP(true); 
        timer = setTimeout(()=>{
            if(DsCEP.length >= 10 && DsCEP.length <= 11){
                carregaCEP(DsCEP);
            }else{
                setStLoadingCEP(false); 
                setDsEndereco([]);
                Cookies.remove('CEP');
            }
        },2000);
    }

    const setCEP = (v) => {
        setDsCEP(CEPMask(v));
    }

    const getCarCompra = async () => {
        let jwt = Cookies.get('token');
        const json = await api.getCarCompra(
            jwt
        );
        List = json.CarrinhoDeCompra;
        UpdateCart();        
    }

    const deleteCarCompra = async (tIdProduto) => {
        let jwt = Cookies.get('token');

        const json = await api.deleteCarCompra(
            jwt,
            tIdProduto
        )
        return json;
    }

    const InsertCarCompra = async () => {
        let jwt = Cookies.get('token');
        const json = await api.insertCarCompra(
            jwt,
            idProduto,  
            qtProduto
        );
        return json;
    }

    const UpdateCarCompra = async (tIdProduto, tQtProduto) => {
        let jwt = Cookies.get('token');
        const json = await api.updateCarCompra(
            jwt,
            tIdProduto,  
            tQtProduto
        );
        return json;
    }

    const getProduto = async () => {
        const json = await api.getProdutoBanner(
            NmProduto,
            1,
            1,
            0,
            1,
            0,
            pIdProduto
        );
        OpemModal(json.Produtos[0]);
    }

    const OpemModal = (i) => {
        setsrcLinck(i.LinckImage);
        setDsNmProduto(i.NmProduto);
        setPreco(parseFloat(i.VlPreco).toFixed(2));
        setIdProduto(i.IdProduto);
        setDsProdutoSite(i.DsProdutoSite);
        setmodalIsOpen(!modalIsOpen);
        
        setTimeout(()=>{
            if (!modalIsOpen){
                document.querySelector('.WindowBody').style.opacity = 1;
            }
        },200)
    }
    
    const closeModal =  () =>{
        
        if (modalIsOpen){
            document.querySelector('.WindowBody').style.opacity = 0;
        }
        
        setTimeout(()=>{
            setmodalIsOpen(!modalIsOpen);
        },200);
        setpIdProduto('');
    }

    const IncQuantidade = () => {
        let v = qtProduto + 1;
        setQtProduto(v);
    }

    const DecQuantidade = () => {
        let v = qtProduto - 1;
        if (v >= 1){
            setQtProduto(v);
        }
    }

    const IncCartQT = (i,k) => {
        let arr = [];
        i.QtPedida ++;
        arr = List;
        arr[k].QtPedida = i.QtPedida;
        arr[k].VlTotal = i.QtPedida * i.VlUnitario;
        List = arr;
        UpdateCart();
        UpdateCarCompra(arr[k].IdProduto, parseFloat(arr[k].QtPedida));
    }

    const DecCartQT = (i,k) => {
        if (i.QtPedida > 1){
            let arr = [];
            i.QtPedida --;
            arr = List;
            arr[k].QtPedida = i.QtPedida;
            arr[k].VlTotal = i.QtPedida * i.VlUnitario;

            UpdateCart();
            UpdateCarCompra(arr[k].IdProduto, parseFloat(arr[k].QtPedida));
        }
    }

    const SomaValoresTotais = () => {
        let promise = new Promise((resolve, reject) =>{
            let v = 0;
            for (let i in List){
                v = v + parseFloat(List[i].VlTotal);
            }
            resolve(v);
        })
        return promise;
    }

    const SomaItensTotais = () => {
        let promise = new Promise((resolve, reject) =>{
            let q = 0;
            for (let i in List){
                q = q + parseFloat(List[i].QtPedida);
            }
            resolve(q);
        })
        return promise;
    }
    
    const UpdateCart = () =>{
    
        SomaItensTotais()
        .then((r) => {
            props.setQt(r)
            
        });

        SomaValoresTotais()
        .then((r) => {
            let taxa = 4
            setVlDesconto(taxa);
            setVlSubTotal(r);
            setVlTotalProduto(r+taxa);
        })   
    }

    const getPesquisa = (e) => {
        if (e){
            e.preventDefault();   
        }
        setresultOpacity(0.3);
        if (currentPage !== 1){
            setCurrentPage(1);
        }else {
            getInfoProduto();
        }
        
    };

    const removeItem = (i,k) => {
        List.splice(k,1);
        deleteCarCompra(i.IdProduto);
        UpdateCart();
        if (List.length == 0){
            props.setStCart(false);
        }
    }


    const getItem = () => {
        let VlPrecoFinal  = 0;
        VlPrecoFinal = qtProduto * Preco;

        let key = List.findIndex((item) =>item.IdProduto == idProduto);

        if (key > -1){
            List[key].QtPedida = parseFloat(List[key].QtPedida) + parseFloat(qtProduto);
            List[key].VlTotal = List[key].QtPedida * Preco;
            UpdateCarCompra(List[key].IdProduto, parseFloat(List[key].QtPedida));
        }else{
            InsertCarCompra();
            List.push({
                "IdProduto":idProduto,  
                "NmProduto":DsNmProduto, 
                "LinckImage":srcLinck, 
                "QtPedida":qtProduto, 
                "VlUnitario":Preco, 
                "VlTotal":VlPrecoFinal});
        }
        props.setStCart(true);
        UpdateCart();
        closeModal();
    }

    useEffect(()=>{
        if (!modalIsOpen){
            setQtProduto(1);
        }
    },[modalIsOpen])

    useEffect(()=>{
        if(addInfo.length > 0) {
            setPageCount( Math.ceil( ProdutoTotal / addInfo.length ) );
        } else {
            setPageCount( 0 );
        }
        
    },[ProdutoTotal]);

    useEffect(() =>{
        setStLoading(true);
        setresultOpacity(0.3);
        setTimeout(()=>{
            getInfoProduto();
        },1000)

    },[currentPage])

    useEffect(() =>{
        getInfoProduto();
        getGrupoProduto();
        UpdateCart();
        if(Cookies.get('CEP')){
            setDsCEP(Cookies.get('CEP'));
        }

    },[])

    useEffect(() => {
        changeCEP(DsCEP);
    },[DsCEP])

    useEffect(() => {
        if (logged){
            getCarCompra();
        }
    },[logged])

    useEffect(() => {
        if (currentPage !== 1){
            setCurrentPage(1);
        }else {
            getInfoProduto();
        }
       
    },[idGrupoProduto])
    
    let pagination = [];
    for(let i=1;i<=pageCount;i++) {
        pagination.push(i); 
    }
    return(
        <> 
            <SearchArea>
                <PageContainer>
                    <div style={{display: modalIsOpen ? 'flex' : 'none'}} class="WindowArea" > 
                        <div  class="WindowBody">
                            <div class="ProdutoBig">
                                <img src={IMAGE+srcLinck} />
                            </div>
                            <div class="ProdutoInfo">
                                <h2>{DsNmProduto}</h2>
                                <div class="ProdutoInfo--desc">{DsProdutoSite}</div>
                                <div class="ProdutoInfo--pricearea">
                                    <div class="ProdutoInfo--sector">Preço</div>
                                    <div class="ProdutoInfo--price">
                                        <div class="ProdutoInfo--actualPrice">R$ {Preco}</div>
                                        <div class="ProdutoInfo--qtarea">
                                            <button onClick={DecQuantidade} class="ProdutoInfo--qtmenos">-</button>
                                            <div class="ProdutoInfo--qt">{qtProduto}</div>
                                            <button onClick={IncQuantidade} class="ProdutoInfo--qtmais">+</button>
                                        </div>
                                    </div>
                                </div>
                                <div onClick={()=>getItem()} class="ProdutoInfo--addButton">Adicionar ao carrinho</div>
                                <div onClick={()=>closeModal()} class="ProdutoInfo--cancelButton">Cancelar</div>
                            </div>
                        </div>
                    </div>
                    <div className="LocalizacaoArea">
                        <div className="Grupo">
                        {addGrupo.map((i, k)=>
                            <div className={i.IdGrupoProduto == idGrupoProduto ? "ItemGrupo ItemGrupo--ativo" : "ItemGrupo ItemGrupo--inativo"} onClick={()=>setIdGrupoProduto(i.IdGrupoProduto)}>
                                <img src={IMAGE+i.DsImagemSite} />
                                <div className="ItemTitulo">{i.DsGrupoProduto}</div>
                            </div>   
                        )} 
                        </div>
                    </div>
                </PageContainer>
            </SearchArea>
            <PageContainer>
                <PageArea>
                    <div className="AreaList">
                        <h2>Produtos</h2>
                        
                        <div className="list" style={{opacity:resultOpacity}}>
                            {StLoading && 
                                <div className="AreaLoading">
                                    <Loading  height="100px" width="100px" color="#FF0000"/>    
                                </div>
                            }
                            {addInfo && 
                                addInfo.map((i, k) =>
                                    <AdItem className="adItem" key={k} data={i} onClick={()=>{
                                        OpemModal(i);
                                    }}/>
                                )
                            }
                        </div>
                        <div className="pagination">
                            {pagination.map((i,k)=>
                                <div onClick={()=>setCurrentPage(i)} className={i===currentPage?'pagItem active':'pagItem'}>{i}</div>  
                            )}
                        </div>
                    </div>
                    <aside className={props.StCart ? 'show' : ''}>
                        <div class="cart--area">
                            <div onClick={()=>props.setStCart(false)} class="menu-closer1">❌</div>
                            <div onClick={()=>props.setStCart(false)} class="menu-closer2">Continuar Comprando</div>
                            <h1>Seu Carrinho</h1>
                            <div class="cart">
                            {List.map((i,k)=>
                                <div className="cart--itens">
                                    <div className="cart--products">
                                        <img src={IMAGE+i.LinckImage} />
                                        <span>{i.NmProduto}</span>
                                    </div>
                                    <div class="ProdutoInfo--pricearea">
                                        <div class="ProdutoInfo--price">
                                            <div class="ProdutoInfo--qtarea">
                                                <button onClick={()=>DecCartQT(i, k)} class="ProdutoInfo--qtmenos">-</button>
                                                <div class="ProdutoInfo--qt">{parseFloat(i.QtPedida)}</div>
                                                <button onClick={()=>IncCartQT(i, k)} class="ProdutoInfo--qtmais">+</button>
                                            </div>
                                            <div class="ProdutoInfo--actualPrice">R$ {parseFloat(i.VlUnitario).toFixed(2)}</div>
                                            <div class="ProdutoInfo--actualPrice">R$ {parseFloat(i.VlTotal).toFixed(2)}</div>
                                            <div onClick={()=>removeItem(i,k)} className="ProdutoInfo--btnremover">
                                                <img src={require('../../assets/images/trash.png')} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            </div>
                            <div class="cart--details">
                                <div class="cart--totalitem subtotal">
                                    <span>Subtotal</span>
                                    <span>R$ {parseFloat(vlSubTotal).toFixed(2)}</span>
                                </div>
                                <div class="cart--totalitem desconto">
                                    <span>Taxa de Entrega</span>
                                    <span>R$ {vlDesconto.toFixed(2)}</span>
                                </div>
                                <div class="cart--totalitem total big">
                                    <span>Total</span>
                                    <span>R$ {VlTotalProduto.toFixed(2)}</span>
                                </div>
                                <div class="cart--finalizar">Finalizar a compra</div>
                            </div>
                        </div>
                    </aside>
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

export default connect(mapStateToProps, mapDispatchToProps)(Page)