
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomePage from './pages/welcomePage'
import LoginPage from './pages/loginPage'

const Stack = createNativeStackNavigator();

export default function Router() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={WelcomePage} />
        <Stack.Screen name="Login" component={LoginPage} />
      </Stack.Navigator>
    )
}