import {useFonts} from 'expo-font';

import Main from './components/Main';



export default function App() {

  //useFonts to be able to use the desired font
  const [fontsLoaded] = useFonts({
    Ultra: require('./assets/fonts/Satisfy-Regular.ttf'),
    Date: require('./assets/fonts/Rancho-Regular.ttf')
  });

  return (

    <Main />
    
     )
 }
