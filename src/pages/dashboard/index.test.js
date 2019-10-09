import React from 'react';

import { mount } from 'enzyme';
import DashBoard from './index';

import facebook from '../../assets/social-img/facebook.png'
import facebookLogged from '../../assets/social-img/facebook_logged.png'


describe('[Component] DashBoard',() =>{
    let props;
    let wrapper;

    const cardFacebook = {
        key: 'facebook',
        title: 'Facebook',
        color: '#3A589B',
        image: facebook,
        imageLogged: facebookLogged,
        profile: undefined
    }

    const cardTwitter =  {
        key: 'twitter',
        title: 'Twitter',
        color: '#50abf1',
        image: Twitter,
        imageLogged: TwitterLogged,
        profile: undefined
    }

    const cardInstagram = {
        key: 'instagram',
        title: 'Instagram',
        color: 'linear-gradient(51deg,#f79f5e,#e6405c,#b536a0)',
        image: Instagram,
        imageLogged: InstagramLogged,
        profile: undefined
    }

    const cards = [cardFacebook,cardTwitter, cardTwitter]

    const pages = [
        
    ]

})
