import React from "react";
import { TouchableOpacity } from "react-native";
import {
  ParentView,
  TitleText,
  ScreenText,
  ScreenBackground,
}
  from './styles';

const HomeScreen = ({ navigation }) => {

  return (

    <ScreenBackground
      source={require('../../../assets/sunset.png')}
    >
      <ParentView>
        <TitleText>
          Welcome to my Demos!
        </TitleText>

        <TouchableOpacity
          onPress={() => navigation.navigate('Components')} >
          <ScreenText>
            Go to Components Demo
        </ScreenText>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('List')} >
          <ScreenText>
            Go to List Demo
          </ScreenText>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('Image')} >
          <ScreenText>
            Go to Image Screen
          </ScreenText>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('Counter')} >
          <ScreenText>
            Go to Counter Demo
          </ScreenText>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('Color')} >
          <ScreenText>
            Go to Color Demo
          </ScreenText>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('Square')} >
          <ScreenText>
            Go to Square Demo
          </ScreenText>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('Text')} >
          <ScreenText>
            Go to Text Demo
          </ScreenText>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('Box')} >
          <ScreenText>
            Go to Box Demo
          </ScreenText>
        </TouchableOpacity>
      </ParentView>
    </ScreenBackground>
  )
};


export default HomeScreen;
