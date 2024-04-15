
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomePage from './pages/welcomePage'
import LoginPage from './pages/loginPage'
import SigninPage from './pages/SigninPage'
import OffersPage from './pages/OffersPage'
import TestPage from './pages/TestPage'

const Stack = createNativeStackNavigator();

export default function Router() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={WelcomePage} />
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Signin" component={SigninPage} />
        <Stack.Screen name="Offers" component={TestPage} />
      </Stack.Navigator>
    )
}