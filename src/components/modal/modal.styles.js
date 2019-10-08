import styled from 'styled-components'
import { device } from '../../styles/devices'
export const ShadowMask = styled.div`
        position: fixed;
        top:0;
        background-color: rgba(48, 49, 48, 0.42);
        height: 100%;
        transition: all 1.3s;
        width: 100%;
        overflow-y:hidden;
`

export const ModalWrapper = styled.div`
    
    position: absolute;
    top:30px;
    width: 60VW;
    height: 80VH;
    min-height:400px;
    transform: ${props => props.show ? 'translateY(0vh)' : 'translateY(-100vh)'};
    opacity: ${props => props.show ? '1' : '0'};
    background: white;
    border: 1px solid #d0cccc;
    box-shadow: 0 5px 8px 0 rgba(0,0,0,0.2), 0 7px 20px 0 rgba(0,0,0,0.17);
    transition: all .8s;
    border-radius: 10px;
    z-index:${props => props.show ? 9999 : -1};
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media ${device.mobileS}{
        width: 100VW;
        height: 100VH;
        top:0;
        position: fixed; 
        border-radius: 0;
        
    }

    @media ${device.mobileM}{
        width: 100VW;
        height: 100VH;
        top:0;
        position: fixed; 
        border-radius: 0;
        
    }

    @media ${device.mobileL}{
        width: 100VW;
        height: 100VH;
        top:0;
        position: fixed; 
        border-radius: 0;
        
    }

   
`;

export const ModalHeader = styled.div`

    background: #ffff;
    padding: 18px;
    border-bottom: 1px solid #d0d0d0;
    border-radius: 10px 10px 0 0px;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    div{
        display:flex;
        flex-direction:row;
        justify-content:flex-start;
        align-items:center;
    }
    h3{
        color: #535353;
        font-family: 'Turret Road';
        font-size: 22px;
        text-transform: uppercase;
    }

`;

export const Logo = styled.div`
    background: url(${props => `${props.image}`}) no-repeat center center;
    width: 40px;
    height: 40px;
    border-radius:10px;
    background-size: cover;
    margin: 0 5px;
`;

export const ModalBody = styled.div`
        display: flex;
        flex: 1;
        flex-direction: column;
        background: #fff;
        padding: 10px 15px;
`;

export const CloseButton = styled.div`
       padding:10px;

        :hover{
            opacity:0.3;
        }

        :active{
            opacity:1!important;
        }
`;


export const ModalFooter = styled.div`
        display: flex;
        flex-direction:row;
        justify-content: space-between;
        background: #f8f8f8;
        
        padding: 25px;
        border-top: 1px solid #d0d0d0;
        border-radius: 0 0 10px 10px;

        button {
            border-width:0;
            font-family: 'Turret Road';
            text-transform: uppercase;
            padding: 10px 10px;
            border-radius: 5px;
            font-size: 14px;

            :first-child {
                border: 1px solid #DDD;
                background-color:transparent;
            }

            :last-child {
                color:#fff;
                background-color:#4a8fe2;
            }

            :hover{
                opacity:0.6;
            }

            :active{
                opacity:1!important;
            }
        }

       
`;