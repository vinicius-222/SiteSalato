import Cookies from 'js-cookie';
import qs from 'qs';
import { doLogout } from '../helpers/AuthHandler';

//const URL = 'http://192.168.1.65';
const URL = 'http://138.99.15.234:20003';
const BASEAPI = URL+'/backEndSalato/';
export const IMAGE = BASEAPI+'Images/';
export const BASEAPIIMAGE = URL+'/images/';

const apiFetchFile = async (endpoint, body) => {
    if(!body.token) {
        let token = Cookies.get('token');
        if (token) {
            body.append('token', token);
        }
    }

    if(!body.hash) {
        let hash =  Cookies.get('hash');
        if(hash) {
            body.hash = hash;
        }
    }

    const res = await fetch(BASEAPI+endpoint, {
        method:'POST',
        body
    });
    const json = await res.json();

    if(json.error) {
        doLogout();
        window.location.href =  '/Login';
        return;
    }

    return json;
}
const apiFetchPost = async (endpoint, body) => {
    if(!body.token) {
        let token = Cookies.get('token');
        if(token) {
            body.token = token;
        }
    }

    if(!body.hash) {
        let hash =  Cookies.get('hash');
        if(hash) {
            body.hash = hash;
        }
    }

    const res = await fetch(BASEAPI+endpoint, {
        method:'POST',
        headers:{
            'Accept':'application/json',
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(body)
    });
    const json = await res.json();

    if(json.error) {
        doLogout();
        window.location.href = '/Login';
        return;
    }

    return json;
}
const apiFetchGet = async (endpoint, body = []) => {
    if(!body.token) {
        let token = Cookies.get('token');
        if(token) {
            body.token = token;
        }
    }

    if(!body.hash) {
        let hash =  Cookies.get('hash');
        if(hash) {
            body.hash = hash;
        }
    }
    

    const res = await fetch(`${BASEAPI+endpoint}?${qs.stringify(body)}`);
    const json = await res.json();

    if(json.error) {
        doLogout();
        window.location.href =  '/Login';
        return;
    }

    return json;
}
const apiFetchGetEnd = async (endpoint, body = []) => {
   
    const res = await fetch(`${endpoint}`);
    const json = await res.json();

    return json;
}
const apiFetchDelete = async (endpoint, body = []) => {

    if(!body.jwt) {
        let jwt = Cookies.get('token');
        if(jwt) {
            body.jwt = jwt;
        }
    }

    if(!body.hash) {
        let hash =  Cookies.get('hash');
        if(hash) {
            body.hash = hash;
        }
    }
    const res = await fetch(BASEAPI+endpoint, {
        method:'DELETE',
        headers:{
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body:JSON.stringify(body)
    });
    
    const json = await res.json();
    if(json.error) {
        doLogout();
        window.location.href =  '/Login';
        return;
    }

    return json;
}
const apiFetchPut = async (endpoint, body = []) => {

    if(!body.jwt) {
        let jwt = Cookies.get('token');
        if(jwt) {
            body.jwt = jwt;
        }
    }

    if(!body.hash) {
        let hash =  Cookies.get('hash');
        if(hash) {
            body.hash = hash;
        }
    }
    const res = await fetch(BASEAPI+endpoint, {
        method:'PUT',
        headers:{
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body:JSON.stringify(body)
    });
    
    const json = await res.json();
    if(json.error) {
        doLogout();
        window.location.href =  '/Login';
        return;
    }

    return json;
}
const SalatoAPI = {
    login:async (email, pass) => {
        const json = await apiFetchPost(
            '/user/getlogin', 
            {email,pass}
        )
        return json;
    },

    newLogin:async (NmPessoa, DsLogin, pass) => {
        const json = await apiFetchPost(
            '/user/new_recordClient', 
            {NmPessoa, DsLogin, pass}
        )
        return json;
    },

    getProdutoBanner:async (NmProduto, IdPreco, per_pages, StPaginaInicial, offset, idGrupoProduto, IdProduto) => {
        const json = await apiFetchGet(
            '/pedidos/getProdutoBanner',
            {NmProduto, IdPreco, per_pages, StPaginaInicial, offset, idGrupoProduto, IdProduto}
        )
        return json;
    },

    getImagesBanner:async () => {
        const json = await apiFetchGet(
            '/pedidos/getInfoTelaPrincipal'
        )

        return json;
    },

    senEmail:async (NmPessoa, DsEmail, DsMsg, DsAssunto) => {
        const json = await apiFetchPost(
            '/user/sendemail',
            {NmPessoa, DsEmail, DsMsg, DsAssunto}
        )
        return json;
    },

    sendEmailTradellus:async (NmPessoa, DsEmail, DsMsg, DsAssunto) => {
        const json = await apiFetchPost(
            '/user/sendemail',
            {NmPessoa, DsEmail, DsMsg, DsAssunto}
        )
        return json;
    },

    getGrupoProduto:async (StAtivo = 1, StPersonalizado = 0) => {
        const json = await apiFetchGet(
            '/pedidos/getGrupoProduto',
            {'StSite':StAtivo, 
            'StPersonalizado':StPersonalizado}
        )
        return json;
    },

    getCarCompra:async (jwt) => {
        const json = await apiFetchGet(
            '/pedidos/getCarCompra',
            {jwt}
        )
        return json;
    },

    insertCarCompra:async (jwt, IdProduto, QtProduto) => {
        const json = await apiFetchPost(
            '/pedidos/InsertCarCompras',
            {jwt, IdProduto, QtProduto}
        )
        return json;
    },

    deleteCarCompra:async (jwt, IdProduto) => {
        const json = await apiFetchDelete(
            '/pedidos/deleteCarCompra',
            {jwt, IdProduto}
        )
        return json;
    },

    updateCarCompra:async (jwt, IdProduto, QtProduto) => {
        const json = await apiFetchPut(
            '/pedidos/InsertCarCompras',
            {jwt, IdProduto, QtProduto}
        )

        return json;
    },

    getCountCar:async (jwt) => {
        const json = await apiFetchGet(
            '/pedidos/InsertCarCompras',
            {jwt}
        )
        return json;
    },

    getEndereco:async (cep) => {
        const json = await apiFetchGetEnd(
            'http://cep.republicavirtual.com.br/web_cep.php?cep=' + cep +'&formato=json'
        )
        return json;
    },

    insertRecuperaSenha:async(email) => {
        const json = await apiFetchPost(
            '/user/handleRecuperaSenha',
            {email}
        )
        return json;
    },
    
    getHandleRecuperaSenha:async(token) =>{
        const json = await apiFetchGet(
            '/user/handleRecuperaSenha',
            {token}
        )
        return json;
    },

    updateHandleRecuperSenha:async(token, pass) =>{
        const json = await apiFetchPut(
            '/user/handleRecuperaSenha',
            {token, pass}
        )
        return json;
    },

    getClienteDelivery:async (jwt,hash) =>{
        const json = await apiFetchGet(
            '/cliente/ClienteDelivery',
            {jwt,hash}
        )
        return json;
    },

    updateClienteDelivery:async (jwt, hash , CdChamada, NmPessoa, CdCPF_CNPJ, DsTeleFoneCobranca, DsFaxCobranca, DtNascimento, TpEstadoCivil, NrIdentidade, TpSexo )=>{
        const json = await apiFetchPut(
            '/cliente/ClienteDelivery',
            {jwt, hash, CdChamada, NmPessoa, CdCPF_CNPJ, DsTeleFoneCobranca, DsFaxCobranca, DtNascimento, TpEstadoCivil, NrIdentidade, TpSexo},
        )
        return json;
    },

    updatePass:async (jwt, hash, email, pass, newPass) =>{
        const json = await apiFetchPost(
            '/user/updatePass',
            {jwt, hash, email, pass, newPass},
        )
        return json;
    },

    insertEndereco:async (jwt, DsLogradouro, DsBairro, DsCidade, NrNumero, DsCEP, CdUF, TpEndereco = '', 
                          NmEndereco = '', DsPontoDeReferencia = '', NmDestinatario = '',Latitude, Longitude, Distancia, Tempo, Valor) => {
        const json = await apiFetchPost(
            '/user/insertEndereco',
            {jwt, DsLogradouro, DsBairro, DsCidade, NrNumero, DsCEP, CdUF, TpEndereco, 
            NmEndereco, DsPontoDeReferencia, NmDestinatario, Latitude, Longitude, Distancia, Tempo, Valor},
        )
        return json;
    },

    updateEndereco:async (jwt, IdEndereco, DsLogradouro, DsBairro, DsCidade, NrNumero, DsCEP, CdUF, StEntrega, 
                          TpEndereco = '', NmEndereco = '', DsPontoDeReferencia = '', NmDestinatario = '',
                          Latitude, Longitude, Distancia, Tempo, Valor) => {
        const json = await apiFetchPut(
            '/user/updateEndereco',
            {jwt, IdEndereco, DsLogradouro, DsBairro, DsCidade, NrNumero, DsCEP, CdUF, StEntrega, 
            TpEndereco, NmEndereco, DsPontoDeReferencia, NmDestinatario, Latitude, Longitude, Distancia, Tempo, Valor},
        )
        
        return json;
    },

    updateStEndereco:async (jwt, IdEndereco, StEntrega) => {
        const json = await apiFetchPost(
            '/user/updateStEndereco',
            {jwt, IdEndereco, StEntrega},
        )
        return json;
    },

    deleteEndereco:async (jwt, IdEndereco, hash) => {
        const json = await apiFetchDelete(
            '/user/delEndereco',
            {jwt, IdEndereco, hash}
        )
        return json;
    },

    getEnderecoCEP:async (cep) => {
        const json = await apiFetchGetEnd(
            'http://cep.republicavirtual.com.br/web_cep.php?cep=' + cep +'&formato=json'
        )
        return json;
    },

    getEndereco:async (jwt) => {
        const json = await apiFetchGet(
            '/user/getEndereco',
            {"jwt":jwt}
        )
        return json;
    },
}

export default () => SalatoAPI;