import styled from 'styled-components';
import { device } from '../../styles/devices'


export const SlotCard = styled.div`
        width:20%;
        height:260px;
        background: #F0F0F0;
        position: relative;
        display:flex;
        flex-direction:column;
        justify-content:space-around;
        align-items:center;


        @media ${device.laptop} {
                width:30%;
        }

        @media ${device.tablet} {
                width:40%;
        }

        @media ${device.mobileS} {
                width:100%;
        }

        @media ${device.mobileM} {
                width:100%;
        }

        @media ${device.mobileL} {
                width:100%;
        }
`;

export const Card = styled.div`
        width:100%;
        height:100%;
        background: #F0F0F0;
        display:flex;
        flex-direction:column;
        justify-content:space-around;
        align-items:center;
        border: 2px dotted #cbcccd;
        padding: 40px 0;
        position: relative;

        *::after{
                contain:'';
                box-sizing: border-box;
                
                
        }

        
       
`;

export const IconHelp = styled.div`
        position: absolute;
        left: 36px;
        margin-left: 45.5px;
        width: 30px;
        height: 30px;
        border: solid 2px #8b8d8f;
        border-radius:30px;
        cursor: pointer;
        display:flex;
        justify-content:center;
        align-items:center;

        :hover {
                background-color: #8b8d8f;
                
                svg {
                        color:#fff !important;
                }
                
        }

        
        
`;

export const Image = styled.div`
        background: url(${props => `${props.image}`}) no-repeat 0 0;
        background-size: contain;
        width: 60px;
        height: 60px;
        border-radius: 100%;
        
`;

export const Title = styled.h3`
        font-family: 'Turret Road';
        font-weight: normal;
        font-size: 20px;
        color: #535353;
        font-size: 20px;
        text-transform: uppercase;
        text-align: center;
        
`;

export const Button = styled.button`
        width: 99px;
        height: 32px;
        border-radius: 3px;
        background: #E02B4A;
        font-family: 'Arial', sans-serif;
        font-weight: bold;
        font-size: 14px;
        color: #FFF;
        line-height: 14px;
        text-align: center;
        border-width:0;

        :hover {
                opacity:0.5;
        }

        :active {
                opacity:1!important;
        }
`;

export const CardLoged = styled.div`
        width:100%;
        height:100%;
        background: ${props => `${props.color}`};
        display:flex;
        flex-direction:column;
        justify-content:flex-start;
        align-items:center;
        transition: all 0.2s ease-out 0s;
        position: relative;
        border: 0;
        z-index:10;

      

        :hover{
                
                width:114%;
                height:114%;
                margin: -7px;
                box-sizing: content-box;
                box-shadow: 0px 0px 10px 2px rgba(0,0,0,0.2);
                z-index: 40;
                height:296px;
               
        }
`;

export const Header = styled.header`
        background: #0000001f;
        width: 100%;
        padding: 15px 20px;

        span{

                font-family: 'Arial', sans-serif;
                color: #fff;
                display: block;
                max-height: 20px;
                overflow: hidden;
                font-size: 14px;
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
        }
`;

export const ImageLoged = styled.div`
        display:flex;
        align-self:flex-start;
        background: url(${props => `${props.image}`}) no-repeat 0 0;
        background-size: contain;
        height: 90px;
        width: 85px;
        margin: 10px 0 0 10px;
`;