import React from 'react';
import PropTypes from 'prop-types';
import { FaQuestion } from 'react-icons/fa'
import {Card, Image, Tile, Button, Header, CardLoged, ImageLoged, IconHelp } from './socialCard.styles'

const SocialCard = (props) => {

    return(
        <>
            {
                !props.profile? 
                    <Card>
                        <IconHelp>
                                <FaQuestion color="#8b8d8f"/>
                        </IconHelp>
                        <Image img={props.image}/>
                        <Tile>{props.title}</Tile>
                        <Button onClick={props.onPressButton}>Adicionar</Button>
                    </Card>
          
                :
                    <CardLoged onClick={props.onPressButton} color={props.primaryColor}>
                        <Header color={props.primaryColor}>
                            <span>TechZé</span>
                        </Header>
                        <ImageLoged image={props.imageLogged}/>
                    </CardLoged>
                
            }
               
        </>
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