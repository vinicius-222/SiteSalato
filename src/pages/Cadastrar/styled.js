import styled from 'styled-components';

export const Fake = styled.div`
    background-color:#DDD;
    height:${props=>props.height || 20}px;
`;

export const SearchArea = styled.div`

.areaLoad{
    position:absolute;
    right:50%;
    top:50%;
   
}
form {
    background-color:#FFF;
    border-radius:3px;
    padding:10px;
    box-shadow:0px 0px 3px #999;
    margin-bottom:20px;

    .area {
        display:flex;
        align-items:center;
        padding:10px;
        max-width:500px;

        .area--title {
            width:200px;
            text-align:right;
            padding-right:20px;
            font-weight:bold;
            font-size:14px;
        }
        .area--input {
            flex:1;

            input {
                width:100%;
                font-size:14px;
                padding:5px;
                border:1px solid #DDD;
                border-radius:3px;
                outline:0;
                transition:all ease .4s;

                &:focus {
                    border:1px solid #333;
                    color:#333;
                }
            }

            button {
                display:flex;
                justify-content:center;
                align-items:center;
                width:110px;
                height:30px;
                background-color:#0089FF;
                border:0;
                outline:0;
                border-radius:4px;
                color:#FFF;
                font-size:15px;
                cursor:pointer;

                &:hover {
                    background-color:#006FCE;
                }
            }
        }
    }
}

@media (max-width:800px){
    h1{
        margin-left:10px;
    }
    form{

        .area{
            flex-direction:column;
            align-items:flex-start;
            
            .area--title {               
                text-align:left
            }
            .area--input{
                width:100%;
            }
        }    
    }
}

`;