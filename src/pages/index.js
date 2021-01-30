import React from 'react';
import { Text,TouchableOpacity } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import  AntDesign  from 'react-native-vector-icons/AntDesign'
import  MaterialIcons  from 'react-native-vector-icons/MaterialIcons';
MaterialIcons.loadFont();
import  Ionicons  from 'react-native-vector-icons/Ionicons';



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

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Favorite() {
	const cartLength = useSelector((state) => state.cart.length);
	return (
		<Text>{cartLength}</Text>
	)
}

// function PrivateRouter({component:Component, ...rest}) {
// 	<Route {...rest} render={props => (
// 		false ? (<Component {...props}/>) : (navigation.navigate('Login'))
// 	)}/>
// }
const tabHomeNavigation = () => {
	const { isAuthenticated } = useSelector(state => state.auth)

	return (
		<Tab.Navigator
			tabBarOptions={{
				style: {
					paddingVertical: 3,
					backgroundColor: 'black'
				},
				inactiveTintColor: '#bbb',
				activeTintColor: '#fff',
				labelStyle: {
					fontSize: 10
				}
			}}
		>

			<Tab.Screen
				options={{
					tabBarIcon: ({ color }) => <AntDesign name="home" size={20} color={color} />
				}}
				name='Home'
				component={Home}
			/>

			<Tab.Screen
				options={{
					tabBarIcon: ({ color }) =>
						<>
							{/* <Amount left='60%' top='10%' length={<Favorite/>} /> */}
							<Amount left='60%' top='10%' length='0' />
							<MaterialIcons name="favorite-border" size={20} color={color} />
						</>
				}}
				name="Favoritos"
				component={Login}
			/>

			{!isAuthenticated && (
				<Tab.Screen
					options={{
						tabBarIcon: ({ color }) => <MaterialIcons name="account-circle" size={20} color={color} />
					}}
					name="Login"
					component={Login}
				/>
			)}

			<Tab.Screen
				options={{
					tabBarIcon: ({ color }) => <Ionicons name="options-outline" size={20} color={color} />
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
				<Stack.Screen name="SingUp" component={SingUp} />
				<Stack.Screen name="Produto" component={Produto} />
				<Stack.Screen name="AddProduto" component={AddProduto} />
				<Stack.Screen name="Detail" component={Detail} />
				<Stack.Screen name="RegisterLoja" component={RegisterLoja} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default App;


//<Text style={{ fontSize: 23, color: '#fff', fontWeight: 'bold' }}>Shoppging Brás</Text>
