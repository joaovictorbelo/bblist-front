import * as React from 'react';
import { BottomNavigation, Text, Icon } from 'react-native-paper';
import { SvgXml } from 'react-native-svg';

import Home from '../../../assets/icons/home-outline.js';
import Notifications from '../../../assets/icons/bell-outline.js';
import Orders from '../../../assets/icons/bookmark-outline.js';
import Help from '../../../assets/icons/message-circle-outline.js';

import OffersPage from '../OffersPage';

const MusicRoute = () => <Text>Music</Text>;
const AlbumsRoute = () => <Text>Albums</Text>;

const MyComponent = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'music', title: 'Favorites'},
    { key: 'albums', title: 'Albums'},
    { key: 'offers', title: 'Ofertas'},
  ]);

  const renderScene = BottomNavigation.SceneMap({
    music: MusicRoute,
    albums: AlbumsRoute,
    offers: OffersPage,
  });

  const icons = (props) => {
    return (
      <SvgXml xml={xml} width="100%" height="100%" fill="#407BDC"/>
    )
  }

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      renderIcon={icons}
    />
  );
};

export default MyComponent;