import React from 'react';
import PropTypes from 'prop-types';
import { Container, ContentProgress, ContentLabel, Progress, Line, Cicle,Label } from './steper.styles'

const Steper = (props) => {

    return (
        <Container>
            <ContentProgress>
                <Progress>
                    
                    {props.labels.map((item,index) =>                     
                            <React.Fragment key={index}>
                                <Cicle key={`c-${index}`} activeColor={props.activeColor} inactiveColor={props.inactiveColor} active={(index <= props.indexActive)} />
                                <Line  key={`l-${index}`} activeColor={props.activeColor} inactiveColor={props.inactiveColor} active={(index < props.indexActive)} />
                            </React.Fragment>                        
                    )}

                </Progress>

            </ContentProgress>
            <ContentLabel>
                {props.labels.map((item,index) => {
                    return (<Label key={`la-${index}`} activeColor={"#AAAAA"} inactiveColor={props.inactiveColor} active={(index <= props.indexActive)}>{item}</Label>)
                })}
            </ContentLabel>
        </Container>
    )
}

Steper.propTypes = {
    lables: PropTypes.array,
    indexActive: PropTypes.number,
    activeColor: PropTypes.string,
    inactiveColor: PropTypes.string,
}

Steper.defaultProps = {
    labels: [],
    indexActive: 0,
    activeColor:'green',
    inactiveColor:"#e9eaed",
}

export default Steper