import styled from 'styled-components';



export const ParentView = styled.View`
    align-items: center;
    background-color: black;
`;

export const Image = styled.Image.attrs(() => ({ resizeMode: 'contain' }))`
    width: 400px;
    height: 230px;
    margin-top: 2px;
`;

export const TitleText = styled.Text`
    font-size: 20px;
    font-weight: bold;
    font-style: italic;
    color: white;
`;