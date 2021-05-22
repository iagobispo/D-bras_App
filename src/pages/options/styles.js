import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        paddingHorizontal: 15,
        
        //paddingTop: 80
        
    },

    optionText:{
        fontSize: '$span',
        paddingLeft: 15,
        color: '$dark'
    }, 
 
    containerBtn:{
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 10,
        paddingTop: 10,
        borderBottomWidth: 0.5,
        borderColor: '$silver'
        
    },
    icon:{
        fontSize: '1.125rem',
        color: '$dark'
    }
   
})

export default styles;