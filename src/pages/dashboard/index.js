import React, { useState, useEffect } from 'react'
import facebook from '../../assets/social-img/facebook.png'
import facebookLogged from '../../assets/social-img/facebook_logged.png'
import Twitter from '../../assets/social-img/twitter.png';
import TwitterLogged from '../../assets/social-img/twitter_logged.png';
import Instagram from '../../assets/social-img/instagram.png';
import InstagramLogged from '../../assets/social-img/instagram_logged.png';
import { SocialCard, Modal, Steper, RadioButton } from '../../components'
import { Container, Content, GroupCard, PageContainer, PageTitle, PageList, PageListItem, PageFooter, PageImage, PageLabelContent } from './dashboard.styles'


const DashBoard = () => {


    const [modalOptions, setModal] = useState({
        show: false,
    })

    const [page, setPage] = useState({})

    const [sociaisCards, setSocialCards] = useState([
        {
            key: 'facebook',
            title: 'Facebook',
            color: '#4065b4',
            image: facebook,
            imageLogged: facebookLogged,
            function: () => {
                setChannel('facebook')
                setModal({
                    show: true,
                    title: 'Adicionar facebook',
                    image: facebook,
                })
            },
            profile: undefined
        },
        {
            key: 'twitter',
            title: 'Twitter',
            color: '#50abf1',
            image: Twitter,
            imageLogged: TwitterLogged,
            function: () => {
                setChannel('twitter')
                setModal({
                    show: true,
                    title: 'Adicionar Twitter',
                    image: Twitter,
                })
            },
            profile: undefined
        },
        {
            key: 'instagram',
            title: 'Instagram',
            color: 'linear-gradient(51deg,#f79f5e,#e6405c,#b536a0)',
            image: Instagram,
            imageLogged: InstagramLogged,
            function: () => {
                setChannel('instagram')

                setModal({
                    show: true,
                    title: 'Adicionar Instagram',
                    image: Instagram,
                })
            },
            profile: undefined
        }

    ])

    const [pages, setPages] = useState([
        {
            "id": 1,
            "name": "Pet Shop do Arnaldo",
            "url": "https://www.facebook.com/pet-shop-do-arnaldo",
            "picture": "https://picsum.photos/id/237/200/300",
            "channel_key": "facebook",
            "checked": false,
        },
        {
            "id": 2,
            "name": "Buffet Alegria Geral",
            "url": "https://www.facebook.com/buffet-alegria-geral",
            "picture": "https://picsum.photos/id/1042/3456/5184",
            "channel_key": "facebook",
            "checked": false,
        },
        {
            "id": 3,
            "name": "Mecânica do Vitão",
            "url": "https://www.facebook.com/mecanic-do-vitao",
            "picture": "https://picsum.photos/id/1071/200/200",
            "channel_key": "facebook",
            "checked": false,
        },
        {
            "id": 4,
            "name": "Fica assim então",
            "url": "https://twitter.com/ficaassimentao",
            "picture": "https://picsum.photos/id/1080/6858/4574",
            "channel_key": "twitter",
            "checked": false,
        },
        {
            "id": 5,
            "name": "Diogo Diogo",
            "url": "https://twitter.com/diogodiogodiogodiogo",
            "picture": "",
            "channel_key": "twitter",
            "checked": false,
        },
        {
            "id": 6,
            "name": "Loja Sapatos mais que legais",
            "url": "http://instagram.com/sapatosmaisquelegais",
            "picture": "https://picsum.photos/id/18/2500/667",
            "channel_key": "instagram",
            "checked": false,
        },
        {
            "id": 7,
            "name": "Bicicletaria do Alemão",
            "url": "https://www.instagram.com/bicicletariadoalemao/",
            "picture": "https://picsum.photos/id/1077/100/100",
            "channel_key": "instagram",
            "checked": false,
        },
        {
            "id": 8,
            "name": "Guia Melhores Lugares SJC",
            "url": "https://guiamelhoreslugaressjc.com.br",
            "picture": "",
            "channel_key": "google_analytics",
            "checked": false,

        },
        {
            "id": 9,
            "name": "Canal do Slime",
            "url": "https://www.youtube.com/user/CanalDoSlimeLegal",
            "picture": "https://picsum.photos/id/157/500/500",
            "channel_key": "youtube",
            "checked": false,
        },
        {
            "id": 10,
            "name": "Tudo sobre skate",
            "url": "http://pinterest.com/tudosobreskate",
            "picture": "https://picsum.photos/id/157/300/500",
            "channel_key": "pinterest",
            "checked": false,
        },
        {
            "id": 11,
            "name": "Tech+",
            "url": "http://pinterest.com/techmais",
            "picture": "https://picsum.photos/id/160/1000/1000",
            "channel_key": "pinterest",
            "checked": false,
        }
    ])

    const [filterPages, setFilterPages] = useState([])

    const [channel_key, setChannel] = useState("")

    useEffect(() => {
        setFilterPages(pages.filter(page => page.channel_key === channel_key))
    }, [channel_key])

    useEffect(() => {
        console.log("SELECTED PAGE", page)
        const newCards = sociaisCards.map(card => {
            if (card.key == page.channel_key) {
                card.profile = page
            }

            return card
        })

        setSocialCards(newCards)
    }, [page])

    const bodyModal = () => {

        return (
            <PageContainer>
                <Steper activeColor={"#f79f5e"} indexActive={1} labels={["Verificação", "Páginas", "Segmentos", "Concorrentes"]} />
                <PageTitle>Selecione a página que você deseja vincular a este perfil</PageTitle>
                <PageList>
                    {filterPages.length <= 0 ?
                        <PageLabelContent>
                            <span>Não possui páginas para esse canal</span>
                        </PageLabelContent> :

                        filterPages.map((page => {
                            return (
                                <PageListItem onClick={() => {
                                    const newfilterPages = filterPages.map(p => ({ ...p, checked: p.id == page.id ? true : false }))
                                    setFilterPages(newfilterPages)
                                }}>
                                    <PageImage image={page.picture} />
                                    <PageLabelContent>
                                        <span>{page.name}</span>
                                        <small>{page.url}</small>
                                    </PageLabelContent>
                                    <RadioButton
                                        type="radio"
                                        name="profile"
                                        checked={page.checked}
                                    />
                                </PageListItem>
                            )
                        }))
                    }

                </PageList>
                <PageFooter>
                    <span>Não encontrou sua página?</span>
                    <a href="#">Clique aqui para Atualizar suas permissões do Facebook.</a>
                </PageFooter>
            </PageContainer>
        )
    }

    const handleSubmitModal = () => {
        const pageSelected = filterPages.find(page => page.checked)
        if (!pageSelected) {
            alert("Selecione uma página.")
            return
        }
        setPage(pageSelected);
        setModal({ show: false })
    }
    return (
        <Container>
            <Content>
                <GroupCard>
                    {sociaisCards.map((social, index) =>
                        <SocialCard
                            onPressButton={social.function}
                            key={index}
                            primaryColor={social.color}
                            title={social.title}
                            image={social.image}
                            imageLogged={social.imageLogged}
                            profile={social.profile}
                        />)}
                </GroupCard>
            </Content>
            <Modal {...modalOptions} onCancel={() => setModal({ show: false })} onSubmit={handleSubmitModal}>
                {bodyModal()}
            </Modal>
        </Container>
    )
}

export default DashBoard