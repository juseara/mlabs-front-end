import React from 'react';
import PropTypes from 'prop-types';
import { Root, Input, Fill } from './radioButton.styles'

const RadioButton = (props) => {

    return (
        <Root>
            <Input
                type="radio"
                name={props.name}
                value={props.value}
                checked={props.checked}
                aria-checked={props.checked}
                onChange={props.onChange}
            />
            <Fill fillColor={props.fillColor} />
        </Root>
    )
}

RadioButton.propTypes = {
    onChange: PropTypes.func,
    value: PropTypes.string,
    labelText: PropTypes.string,
    fillColor:PropTypes.string,
  };
  
RadioButton.defaultProps = {
    onChange: () => {},
    value: '',
    labelText: '',
    fillColor:'#ef9f2e'
  };

  export default RadioButton;