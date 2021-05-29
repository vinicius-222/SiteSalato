import styled from 'styled-components';


export const Container = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    padding:20px;
    align-items:center;
    height:450px;
    width:100%;
    background-color:#FFF;
    border-radius:5px;
    border:1px solid #CCC;
    box-shadow:2px 1px 4px 1px #999;
    margin-bottom:20px;

@media(max-width:800px){
    height:1000px;
}

@media(max-width:350px){
    height:1100px;
}
`;