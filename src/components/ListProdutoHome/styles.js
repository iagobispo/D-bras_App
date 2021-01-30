import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({

    container:{
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexWrap: 'wrap',
        paddingBottom: 100,
        
    },

    containerProdutos:{
       //backgroundColor:'yellow',
        //maxWidth: '50%',
        width: '50%',
        alignItems: 'center',
        marginTop: 15,
        //backgroundColor: 'yellow'
    },

    imageProduto:{
        height: 150,
        resizeMode: 'contain',
        marginBottom: 10,
        borderRadius: 20
        
    },

    containerButtonsProdutos:{
        //backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        maxWidth: 400,
        paddingHorizontal:20,
        paddingTop: 10
    },

    nameText:{
        fontSize: 20,   
    },

    priceText:{
        fontWeight: '700'
    },


    buttonTextCompar:{
        backgroundColor: 'black',
       // padding:8,
        color:'#fff'
        
    },

    containerCompra:{
        borderRadius: 15,
        backgroundColor: 'black',
        width: 65,
        height: 25,
        alignItems: 'center',
        justifyContent: 'center'
        
    },

    imageCarPlus:{
        height: 30,
        width: 30
    }

    

})

export default styles;