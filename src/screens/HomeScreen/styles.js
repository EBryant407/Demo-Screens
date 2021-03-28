import styled from 'styled-components';

export const ParentView = styled.View`
    align-items: center;
`;

export const TitleText = styled.Text`
    font-size: 30px;
    margin-bottom: 70px;
    margin-top: 20px;
    color: white;
`;

export const ScreenText = styled.Text`
    font-size: 15px;
    margin-bottom: 20px;
    font-weight: bold;
    color: white;
`;

export const ScreenBackground = styled.ImageBackground.attrs(() => ({ resizeMode: 'stretch' }))`
    flex: 1;
`;