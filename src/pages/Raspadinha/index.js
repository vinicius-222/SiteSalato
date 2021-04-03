import React, { useState, useEffect } from 'react';
import DatePicker from "react-datepicker";
import { connect } from 'react-redux';
import { Container } from './styled';
import { TELMask, CELMask, cpfMask, rgMask } from '../../components/Mask';

const Raspadinha = (props) =>{

    const [Nome, setNome] = useState('');
    const [Email, setEmail] = useState('');
    const [Telefone, setTelefone] = useState('');
    const [DataNasc, setDataNasc] = useState();
    const [TpSexo, setTpSexo] = useState('');
    const [TpEstadoCivil, setTpEstadoCivil] = useState('');

    useEffect(()=>{

    },[])

    return(
        <Container>
            <div className="topo">
                <img className="logo" src={require('../../assets/images/LogoLandPage.png')}/>
                <img className="promocao" src={require('../../assets/images/Promocao.png')}/>
            </div>
            <div className="corpo">
                <form>
                    <label className="area">
                        <div className="area--title">Nome Completo</div>
                        <div className="area--input">
                            <input
                                type="text"
                                value={Nome}
                                onChange={(e)=>setNome(e.target.value)}
                            />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">E-mail</div>
                        <div className="area--input">
                            <input
                                type="email"
                                value={Email}
                                onChange={(e)=>setEmail(e.target.value)}
                            />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">Telefone</div>
                        <div className="area--input">
                            <input 
                                type="tel" 
                                value={CELMask(Telefone)}
                                onChange={(e)=>setTelefone(e.target.value)}
                            />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">Data Nascimento</div>
                        <div className="area--data">
                        <DatePicker
                            selected={DataNasc}
                            onChange={(e)=>setDataNasc(e)}
                            peekNextMonth
                            showMonthDropdown
                            showYearDropdown
                            dropdownMode="select"
                            dateFormat="dd/MM/yyyy"
                        />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">Sexo</div>
                        <div className="area--areaButton1">
                            <div onClick={()=>setTpSexo('1')} className={TpSexo === '1' ? "area--btn btnAtivo" : "area--btn btnInativo"}>Masculino</div>
                            <div onClick={()=>setTpSexo('2')} className={TpSexo === '2' ? "area--btn btnAtivo" : "area--btn btnInativo"}>Feminino</div>
                            <div onClick={()=>setTpSexo('3')} className={TpSexo === '3' ? "area--btn btnAtivo" : "area--btn btnInativo"}>Outros</div>
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">Estado Civil</div>
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
                        <div className="area--btn">
                            <button >Participar</button>
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