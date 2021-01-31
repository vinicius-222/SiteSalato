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

                    .area--btn{
                        display:flex;
                        height:60px;
                        width:100%;
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
                            margin-top:50px;
                            margin-left:5px;
            
                            &:hover {
                                background-color:#006FCE;
                            }
                        }
                    }
                }
            }
        }

    }

@media(max-width:800px){
    .Container{
        flex-direction:column;
        height:300px;

        .Formulario{

            form{
                width:90%;
                .area{
                    margin-top:5px;
                    width:100%;
                    flex-direction:column;
                    align-items:flex-start;
                    justify-content:flex-start;

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
                }
            }
        }
    }
}

@media(max-width:400px){
    .Container{
        flex-direction:column;
        height:300px;

        .Formulario{

            form{

                .area{

                    .area--input{
                        width:100%;
                        height:auto;
                        input{
                            width:100%;
                            margin:0px;
                        }

                    }
                }

            }
        }
    }   
}
`;