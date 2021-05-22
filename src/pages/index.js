import React from 'react';
import { Text,TouchableOpacity } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import EStyleSheet from 'react-native-extended-stylesheet';

import  AntDesign  from 'react-native-vector-icons/AntDesign'
import  MaterialIcons  from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import  Ionicons  from 'react-native-vector-icons/Ionicons';

MaterialIcons.loadFont();



import { useSelector } from 'react-redux';
import Amount from '../components/Amount'



import Home from '../pages/home';
import Login from '../pages/login';
import Options from '../pages/options';
import SingUp from '../pages/singUp';
import AddProduto from '../pages/pagesLojas/addProduto';
import Detail from '../pages/detailsProduct';
import Produto from '../pages/pagesLojas/produtos'; //pagina para listar produtos 
import RegisterLoja from '../pages/registerLojas';
import Favorites from '../pages/favorites';
import EditProduto from '../pages/pagesLojas/editProduto';
import Compras from '../pages/compras';
import Cart from '../pages/cart';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// function Favorite() {
	
// 	return (
// 		<Text>{cartLength}</Text>
// 	)
// }

// function PrivateRouter({component:Component, ...rest}) {
// 	<Route {...rest} render={props => (
// 		false ? (<Component {...props}/>) : (navigation.navigate('Login'))
// 	)}/>
// }
const tabHomeNavigation = () => {
	const { isAuthenticated } = useSelector(state => state.auth)
	const favoriteLength = useSelector(state => state.favoriteHeart.length);

	return (
		<Tab.Navigator
			tabBarOptions={{
				style: {
					paddingVertical: 4,
					backgroundColor: '#fff',
					borderTopWidth: 0.5,
					borderTopColor: '#424242',
					 
					height: 51

				},
				inactiveTintColor: '#42424290' ,
				activeTintColor: 'black',
				labelStyle: {
					fontSize: 10,
					paddingBottom: 5
				}
			}}
		>

			<Tab.Screen
				options={{
					tabBarIcon: ({ color }) => <AntDesign name="home" size={20} color='#424242' />
				}}
				name='Home'
				component={Home}
			/>

			<Tab.Screen
				options={{
					tabBarIcon: ({ color }) =>
						<>
							{/* <Amount left='60%' top='10%' length={<Favorite/>} /> */}
							<Amount left='60%' top='10%' length={favoriteLength} />
							<MaterialIcons name="favorite-border" size={20} color='#424242'  />
						</>
				}}
				name="Favoritos"
				component={Favorites}
			/>

			{isAuthenticated && (
				<Tab.Screen
					
					options={{
						tabBarIcon: ({ color }) => <MaterialCommunityIcons name="shopping-outline" size={20} color='#424242' />
					}}
					name="Minhas compras"
					component={Compras}
					
				/>
			)}

			<Tab.Screen
				options={{
					tabBarIcon: ({ color }) => <Ionicons name="options-outline" size={20} color='#424242'  />
				}}
				name="Mais"
				component={Options}
			/>

		</Tab.Navigator>
	)
}

function App() {

	return (

		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{ headerShown: false }}
			>
				<Stack.Screen name="Home" component={tabHomeNavigation} />
				<Stack.Screen name="Login" component={Login} />
				<Stack.Screen name="SingUp" component={SingUp} />
				<Stack.Screen name="Produto" component={Produto} />
				<Stack.Screen name="AddProduto" component={AddProduto} />
				<Stack.Screen name="Detail" component={Detail} />
				<Stack.Screen name="RegisterLoja" component={RegisterLoja} />
				<Stack.Screen name="EditProdut" component={EditProduto} />
				<Stack.Screen name="Cart" component={Cart} />
				
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default App;

const styles = EStyleSheet.create({
	containerFooter: {
		backgroundColor: '$white'
	}
})
