
import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
    logo: {
        width: 150,
        height: 40,
        resizeMode: 'contain',
    },
    header: {
        position: 'fixed',
        top: 20,
        width: '90%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    locWrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    locText: {
        color: '#07152A',
        fontFamily: 'Montserrat',
        fontSize: 15,
        textAlign: 'left',
    },
  });