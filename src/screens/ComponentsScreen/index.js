import React from 'react';
import {  View } from 'react-native';
import {
    TextView,
    TitleText,
    NameText,
    PictureView,
    ImageView,
}
    from './styles';

const ComponentsScreen = () => {
    const name = "Eric"
    return (
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
    );
};


export default ComponentsScreen;