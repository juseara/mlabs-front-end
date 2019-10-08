import React,{ useState } from 'react'
import { Container, Content, GroupCard, ProfileContainer, TitleProfile, List, ListItem, Footer } from './dashboard.styles'
import facebook from '../../assets/social-img/facebook.png'
import facebookLogged from '../../assets/social-img/facebook_logged.png'
import Twitter from '../../assets/social-img/twitter.png';
import TwitterLogged from '../../assets/social-img/twitter_logged.png';
import Instagram from '../../assets/social-img/instagram.png';
import InstagramLogged from '../../assets/social-img/instagram_logged.png';
import { SocialCard, Modal, Steper } from '../../components'


const DashBoard = () => {
    const [modalOptions, setModal] = useState({
        show:true,
       
    })

    const [sociaisCards] = useState([
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
                        <ProfileContainer>
                            <Steper activeColor={"#f79f5e"} indexActive={1} labels={["Verificação", "Páginas","Segmentos", "Concorrentes"]}/>
                            <TitleProfile>Selecione a página que você deseja vincular a este perfil</TitleProfile>
                            <List>
                                <ListItem>

                                </ListItem>
                                <ListItem>

                                </ListItem>
                                <ListItem>

                                </ListItem>
                            </List>
                            <Footer>
                                <span>Não encontrou sua página?</span>
                                <a href="#">Clique aqui para Atualizar suas permissões do Facebook.</a>
                            </Footer>
                        </ProfileContainer>
            </Modal>
        </Container>
    )
}

export default DashBoard