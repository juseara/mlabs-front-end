import facebook from '../assets/social-img/facebook.png'
import facebookLogged from '../assets/social-img/facebook_logged.png'
import Twitter from '../assets/social-img/twitter.png';
import TwitterLogged from '../assets/social-img/twitter_logged.png';
import Instagram from '../assets/social-img/instagram.png';
import InstagramLogged from '../assets/social-img/instagram_logged.png';
import googleMyBusiness from '../assets/social-img/google_my_business.png';
import googleMyBusinessLogged from '../assets/social-img/google_my_business_logged.png';
import pinterest from '../assets/social-img/pinterest.png';
import pinterestLogged from '../assets/social-img/pinterest_logged.png';
import linkedin from '../assets/social-img/linkedin.png';
import linkedinLogged from '../assets/social-img/linkedin_logged.png';
import youtube from '../assets/social-img/youtube.png';
import youtubeLogged from '../assets/social-img/youtube_logged.png';
import whatsapp from '../assets/social-img/whatsapp.png';
import whatsappLogged from '../assets/social-img/whatsapp_logged.png';
import analytics from '../assets/social-img/analytics.png';
import analyticsLogged from '../assets/social-img/analytics_logged.png';

import * as storageService from './storageSevice'

const socialMedias = [
    {
        key: 'facebook',
        title: 'Facebook',
        color: '#3A589B',
        image: facebook,
        imageLogged: facebookLogged,
        profile: undefined
    },
    {
        key: 'twitter',
        title: 'Twitter',
        color: '#50abf1',
        image: Twitter,
        imageLogged: TwitterLogged,
        profile: undefined
    },
    {
        key: 'instagram',
        title: 'Instagram',
        color: 'linear-gradient(51deg,#f79f5e,#e6405c,#b536a0)',
        image: Instagram,
        imageLogged: InstagramLogged,
        profile: undefined
    },
    {
        key: 'google_my_business',
        title: 'Google meu negócio',
        color: 'linear-gradient(51deg,#5190f6,#72aafb)',
        image: googleMyBusiness,
        imageLogged: googleMyBusinessLogged,
        profile: undefined
    },
    {
        key: 'pinterest',
        title: 'Pinterest',
        color: '#cf0000',
        image: pinterest,
        imageLogged: pinterestLogged,
        profile: undefined
    },
    {
        key: 'linkedin',
        title: 'Linkedin',
        color: '#3279aa',
        image: linkedin,
        imageLogged: linkedinLogged,
        profile: undefined
    },
    {
        key: 'youtube',
        title: 'Youtube',
        color: '#ee1317',
        image: youtube,
        imageLogged: youtubeLogged,
        profile: undefined
    },
    {
        key: 'whatsapp',
        title: 'Whatsapp',
        color: 'linear-gradient(51deg,#23d244,#5bf979)',
        image: whatsapp,
        imageLogged: whatsappLogged,
        profile: undefined
    },
    {
        key: 'analytics',
        title: 'Analytics',
        color: '#f27902',
        image: analytics,
        imageLogged: analyticsLogged,
        profile: undefined
    }
]


const getAllSocialMedias = () => {
    return new Promise((resolver)=> {
        const storagePages = storageService.getPages();

        return resolver(socialMedias.map(card => ({...card,profile: storagePages[card.key]? card.profile = storagePages[card.key]:card.profile})))
    })
}

export {
    getAllSocialMedias
}