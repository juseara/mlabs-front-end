import React from 'react'
import PropTypes from 'prop-types';
import { ListNavItem } from './header.styles'

const NavItem = (props) => {

    return (
        <ListNavItem img={props.img} active={props.active}>
            <a href={props.path}>
                <div>
                    <div></div>
                    <p>{props.label}</p>
                </div>
            </a>
        </ListNavItem>
    )
}

NavItem.propTypes={
    img:PropTypes.string,
    path:PropTypes.string,
    label:PropTypes.string,
    active:PropTypes.bool,
}

NavItem.defaultProps={
    img:'',
    path:'/',
    label:'',
    active:false,
}


export default NavItem