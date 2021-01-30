import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    containerForm: {
        flex:1,
        //backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
       
    },
    input: {
        height: 50,
        backgroundColor: '#fff',
        width: '90%',
        borderRadius: 8,
        paddingLeft: 15,
        marginTop: 15
    },
    logo:{
        height:150,
        width: 150,
        marginBottom: 50
    },
    buttonForm:{
        height: 50,
        width: '90%',
        borderRadius: 8,
        marginTop: 15,
        backgroundColor: '#32CD32',
        alignItems: 'center',
        justifyContent: 'center',
    },

    buttonText:{
        color: '#fff',
        fontSize:20
    },

    buttonTextShow:{
        color: 'blue',
        fontSize:20
    },
    containerButtonShow:{
        marginTop: 25,
    }
})

export default styles;