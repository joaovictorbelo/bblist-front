
import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingBottom: 30,
        backgroundColor: '#fefefe'
    },
    logo: {
        height: '9%',
        resizeMode: 'contain',
        marginTop: 50
    },
    loginForm:{
        width: '90%',
        height: 420,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: '#07152A',
        fontFamily: 'Montserrat',
        fontSize: 20,
        textAlign: 'center',
        marginVertical: 30,
    },
    links: {
        marginHorizontal: 0,
        fontFamily: 'Montserrat',
        color: "#407BDC",
    }
  });