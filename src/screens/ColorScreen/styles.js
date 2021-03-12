import { Dimensions } from 'react-native';
import styled from 'styled-components';

const {width} = Dimensions.get('window');

export const ButtonText = styled.Text`
    color: black;
    size: 16;
`;

export const BoxView = styled.View`
    height: ${width * 0.2}px;
    width: ${width * 0.2}px;
    border-width: 2;
    border-color: white;
`;