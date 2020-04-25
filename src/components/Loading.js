import React from 'react';
import ReactLoading from 'react-loading';


const Loading = (props) =>{
    return(
        <ReactLoading type="spinningBubbles" color={props.color ? props.color : '#FF0000'} height={props.heght ? props.height : '5%'} width={props.width ? props.width : '5%'}/>
    );
}

export default Loading;