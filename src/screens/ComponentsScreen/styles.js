import { Dimensions } from 'react-native';
import styled from 'styled-components';

const {width} = Dimensions.get('window');

export const TextView = styled.View`
    align-items: center;
    margin-top: 100px;
    justify-content: center;
`;

export const TitleText = styled.Text`
    font-size: 22px;
    font-weight: bold;
    font-style: italic;
    margin-bottom: 20px;
`;

export const NameText = styled.Text`
    font-size: 30px;
`;

export const PictureView = styled.View`

`;

export const ImageView = styled.Image.attrs(() => ({ resizeMode: 'contain' }))`
    height: 300px;
    width: 300px;
    align-self: center;
    margin-top: 100px;
    border-radius: 150px;
`;