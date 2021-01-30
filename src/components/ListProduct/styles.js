import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'yellow',
    },
    containerProduct:{
        height: 100,
        margin: 10,
        //backgroundColor: 'yellow',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between'   
    },

    containerButtons:{

    },

    containerText:{
        flex: 2,
        justifyContent: 'space-between',
        height: 100,
        paddingVertical: 10,
        paddingLeft: 15
    },

    textTitle:{
        fontWeight:'bold',
        fontSize: 18
    },
    textPrice:{
        fontWeight: 'bold',
        fontSize: 15
    },

    buttonEdit:{
        paddingRight: 15,
        backgroundColor: 'black',
        height: 98,
        borderTopRightRadius:8,
        borderBottomRightRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        width: 45,
        paddingLeft: 10
    },

    containerImage:{
        height: '100%',
        width: 100
    },

    image:{
        height: '100%',
        resizeMode: 'contain',
        borderBottomLeftRadius: 8,
        borderTopLeftRadius: 8
    }
})

export default styles;