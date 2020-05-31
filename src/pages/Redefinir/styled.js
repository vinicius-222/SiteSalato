import styled from 'styled-components';

export const Container = styled.div`
   margin-bottom:20px;

    .AreaContainer{
        background-color:#FFF;
        width:100%;
        height:200px;
        border-radius:5px;
        box-shadow:1px 0px 5px #999;
        padding:30px;

        .Area{
            display:flex;
            max-width:500px;
            align-items:center;
            justify-content:flex-end;
            padding:10px 15px;

            .Area--AreaTitle{
                width:200px;
                font-weight:bold;
                text-align:right;
                font-size:15px;
            }

            .Area--AreaInput{
                width:300px;
                margin-left:15px;
                display:flex;
                

                input{
                    width:100%;
                    border-radius:4px;
                    outline:0;
                    padding:5px;
                    border:1px solid #CCC;
                    font-size:16px;
                    transition:all ease 1s;

                    &:focus{
                        border:1px solid #000;
                    }
                }

                button{
                    height:30px
                    width:150px;
                    border-radius:3px;
                    background-color:#0089FF;
                    outline:0;
                    border:0px;
                    color:#FFF;
                    font-size:16px;
                    cursor:pointer;
                }
            }
        }
    }

    @media (max-width:800px){
        h1{
            margin-left:10px;
        }
    
        .AreaContainer{
            padding:20px;
            .Area{
                padding:5px 0px;
                flex-direction:column;
                align-items:flex-start;
                
                .Area--AreaTitle {               
                    text-align:left
                }
                .Area--AreaInput{
                    margin-left:0px;
                    width:100%;
                }
            }  
        }  
    }
`;