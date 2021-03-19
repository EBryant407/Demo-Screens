import React from 'react';
import {
    ParentView,
    Image,
  }
    from './styles';

const ImageScreen = () => {
    return (
        <ParentView>
            <Image
            source={require('../../../assets/forest.jpg')} />
    
            <Image
            source={require('../../../assets/beach.jpg')} />

            <Image
            source={require('../../../assets/mountain.jpg')} />
        </ParentView>
    );

};

export default ImageScreen;