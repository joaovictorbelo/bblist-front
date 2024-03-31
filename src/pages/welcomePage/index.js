import { Text, View, Button, Image } from 'react-native';

export default function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Image source={require('../../../assets/logoType.png')} />
        <Text>BBlist</Text>
        
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Details')}
        />
      </View>
    );
  }