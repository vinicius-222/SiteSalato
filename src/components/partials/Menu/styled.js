import styled from 'styled-components';

export const AreaMenu = styled.div`
        ul, li{
            list-style:none;
        }

        ul{
            display:flex;
            flex-direction:column;
            align-items:flex-start;
            height:470px;
            width:200px;
            padding:5px;
            border:1px solid #CCC;
            border-radius:5px;
            margin-left:10px;
        }

        li{
            font-size:22px;
            width:100%;
            border-bottom:0.5px solid #FF0000;
            margin:5px 0px;
            cursor:pointer;
            a{
                color:#FF0000;
                margin-left:10px;
                margin-right:10px;
                text-decoration:none;
                cursor:pointer;
                font-size:19px;
            }
            
        }
        .MenuAtivo{
            color:#FF0000;
            transition:all ease 5s;
        }

        .MenuInativo{
            color:#CCC;
            transition:all ease 5s;
        }
@media(max-width:800px){
    display:flex;
    justify-content:center;
    ul{
        flex-direction:row;
        height:15%;
        width:100%;
        padding:0px;
        margin:0px;
    }
    li{
        border-bottom:0.5px solid #FFF;
    }
}

@media(max-width:400px){
    li{
        a{
            font-size:13px;
        }
    }
}
`;