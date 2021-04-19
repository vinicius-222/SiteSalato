import React, { useState, useEffect } from 'react';
import DatePicker from "react-datepicker";
import { connect } from 'react-redux';
import { Container, Check } from './styled';
import {LoadTela} from '../../components/Loading';
import { TELMask, CELMask, cpfMask, rgMask } from '../../components/Mask';
import useSalatoDeliveryAPI from '../../helpers/SalatoAPI';

const Raspadinha = (props) =>{
    const API = useSalatoDeliveryAPI();
    const [Nome, setNome] = useState('');
    const [Email, setEmail] = useState('');
    const [Telefone, setTelefone] = useState('');
    const [DataNasc, setDataNasc] = useState();
    const [TpSexo, setTpSexo] = useState('');
    const [TpEstadoCivil, setTpEstadoCivil] = useState('');
    const [StLoad, setStLoad] = useState(false);
    const [StForm, setStForm] = useState(false);
    const [Msg, setMsg] = useState('');
    const [Loja, setLoja] = useState('');

    useEffect(()=>{

    },[])

    const HandleEnviar = async (e) => {
        e.preventDefault();
        VerificaCampos().then(async(r)=>{
            if(!r){
                alert('Verifique os campos obrogatorios (*) !');
                return
            }else{
                setStLoad(true);
                setStForm(true);
                const json = await API.insertClientePromocao(
                    Nome,
                    Email,
                    Telefone,
                    DataNasc,
                    TpEstadoCivil,
                    TpSexo,
                    Loja
                )
        
                setTimeout(()=>{
                    if(json.retorno){
                        setStLoad(false);
                        setMsg(json.retorno);
                    }
                    return json;
                },3000)
            }
        })
    }

    const VerificaCampos = () =>{
        let r =  new Promise((resolve, reject) =>{
            if (!Nome){
                resolve(false);
            }else if(!Email){
                resolve(false);
            }else if(!Telefone){
                resolve(false);
            }else if(!DataNasc){
                resolve(false);
            }else if(!TpSexo){
                resolve(false);
            }else if(!TpEstadoCivil){
                resolve(false);
            }else if(!Loja){
                resolve(false);
            }else{
                resolve(true);
            }
        })
        return r;
    }

    return(
        <Container>
            <div className="fundoTopo">
                <div className="topo">
                    <img className="logo" src={require('../../assets/images/LogoLandPage.png')}/>
                    <img className="promocao" src={require('../../assets/images/Promocao.png')}/>
                </div>
            </div>
            <div className="corpo">
                {StLoad &&  <LoadTela visible={StLoad} color="#FF0000" height="60px" width="60px" />}
                <div className="areaAviso" style={{display:Msg ? "flex" : "none"}} >{Msg}</div>
                <form onSubmit={HandleEnviar} style={{display:!StForm ? "flex" : "none"}}>
                    <label className="area">
                        <div className="area--title">
                            <div>Nome Completo </div>
                            <Check>*</Check>
                        </div>
                        
                        <div className="area--input">
                            <input
                                type="text"
                                value={Nome}
                                onChange={(e)=>setNome(e.target.value)}
                                required
                            />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">
                            <div>E-mail</div>
                            <Check>*</Check>
                        </div>
                        <div className="area--input">
                            <input
                                type="email"
                                value={Email}
                                onChange={(e)=>setEmail(e.target.value)}
                                required
                            />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">
                            <div>Telefone</div>
                            <Check>*</Check>
                        </div>
                        <div className="area--input">
                            <input 
                                type="tel" 
                                value={CELMask(Telefone)}
                                onChange={(e)=>setTelefone(e.target.value)}
                                required
                            />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">
                            <div>Data Nascimento</div>
                            <Check>*</Check>
                        </div>
                        <div className="area--data">
                        <DatePicker
                            selected={DataNasc}
                            onChange={(e)=>setDataNasc(e)}
                            peekNextMonth
                            showMonthDropdown
                            showYearDropdown
                            dropdownMode="select"
                            dateFormat="dd/MM/yyyy"
                            required
                        />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">
                            <div>Sexo</div>
                            <Check>*</Check>
                        </div>
                        <div className="area--areaButton1">
                            <div onClick={()=>setTpSexo('1')} className={TpSexo === '1' ? "area--btn btnAtivo" : "area--btn btnInativo"}>Masculino</div>
                            <div onClick={()=>setTpSexo('2')} className={TpSexo === '2' ? "area--btn btnAtivo" : "area--btn btnInativo"}>Feminino</div>
                            <div onClick={()=>setTpSexo('3')} className={TpSexo === '3' ? "area--btn btnAtivo" : "area--btn btnInativo"}>Outros</div>
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">
                            <div>Estado Civil</div>
                            <Check>*</Check>
                        </div>
                        <div className="area--areaButton2">
                            <div onClick={()=>setTpEstadoCivil('C')} className={TpEstadoCivil === 'C' ? "area--btn btnAtivo" : "area--btn btnInativo"}>Casado</div>
                            <div onClick={()=>setTpEstadoCivil('S')} className={TpEstadoCivil === 'S' ? "area--btn btnAtivo" : "area--btn btnInativo"}>Solteiro</div>
                            <div onClick={()=>setTpEstadoCivil('D')} className={TpEstadoCivil === 'D' ? "area--btn btnAtivo" : "area--btn btnInativo"}>Desquitado</div>
                            <div onClick={()=>setTpEstadoCivil('V')} className={TpEstadoCivil === 'V' ? "area--btn btnAtivo" : "area--btn btnInativo"}>Viúvo</div>
                            <div onClick={()=>setTpEstadoCivil('U')} className={TpEstadoCivil === 'U' ? "area--btn btnAtivo" : "area--btn btnInativo"}>União Estavel</div>
                            <div onClick={()=>setTpEstadoCivil('O')} className={TpEstadoCivil === 'O' ? "area--btn btnAtivo" : "area--btn btnInativo"}>Outros</div>
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">
                            <div>Loja de sua preferêcia</div>
                            <Check>*</Check>
                        </div>
                        <div className="area--areaButton2">
                            <div onClick={()=>setLoja('M')} className={Loja === 'M' ? "area--btn btnAtivo" : "area--btn btnInativo"}>Loja Magé</div>
                            <div onClick={()=>setLoja('P')} className={Loja === 'P' ? "area--btn btnAtivo" : "area--btn btnInativo"}>Loja Piabeta</div>
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--btn">
                            <button>Participar</button>
                        </div>
                    </label>
                </form>
            </div>
        </Container>
    )
}
const mapStateToProps = (state) =>{
    return{
        nome:state.user.nome,
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Raspadinha);
