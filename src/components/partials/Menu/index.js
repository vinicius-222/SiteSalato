import React, {useState, useEffect} from 'react';
import { AreaMenu } from './styled';
import { Link } from 'react-router-dom';
const Menu = (props) => {
    const [DsPath, setDsPath] = useState(props.DsPath);
  
    return(
        <AreaMenu>
            <ul>
                <li><Link className={ DsPath === 'MinhaConta' ? 'MenuAtivo' : 'MenuInativo'} to="/MinhaConta?cat=MinhaConta">Perfil</Link></li>
                <li><Link className={ DsPath === 'Senha' ? 'MenuAtivo' : 'MenuInativo'} to="/Senha?cat=Senha">Senha</Link></li>
                <li><Link className={ DsPath === 'Email' ? 'MenuAtivo' : 'MenuInativo'} to="/Email?cat=Email">E-mail</Link></li>
                <li><Link className={ DsPath === 'Pedidos' ? 'MenuAtivo' : 'MenuInativo'} to="/Pedidos?cat=Pedidos">Pedidos</Link></li>
                <li><Link className={ DsPath === 'Enderecos' ? 'MenuAtivo' : 'MenuInativo'} to="/Endereco?cat=Enderecos">Endereços</Link></li>
            </ul>
        </AreaMenu>
    )
}

export default Menu;