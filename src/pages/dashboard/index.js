import React,{ useState } from 'react'
import { Container, Content, GroupCard } from './dashboard.styles'
import facebook from '../../assets/social-img/facebook.png'
import facebookLogged from '../../assets/social-img/facebook_logged.png'
import Twitter from '../../assets/social-img/twitter.png';
import TwitterLogged from '../../assets/social-img/twitter_logged.png';
import Instagram from '../../assets/social-img/instagram.png';
import InstagramLogged from '../../assets/social-img/instagram_logged.png';
import { SocialCard } from '../../components'

const DashBoard = () => {
    const [sociaisCards, setSocialCards] = useState([
        {
            title:'Facebook',
            color:'#4065b4',
            image:facebook,
            imageLogged:facebookLogged,
            profile:{}
        },
        {
            title:'Twitter',
            color:'#50abf1',
            image:Twitter,
            imageLogged:TwitterLogged,
            profile:{}
        },
        {
            title:'instagram',
            color:'linear-gradient(51deg,#f79f5e,#e6405c,#b536a0)',
            image:Instagram,
            imageLogged:InstagramLogged,
            profile:{}
        }

    ])

    console.log("SOCIALCARDS",sociaisCards);

    return (
        <Container>
            <Content>
                <GroupCard>
                    {sociaisCards.map((social,index) => <SocialCard key={index}  primaryColor={social.color} title={social.title} image={social.image} imageLogged={social.imageLogged} profile={social.profile}/>)}
                </GroupCard>
            </Content>
        </Container>
    )
}

export default DashBoard