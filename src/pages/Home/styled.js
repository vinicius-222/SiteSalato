import styled from 'styled-components';

export const Fake = styled.div`
    background-color:#DDD;
    height:${props=>props.height || 20}px;
`;

export const SearchArea = styled.div`
background-color:#FFF;
border-bottom:1px solid #CCC;
padding:0 0;
align-items:center;
justify-content:center;

.Banner{
    display:flex;
    flex-direction:column;
    height:auto;

    .AreaLoading{
        display:flex;
        height:250px;
        align-items:center;
        justify-content:center;
        
    }
    .each-slide{
        display:flex;
        flex:1;
        align-items:center;
        justify-content:center;
        background-size:cover;
        height:auto;
    
  
        img {
            display:flex;
        }
    }
    
}
 
@media (max-width:800px){
    background-color:#DDD;
    border-bottom:1px solid #CCC;
    padding:0 0;

    .each-slide  img {
        width:100%;
    }
}

@media (max-width:600px){
   
    .each-slide  img {
        width:100%;
    }
}
`;

export const PageArea = styled.div`
    display:flex;
    background-color:#FFF;

    @media (max-width:800px){
        flex-direction:column;

        .AreaTextemail{
            
        }
    }


h2 {
    border-bottom:0.5px solid tomato;
    margin:10px;
    font-size:20px;
    color:tomato;
}
.AreaList{
    display:flex;
    flex:1;
    flex-direction:column;
    
    .list { 
        display:flex;
        width:100%;
        flex-wrap:wrap;
        border-radius:5px;
        margin-bottom:10px;
        
    
        .adItem {
            width:50%;
        }
    }   
}
.sideLeft{
    display:flex;
    flex:1;
    flex-direction:column;

    .calcArea{
        display:flex;
        background-color:#FFF;
        margin:10px;
        border:1px solid #CCC;
        box-shadow:1.5px 1.5px 5px 1px #CCC;
        padding:0;
        border-radius:5px;
        transition:all ease .2s;
        
        &:hover{
            border:1px solid #FF0000; 
        }

        .AreaCalcImg{
            display:flex;    
            justify-content:center;
            align-items:center;
            border-radius:5px;
            height:auto;
            width:100%;
            background-color:#FFF;

            img{
                width:100%;
                padding:5px;
            }
        }
    }
    .emilArea{
        display:flex;
        flex-direction:column;

        .AreaTextemail{
            display:flex;
            flex-direction:column;
            border:1px solid #CCC;
            border-radius:5px;
            background-color:#FFF;
            box-shadow:1px 1px 5px #CCC;
            width:auto;
            height:auto;
            margin:10px;
            padding:10px;

            h3{
                font-weight:bold;
                color:tomato;
                margin-top:0;
            }
            .email{
                display:flex;
                flex:1;
                align-items:center;
                margin-top:0;
                input{
                    border-radius:5px;
                    border-top-right-radius:0;
                    border-bottom-right-radius:0;
                    height:34px;
                    width:90%;
                    border:.5px solid #CCC;
                    box-shadow:1px 1px 5px #CCC;
                    padding-left:10px;
                    outline:0;
                    transition:all ease .1s;

                    &:focus,
                    &:hover{
                        border:.5px solid #FF0000;
                    }
                }
               
                .Botao{
                    background-color:#FF0000;
                    border:0;
                    outline:0;
                    padding:5px 10px;
                    border-radius:4px;
                    border-top-left-radius:0;
                    border-bottom-left-radius:0;
                    color:#FFF;
                    font-size:15px;
                    cursor:pointer;
                    text-decoration:none;
    
                    &:hover {
                        background-color:#FF1000;
                    }

                }
            }
        }
    }
    .negociosArea{
        display:flex;
        flex-direction:column;

        .AreaInfo{
            display:flex;
            flex-direction:column;
            border:1px solid #CCC;
            border-radius:5px;
            background-color:#FFF;
            box-shadow:1px 1px 5px #CCC;
            width:auto;
            height:auto;
            margin:10px;
            padding:10px;

            hr{
                height:1px;
                width:100%;
                color:#FF0000;
            }

            h3{
                font-weight:bold;
                color:tomato;
                margin-top:0;
            }
            div{
                display:flex;
                flex-direction:row;
                justify-content:space-between;
                
            }
            .Botao{
                background-color:#FF0000;
                border:0;
                outline:0;
                padding:5px 10px;
                border-radius:4px;
                margin-left:20px;
                color:#FFF;
                font-size:15px;
                cursor:pointer;
                text-decoration:none;
                height:32px;

                &:hover {
                    background-color:#FF1000;
                }
            }
        }
    }
`;