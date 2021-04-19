import React, { useState, useEffect} from 'react';
import { PageContainer, ErrorMessage, SucessoMessage, PageTitle } from '../../components/MainComponents';
import Menu from '../../components/partials/Menu';
import {Area } from './styled';
import {Loading} from '../../components/Loading';
import { useLocation } from 'react-router-dom';
import useSalatoDeliveryAPI from '../../helpers/SalatoAPI';
import DatePicker from "react-datepicker";
import Cookies from 'js-cookie';
import { connect } from 'react-redux';
import localeBR from 'date-fns/locale/en-CA';
import { TELMask, CELMask, cpfMask, rgMask } from '../../components/Mask';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import { DateUtils } from 'react-day-picker';
import {parseISO, format, parse} from 'date-fns';
import dateFnsFormat from 'date-fns/format'; 
import dateFnsParse from 'date-fns/parse';
import 'react-day-picker/lib/style.css';
import "react-datepicker/dist/react-datepicker.css";
import { ca } from 'date-fns/locale';

const MinhaConta = (props) => {
    const API = useSalatoDeliveryAPI();
    const useQueryString = () => {
        return new URLSearchParams( useLocation().search );
    }
    const query = useQueryString();

    const [TpSexo, setTpSexo] = useState('');
    const [TpEstadoCivil, setTpEstadoCivil] = useState('');
    const [disabled, setDisable] = useState(false);
    const [NmPessoa, setNmPessoa] = useState('');
    const [CPF, setCPF] = useState('');
    const [RG, setRG] = useState('');
    const [Telefone, setTelefone] = useState('');
    const [Celular, setCelular] = useState('');
    const [DtNascimento, setDtNascimento] = useState(new Date());

    const [jwt, setjwt] = useState('');
    const [hash, sethash] = useState('');
    const [CdChamada, setCdChamada] = useState('');
    const [error, setError] = useState('');
    const [sucess, setSucess] = useState('');


    const getPreencheCliente = async () =>{
        console.log(props.DadosCliente[0].NmPessoa);

        setNmPessoa(props.DadosCliente[0].NmPessoa);
        
        if (props.DadosCliente[0].CdCPF_CNPJ){
            setCPF(cpfMask(props.DadosCliente[0].CdCPF_CNPJ));
        }else{
            setCPF(cpfMask(""));
        }
        
        if (props.DadosCliente[0].NrIdentidade){
            setRG(rgMask(props.DadosCliente[0].NrIdentidade));
        }else{
            setRG(rgMask(""));
        }

        if (props.DadosCliente[0].DsTeleFoneCobranca){
            setTelefone(TELMask(props.DadosCliente[0].DsTeleFoneCobranca));
        }else{
            setTelefone(TELMask(""));
        }
        
        if (props.DadosCliente[0].DsFaxCobranca){
            setCelular(CELMask(props.DadosCliente[0].DsFaxCobranca));
        }else{
            setCelular(CELMask(""));
        }
        
        
        setTpSexo(props.DadosCliente[0].TpSexo);
        setTpEstadoCivil(props.DadosCliente[0].TpEstadoCivil);
        setCdChamada(props.DadosCliente[0].CdChamada);
        const date = props.DadosCliente[0].DtNascimento;
        const parsedDate = parseISO(date);  
        let formated = format(parsedDate, 'dd/LL/yyyy'); 
        setDtNascimento(parsedDate);
        setjwt(Cookies.get('token'));
        sethash(Cookies.get('hash'));

    }

    const getEndereco = async () => {
        const json = await API.getEndereco(
            Cookies.get('token')
        )

        if(json.error === ''){
            props.setDadosEndereco(json.InfoEndereco);
        }
       
    }

    const handleCancelar = (e) => {
        e.preventDefault();
        window.location.href = '/MinhaConta?cat=MinhaConta';
    }

    const handleDtInicio = (str, format, locale) =>{
        let dt = parseDate(str, format, locale);
        if(dt){
            setDtNascimento(formatDate(dt, 'yyyy-LL-dd', locale));
        }
    }

    const handleSalvar = async(e) => {
        setDisable(true);
        e.preventDefault();
        setTimeout(async()=>{
            const json = await API.updateClienteDelivery(
                jwt,
                hash,
                CdChamada,
                NmPessoa,
                CPF,
                Telefone,
                Celular,
                DtNascimento,
                TpEstadoCivil,
                RG,
                TpSexo
            )
           if (!json.error){
            getDadosCliente();
                setSucess('Cadastro atualizado com sucesso!!!');
           }else{
               setError('Cadastro nao atualizado, verifique a conexão!!')
           }
           setDisable(false);
        },500)
    }

    const getDadosCliente = async () =>{
        const json = await API.getClienteDelivery(
            Cookies.get('token'),
            Cookies.get('hash')
        )
        if (json.error === ""){
           props.setDadosCliente(json.Cliente);
        }
    }

    const parseDate = (str, format, locale) => {
        const parsed = dateFnsParse(str, format, new Date(), { locale });
        if (DateUtils.isDate(parsed)) {
            return parsed;
        }
        return undefined;
    }

    const formatDate = (date, format, locale) => {
        return dateFnsFormat(date, format, { locale });
    }

    useEffect(() => {
        setjwt(Cookies.get('token'));
        sethash(Cookies.get('hash'));
        getPreencheCliente();
        getEndereco();
    },[])

    const FORMAT = 'dd/LL/yyyy';
    const months = [
        "Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro"
      ];

    return(
        <Area>
            <PageContainer>
                <PageTitle>Minha Conta</PageTitle>
                {error && <ErrorMessage>{error}</ErrorMessage>}
                {sucess && <SucessoMessage>{sucess}</SucessoMessage>}
                <div className='Container'>
                    <Menu DsPath={query.get('cat')} />
                    <div className='Formulario'>
                        <form>
                            <label className="area">
                                <div className="area--title">Nome Completo</div>
                                <div className="area--input">
                                    <input 
                                        type="text"
                                        disabled={disabled}
                                        value={NmPessoa}
                                        onChange={(e)=>setNmPessoa(e.target.value)}
                                    />
                                </div>
                            </label>
                            <label className="area">
                                <div className="area--title">CPF</div>
                                <div className="area--input">
                                    <input 

                                        type="tel" 
                                        disabled={disabled}
                                        value={cpfMask(CPF)}
                                        onChange={(e)=>setCPF(e.target.value)}
                                    />
                                </div>
                            </label>
                            <label className="area">
                                <div className="area--title">RG</div>
                                <div className="area--input">
                                    <input 
                                        type="tel" 
                                        disabled={disabled}
                                        value={rgMask(RG)}
                                        onChange={(e)=>setRG(e.target.value)}
                                      
                                    />
                                </div>
                            </label>
                            <label className="area">
                                <div className="area--title">Telefone</div>
                                <div className="area--input">
                                    <input 
                                        type="tel" 
                                        disabled={disabled}
                                        value={TELMask(Telefone)}
                                        onChange={(e)=>setTelefone(e.target.value)}
                                    />
                                </div>
                            </label>
                            <label className="area">
                                <div className="area--title">Celular</div>
                                <div className="area--input">
                                    <input 
                                        type="tel" 
                                        disabled={disabled}
                                        value={CELMask(Celular)}
                                        onChange={(e)=>setCelular(e.target.value)}
                                    />
                                </div>
                            </label>
                            <label className="area">
                                <div className="area--title">Data Nascimento</div>
                                <div className="area--data">
                                <DatePicker
                                    selected={DtNascimento}
                                    onChange={(e)=>setDtNascimento(e)}
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
        DadosCliente:state.user.DadosCliente,
        nome:state.user.nome
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        setDadosCliente:(DadosCliente)=>dispatch({type:'SET_DADOSCLIENTE', payload:{DadosCliente}}),
        setDadosEndereco:(DadosEndereco)=>dispatch({type:'SET_DADOSENDERECO', payload:{DadosEndereco}})
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(MinhaConta);

/*<DayPickerInput
                                        style={{width:'100%'}}
                                        height='12'
                                        disabled={disabled}
                                        formatDate={formatDate}
                                        value={DtNascimento}
                                        format={FORMAT}
                                        parseDate={handleDtInicio}
                                        placeholder=""
                                        dayPickerProps={{
                                            weekdaysShort:['Dom', 'Seg', 'Ter', 'Qua','Qui','Sex','Sab'],
                                            months:['Janeiro','Fevereiro','Marco','Abril','Maio','Junho', 'Julho','Agosto','Setembro','Outubro','Novembro','Dezembbro']
                                        }}
                                    />*/