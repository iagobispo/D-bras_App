import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({

    container:{
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexWrap: 'wrap',
        paddingBottom: 100,
        
    },

    containerImage:{
        width: '95%', 
        height: '11.125rem', 
        //backgroundColor: 'red',
        justifyContent: 'center'
    },

    containerProdutos:{
      // backgroundColor:'yellow',
        //maxWidth: '50%',
        width: '50%',
        alignItems: 'center',
        marginBottom: 15,
        // backgroundColor: 'yellow',
        //borderWidth: 1
    },

    imageProduto:{
        height: '95%',
        resizeMode: 'cover',
        borderRadius: 5
        
    },

    containerButtonsProdutos:{
        //backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        maxWidth: 400,
       
    },

    containerText:{
        width: '95%',
        //backgroundColor: 'red'
    },

    nameText:{
        fontSize: '$p', 
        color: '$dark',
        paddingTop: '0.188rem'
    },

    descriptionText:{
        fontSize: '$p', 
        color: '$silver' 
    },

    priceText:{
        fontSize: '$span',
        fontWeight: 'bold',
        paddingTop: '0.3rem',
        color: '$dark'
    },

    containerCompra:{
        borderRadius: 15,
        backgroundColor: 'black',
        width: 65,
        height: 25,
        alignItems: 'center',
        justifyContent: 'center'
        
    },

    iconCarPlus:{
        fontSize: 20,
        paddingTop: '0.3rem',
        color: '$dark'
    }

    

})

export default styles;