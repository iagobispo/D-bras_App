import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        //backgroundColor: 'red'
    },

    containerMain:{
        flex:1 ,  
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

    containerInput:{
        marginTop: '5%',
        alignItems: 'center',
        flexDirection:'row',
        justifyContent: 'center',
        //backgroundColor: 'red',
        
    },

    buttonSearch: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        height: 30,
        borderBottomRightRadius: 8,
        borderTopRightRadius: 8,
        width: 30
    }, 

    main:{
        flex: 1,
        //backgroundColor: 'red'
    }

})

export default styles;