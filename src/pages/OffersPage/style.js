
import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#fefefe',
        paddingTop: 30,
    },
    title: {
        fontFamily: 'Montserrat-bold',
        fontSize: 32,
        color: '#07152A',
        marginVertical: 10,
    },
    searchArea: {
        width: '90%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginBottom: 15
    },
    search: {
        backgroundColor: 'rgba(165, 183, 200, 0.2)',
        borderRadius: 16,
        height: 50,
        width: '80%'
    },
    chips: {
        width: '100%',
        marginTop: 10,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start'
    },
    modal: {
        backgroundColor: 'white',
        width: '80%',
        padding: 20,
        marginHorizontal: '10%'
    }
  });