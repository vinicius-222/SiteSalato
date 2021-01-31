import styled from 'styled-components';

export const Fake = styled.div`
    background-color:#DDD;
    height:${props=>props.height || 20}px;
`;

export const SearchArea = styled.div`
background-color:#FFF;
border-bottom:1px solid #CCC;
padding:20px 0;

    
    .WindowArea {
        position:fixed;
        left:0;
        top:0;
        bottom:0;
        right:0;
        background-color:transparent;
        display:none;
        transition:opacity ease 5s;
        justify-content: center;
        align-items: center;
        overflow-y:auto;

        .WindowBody {
            width:900px;
            opacity:0;
            background-color:#FFF;
            border-radius:10px;
            box-shadow:0px 0px 15px #999;
            display:flex;
            margin:20px 0px;
            transition:all ease .5s;
        }
        .ProdutoBig{
            flex:1;
            display:flex;
            justify-content: center;
            align-items: center;
        }
    
        .ProdutoBig img {
            height:250px;
            width:auto;
            border-radius:5px;
            box-shadow:1px 1px 5px #CCC;
        }
        .ProdutoInfo {
            flex:1;
            font-family:'Hepta Slab', Helvetica, Arial;
            padding-bottom:50px;
        }
        .ProdutoInfo h2 {
            margin-top:50px;
        }
        .ProdutoInfo .ProdutoInfo--desc {
            font-size:15px;
            color:#999;
            margin-top:10px;
            font-family:'Lato',Helvetica,Arial;
        }
        .ProdutoInfo--sector {
            color:#CCC;
            text-transform: uppercase;
            font-size:14px;
            margin-top:30px;
            margin-bottom:10px;
        }
        
        .ProdutoInfo--price {
            display:flex;
            align-items:center;  
        }
       
        .ProdutoInfo--actualPrice {
            font-size:28px;
            margin-right:30px;
        }
        .ProdutoInfo--qtarea {
            display:inline-flex;
            background-color:#EEE;
            border-radius:10px;
            height:30px;
        }
        .ProdutoInfo--qtarea button {
            border:0;
            background-color:transparent;
            font-size:17px;
            outline:0;
            cursor:pointer;
            padding:0px 10px;
            color:#333;
        }
        .ProdutoInfo--qt {
            line-height: 30px;
            font-size: 12px;
            font-weight: bold;
            padding: 0px 5px;
            color:#000;
        }
        .ProdutoInfo--addButton {
            margin-top:30px;
            padding:20px 30px;
            border-radius:20px;
            background-color:#48d05f;
            color:#FFF;
            display:inline-block;
            cursor:pointer;
            margin-right:30px;
        }
        .ProdutoInfo--addButton:hover {
            background-color:#32a345;
        }
        .ProdutoInfo--cancelButton {
            display:inline-block;
            cursor:pointer;
        }
        .ProdutoInfo--cancelMobileButton {
            display:none;
            height:40px;
            text-align:center;
            line-height: 40px;
            margin-bottom:30px;
        }
    }

    .LocalizacaoArea{
        flex-direction:column;
        padding:0px;
        border-radius:5px;
        box-shadow:1px 1px 1px 0.3px rbga(0,0,0,0.2);
        display:flex;
        flex-wrap:wrap;
        cursor:pointer;

        h2{
            color:tomato;
            padding:0px 10px;
            margin:0px;
            font-size:20px;
        }

        .Grupo{
            display:flex;
            flex-direction:row;
            justify-content:space-between;
            flex-wrap:wrap;

            .ItemGrupo{
                display:flex;
                flex-direction:column;
                justify-content:center;
                align-items:center;
                background-color:#FFF;
                width:150px;
                height:150px;
                border-radius:75px;
                transition:all ease .5s;
                img{
                    height:70px;
                }
    
                .ItemTitulo{
                    color:tomato;
                }
            }
    
            .ItemGrupo--ativo{
                border:1px solid #FF0000;
            }
    
            .ItemGrupo--inativo{
                border:1px solid #CCC;
            }
        }
    }

@media (max-width:800px){
    .LocalizacaoArea{
        height:auto;

        .Grupo{
           
            .ItemGrupo{
                margin:10px 20px;
            }
        }
    }  
}
@media (max-width:600px){

    .WindowArea{

        .WindowBody{
            flex-direction:column;
            width:100%;
            height:100%;
            padding:20px;
            justify-content:center;
            align-items:center;
        }
        
    }
    .LocalizacaoArea{
        height:auto;

        .Grupo{
           
            .ItemGrupo{
                margin:10px 10px;
            }
        }
    }
}
`;

