import React,{ useState } from 'react'
import { Container, Content, GroupCard } from './dashboard.styles'
import facebook from '../../assets/social-img/facebook.png'
import facebookLogged from '../../assets/social-img/facebook_logged.png'
import Twitter from '../../assets/social-img/twitter.png';
import TwitterLogged from '../../assets/social-img/twitter_logged.png';
import Instagram from '../../assets/social-img/instagram.png';
import InstagramLogged from '../../assets/social-img/instagram_logged.png';
import { SocialCard, Modal } from '../../components'

const DashBoard = () => {
    const [modalOptions, setModal] = useState({
        show:false,
       
    })

    const [sociaisCards, setSocialCards] = useState([
        {
            key:'facebook',
            title:'Facebook',
            color:'#4065b4',
            image:facebook,
            imageLogged:facebookLogged,
            function:()=>{
                setModal({
                    show:true,
                    title:'Adicionar facebook',
                    image:facebook,
                })
            },
            profile:undefined
        },
        {
            key:'twitter',
            title:'Twitter',
            color:'#50abf1',
            image:Twitter,
            imageLogged:TwitterLogged,
            function:()=>{
                setModal({
                    show:true,
                    title:'Adicionar Twitter',
                    image:Twitter,
                })
            },
            profile:{}
        },
        {
            key:'instagram',
            title:'Instagram',
            color:'linear-gradient(51deg,#f79f5e,#e6405c,#b536a0)',
            image:Instagram,
            imageLogged:InstagramLogged,
            function:()=>{
                setModal({
                    show:true,
                    title:'Adicionar Instagram',
                    image:Instagram,
                })
            },
            profile:{}
        }

    ])

    

    return (
        <Container>
            <Content>
                <GroupCard>
                    {sociaisCards.map((social,index) => 
                    <SocialCard 
                            onPressButton   = { social.function }
                            key             = { index }  
                            primaryColor    = { social.color } 
                            title           = { social.title } 
                            image           = { social.image } 
                            imageLogged     = { social.imageLogged } 
                            profile         = { social.profile }
                        />)}
                </GroupCard>
            </Content>
            <Modal {...modalOptions} onCancel={()=>setModal({show:false})}>
                        <div style={{height:'400px'}}>

                        </div>
            </Modal>
        </Container>
    )
}

export default DashBoard