import styled from 'styled-components';

export const AreaLoja = styled.div`
    height:200px;
    width:100%;
    background-color:#FFF;
    border-radius:5px;
    border:1px solid #CCC;
    box-shadow:2px 1px 4px 1px #999;
    margin-bottom:20px;

    .AreaLeft{
        display:flex;
        flex-direction:column;
        width:50%;
        height:100%;
        justify-content:center;
        align-items:center;
        color:tomato;
    }
    hr{
        height:1px;
    }

@media (max-width:800px){

    .AreaLeft{
        width:100%;
        padding:0px 10px;
    }

}
`