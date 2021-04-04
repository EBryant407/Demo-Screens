import React from 'react';
import {
    ParentView,
    RedBox,
    GreenBox,
    PurpleBox,
    ScreenBackground,
}
    from './styles';


const BoxScreen = () => {
    return (
        <ScreenBackground
            source={require('../../../assets/box.jpg')}
        >
            <ParentView>
                <RedBox />

                <GreenBox />

                <PurpleBox />

            </ParentView>
        </ScreenBackground>
    );
};



export default BoxScreen;