
import { StyleSheet, Dimensions} from 'react-native';

const WIDTH = Dimensions.get('window').width

const styles = StyleSheet.create({
    container:{
        flex: 1,
        //backgroundColor: 'red'
    },

    containerMain:{
        flex:1 ,  
        backgroundColor: '#fff',
        marginHorizontal: 10,
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
        height: 30,
        borderBottomRightRadius: 5,
        borderTopRightRadius: 5,
        width: 30,
        backgroundColor: '#c4c4c460'
    }, 

    main:{
        flex: 1,
       
        //backgroundColor: 'red'
    }

})

export default styles;