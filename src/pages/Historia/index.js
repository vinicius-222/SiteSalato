import React from 'react';
import { connect } from 'react-redux';
import { SearchArea, PageArea, Fake } from './styled';
import { PageContainer } from '../../components/MainComponents';

const Page =  (props) => {

    return(
       <SearchArea>
           <PageContainer>
                <div className="Banner">
                    <Fake height={300}/>
                    historia
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