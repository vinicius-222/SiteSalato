import React from 'react';
import { connect } from 'react-redux';
import { SearchArea, PageArea, Fake } from './styled';
import { PageContainer, PageTitle } from '../../components/MainComponents';

const Page =  (props) => {

    return(
       <SearchArea>
           <PageContainer>
                <PageTitle>Nossa História</PageTitle>
                <div className="Banner">
                </div>
           </PageContainer>
       </SearchArea>
    )
}

const mapStateToProps = (state) =>{
    return{
        nome:state.user.nome
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        setNome:(nome)=>dispatch({type:'SET_NOME', payload:{nome}})

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Page);