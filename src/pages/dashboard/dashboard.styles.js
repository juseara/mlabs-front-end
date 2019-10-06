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