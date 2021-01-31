const initialState = {
    nome:'',
    qt:0,
    StCart:false,
    DadosCliente:[],
    DadosEndereco:[]
};

export default (state = initialState, action) => {

    if(action.type === 'SET_NOME') {
        return { ...state, nome:action.payload.nome };
    }

    if(action.type === 'SET_QT') {
        return { ...state, qt:action.payload.qt };
    }
    if(action.type === 'SET_CART') {
        return { ...state, StCart:action.payload.StCart};
    }

    if(action.type === 'SET_DADOSCLIENTE'){
        return { ...state, DadosCliente:action.payload.DadosCliente};
    }

    if(action.type === 'SET_DADOSENDERECO'){
        return { ...state, DadosEndereco:action.payload.DadosEndereco};
    }

    return state;
}