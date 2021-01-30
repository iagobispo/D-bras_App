import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({


    containerHeader:{
        paddingTop: 40,
        backgroundColor: 'black',
        alignItems: 'center',
        

    },

    containerButtons:{
       backgroundColor: 'black',
       flexDirection: 'row',
       marginHorizontal: '15%',
       borderRadius: 15,
       marginBottom: 20,
       alignItems: 'center'
    },

    containerCategories:{
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'black',
        height: 30,
        paddingHorizontal: 15
    },

    button: {
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderBottomLeftRadius: 15,
        borderTopLeftRadius: 15,
        height: 30 
    },
    
    textInput:{
        backgroundColor: '#fff',
        width: '100%',
        height: 30,
        paddingLeft:20,
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15
    }

})

export default styles;