import { StatusBar } from 'react-native';
import React from 'react';
import { Provider } from 'react-redux';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import EStyleSheet from 'react-native-extended-stylesheet';

import store from './src/store';


import Paginas from './src/pages/index';

export default function App() {
  EStyleSheet.build({
    $black: '#000000',
    $dark: '#424242',
    $buttonDark90: '#42424299',
    $silver: '#c8c8c8',
    $inputSilver: '#c8c8c840',
    $white: '#ffffff',
    $buttonWhite90: '#ffffff90',
    $red: '#ff0505',
    $green: '#41e6be',

    $small: '0.563rem',
    $p: '0.75rem',
    $pmedio: '0.875rem',
    $span: '1rem',
    $H3: '1.333rem',
    $h2: '1.776rem',
    $h1: '2.368rem'
})
  
  return (
    
    <Provider store={store}>
      <Paginas/>
      <StatusBar translucent backgroundColor='#fff' hidden />
    </Provider>
    
  );
}





//<StatusBar style='light' />
//import { StatusBar } from 'expo-status-bar';




// import React from 'react';
// import { Provider } from 'react-redux';

// import store from './src/store';

// import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';

// import Home from './src/pages/home';
// import Login from './src/pages/login';
// import Options from './src/pages/options';
// import SingUp from './src/pages/singUp';
// import Produto from './src/pages/pagesLojas/produtos'; //pagina para listar produtos 

// const Stack = createStackNavigator();

// export default function App() {
//   return (
//     <Provider store={store}>
    
//     <NavigationContainer>
//       <Stack.Navigator screenOptions={{headerShown: false}}>
//         <Stack.Screen name='Home' component={Home}/>
//         <Stack.Screen name='Login' component={Login}/>
//         <Stack.Screen name='Options' component={Options}/>
//         <Stack.Screen name='SingUp' component={SingUp} />
//         <Stack.Screen name='Produto' component={Produto} />
//       </Stack.Navigator>
//     </NavigationContainer>

//     </Provider>
    
//   );
// }

