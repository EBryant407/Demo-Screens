import React from 'react';
import 
    { ParentView, 
    RedBox, 
    GreenBox, 
    PurpleBox } 
    from './styles';


const BoxScreen = () => {
    return <ParentView>
        <RedBox /> 

        <GreenBox />

        <PurpleBox />

    </ParentView>
};



export default BoxScreen;