
import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: '100%',
    },
    logo: {
        width: '60%',
        resizeMode: 'contain'
    },
    text: {
        color: 'white',
        fontFamily: 'Montserrat-Regular'
    }
  });