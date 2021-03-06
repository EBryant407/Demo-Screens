import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import ComponentsScreen from './src/screens/ComponentsScreen/index';
import ListScreen from './src/screens/ListScreen/index';
import ImageScreen from './src/screens/ImageScreen/index';
import CounterScreen from './src/screens/CounterScreen/index';
import ColorScreen from './src/screens/ColorScreen/index';
import SquareScreen from './src/screens/SquareScreen/index';
import TextScreen from './src/screens/TextScreen/index';
import BoxScreen from './src/screens/BoxScreen/index';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListScreen,
    Image: ImageScreen,
    Counter: CounterScreen,
    Color: ColorScreen,
    Square: SquareScreen,
    Text: TextScreen,
    Box: BoxScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App',
    },
  }
);

export default createAppContainer(navigator);
