import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
    container: {
       flex: 1,  
    },
    flatList: {
        marginHorizontal: 13,
    

    },
    containerCategory:{
        marginRight: '1.063rem', 
        height: '4.063rem', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        marginTop: '0.75rem',
        marginBottom: '2rem',
        
       
    },
    styleImage:{
        width: '3.125rem', 
        height: '3.125rem', 
        borderRadius: '3.125rem', 
        borderWidth: '0.031rem', 
        borderColor: '#424242'
    },
    textTitle:{
        fontSize: '0.563rem',
        color: '$dark',
        //fontFamily: 'ubunto'
    },
    category: {
        marginLeft: '0.813rem',
    }
   
})

export default styles;

