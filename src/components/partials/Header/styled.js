import styled from 'styled-components';


export const HeaderArea = styled.div`
    background-color:#FFF;
    height:105px;
    border-bottom:1px solid #CCC;
    .container {
        max-width:1000px;
        margin:auto;
        display:flex;
    }
    .logo{
        flex:1;
        display:flex;
        align-items:center;
        height:90px;
        width:180px;
        img {
            margin-top:25px;
            width:180px;
        }
    }
    .AreaMenu{
        
        width:900px;
       
        a{
            color:#FF0000;
            margin-left:10px;
            margin-right:10px;
            text-decoration:none;
            cursor:pointer;
            font-size:15px;
        }

        .LineHeader{
          width:auto;
          height:3px;
          border-radius:10px;
          margin-Top:10px;
          background-color:#FF0000;
        }

        .nomePessoa{
            display:flex;
            font-size:12px;
            margin-top:6px;
            color:#FF0000;
            text-align:right;

            .AreaNmPessoa{
                font-size:10px;
                margin-right:10px;
            }

            .AreaLink{
                flex:1;
                display:flex;
                align-items:center;
                text-align:left;
                

                img{
                    width:30px;
                    height:30px;
                    border-radius:15px;
                    box-shadow:1.5px 1.5px 5px 0.9px #CCC;
                }

                a{
                    display:flex;
                    align-items:center;
                }
            }

            .AreaCarrino{
                display:flex;
                justify-content:center;
                align-items:center;
                border:1px solid #CCC;
                width:40px;
                height:35px;
                background-color:#FFF;
                border-radius:5px;
                margin-top:2px;
                margin-right:20px;
    
                .areaBdge{
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    width:20px;
                    height:20px;
                    border-radius:10px;
                    background-color:#FF0000;
                    margin-right:-20px;
                    margin-top:-30px;
                    font-size:10px
                    color:#FFF;
                    font-weight:bold;
                }
    
                img{
                    height:25px;
                }
                &:hover{
                    border:1px solid #FF0000;
                }
            }
        }
      
        .AreaNavPC{
            display:flex;
            justify-content:flex-end;
            transition:max-height  2s ease;
        }
        .AreaNavTablet{
            display:none;
            justify-content:flex-end;
            transition:max-height  2s ease;
        }
        .AreaNavSmart{
            display:none;
        }
    }

    .BotaoMenu{
        display:none;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        width:30px;
        height:30px;
        border-radius:5px;
        background-color:#FF0000;
        margin-left:30px;
        
        div{
            height:2px;
            width:15px;
            box-shadow:1px 1px 5px #CCC;
            background-color:#FFFF00;
            margin:2px;
        }
    }
   
    nav {
        transition:all ease 1s;
        padding-top:10px;
        padding-bottom:10px;

        ul, li{
            margin:0;
            padding:0;
            list-style:none;
            justify-content:flex-end;
        }
        
        ul{
            display:flex;
            align-items:center;
            height:40px;
        }

        li{
            margin-left:20px;
            margin-right:0;
            

            a, button{
                border:0;
                background:none;
                color:#FF0000;
                font-weight:bold;
                text-decoration:none;
                cursor:pointer;
                outline:100px;
                transition:all ease .3s;

                &:hover{
                    color:#999;
                }

                &.button{
                    font-size:15px;
                    border-radius:4px;
                    color:#FF0000;
                    padding:2px 5px;
                }
                &.button:hover {
                    color:#999;
                }
            }
        }
    }
}

@media (max-width:800px){
 
    height:auto;
    .BotaoMenu{
        display:flex;
    }

    .nomePessoa{
        .AreaCarrino{
            position:fixed;
            top:20px;
            right:10px;

            .areaBdge{
                border:1px solid #FFF;
            }
        }
    }

    .AreaMenu{
        .AreaNavPC{
            display:none;
        }

        .AreaNavTablet{
            display:flex;
            transition:all 1s ease; 
        }
        .AreaNavSmart{
            display:none;
        }
    }
   
    .AreaMenu{
        display:flex;
        flex-direction:column;
        justify-content:center;
        width:100%;
        margin-top:20px;

    }
    .container{
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
    }
    .logo{
        justify-content:center;
    }

    .LineHeader{
        width:100%;
    }

    .AreaLink{
        display:flex;
        justify-content:center;
    }

    .BotaoMenu{
        display:flex;
    }

    nav {
        display:flex;
        justify-content:center;
        padding-top:10px;
        padding-bottom:10px;
    
    }
    nav ul{
        flex-direction:row;
        height:auto;
        justify-content:center;
    }
    ul li{
        display:flex;
        margin:0;
        padding:0;
        list-style:none;
        justify-content:center;
        margin:10px 20px;
    }
}


@media (max-width:600px){
    height:auto;

    .BotaoMenu{
        display:flex;
    }

    .AreaMenu{
        .AreaNavPC{
            display:none;
        }
        .AreaNavTablet{
            display:none;
        }
        .AreaNavSmart{
            display:flex;
            transition:all 1s ease;
        }    
    }

    .AreaMenu{
        display:flex;
        flex-direction:column;
        justify-content:center;
        width:100%;
        margin-top:20px;

        .nomePessoa{
            flex-direction: column-reverse;
            margin-top:0;

            .AreaNmPessoa{
                margin:10px 15px;
            }
        }
    }

    .container{
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
    }
    .logo{
        justify-content:center;
    }

    .LineHeader{
        width:100%;
    }

    .AreaLink{
        display:flex;
        justify-content:center;

    }

    nav {
        display:flex;
        flex:1;
        justify-content:center;
        padding-top:10px;
        padding-bottom:10px;
    
    }
    nav ul{
        flex-direction:column;
        height:auto;
        justify-content:center;
    }
    ul li{
        display:flex;
        margin:0;
        padding:0;
        list-style:none;
        justify-content:center;
        margin:10px 20px;
    }
}


@media (max-width:350px){
    .nomePessoa{
        flex-direction:column;
    }
}
`;