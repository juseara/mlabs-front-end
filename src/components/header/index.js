import React from 'react';
import { FaCog } from 'react-icons/fa'
import { Header, NavUser, NavRoutes, Logo, ListNav } from './header.styles';
import NavItem from './navItem';
import imgDashBoard from '../../assets/menu-icons/dashboard.svg'
import imgAgendamento from '../../assets/menu-icons/agendamento.svg'
import imgCalendario from '../../assets/menu-icons/calendar.svg'
import imgInbox from '../../assets/menu-icons/inbox.svg'
import imgConteudo from '../../assets/menu-icons/conteudo.svg'
import imgAcompanhamento from '../../assets/menu-icons/acompanhamento.svg'
import imgRelatorios from '../../assets/menu-icons/relatorios.svg'
import imgNewsPaper from '../../assets/menu-icons/newpaper.svg'


export default () => {

    return (
        <Header>
            <NavUser >
                <div>
                    <a href="/#" className="date-time">06/10/2019 01:22:50</a>
                    <a href="/#" className="user-name">USER NAME </a>
                    <a href="/#" className="icon"> <FaCog size="16px" /></a>
                </div>
            </NavUser>
            <NavRoutes>
                <div>
                    <div>
                        <Logo />
                        <nav>
                            <ListNav>
                                <NavItem label="Dashboard" path="/dashboard" img={imgDashBoard} active/>
                                <NavItem label="Agendar Post" path="/agendamento" img={imgAgendamento} />
                                <NavItem label="Calendario" img={imgCalendario} />
                                <NavItem label="Inbox" img={imgInbox} />
                                <NavItem label="Feed" img={imgNewsPaper} />
                                <NavItem label="WorkFlow" img={imgConteudo} />
                                <NavItem label="Acompanhamento" img={imgAcompanhamento} />
                                <NavItem label="Relatorios" img={imgRelatorios} />
                            </ListNav>
                        </nav>

                    </div>
                </div>
            </NavRoutes>
        </Header>
    )
}