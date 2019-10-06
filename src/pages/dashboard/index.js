import React from 'react'
import { Container,Content,GroupCard } from './dashboard.styles'
import { SocialCard } from '../../components'

const DashBoard = () => {
    return (
    <Container>
        <Content>
            <GroupCard>
                <SocialCard  />
            </GroupCard>
        </Content>
    </Container>)
}

export default DashBoard