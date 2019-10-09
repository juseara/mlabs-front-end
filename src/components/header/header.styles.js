import styled from 'styled-components';
import imgLogo from '../../assets/profile-icons/logo.png';

export const Header = styled.header`
        display: flex;
        flex-direction: column;
        border-bottom: 1px solid #d2d3d3   ;     
`;

export const NavUser = styled.div`
    height: 32px;
    background-color: #3a3a3a;
    

    div {
        display: flex;
        height: 100%;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        color: #cbcccd;

        a{
            font-size: 12px;
            color:#cbcccd;
            font-family: 'Arial', sans-serif;
        }
        a:hover{
            opacity: 0.8;
        }
    }
`;

export const NavRoutes = styled.div`
   
    background-color:#fff;

    div {
        display:flex;
        height:100%;
        flex-direction:row;
        justify-content:space-around;
        flex-wrap:wrap;
    }
`;


export const Logo = styled.h1`
    width: 160px;
    height:62px;
    margin: 11px 10px 0 0;
    background-image: url(${imgLogo});    
`;

export const ListNav = styled.ul`
    display: flex;
    flex-direction:row;
    flex-wrap:wrap;
`;

export const ListNavItem = styled.li`
    height:100%;
    max-height:90px;
    a:hover {
        div{
            div{
                opacity:1;
            }

            p{
                color:#e02b4a;
            }
        }
    }

    div {
            height:100%;
            display: flex;
            flex-direction: column;
            padding: 12px 14px;
            justify-content: center;
            align-items: center;
            background-color: ${props => props.active ? ` #eff0f0` : 'none'};
        div{

            width:57px;
            height:34px;
            background-image: url(${props => `${props.img}`});
            background-repeat: no-repeat;
            background-size: cover;
            opacity: ${props => props.active ? 1 : 0.6};
        }
        p{
            margin-top:5px;
            color:${props => props.active ? '#e02b4a' : '#535353'}; 
            font-family: 'Turret Road';
            font-weight: normal;
            font-size: 14px;
            line-height: 14px;
            text-transform: uppercase;
            text-align: center;
        }
        
    }
`;
