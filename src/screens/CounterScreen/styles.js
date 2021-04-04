import styled from 'styled-components';

export const CountText = styled.Text`
    font-size: 46px;
    margin-top: 40px;
    color: white;
`;

export const TextView = styled.View`
    width: 400px;
`;

export const ParentView = styled.View`
    align-items: center;
    margin: 50px;
`;

export const TitleText = styled.Text`
    font-size: 28px;
    margin-bottom: 30px;
    color: red;
    margin-top: 150px;
    font-weight: bold;
`;

export const ScreenBackground = styled.ImageBackground.attrs(() => ({ resizeMode: 'stretch' }))`
    flex: 1;
`;