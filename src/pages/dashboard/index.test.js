import React from 'react';
import { act } from 'react-dom/test-utils';
import { shallow, mount } from 'enzyme';
import DashBoard from './index';

import facebook from '../../assets/social-img/facebook.png';
import facebookLogged from '../../assets/social-img/facebook_logged.png';
import Twitter from '../../assets/social-img/twitter.png';
import TwitterLogged from '../../assets/social-img/twitter_logged.png';
import Instagram from '../../assets/social-img/instagram.png';
import InstagramLogged from '../../assets/social-img/instagram_logged.png';
import { pageService, storageService, socialMediaService  } from '../../services';
import pagesMock from '../../__test-helpers__/pages';
import {Container, Content, GroupCard} from './dashboard.styles';
import { SocialCard, Modal, Steper, RadioButton } from '../../components'
import {SlotCard} from '../../components/socialCard/socialCard.styles'


describe('[Component] DashBoard',() =>{
   
    let props;
    let wrapper;
    let pageServiceMock;
    let useEffect;
    let getAllPagesMock;

    const pages = [];
    

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

    const cards = [cardFacebook, cardTwitter, cardInstagram]


    beforeEach(() => {
        jest.spyOn(React, "useEffect").mockImplementationOnce(f => f());
        jest.spyOn(pageService,'getAllPages').mockImplementationOnce(jest.fn().mockResolvedValue(pagesMock));
        jest.spyOn(storageService,'setPage').mockImplementationOnce(f => jest.fn());
        jest.spyOn(storageService,'getPages').mockImplementationOnce(f => jest.fn());
        jest.spyOn(socialMediaService,'getAllSocialMedias').mockImplementationOnce(jest.fn().mockResolvedValue(cards)); 

        wrapper = mount(<DashBoard />);
        
      });

      describe("Iniciando component",()=>{
          
          it("Carregando Pages",()=>{
            
            expect(pageService.getAllPages).toHaveBeenCalled();
          })

          it("Carregando midias socias",()=>{
           
            expect(socialMediaService.getAllSocialMedias).toHaveBeenCalled();

          })

          it("Deve renderizar o dashboard corretamente",()=>{              
                expect(wrapper.find(Container)).toHaveLength(1);
                expect(wrapper.find(Container).find(Content)).toHaveLength(1);
                expect(wrapper.find(Container).find(Content).find(GroupCard)).toHaveLength(1);
                
          })
      })
})
