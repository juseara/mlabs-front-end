import styled from 'styled-components';
import { device } from '../../styles/devices'

export const Container = styled.section`
    width:100%;
    margin:50px 0 50px 0;
    display:flex;
    flex-direction: column;
    align-items:center;
`;

export const Content = styled.div`
    width:100%;
    padding: 0 20px;
    margin: 0 auto;

    @media ${device.desktop} {
        max-width:1200px;
    }

    @media ${device.laptop} {
        max-width:1200px;
    }

    @media ${device.tablet} {
        max-width:700px;
    }
`;

export const GroupCard = styled.div`
    display: flex;
    flex-direction:row;
    flex-wrap:wrap;
    justify-content:center;
`;


export const ProfileContainer = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    
`;

export const TitleProfile = styled.h3`
    text-align:center;
    font-family:  'Arial', sans-serif;
    margin:30px;
`;



export const List = styled.ul`
    margin-top: 20px;
    width:100%;
    max-height:30%;
    min-height:100px;
    overflow-y: scroll;
    background-color:#e9eaed;
`;

export const ListItem = styled.li`
    height:79px;
    border-bottom: solid 1px #fff;
`;

export const Footer = styled.div`
    display:flex;
    flex:1;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    font-family:  'Arial', sans-serif;
    font-weight:bold;

    span{
        color:#989a9c;
        margin-bottom:15px;
        text-align: center;
    }

    a{
        color:#4c90e2;
        text-decoration: underline;
        text-align: center;
    }

`;