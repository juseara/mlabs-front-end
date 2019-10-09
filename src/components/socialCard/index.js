import React from 'react';
import PropTypes from 'prop-types';
import { FaQuestion } from 'react-icons/fa'
import {SlotCard ,Card, Image, Title, Button, Header, CardLoged, ImageLoged, IconHelp } from './socialCard.styles';

const SocialCard = (props) => {
    
    return(
        
        <SlotCard>
            {
                !props.profile? 
                    <Card>
                        <div style={{position:"relative"}}>
                            <IconHelp>
                                    <FaQuestion color="#8b8d8f"/>
                            </IconHelp>
                            <Image image={props.image}/>
                        </div>
                        <Title>{props.title}</Title>
                        <Button onClick={props.onPressButton}>Adicionar</Button>
                    </Card>
          
                :
                    <CardLoged onClick={props.onPressButton} color={props.primaryColor}>
                        <Header color={props.primaryColor}>
                            <span>{props.profile.name}</span>
                        </Header>
                        <ImageLoged image={props.imageLogged}/>
                    </CardLoged>
                
            }
               
        </SlotCard>
    )
}

SocialCard.propTypes={
    image:PropTypes.string,
    imageLogged:PropTypes.string,
    title:PropTypes.string,
    onPressButton:PropTypes.func,
    profile:PropTypes.any,
    primaryColor:PropTypes.string
}

SocialCard.defaultProps={
    image:'',
    imageLogged:'',
    title:'social',
    onPressButton:()=>{console.log("TESTE")},
    profile:undefined,
    primaryColor:'#ffff'
}

export default SocialCard