import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Item } from './styled';
import {Loading} from '../../Loading';
import { isLogged } from '../../../helpers/AuthHandler'
import { BASEAPIIMAGE, IMAGE } from '../../../helpers/SalatoAPI'


const BASE = BASEAPIIMAGE;
export default (props) => {
    const [stLoading, setStLoading] = useState(false);
    const [logged, setLogged] = useState(false);
    
    const AddClick = () => {
        props.onClick();
    }

    useEffect(() => {
        const LoadImg = async () =>{
            let img = new Image;
            img.src = `${IMAGE}${props.data.LinckImage}`;
            img.onload = () => {
                setStLoading(true);
            }
        }
        LoadImg();
        setLogged(isLogged);
    },[])
    
    return(
        <Item className="adItem">
            <Link>
                <div className="itemImage">
                    {!stLoading && <Loading height="50px" width="50px"/> }
                    {stLoading && <img src={`${IMAGE}${props.data.LinckImage}`} alt="" /> }
                </div>
                <div className="AreaDetail">
                    <div className="itemName">{props.data.DsTitulo}</div>
                    {logged &&  
                        <>
                            <div className="itemPrice">R$ {parseFloat(props.data.VlPreco).toFixed(2)}</div>
                            <Link to={`/produtos?IdProduto=${props.data.IdProduto}`}  className="Add" onClick={AddClick}>
                                Adicionar
                            </Link>
                        </>
                    }
                </div>
            </Link>
        </Item>
    );
}