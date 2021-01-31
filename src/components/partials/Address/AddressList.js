import React, {useState, useEffect} from 'react';
import styled from 'styled-components'
import Cookies from 'js-cookie';

const Area = styled.div`

    justify-content:flex-start;
    align-items:flex-start;
    margin:5px;
    
    .Container{
        display:flex;
        justify-content:flex-start;
        align-items:flex-start;
        width:300px;
        height:110px;
        border-radius:5px;
        flex-direction:column;
        margin:0px 10px;
        border:0px solid #FF0000;
        cursor:pointer;

        .area--desc{
            display:flex;
            flex-direction:row;
            margin:0px 5px;
            width:300px;
            flex-wrap:wrap;
        }
    
        .area--top{
            display:flex;
            justify-content:center;
            align-items:center;
            height:20px;
            width:100%;
        }

        .area--footer{
            display:flex;
            justify-content:flex-end;;
            align-items:flex-end;


            .btnEdit{
                color:#FF0000;
                font-size:30px;
                margin-right:10px;
            }

            .btnDel{
                width:18px;
                height:18px;
                margin-right:5px;
            }
            img{
                width:18px;
                height:18px;
                margin-bottom:5px;
                margin-right:5px;
            }

        }
    }

    .ativo{
        border:1px solid #FF0000;
        transition:all ease 0.5s;
    }

    .inativo{
        border:1px solid #CCC;
        transition:all ease 0.5s;
    }
`;

const AddressList = (props) => {

    const UpdateEndereco = () =>{
        props.Click();
    }

    const opemModal = () => {
        props.opemModal();
    }

    const deleteItem = () => {
        props.onDelete(
            Cookies.get('token'),
            props.data.IdEndereco,
            Cookies.get('hash')
        )
    }
    useEffect(()=>{

    },[])
    return(
        <Area>
            <div className={props.data.StEntrega == 1 ? 'Container ativo' : 'Container inativo'} >
                <div className="area--top">{props.data.NmEndereco}</div>
                <div onClick={() => UpdateEndereco()} className='area--desc'>
                    <div>{
                       `${props.data.DsLogradouro}, 
                        ${props.data.NrNumero} - 
                        ${props.data.DsBairro} / 
                        ${props.data.DsCidade} / 
                        UF:${props.data.CdUF}, 
                        CEP:${props.data.DsCEP}`
                    }
                    </div>
                </div>
                <div className="area--footer" >
                    <div onClick={()=>opemModal()} className="btnEdit">...</div>
                    <div className="btnDel" onClick={()=>deleteItem()}>
                        <img src={require('../../../assets/images/trash.png')}/>
                    </div>
                </div>
            </div>
        </Area>
    )
}

export default AddressList;