import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({


    containerHeader: {
        width: '100%',
        paddingTop: '1.25rem',
        backgroundColor: '$white',
        alignItems: 'center',
        paddingHorizontal: '0.813rem',
        borderBottomWidth: 0.5,
        borderBottomColor: '$dark'

    },

    containerButtons: {
        width: '100%',
        backgroundColor: '$white',
        flexDirection: 'row',
        //marginHorizontal: '15%',
        borderRadius: 15,
        marginBottom: '0.5rem',
        alignItems: 'center',

    },

    containerCategories: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'black',
        height: '1.875rem',
        paddingHorizontal: '0.938rem'
    },

    button: {
        justifyContent: 'center',
        backgroundColor: '$inputSilver',
        borderBottomLeftRadius: 15,
        borderTopLeftRadius: 15,
        height: '1.563rem'
    },

    textInput: {
        backgroundColor: '$inputSilver',
        width: '86%',
        height: '1.563rem',
        paddingLeft: '1.25rem',
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15,
        fontSize: '0.75rem',
        padding: 0,
    },
    //size={24} color="#fff"
    iconCar: {
        fontSize: '1.5rem',
        color: '$dark'
    },
    iconSearch: {
        fontSize: '1rem',
        color: '$dark',
        paddingLeft: '0.375rem'
    },

    textEndereco: {
        fontSize: '$small',
        paddingLeft: '0.625rem',
        color: '$dark'
    },

    iconPoint: {
        fontSize: '0.75rem',
        color: '$dark'
    },

    iconArrow: {
        fontSize: '0.75rem',
        color: '$dark',
        paddingLeft: '0.625rem'
    },
    containerEndereco: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        width: '100%',
        paddingBottom: '0.125rem'
    }

})

export default styles;