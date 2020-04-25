import styled from 'styled-components';

export const Fake = styled.div`
    background-color:#DDD;
    height:${props=>props.height || 20}px;
`;

export const SearchArea = styled.div`
    margin-bottom:20px;

    .container{
        display:flex;
        flex-direction:row;
        flex:1;
        padding:10px;
        box-shadow:0px 0px 3px #999;
        background-color:#FFF;
        border-radius:5px;
        
        form {
            display:flex;
            flex-direction:column;
            max-width:500px;
           
            .area {
                display:flex;
                align-items:center;
                padding:10px;
                max-width:500px;

                .area--title{
                    width:250px;
                    text-align:right;
                    padding-right:20px;
                    font-weight:bold;
                    font-size:14px;
                }

                .area--input {
                    flex:1;
                    
                    input{
                        width:300px;
                        font-size:14px;
                        padding:5px;
                        border:1px solid #DDD;
                        border-radius:3px;
                        outline:0;
                        transition:all ease .4s;
                    }

                    select{
                        width:300px;
                        font-size:14px;
                        padding:5px;
                        border:1px solid #DDD;
                        border-radius:3px;
                        outline:0;
                        transition:all ease .4s;
                    }

                    textarea{
                        width:300px;
                        height:200px;
                        font-size:14px;
                        padding:5px;
                        border:1px solid #DDD;
                        border-radius:3px;
                        outline:0;
                        transition:all ease .4s;
                        resize:none;
                    }

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
                        margin-right:180px;
        
                        &:hover {
                            background-color:#006FCE;
                        }
                    }
                }
            }
        }
    }

    .sideRigth{
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:flex-start;
        margin-left:20px;

        .areaContact{
            display:flex;
            justify-content:flex-start;
            align-items:center;

           h3{
               margin:25px 10px;
               
           }
            .areaContact--wahtsapp{
                height:40px;
            }

           
        }
    }

    @media (max-width:800px){
        h1{
            margin-left:10px;
        }
        .container{
            flex-direction:column;
            
            form{
                width:100%;

                .area{
                    flex-direction:column;
                    width:100%;
                    justify-content:flex-start;
                    align-items:flex-start;

                    .area--title{
                        text-align:left;
                        padding-right:0px;
                        width:100%;
                    }
                    .area--input{
                        width:100%;

                        input{
                            width:100%;
                            
                        }

                        select{
                            width:100%;
                        }

                        textarea{
                            width:100%;
                        }
                        
                    }
                }
            }
        }
    }
`;