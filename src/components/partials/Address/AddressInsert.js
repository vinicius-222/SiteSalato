import React, { useState, useEffect, useRef} from 'react'
import styled from 'styled-components';
import {LoadTela} from '../../Loading';
import { connect } from 'react-redux';
import Cookies from 'js-cookie';
import {CEPMask, UFMask} from '../../../components/Mask';
import useSalatoDeliveryAPI from '../../../helpers/SalatoAPI';

const Container = styled.div`
    position:fixed;
    left:0;
    top:0;
    bottom:0;
    right:0;
    display:none;
    transition:opacity ease 1s;
    justify-content: center;
    align-items: center;
    overflow-y:auto;
    background-color:#000;
    opacity:0;

`; 

const WindowBory = styled.div`
    display:flex;
    border-radius:5px;
    left:30%;
    flex-direction:column;
    transition:opacity ease 1s;
    top:20%;
    bottom:20%;
    right:20%;
    background-color:#FFF;
    opacity:0;
    position:fixed;

    .body{
        display:flex;
        width:100%;
        height:90%;
        justify-content:center;
        align-items:center;
        flex:1;

        form{

            .area{   
                align-items:center;
                justify-content:flex-end;
                display:flex;

                .area--title{

                }

                .area--areaButton1{
                    margin-left:5px;
                    display:flex;
                    width:300px;

                    .area--btn{
                        height:30px;
                        display:flex;
                        margin:2px;
                        width:37%;
                        justify-content:center;
                        align-items:center;
                        cursor:pointer;
                        color:#FFF;
                        border-radius:5px;
                    }

                    .btnAtivo{
                        transition:all ease .5s;
                        background-color:#FF0000;
                    }

                    .btnInativo{
                        transition:all ease .5s;
                        background-color:#CCC;
                    }
                }

                .area--input{
                    display:flex;
                    input{
                        width:300px;
                        font-size:14px;
                        padding:5px;
                        border:1px solid #DDD;
                        border-radius:3px;
                        outline:0;
                        transition:all ease .4s;
                        margin-left:10px;

                    }
                }
            }
        }
    }

    .area--footer{
        display:flex;
        justify-content:flex-end;
        align-items:flex-end;

        .area--sub{

            .area--btn{
                display:flex;
                height:60px;
                justify-content:flex-end;
                align-items:flex-end;
                
                button {
                    display:flex;
                    width:120px;
                    height:30px;
                    justify-content:center;
                    align-items:center;
                    background-color:#0089FF;
                    border:0;
                    outline:0;
                    padding:5px 5px;
                    border-radius:4px;
                    color:#FFF;
                    font-size:15px;
                    cursor:pointer;
                    margin-right:5px;
                    margin-bottom:10px;
    
                    &:hover {
                        background-color:#006FCE;
                    }
                }
            }
        }
    }
}

@media(max-width:800px){
    left:0%;
    top:0%;
    bottom:0%;
    right:0%;
    flex-direction:column;
    overflow-y: scroll;

    .body{

        form{
            width:90%;
            .area{
                margin-top:5px;
                width:100%;
                flex-direction:column;
                align-items:flex-start;
                justify-content:flex-start;

                .area--title{

                }

                .area--data{
                    width:100%;
                    display:flex;
                    padding:0px;
                    border-radius:3px;
                    outline:0;
                    transition:all ease .4s;
                    margin-left:0px;
                    font-size:14px;

                    input{
                        width:100%;
                        margin:0px;
                        height:29px;
                        autline:0;
                        padding:0px 5px;
                        outline:0;
                    }
                }

                .area--input{
                    width:100%;
                    height:auto;

                    .load{
                        display:flex;
                        height:60px;
                        width:60px;
                        margin-left:-20px;
                        background-color:#FF0000;
                        justify-content:center;
                        align-items:center;
                    }


                    input{
                        width:100%;
                        margin:0px;
                    }


                }

                .area--btn{
                    width:100%;
                }
                

                .area--areaButton1{
                    display:flex;
                    width:100%;
                    margin:0px;
                    justify-content:space-between;

                    .area--btn{

                        margin:0px;
                        width:32%;
                    }
                }
                .area--areaButton2{
                    display:flex;
                    width:100%;
                    margin:0px;
                    justify-content:space-between;

                    .area--btn{

                        margin:5px 0px;
                        width:32%;
                    }
                }
            }
        }
    }
}
`;
let timer;
const AddressInsert = (props) => {
    const API = useSalatoDeliveryAPI();
    const CampoCEP = useRef();
    const [CEP, setCEP] = useState('');
    const [NmDestinatario, setNmDestinatario] = useState('');
    const [TpEndereco, setTpEndereco] = useState('');
    const [NmEndereco, setNmEndereco] = useState('');
    const [DsLogradouro, setDsLogradouro] = useState('');
    const [NrNumero, setNrNumero] = useState('');
    const [DsBairro, setDsBairro] = useState('');
    const [DsCidade, setDsCidade] = useState('');
    const [CdUF, setCdUF] = useState('');
    const [DsPontoDeReferencia, setDsPontoDeReferencia] = useState('');
    const [Stload, setStLoad] = useState(false);


    const onClose = () => {

        if (props.visible){
            document.querySelector('.WindowBody').style.opacity = 0;
            document.querySelector('.WindowArea').style.opacity = 0;
        }
        
        setTimeout(()=>{
            props.onCloseModal(!props.visible);
        },400);
    }

    const onSave = () => {
        if(props.StAcao === 'Edit'){
            props.onAcao(
                Cookies.get('token'),
                props.data.IdEndereco,
                DsLogradouro,
                DsBairro,
                DsCidade,
                NrNumero,
                CEP,
                CdUF,
                props.data.StEntrega,
                TpEndereco,
                NmEndereco,
                DsPontoDeReferencia,
                NmDestinatario,
                0,
                0,
                0,
                0,
                0,
            );
        }else{
            props.onAcao(
                Cookies.get('token'),
                props.data.IdEndereco,
                DsLogradouro,
                DsBairro,
                DsCidade,
                NrNumero,
                CEP,
                CdUF,
                props.data.StEntrega,
                TpEndereco,
                NmEndereco,
                DsPontoDeReferencia,
                NmDestinatario,
                0,
                0,
                0,
                0,
                0,
            )
        }
        onClose();
    }

    useEffect(() =>{
        setStLoad(true);
        if (timer){
            clearTimeout(timer)
        }

        timer = setTimeout(async()=>{
            if (CEP.length >= 10 ){

                const json = await API.getEnderecoCEP(CEP);
                if (json.logradouro){
                    setDsLogradouro(`${json.tipo_logradouro} ${json.logradouro} `);
                    setDsBairro(json.bairro);
                    setDsCidade(json.cidade);
                    setCdUF(json.uf);

                }
            }
            setStLoad(false);
        },1000)

    },[CEP]);

    useEffect(()=>{ 
        setCEP(props.data.DsCEP);
        setNmDestinatario(props.data.NmDestinatario);
        setTpEndereco(props.data.TpEndereco);
        setNmEndereco(props.data.NmEndereco);
        setDsLogradouro(props.data.DsLogradouro );
        setNrNumero(props.data.NrNumero );
        setDsBairro(props.data.DsBairro);
        setDsCidade(props.data.DsCidade);
        setCdUF(props.data.CdUF);
        setDsPontoDeReferencia(props.data.DsPontoDeReferencia);
        CampoCEP.current.focus();
    },[props.data])
    return(
        <>
            <Container className="WindowBody" style={{display: props.visible ? 'flex' : 'none'}}></Container>
            <WindowBory className="WindowArea">
                <div className="body">
                    <form>
                        <label className="area">
                            <div className="area--title">CEP</div>
                            <div className="area--input">
                                <input 
                                    ref={CampoCEP}
                                    placeholder="digite o cep para pesquisa"
                                    type="text"
                                    value={CEPMask(CEP)}
                                    onChange={(e)=>setCEP(CEPMask(e.target.value))}
                                />
                                <div className="load">

                                </div>
                            </div>
                        </label>
                        <label className="area">
                            <div className="area--title">Quem receber</div>
                            <div className="area--input">
                                <input 
                                    type="tel" 
                                    value={NmDestinatario}
                                    onChange={(e)=>setNmDestinatario(e.target.value)}
                                />
                            </div>
                        </label>
                        <label className="area">
                            <div className="area--title">Tipo de Endereço</div>
                            <div className="area--areaButton1">
                                <div onClick={()=>setTpEndereco('Residencial')} className={TpEndereco === 'Residencial' ? "area--btn btnAtivo" : "area--btn btnInativo"}>Residêncial</div>
                                <div onClick={()=>setTpEndereco('Comercial')} className={TpEndereco === 'Comercial' ? "area--btn btnAtivo" : "area--btn btnInativo"}>Comercial</div>
                                <div onClick={()=>setTpEndereco('Outros')} className={TpEndereco === 'Outros' ? "area--btn btnAtivo" : "area--btn btnInativo"}>Outros</div>
                            </div>
                        </label>
                        <label className="area">
                            <div className="area--title">Nome do Endereço</div>
                            <div className="area--input">
                                <input 
                                    type="tel" 
                                    value={NmEndereco}
                                    onChange={(e)=>setNmEndereco(e.target.value)}
                                />
                            </div>
                        </label>
                        <label className="area">
                            <div className="area--title">Logradouro</div>
                            <div className="area--input">
                                <input 
                                    type="tel" 
                                    value={DsLogradouro}
                                    onChange={(e)=>setDsLogradouro(e.target.value)}
                                />
                            </div>
                        </label>
                        <label className="area">
                            <div className="area--title">Numero</div>
                            <div className="area--input">
                                <input 
                                    type="tel" 
                                    value={NrNumero}
                                    onChange={(e)=>setNrNumero(e.target.value)}
                                />
                            </div>
                        </label>
                        <label className="area">
                            <div className="area--title">Bairro</div>
                            <div className="area--input">
                                <input 
                                    type="tel" 
                                    value={DsBairro}
                                    onChange={(e)=>setDsBairro(e.target.value)}
                                />
                            </div>
                        </label>
                        <label className="area">
                            <div className="area--title">Cidade</div>
                            <div className="area--input">
                                <input 
                                    type="tel" 
                                    value={DsCidade}
                                    onChange={(e)=>setDsCidade(e.target.value)}
                                />
                            </div>
                        </label>
                        <label className="area">
                            <div className="area--title">UF</div>
                            <div className="area--input">
                                <input 
                                    type="tel" 
                                    value={UFMask(CdUF)}
                                    onChange={(e)=>setCdUF(UFMask(e.target.value))}
                                />
                            </div>
                        </label>
                        <label className="area">
                            <div className="area--title">Ponto de Referência</div>
                            <div className="area--input">
                                <input 
                                    type="tel" 
                                    value={DsPontoDeReferencia}
                                    onChange={(e)=>setDsPontoDeReferencia(e.target.value)}
                                />
                            </div>
                        </label>
                    </form>
                </div>
                <div className="area--footer">
                    <label className="area--sub">
                        <div className="area--btn">
                            <button onClick={()=>onClose()}>Cancelar</button>
                            <button onClick={()=>onSave()}>Salvar</button>
                        </div>
                    </label>
                </div>
            </WindowBory>
        </>
    )
}

const mapStateToProps = (state) => {
    return{
        DadosEndereco:state.user.DadosEndereco
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        setDadosEndereco:(DadosEndereco)=>dispatch({type:'SET_DADOSENDERECO', payload:{DadosEndereco}})
    }
}
export default connect(mapStateToProps, mapDispatchToProps) (AddressInsert);