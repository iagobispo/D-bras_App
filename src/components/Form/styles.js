//import {StyleSheet} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

//const styles = StyleSheet.create({
const styles = EStyleSheet.create({
    containerForm: {
        flex: 1,
        paddingHorizontal: '0.813rem',
        //backgroundColor: 'red',
        alignItems: 'center',
        //justifyContent: 'center',

    },
    input: {
        height: '3.125rem',
        backgroundColor: '$inputSilver',
        width: '100%',
        borderRadius: 5,
        paddingLeft: '0.938rem',
        marginTop: '0.625rem',
        borderWidth: 1,
        borderColor: '$silver',
        fontSize: '$span',



    },
    logo: {
        height: '4.5rem',
        width: '4.5rem',
        marginBottom: '3.875rem',
        marginTop: '3rem'

    },
    buttonForm: {
        height: '3.125rem',
        //width: '90%',
        width: '100%',

        borderRadius: 5,
        marginTop: '1.5rem',
        backgroundColor: '$buttonDark90',
        alignItems: 'center',
        justifyContent: 'center',

    },

    buttonText: {
        color: '#fff',
        fontSize: '$span'
    },

    buttonTextShow: {
        color: '$dark',
        fontSize: '$span'
    },
    containerButtonShow: {
        height: '3.125rem',
        width: '100%',
        borderRadius: 5,
        marginTop: '0.875rem',
        backgroundColor: '$buttonWhite90',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '$silver'

    },

    textLogin: {
        color: '$dark',
        fontSize: '$span',
        marginBottom: '0.875rem'
    },

    textPolitic: {
        color: '$dark',
        fontSize: '$p',
        marginTop: '1.5rem'
    },

    textPolitic2: {
        color: '$dark',
        fontSize: '$p',
        //marginTop: '1.5rem'
    },

    textPoliticSerif: {
        color: '$dark',
        fontSize: '$p',
        textDecorationLine: 'underline'
    },

    textLogin2: {
        textAlign: 'center',
        marginTop: '0.875rem',
        fontSize: '$span',
        color: '$dark'
    }
})

export default styles;