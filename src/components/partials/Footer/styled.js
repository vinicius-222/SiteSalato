import styled from 'styled-components';

export const FooterArea = styled.div`
    display:flex;
    justify-content:center;
    flexdirection:colunm;
    align-items:center;
    background-color:#FF0000;
    height:150px;

    .container{
        margin-Top:15px;
        color:#FFF;
        font-size:12px;
        text-align:center;

        img{
            margin-Top:0px;
            width:70px;
            height:40px;
        }
    }
    .Verificado{
        display:flex;
        width:100px;
        background-color:#00FF00;
        height:20px;
    }

    #siteseal{
        display:flex;
        border-radius:5px;
    }
`;