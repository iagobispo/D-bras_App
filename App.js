import { StatusBar } from 'react-native';
import React from 'react';
import { Provider } from 'react-redux';

import store from './src/store';


import Paginas from './src/pages/index';


export default function App() {
  return (
    
    <Provider store={store}>
      <Paginas/>
      <StatusBar translucent backgroundColor='black' />
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

