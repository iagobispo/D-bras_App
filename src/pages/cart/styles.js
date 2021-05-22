import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
    container:{
        flex: 1,
        //backgroundColor: '#fff', 
    
    },
    textTotal:{
        fontSize: '$span',
        marginTop: '1.5rem',
        marginBottom: '1.5rem',
        marginLeft: '0.938rem',
        color: '$dark'
    },
    containerProduto:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderColor: '$silver',
        paddingBottom: 8,
        paddingTop: 8,
        marginHorizontal: '0.938rem'

    },

    image:{
        width: 55,
        height: 55, 
        borderRadius: 5
    },

    textTitle:{
        fontSize: '$p'
    },
    textDescription:{
        fontSize: '$small',
        color: '$silver'
    },
    

    containerButtom:{
        flexDirection: 'row',
        //justifyContent: 'flex-end',
        //backgroundColor: 'red',
        position: 'absolute',
        bottom: 8,
        right: '27%'
        
        
    },

    buttomMinus:{
        width: 31,
        height: 23,
        alignItems: 'center',
        justifyContent: 'center',
        borderLeftWidth: 1,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderRightWidth: 1,
        borderColor: '$silver',
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 10

    },
    iconMinus:{
        fontSize: 20,
        color: 'red',
       
        
    },

    iconLixo:{
        fontSize: 20,
        color: '$dark',
    },

    buttomPlus:{
        width: 31,
        height: 23,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderRightWidth: 1,
        borderColor: '$silver',
        borderBottomRightRadius: 10,
        borderTopRightRadius: 10
        
    },
    iconPlus:{
        fontSize: 20,
        color: '$dark',
       
    },

    flatList: {
        
    },

    containarFooter:{
        width: '100%', 
        height: '4.25rem', 
        borderTopLeftRadius: '0.625rem', 
        backgroundColor: '#fff', 
        borderTopRightRadius: '0.625rem', 
        shadowColor: '#000000', 
        shadowOpacity: 0.8, 
        shadowOffset: { height: '0.063rem', width: '0.063rem' }, 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        paddingHorizontal: '0.813rem'
    },

    textTotalValor: {
        fontSize: '$p',
        color: '$dark'
    },
    textValor: {
        fontSize: '$span',
        color: '$dark',
        fontWeight: 'bold'
    },
    buttonCompra:{
        width: '9.938rem', 
        height: '2.25rem', 
        backgroundColor:'$green', 
        alignItems: 'center', 
        justifyContent: 'center', 
        borderRadius: '0.313rem'
    },
    textButton:{
        fontSize: '$p',
        color: '$dark'
    },

   //style modal

   containerModal:{
        flex: 1, 
        marginHorizontal: '0.813rem'
   },

   textTitleModal:{
    marginTop: '1.5rem',
    color: '$dark',
    fontSize: '$span',
    fontWeight: 'bold'
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
        paddingBottom: '0.125rem', 
        marginTop: '0.625rem'
    },
    textSubTitle:{
     marginTop: '3rem',
     color: '$dark',
     fontSize: '$pmedio',
     fontWeight: 'bold'
    },
    containerButtomModal: {
        flexDirection: 'row', 
        width: '100%', 
        alignItems: 'center', 
        justifyContent: 'center', 
        marginTop: '1.5rem'
    },
    buttomSalvo:{
        width: '50%', 
        height: '2.188rem', 
        backgroundColor: '#41e6be', 
        alignItems: 'center', 
        justifyContent: 'center', 
        borderRadius: '1.25rem'
    },
    textButtomSalvo:{
        fontSize: '$pmedio',
        color: '$dark'
    },
    buttomNovo:{
        width: '50%', 
        height: '2.188rem', 
        backgroundColor: '#c8c8c8c8', 
        alignItems: 'center', 
        justifyContent: 'center', 
        borderRadius: '1.25rem',
        borderWidth: 1,
        borderColor: '$buttonDark90'
    },
    textButtomNovo:{
        fontSize: '$pmedio',
        color: '$dark',
        backgroundColor: '$inputSilver',
    },

    containerCard:{
        flexDirection: 'row', 
        alignItems: 'center', 
        marginTop: '1.5rem'
    },
    borderPicker:{
        width: '1.063rem', 
        height: '1.063rem', 
        borderWidth: '0.063rem', 
        borderRadius: '1.875rem', 
        alignItems: 'center', 
        justifyContent: 'center', 
        borderColor: '#41e6be'
    },
    picker:{
        width: '0.563rem', 
        height: '0.563rem', 
        backgroundColor: '$green', 
        borderRadius: '0.625rem'
    },
    card:{
        width: '3.75rem', 
        height: '2.188rem', 
        backgroundColor: '$green', 
        borderRadius: '0.313rem', 
        marginLeft: '1.5rem'
    },
    containerTextCard:{
        marginLeft: '0.625rem'
    },
    cardTitle:{
        fontSize: '$pmedio',
        color: '$dark'

    },
    cardInfo:{
        fontSize: '$small',
        color: '$silver'
    },
    titlesPedido:{
        marginTop: '1.5rem',
        color: '$dark',
        fontWeight: 'bold'
    },

    containerPedidos:{
        justifyContent: 'center', 
        width: '100%', 
        alignItems: 'center', 
        flexDirection: 'row', 
        marginTop: '1.25rem'
    },
    textePedidoInf:{
        fontSize: '$p'
    },
    containerTextPedidos:{
        alignItems: 'flex-end', 
        justifyContent: 'space-around', 
        height: '4.5rem'
    },
    containerTextPedidosValor:{
        alignItems: 'flex-start', 
        height: 72, 
        justifyContent: 'space-around' 
    },
    lineInf:{
        width: '10.125rem', 
        height: '0.063rem', 
        backgroundColor: '$silver'
    },
    textTotalPedido:{
        marginTop: '1.25rem', 
        textAlign: 'center',
        fontSize: '$pmedio',
        fontWeight: 'bold',
        color: '$dark'
    },
    buttonPagar:{
        marginTop: '1.25rem', 
        width: '100%', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '3.125rem', 
        backgroundColor: '$green', 
        borderRadius: '0.313rem',
    },
    textButtonPagar:{
        color: '$dark',
        fontSize: '$pmedio'
    }
    


});

export default styles;

//justifyContent: 'space-between',
//paddingHorizontal: 10