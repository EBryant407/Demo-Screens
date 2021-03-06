import styled from 'styled-components';

    

export const ParentView = styled.View`
  border-width: 3px;
  border-color: black;
  flex-direction: row;
  justify-content: space-between;
  flex: 1;
`;

export const RedBox = styled.View`
    height: 50px;
    width: 50px;
    background-color: red;
`;

export const GreenBox = styled.View`
    height: 50px;
    width: 50px;
    background-color: green;
    align-self: center;
    border-width: 2px;
    border-color: orange;
`;

export const PurpleBox = styled.View`
    height: 50px;
    width: 50px;
    background-color: purple;
`;

export const ScreenBackground = styled.ImageBackground.attrs(() => ({ resizeMode: 'cover' }))`
    flex: 1;
`;