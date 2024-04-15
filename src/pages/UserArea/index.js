import * as React from 'react';
import { BottomNavigation, Text, Icon } from 'react-native-paper';
import { SvgXml } from 'react-native-svg';

import home from '../../../assets/icons/home-outline.js';
import notifications from '../../../assets/icons/bell-outline.js';
import orders from '../../../assets/icons/bookmark-outline.js';
import help from '../../../assets/icons/message-circle-outline.js';

import OffersPage from '../OffersPage/index.js';
import { View } from 'react-native';

const NotificationsRoute = () => <Text>Notificações</Text>;
const OrdersRoute = () => <Text>Meus Pedidos</Text>;
const HelpRoute = () => <Text>Suporte</Text>;

const iconList = {
  home: home,
  notifications: notifications,
  orders: orders,
  help: help
}

const MyComponent = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: 'Ofertas'},
    { key: 'notifications', title: 'Notificações'},
    { key: 'orders', title: 'Pedidos'},
    { key: 'help', title: 'Suporte'},
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: OffersPage,
    notifications: NotificationsRoute,
    orders: OrdersRoute,
    help: HelpRoute,
  });

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
        renderLabel={() => (
          <View style={{marginBottom: '-20'}}/>
        )}
        barStyle={{
          backgroundColor: 'transparent',
          width: '90%',
          zIndex: 2,
          height: 60,
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
          height: 60,
          bottom: 20
        }}
      >
        <View style={{
          backgroundColor: 'green',
          zIndex: 1,
          position: 'relative',
          width: '90%',
          height: 60,
          marginLeft: 'auto',
          marginRight: 'auto',
          borderRadius: 20,
          backgroundColor: 'rgba(165, 183, 223, 0.2)',
        }}/>
      </View>
    </View>
  );
};

export default MyComponent;