import styled from 'styled-components';
import { device } from '../../styles/devices'

export const Card = styled.div`
        width:20%;
        height:260px;
        background: #F0F0F0;
        border: 2px dotted #cbcccd;
        display:flex;
        flex-direction:column;
        justify-content:space-around;
        align-items:center;
        padding: 40px 0;

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

export const Image = styled.div`
        background: url(${props => `${props.img}`}) no-repeat 0 0;
        background-size: contain;
        width: 60px;
        height: 60px;
        border-radius: 100%;
        
`;

export const Tile = styled.h3`
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

        :hover{
                opacity:0.5;
        }
`;

export const CardLoged = styled.div`
        width:20%;
        height:260px;
        background: ${props => `${props.color}`};
        border: 0;
        display:flex;
        flex-direction:column;
        justify-content:flex-start;
        align-items:center;
        transition: all 0.2s ease-out 0s;

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

        :hover{
                
                width:24%;
                margin: -7px;
                box-sizing: content-box;
                box-shadow: 0px 0px 10px 2px rgba(0,0,0,0.2);
                z-index: 12;
                height:296px;
                z-index:100;

                @media ${device.laptop} {
                        width:40%;
                }
                @media ${device.tablet} {
                        width:50%;
                }

                @media ${device.mobileS} {
                        width:114%;
                }

                @media ${device.mobileM} {
                        width:114%;
                }

                @media ${device.mobileL} {
                        width:114%;
                }
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