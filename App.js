import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StartScreen from './src/screens/StartScreen';
import SignInScreenOne from './src/screens/SignInScreenOne';
import SignUPScreen from './src/screens/SignUpScreen';
import HomeScreen from './src/screens/HomeScreen';
import MenuScreen from './src/screens/MenuScreen';
import YourOrderScreen from './src/screens/YourOrderScreen';
import FoodDetailScreen from './src/screens/FoodDetailScreen';
import DeliveryAddressScreen from './src/DeliveryAddressScreen';
import OrderSummary from './src/screens/OrderSummeryScreen';
import PaymentScreen from './src/screens/PaymentScreen';

const Stack=createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Start" component={StartScreen}/>
        <Stack.Screen name="SignIn" component={SignInScreenOne} options={{
          title:"Yummy",
          }}/>
        <Stack.Screen name="SignUp"  component={SignUPScreen} options={{
          title:"Yummy"
        }}/>
        <Stack.Screen name="Home"  component={HomeScreen} options={{
          headerShown:false
        }}/>
        <Stack.Screen name="Menu"   component={MenuScreen} options={{
          title:"Menu"
        }}/>
        <Stack.Screen name="YourOrder"  component={YourOrderScreen} options={{
          title:"YourOrder"
        }}/>
        <Stack.Screen name="FoodDetail"   component={FoodDetailScreen} options={{
          title:"FoodDetail"
        }}/>
 
        <Stack.Screen name="DeliveryAddress" component={DeliveryAddressScreen} options={{
          title:"DeliveryAddress"
        }}/>
        <Stack.Screen name="Order Page"   component={OrderSummary} options={{
          title:"Order Page"
        }}/>
        <Stack.Screen name="Payment page"  component={PaymentScreen} options={{
          title:"Payment Page"
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}