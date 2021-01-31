import React, { useState, useEffect, useRef} from 'react';
import { PageContainer, ErrorMessage, SucessoMessage, PageTitle } from '../../components/MainComponents';
import Menu from '../../components/partials/Menu';
import {Area } from './styled';
import { connect } from 'react-redux';
import Cookies from 'js-cookie';
import { useLocation } from 'react-router-dom';
import {LoadTela} from '../../components/Loading';
import AddressList from '../../components/partials/Address/AddressList';
import AddressInsert from '../../components/partials/Address/AddressInsert';
import useSalatoDeliveryAPI from '../../helpers/SalatoAPI';

let timer;
const Endereco = (props) => {
    const API = useSalatoDeliveryAPI();
    const useQueryString = () => {
        return new URLSearchParams( useLocation().search );
    }
    const query = useQueryString();
    const [stModal, setStModal] = useState(false);
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const [infoEndereco, setInfoEndereco] = useState({})
    const [StAcao, setStAcao] = useState('');
    const [StLoad, setStLoad] = useState(false);
    const [info, setInfo] = useState({
                                        DsLogradouro:"", 
                                        DsBairro:"",
                                        DsCidade:"",
                                        NrNumero:"",
                                        DsCEP:"",
                                        CdUF:"",
                                        StEntrega:"",
                                        TpEndereco:"",
                                        NmEndereco:"",
                                        DsPontoDeReferencia:"",
                                        NmDestinatario:""
                                     })

    const getEndereco = async () => {
        const json = await API.getEndereco(
            Cookies.get('token')
        )
        props.setDadosEndereco(json.InfoEndereco);
    }

    const updateStEndereco = async (IdEndereco) => {
        const json = await API.updateStEndereco(
            Cookies.get('token'),
            IdEndereco,
            1
        )
        getEndereco();
    }

    const updateEndereco = async (jwt, IdEndereco, DsLogradouro, DsBairro, DsCidade, NrNumero, DsCEP, CdUF, StEntrega, 
        TpEndereco, NmEndereco, DsPontoDeReferencia, NmDestinatario,Latitude, Longitude, Distancia, Tempo, Valor) => {

        const json = await API.updateEndereco(
            jwt, 
            IdEndereco, 
            DsLogradouro, 
            DsBairro, 
            DsCidade, 
            NrNumero, 
            DsCEP, 
            CdUF, 
            StEntrega, 
            TpEndereco, 
            NmEndereco, 
            DsPontoDeReferencia, 
            NmDestinatario,
            Latitude, 
            Longitude, 
            Distancia, 
            Tempo, 
            Valor
        )
        if (json.error ===''){
            getEndereco();
            setSuccess('Endereço atualizado com sucesso!!');
            setTimeout(()=>{
                setStLoad(false);
            },500)
        }
    }

    const insertEndereco = async (jwt, DsLogradouro, DsBairro, DsCidade, NrNumero, DsCEP, CdUF, TpEndereco, 
        NmEndereco, DsPontoDeReferencia, NmDestinatario, Latitude, Longitude, Distancia, Tempo, Valor)=>{
        const json = await API.insertEndereco(
            jwt,
            DsLogradouro, 
            DsBairro, 
            DsCidade, 
            NrNumero, 
            DsCEP, 
            CdUF, 
            TpEndereco, 
            NmEndereco, 
            DsPontoDeReferencia, 
            NmDestinatario, 
            Latitude, 
            Longitude, 
            Distancia, 
            Tempo, 
            Valor
        )
        if (json.error ===""){

            getEndereco();
            setSuccess('Endereço inserido com sucesso!!');
            setTimeout(()=>{
                setStLoad(false);
            },500)
        }
    }

    const Acao = (jwt, IdEndereco, DsLogradouro, DsBairro, DsCidade, NrNumero, DsCEP, CdUF, StEntrega, TpEndereco, NmEndereco, DsPontoDeReferencia, NmDestinatario,
                  Latitude, Longitude, Distancia, Tempo, Valor) => {
        setStLoad(true);           
        if(StAcao === 'Edit'){
            updateEndereco(jwt, IdEndereco, DsLogradouro, DsBairro, DsCidade, NrNumero, DsCEP, CdUF, StEntrega, TpEndereco, NmEndereco, DsPontoDeReferencia, NmDestinatario,
                Latitude, Longitude, Distancia, Tempo, Valor);
        }else{
            insertEndereco(jwt, DsLogradouro, DsBairro, DsCidade, NrNumero, DsCEP, CdUF, TpEndereco, 
                NmEndereco, DsPontoDeReferencia, NmDestinatario, Latitude, Longitude, Distancia, Tempo, Valor)
        }
    }

    const onDeleteEndereco = async (jwt, IdEndereco, hash) => {
        const json = await API.deleteEndereco(
            jwt, 
            IdEndereco, 
            hash
        )

        getEndereco();
        setSuccess('Endereço deletado com sucesso!!');
    }

    const openModal = (i) => {
        setStModal(true);
        setInfoEndereco(i);
        setTimeout(()=>{
            if (!stModal){
                document.querySelector('.WindowBody').style.opacity = 0.3;
                document.querySelector('.WindowArea').style.opacity = 1;
            }
        },100)
    }

    useEffect(()=> {

    },[])
    return(
        <Area>
            <PageContainer>
                <PageTitle>Minha Conta</PageTitle>
                {success && <SucessoMessage>{success}</SucessoMessage>}
                {error && <ErrorMessage>{error}</ErrorMessage>}
                {StLoad &&  <LoadTela visible={StLoad} color="#FF0000" height="40px" width="40px" />}
                {stModal && 
                    <AddressInsert  
                        visible={stModal}
                        onCloseModal={()=>setStModal()}
                        data={infoEndereco}
                        StAcao={StAcao}
                        onAcao={(jwt, IdEndereco, DsLogradouro, DsBairro, DsCidade, NrNumero, DsCEP, CdUF, StEntrega, 
                                 TpEndereco, NmEndereco, DsPontoDeReferencia, NmDestinatario,
                                 Latitude, Longitude, Distancia, Tempo, Valor)=>Acao(jwt, IdEndereco, DsLogradouro, DsBairro, DsCidade, NrNumero, DsCEP, CdUF, StEntrega, 
                                 TpEndereco, NmEndereco, DsPontoDeReferencia, NmDestinatario,
                                 Latitude, Longitude, Distancia, Tempo, Valor)}
                    />
                }
                <div className='Container'>
                    <Menu DsPath={query.get('cat')} />
                    <div className='area'>
                        <div className="area--dados">
                            {props.DadosEndereco.length < 1 ? 'Ainda nao há endereços cadastrados!!' : ''}
                            {
                                props.DadosEndereco.map((i,k)=>(
                                    <AddressList 
                                        key={k} 
                                        data={i} 
                                        onDelete={(jwt, IdEndereco, hash)=>onDeleteEndereco(jwt, IdEndereco, hash)} 
                                        Click={()=>updateStEndereco(i.IdEndereco)} 
                                        opemModal={()=>{
                                            setStAcao('Edit')
                                            openModal(i)
                                    }}/>
                                ))
                            }
                        </div>
                        <div className='area--footer'>
                            <div className="btnAdd">
                                <div onClick={()=>{
                                    setStAcao('Insert')
                                    openModal(info)
                                }}>+</div>
                            </div>
                        </div>
                    </div>
                </div>
            </PageContainer>
        </Area>
    )
}

const mapStateToProps = (state) => {
    return{
        DadosCliente:state.user.DadosCliente,
        DadosEndereco:state.user.DadosEndereco
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        setDadosEndereco:(DadosEndereco)=>dispatch({type:'SET_DADOSENDERECO', payload:{DadosEndereco}})
    }
}


export default connect(mapStateToProps, mapDispatchToProps) (Endereco);