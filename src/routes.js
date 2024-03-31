
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomePage from './pages/welcomePage'
import DetailsPage from './pages/detailsPage'

const Stack = createNativeStackNavigator();

export default function Router() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={WelcomePage} />
        <Stack.Screen name="Details" component={DetailsPage} />
      </Stack.Navigator>
    )
}