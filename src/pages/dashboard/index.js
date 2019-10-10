import React, { useState, useEffect } from 'react'

import { SocialCard, Modal, Steper, RadioButton } from '../../components'
import { pageService, storageService, socialMediaService  } from '../../services'
import { Container, Content, GroupCard, PageContainer, PageTitle, PageList, PageListItem, PageFooter, PageImage, PageLabelContent } from './dashboard.styles'



const DashBoard = () => {


    const [modalOptions, setModal] = useState({
        show: false,
    })

    const [page, setPage] = useState(undefined)

    const [socialMedias, setSocialMedias] = useState([
        

    ])

    const [pages, setPages] = useState([])

    const [filterPages, setFilterPages] = useState([])

    const [channel_key, setChannel] = useState("")

    useEffect(() => {
        channel_key && setFilterPages(pages.filter(page => page.channel_key === channel_key))
    }, [channel_key])

    useEffect(() => {
        if(page){
            setSocialMedias(socialMedias.map(card => ({...card, profile: card.key == page.channel_key? page:card.profile})))
            storageService.setPage(page)
        }
            
    }, [page])

    

    useEffect(() =>{

        const fetchPages = async () => {
            const response = await pageService.getAllPages();
            
            setPages(response);
        }
        
        const fetchSocialMedia = async () => {
            const response = await socialMediaService.getAllSocialMedias();
            try {
                console.log("REPONSE 1 -----------", response)    
                setSocialMedias(response.map(social=>{
                    return {
                        ...social,
                         function: () => {
                            setChannel(`${social.key}`)
    
                            setModal({
                                show: true,
                                title: `Adicionar ${social.title}`,
                                image: social.image,
                            })
                        }
                    }
                }));    
            } catch (error) {
                console.log(error)
            }
            
        }

        

        fetchPages();
        fetchSocialMedia();
    },[])

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
        <Container id="container">
            <Content id="content">
                <GroupCard id="group-card">
                    {socialMedias.map((social, index) =>
                        <SocialCard
                            id={index}
                            key={index}
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