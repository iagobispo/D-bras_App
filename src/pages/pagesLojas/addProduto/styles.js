import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        //backgroundColor: 'red',
        alignItems: 'center',
        paddingHorizontal: 10,
        width: '100%'
    },

    footer:{
        backgroundColor: 'black',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        height: 50
    },

    buttonfooter:{
        alignItems: 'center'
    },
    textButton:{
        fontSize: 10,
        color: '#fff',
        paddingTop: 5
    },

    containerOptions:{
        marginTop: 50,
        height: 70,
        width: '80%',
        backgroundColor: 'black',
        borderTopLeftRadius:8,
        borderTopRightRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },

    textTitleOptions:{
        color: '#fff',
        fontSize: 25
    }


});

export default styles;
