import styled from 'styled-components';
import back from '../../assets/images/Fundo.jpg';
import backForm from '../../assets/images/FundoForm.png';

export const Container = styled.div`
    display:flex;
    background-image:url(${back});
    background-repeat: no-repeat;
    background-position: center;
    flex-direction:column;
    height:1000px;

    .topo{
        display:flex;
        margin-top:50px;
        background-color:#FF0000;
        width:100%;
        height:150px;
        align-items:center;
        justify-content:center;

        .logo {
            resize-mode:contain;
            width:250px;
            height:auto;

        }

        .promocao{
            resize-mode:contain;
            width:450px;
            height:auto;
        }
    }

    .corpo{
        display:flex;
        justify-content:center;
        align-items:center;
        height:350px;

        form{
            display:flex;
            justify-content:center;
            align-items:flex-end;
            flex-direction:column;
            background-color:#FFF;
            width:500px;
            height:330px;
            border-radius:10px;
            opacity:1;
            background-image:url(${backForm});
            background-repeat: no-repeat;
            background-size:contain;
            background-position: center;


            .area{
                display:flex;
                flex-direction:row;
                display:flex;
                justify-content:center;
                align-items:center;
                margin-right:50px;
                
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

                .area--data{
                    display:flex;
                    width:305px;
                    padding:5px;
                    border-radius:3px;
                    outline:0;
                    transition:all ease .4s;
                    margin-left:5px;
                    font-size:14px;
                    input{
                        color:#000;
                        background: url(http://www.webcis.com.br/images/imagens-noticias/select/ico-seta-appearance.gif) no-repeat #FFF;  /* Imagem de fundo (Seta) */
                        background-position: 100% center;  /*Posição da imagem do background*/
                        height:29px;
                        width:300px;
                        border-radius:3px;
                        autline:0;
                        border:1px solid #999;
                        font-size:14px;
                        padding:0px 5px;
                        outline:0;

                        transition:ease all 0.5s;
                        &:hover {
                            border:1px solid #0000CD;
                        }
                        &:focus{
                            border:1px solid #0000CD;
                        }
                    }
                }

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
                        background-color:#FF0000;
                        border:0;
                        outline:0;
                        padding:5px 10px;
                        border-radius:4px;
                        color:#FFFF00;
                        font-size:15px;
                        cursor:pointer;
                        margin-left:5px;
        
                        &:hover {
                            background-color:#CD3700;
                        }
                    }
                }
                .area--areaButton1{
                    margin-left:10px;
                    display:flex;
                    width:300px;

                    .area--btn{
                        height:30px;
                        display:flex;
                        margin:5px;
                        width:35%;
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
                .area--areaButton2{
                    margin-left:10px;
                    display:flex;
                    width:300px;
                    flex-wrap:wrap;

                    .area--btn{
                        height:30px;
                        display:flex;
                        margin:5px;
                        width:30%;
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
            }
        }

    }

@media (max-width:800px){
    .topo{
        flex-direction:column;
        height:300px;

        .logo{
            margin:10px;
        }

        .promocao{
            margin:20px;
            width:300px;
        }

    }

    .corpo{
        margin-top:10px;
        height:480px;
        form{
            height:480px;
            margin:20px;
            align-items:center;
            background-size:cover;
            

            .area{
                flex-direction:column;
                margin:0px;
                justify-content:flex-start;
                align-items:flex-start;

                .area--input{
                    input{
                        margin-left:0px;
                    }
                }
                .area--data{
                    margin-left:0px;
                    padding:0px;
                }

                .area--btn{
                    width:300px;
                }
            }
        }
    }
}
`;