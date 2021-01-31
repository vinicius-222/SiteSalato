import styled from 'styled-components';

export const Area = styled.div`
    .Container{
        display:flex;
        background-color:#FFF;
        height:auto;
        width:100%;
        border-radius:5px;
        margin-bottom:10px;

        .area{
            display:flex;
            flex-direction:column;
            justify-content:center;
            align-items:center;
            flex:1;

            .area--dados{
                display:flex;
                flex-direction:column;
                justify-content:center;
                align-items:center;
                width:100%;
                height:100%;
            }

            .area--footer{
                display:flex;
                width:100%;
                height:20%;
                justify-content:flex-end;
                align-items:flex-end;
                margin-top:10px;

                .btnAdd{
                    display:flex;
                    align-items:center;
                    justify-content:center;
                    color:#FFF;
                    font-size:46px;
                    width:50px;
                    height:50px;
                    border-radius:25px;
                    background-color:#FF0000;
                    margin:20px;
                    cursor:pointer;

                    div{
                        display:flex;
                        align-items:center;
                        justify-content:center;
                        width:50px;
                        height:50px;
                        margin-top:-14px;
                    }
                }
            }
        }
    }

@media(max-width:800px){
    .Container{
        flex-direction:column;
        height:auto;

        .area{

        }
    }
}

@media(max-width:400px){
    .Container{
        flex-direction:column;
        height:auto;

        .area{

        }
    }   
}
`;