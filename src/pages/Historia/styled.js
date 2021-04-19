import styled from 'styled-components';
import back from '../../assets/images/historia.jpg';

export const Fake = styled.div`
    background-color:#DDD;
    height:${props=>props.height || 20}px;
`;

export const SearchArea = styled.div`
background-color:#EEE;
border-bottom:1px solid #CCC;

border-radius:5px;
align-items:center;
justify-content:center;

    .Banner{
        display:flex;
        background-image:url(${back});
        background-repeat: no-repeat;
        background-position: center;
        flex-direction:column;
        height:3250px;
        width:1000px;
        border-radius:10px;


    }
`;