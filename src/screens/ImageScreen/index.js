import React from 'react';
import {
    ParentView,
    Image,
    TitleText,
  }
    from './styles';

const ImageScreen = () => {
    return (
        <ParentView>
            
            <Image
                source={require('../../../assets/dragon.jpg')} />
            <TitleText>
                Red Dragon
            </TitleText>

            <Image
                source={require('../../../assets/darktower.jpg')} />
            <TitleText>
                The Dark Tower
            </TitleText>

            <Image
                source={require('../../../assets/theforce.jpg')} />
            <TitleText>
                Force Wielders
            </TitleText>
        </ParentView>
    );
};

export default ImageScreen;