import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex:1;
    flex-direction:column;
    min-height:10px;
    
    /* background-color:red; */
`;

export const ContentProgress = styled.div`
    display: flex;
    flex-direction:row;
    flex:1;
    min-height:10px;
    justify-content:center;
    align-items:center;
    
    /* background-color:green; */
`;

export const ContentLabel = styled.div`
    display:flex;
    flex-direction:row;
    flex:1;
    min-height:10px;
    justify-content:center;

`;

export const Label = styled.span`
        text-align:center;
        width:22%;
        font-family: 'Arial', sans-serif;
        font-weight: bold;
        font-size: 12px;
        color: ${props => props.active ? `${props.activeColor}` : `${props.inactiveColor}`};
`;

export const Progress = styled.div`
    display:flex;
    flex:1;
    justify-content:center;
    align-items:center;
    
        
        span:nth-last-child(1){
            display:none;
        }
`;


export const Cicle = styled.div`
        width:12px;
        height:12px;
        border-radius:12px;
        background-color:${props => props.active ? `${props.activeColor}` : `${props.inactiveColor}`};
        margin:3px;
`;

export const Line = styled.span`
            display:flex;
            width:20%;
            border-top-style: solid;
            color:${props => props.active ? `${props.activeColor}` : `${props.inactiveColor}`};
            border-radius: 1px;
            border-top-width: 2px;
`;