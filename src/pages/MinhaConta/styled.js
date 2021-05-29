import styled from 'styled-components';

export const Area = styled.div`
    .Container{
        display:flex;
        background-color:#FFF;
        box-shadow:0px 0px 3px #999;
        height:500px;
        width:100%;
        border-radius:5px;
        margin-bottom:20px;

        .Formulario{
            display:flex;
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
                            background: url(https://salato.com.br/backEndSalato/Images/ico-seta-appearance.gif) no-repeat #FFF;  /* Imagem de fundo (Seta) */
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
                            background-color:#0089FF;
                            border:0;
                            outline:0;
                            padding:5px 10px;
                            border-radius:4px;
                            color:#FFF;
                            font-size:15px;
                            cursor:pointer;
                            margin-left:5px;
            
                            &:hover {
                                background-color:#006FCE;
                            }
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

    }

@media (max-width:800px){
    .Container{
        flex-direction:column;
        height:630px;

        .Formulario{

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
}
`;