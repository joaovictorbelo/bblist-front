
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomePage from './pages/welcomePage'
import LoginPage from './pages/loginPage'
import SigninPage from './pages/SigninPage'
import LoggedPage from './pages/UserArea'

const Stack = createNativeStackNavigator();

export default function Router() {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Home" component={WelcomePage} />
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Signin" component={SigninPage} />
        <Stack.Screen name="UserArea" component={LoggedPage} />
      </Stack.Navigator>
    )
}