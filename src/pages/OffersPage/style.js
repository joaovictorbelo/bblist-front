
import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
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
        resizeMode: 'contain',
        marginBottom: 50
    },
    text: {
        position: 'absolute',
        color: 'white',
        fontFamily: 'Montserrat',
        fontSize: 22,
        bottom: 35
    }
  });