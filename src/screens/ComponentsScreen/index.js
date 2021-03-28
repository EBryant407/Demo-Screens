import React from 'react';
import { View } from 'react-native';
import {
    TextView,
    TitleText,
    NameText,
    PictureView,
    ImageView,
    ScreenBackground,
}
    from './styles';

const ComponentsScreen = () => {
    const name = "Eric"
    return (
        <ScreenBackground
            source={require('../../../assets/galaxy.jpg')}
        >
            <View>
                <TextView>
                    <TitleText>
                        Welcome to my React Native Demo App!!
                </TitleText>
                    <NameText>
                        My name is {name}
                    </NameText>
                </TextView>
                <PictureView>
                    <ImageView 
                        source={require('../../../assets/eric.jpeg')} 
                    />
                </PictureView>
            </View>
        </ScreenBackground>
    );
};


export default ComponentsScreen;