export const PageArea = styled.div`
display:flex;
background-color:#FFF;
h2 {
    border-bottom:0.5px solid tomato;
    margin:10px;
    font-size:20px;
    color:tomato;
}

aside {
    width:0%;
    height:0;
    font-family:'Hepta Slab', Helvetica, Arial;
    transition:all ease .2s;
    overflow-x:hidden;
    border:1px solid #FFFFFF;   
    background-color:#ffffff;

    .cart--area {
        padding:20px;
        
        .cart--cep{
            display:flex;
            margin:10px 0px;

            .cart--loadingCEP{
                display:flex;
                justify-content:center;
                align-items:flex-start;
                width:40px;
                height:25px;
                padding-top:5px;

            }
            
            .cart--cepInfo{
                
                input{
                    border:1px solid #CCC;
                    border-radius:5px;
                    height:25px;
                    width:105px;
                    outline:0;
                    padding:5px;
                }
            }
            .cart--check{
                display:flex;
                justify-content:center;
                align-items:center;
                margin-left:10px;

                img{
                    height:15px;
                    width:15px;
                }
            }
            
        }

        .cart--end{
            color:#79b9dd;
            font-size:12px;
        }
        .menu-closer1{
            cursor:pointer;
            display:flex;
        }

        .menu-closer2{
            cursor:pointer;
            display:none;
            height:30px;
            width:140px;
            background-color:#48d05f;
            border:1px solid #00FF00;
            border-radius:8px;
            font-size:12px;
            font-weight:bold;
            color:#FFF;
            justify-content:center;
            align-items:center;
        }

        .cart {
            margin-bottom:20px;

            .cart--itens{
                border-bottom:1px solid #CCC;
                
                .cart--products{
                    display:flex;
                    justify-content:flex-start;
                    align-items:center;
                    height:55px;
                    width:100%;

                    img{
                        height:40px;
                        width:40px;
                        border-radius:5px;
                    }
                    span{
                        margin-left:5px;
                        font-size:11px;
                    }
                }

                .ProdutoInfo--pricearea{
                    display:flex;
                    align-items:center;
                    margin-bottom:5px;

                    
                    .ProdutoInfo--price {
                        display:flex;
                        align-items:center;

                        .ProdutoInfo--btnremover{
                            display:flex;
                            align-items:center;
                            cursor:pointer;
                
                            img{
                                height:20px;
                                width:20px;
                                margin-right:5px;
                            }
                        }
                    }
                    .ProdutoInfo--actualPrice {
                        font-size:14px;
                        margin-left:30px;
                    }
                    .ProdutoInfo--qtarea {
                        display:inline-flex;
                        background-color:#EEE;
                        border-radius:10px;
                        height:30px;
                    }
                    .ProdutoInfo--qtarea button {
                        border:0;
                        background-color:transparent;
                        font-size:17px;
                        outline:0;
                        cursor:pointer;
                        padding:0px 10px;
                        color:#333;
                    }
                    .ProdutoInfo--qt {
                        line-height: 30px;
                        font-size: 12px;
                        font-weight: bold;
                        padding: 0px 5px;
                        color:#000;
                    }
                    .ProdutoInfo--addButton {
                        margin-top:30px;
                        padding:20px 30px;
                        border-radius:20px;
                        background-color:#48d05f;
                        color:#FFF;
                        display:inline-block;
                        cursor:pointer;
                        margin-right:30px;
                    }
                    .ProdutoInfo--addButton:hover {
                        background-color:#32a345;
                    }
                    .ProdutoInfo--cancelButton {
                        display:inline-block;
                        cursor:pointer;
                    }
                    .ProdutoInfo--cancelMobileButton {
                        display:none;
                        height:40px;
                        text-align:center;
                        line-height: 40px;
                        margin-bottom:30px;
                    }
                }
            }
        }
        .cart--details{
            display:flex;
            flex-direction:column;

            .cart--totalitem {
                padding:15px 0;
                border-top:1px solid #79b9dd;
                color:#315970;
                display:flex;
                justify-content: space-between;
                font-size:15px;
            }
            .cart--totalitem span:first-child {
                font-weight: bold;
            }
            .cart--totalitem.big {
                font-size:20px;
                color:#000;
                font-weight: bold;
            }
            .cart--finalizar {
                padding:20px 30px;
                border-radius:20px;
                background-color:#48d05f;
                color:#FFF;
                cursor:pointer;
                text-align:center;
                margin-top:20px;
                border:2px solid #63f77c;
                transition: all ease .2s;
            }
            .cart--finalizar:hover {
                background-color:#35af4a;
            }

        }
    }
}
.show {
    width:30%;
    height:100%;
    border:1px solid #EEE;   
}

.AreaList{
    display:flex;
    flex:1;
    flex-direction:column;
    
    
    .AreaLoading{
        display:flex;
        position:absolute;
        width:100%;
        height:100%;
        justify-content:center;
        align-items:center;
    }
    .list{ 
        display:flex;
        justify-content:center;
        align-items:center;
        width:100%;
        flex-wrap:wrap;
        border-radius:5px;
        margin-bottom:10px;
        
        .adItem {
            width:25%;
        }
    }
    
    .pagination{
        display:flex;
        flex-wrap:wrap;
        justify-content:flex-end;
        align-items:flex-end;
        flex:1;
        margin:15px 0;
        padding-right:50px;

        .pagItem{
            display:flex;
            justify-content:center;
            align-items:center;
            height:30px;
            width:30px;
            border:1px solid #FF0000;
            margin:1px;
            cursor:pointer;

        }
        .active{
            background-color:#CCC;
        }
    }
}


@media (max-width:800px){
    aside{

        .cart--area {
            .menu-closer1{
                display:none;
            }

            .menu-closer2{
                display:flex;
            }
        }
        .cart .cart--itens .ProdutoInfo--pricearea .ProdutoInfo--price{
            justify-content:space-between;  
            width:100%;
        }
    }

    .show {
        display:flex;
        position:fixed;
        flex-direction:column;
        top:0;
        right:0;
        
        bottom:0;
        width:100%;
        border-radius:10px;
        border:1px solid #FFFFFF;   
        background-color:#ffffff;
    }
    
    .AreaList{

        .list{

            .adItem{
                width:33%;
            }
        }
    }
}

@media (max-width:600px){
    .AreaList{

        .list{

            .adItem{
                width:50%;
            }
        }
    }
}
`;