import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
    container:{
        backgroundColor: 'yellow',
    },
    containerProduct:{
        height: 70,
        marginBottom: 10,
        
        //backgroundColor: 'yellow',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        flexDirection: 'row', 
        alignItems: 'center',
        justifyContent:'space-between', 
    },

    containerButtons:{

    },

    containerText:{
        flex: 2,
        justifyContent: 'space-between',
        height: 70,
        paddingLeft: 15
    },

    textTitle:{
        fontWeight:'bold',
        fontSize: '$pmedio',
        color: '$dark'
    },
    textDescription:{
        fontWeight:'bold',
        fontSize: '$p',
        color: '$silver'
    },
    textPrice:{
        fontWeight: 'bold',
        fontSize: '$pmedio',
        fontWeight: 'bold',
        color: '$dark'
    },

    buttonEdit:{
        paddingRight: 15,
        height: 70,
        borderTopRightRadius:5,
        borderBottomRightRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        width: 45,
        paddingLeft: 10
    },

    containerImage:{
        height: '100%',
        width: 70
    },

    image:{
        height: '100%',
        resizeMode: 'contain',
        borderBottomLeftRadius: 5,
        borderTopLeftRadius: 5
    }
})

export default styles;