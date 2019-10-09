import React from 'react'
import { mount, shallow } from 'enzyme';
import SocialCard from './index';
import facebook from '../../assets/social-img/facebook.png';
import facebookLogged from '../../assets/social-img/facebook_logged.png';
import { Card, IconHelp, Image, Title, Button, CardLoged,Header,ImageLoged } from './socialCard.styles'

const functionMock = jest.fn()

let propsCard ={
    profile:undefined,
    image:facebook,
    title:'Facebook',
    onPressButton:functionMock
}

let propsCardLogged = {
    profile:{
        name:'Loja do arlindo',
    },
    primaryColor:"#3A589B",
    imageLogged:facebookLogged,
    image:facebook,
    title:'Facebook',
    onPressButton:functionMock
}


describe('[Component] SocialCard',()=>{
    
    it('Deve renderizar o card sem página vinculada corretamente',()=>{

        const wrapper = mount(<SocialCard  {...propsCard}/>)
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find(Card)).toHaveLength(1);
        expect(wrapper.find(Card).find(IconHelp)).toHaveLength(1);
        expect(wrapper.find(Card).find(Image)).toHaveLength(1);
        expect(wrapper.find(Card).find(Image).props().image).toBe(facebook)
        expect(wrapper.find(Card).find(Title).children().text()).toBe("Facebook")
        expect(wrapper.find(Card).find(Button).props().onClick).toBe(functionMock)

    })

    it('Deve renderizar o card com página vinculada corretamente',()=>{

       
        const wrapper = mount(<SocialCard  {...propsCardLogged}/>)
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find(CardLoged)).toHaveLength(1);
        expect(wrapper.find(CardLoged).find(Header)).toHaveLength(1);
        expect(wrapper.find(CardLoged).find(ImageLoged)).toHaveLength(1);
        expect(wrapper.find(CardLoged).find(ImageLoged).props().image).toBe(facebookLogged)
        expect(wrapper.find(CardLoged).find(Header).children().text()).toBe("Loja do arlindo")
        expect(wrapper.find(CardLoged).props().onClick).toBe(functionMock)

    })

    it('Deve ser chamado a funcao onPressButton ao clicar no botão do card sem página vinculada',()=>{

        const wrapper = mount(<SocialCard  {...propsCard}/>)

        wrapper.find(Card).find(Button).simulate('click')

        expect(functionMock).toHaveBeenCalled()
    })

    it('Deve ser chamado a funcao onPressButton ao clicar no card com página vinculada',()=>{

        const wrapper = mount(<SocialCard  {...propsCardLogged}/>)

        wrapper.find(CardLoged).simulate('click')

        expect(functionMock).toHaveBeenCalled()
    })

})

