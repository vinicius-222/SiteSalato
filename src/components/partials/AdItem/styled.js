import styled from 'styled-components';

export const Item = styled.div`
a{
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:center;
    border:1px solid #CCC;
    box-shadow:1.5px 1.5px 5px 1px #CCC;
    margin:10px;
    text-decoration:none;
    padding:10px;
    border-radius:5px;
    color:#000;
    background-color:#FFF;
    height:auto;
    transition:all ease .2s;

    &:hover {
        background-color:#EEE;
        border:1px solid #FF0000;
    }

    .AreaDetail{
        display:flex;
        flex-direction:column;
        justift-content:center;
        align-items:center;
        height:auto;
    }

    .itemImage img{
        width:100%;
        border-radius:10px;
    }

    .itemName {
        font-weight:bold;
        font-size:14px;
        text-align:center;
        height:50px;
    }
    .itemPrice{
        margin-top:5px;
    }

    .Add{
        display:flex;
        justify-content:center;
        align-items:center;
        width:80px;
        height:28px;
        border-radius:14px;
        background-color:#FF0000;
        font-weight:bold;
        font-size:12px;
        color:#FFF;
    }
}

@media (max-width:800px){
    a{
        height:auto;
    }
}


@media (max-width:600px){
    a{
        height:auto;
    }
}
`;