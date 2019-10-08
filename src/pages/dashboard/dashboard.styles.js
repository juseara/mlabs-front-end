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


export const PageContainer = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    
`;

export const PageTitle = styled.h3`
    text-align:center;
    font-family:  'Arial', sans-serif;
    
`;



export const PageList = styled.ul`
    margin-top: 20px;
    width:100%;
    max-height:180px;
    min-height:100px;
    overflow-y: scroll;
    background-color:#e9eaed;
`;

export const PageListItem = styled.li`
    display: flex;
    justify-content: space-between;
    align-items:center;
    height:79px;
    border-bottom: solid 1px #fff;
    padding: 0 10px 0 10px;
    
    &:hover{
        background: #9aecff;
    }
`;

export const PageFooter = styled.div`
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

export const PageImage = styled.div`
    width: 49px;
    height: 49px;
    background: #fafafa url(${props=> `${props.image}`}) no-repeat center center;
    background-size: cover;
    border: solid 1px #dadada;
`;

export const PageLabelContent = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    flex:1;
    padding:5px;

    span{
        font-family: 'Arial', sans-serif;
        font-weight: bold;
        font-size: 15px;
        color: #555;
        line-height: 21px;
    }

    small{
        font-family: 'Arial', sans-serif;
        font-weight: normal;
        font-size: 13px;
        color: #777;
        line-height: 20px;
    }
`;

