import * as React from 'react';
import { View } from 'react-native';
import { BottomNavigation, Text, Icon } from 'react-native-paper';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { SvgXml } from 'react-native-svg';

import home from '../../../assets/icons/home-outline.js';
import notifications from '../../../assets/icons/bell-outline.js';
import orders from '../../../assets/icons/bookmark-outline.js';
import help from '../../../assets/icons/message-circle-outline.js';

import HomePage from '../HomePage/index.js';
import OffersPage from '../OffersPage/index.js';
import OrderPage from '../OrderPage/index.js';
import OfferDetailPage from '../OfferDetailPage/index.js';

const NotificationsRoute = () => <Text>Notificações</Text>;
const OrdersRoute = () => <Text>Meus Pedidos</Text>;
const HelpRoute = () => <Text>Suporte</Text>;

const iconList = {
  home: home,
  notifications: notifications,
  orders: orders,
  help: help
}

const InnerStack = createNativeStackNavigator();
var location
var profPic

AsyncStorage.getItem('location').then(
  (value) => {
    location = JSON.parse(value);
  }
);
AsyncStorage.getItem('profPic').then(
  (value) => {
    profPic = value;
  }
);

const renderScene = BottomNavigation.SceneMap({
  home: () => (
    <InnerStack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <InnerStack.Screen name="Home" component={HomePage} initialParams={{'location':location, 'profPic':profPic}}/>
      <InnerStack.Screen name="Offers" component={OffersPage} initialParams={{'location':location, 'propFilters': []}}/>
      <InnerStack.Screen name="Order" component={OrderPage} initialParams={{'location':location}}/>
      <InnerStack.Screen name="OfferDetail" component={OfferDetailPage} initialParams={{'location':location}}/>
    </InnerStack.Navigator>
  ),
  notifications: NotificationsRoute,
  orders: OrdersRoute,
  help: HelpRoute,
});

const MyComponent = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: 'Home'},
    { key: 'notifications', title: 'Notificações'},
    { key: 'orders', title: 'Pedidos'},
    { key: 'help', title: 'Suporte'},
  ]);

  const icons = (props) => {
    return (
      <SvgXml xml={iconList[props.route.key]} width="100%" height="100%" fill={props.focused ? "#407BDC" : "#595959"}/>
    )
  }

  return (
    <View style={{height: '100%', width: '100%', backgroundColor: '#fefefe'}}>
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
        renderIcon={icons}
        activeColor="#407BDC"
        barStyle={{
          backgroundColor: 'transparent',
          width: '90%',
          zIndex: 2,
          height: 70,
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
        style={{
          backgroundColor: 'transparent',
          paddingBottom: 20,
          zIndex: 2,
        }}
        activeIndicatorStyle={{
          backgroundColor: 'transparent'
        }}
      />
      <View
        style={{
          position: 'absolute',
          zIndex: 1,
          width: '100%',
          height: 70,
          bottom: 15
        }}
      >
        <View style={{
          backgroundColor: 'green',
          zIndex: 1,
          position: 'relative',
          width: '90%',
          height: 70,
          marginLeft: 'auto',
          marginRight: 'auto',
          borderRadius: 20,
          backgroundColor: 'rgba(165, 183, 200, 0.2)',
        }}/>
      </View>
    </View>
  );
};

export default MyComponent;