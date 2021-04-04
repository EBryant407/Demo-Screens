import { Dimensions } from 'react-native';
import styled from 'styled-components';

const {width} = Dimensions.get('window');

export const ButtonText = styled.Text`
    color: red;
    font-size: 30px;
`;

export const BoxView = styled.View`
    height: ${width * 0.2}px;
    width: ${width * 0.2}px;
    margin: 5px;
`;

export const ButtonView = styled.View`
    align-items: center;
    justify-content: center;
    margin-vertical: 20px;
    height: 40px;
    width: 400px;
`;

export const BackgroundView = styled.View`
    background-color: black;
`;