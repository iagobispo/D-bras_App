
import EStyleSheet from 'react-native-extended-stylesheet';


const styles = EStyleSheet.create({
  
  
    container: {
      alignItems: 'center',
    },
  
    title: {
      fontSize: '$span',
      color: '$dark',
      paddingVertical: '1.438rem'
  
    },
    containerItem:{
        flexDirection: 'row', 
        width: '100%', 
        justifyContent: 'space-between', 
        borderWidth: '0.063rem', 
        borderColor: '$silver', 
        marginBottom: '0.625rem', 
        borderRadius: '0.313rem'
    },
    imageItem:{
        width: '4.375rem', 
        height: '4.375rem',
        borderBottomLeftRadius: '0.313rem', 
        borderTopLeftRadius: '0.313rem'
    },
    containerText:{
        width: '50%', 
        position: 'absolute', left: '5rem',
    },
    titleItem:{
        fontSize: '$p',
        color: '$dark',
        marginTop: '0.25rem',
    },
    descriptionText:{
        fontSize: '$small',
        color: '$silver'
    },
    priceText:{
        fontSize: '$p',
        fontWeight: 'bold',
        marginTop: '0.25rem',
        color: '$dark'
    },
    containerBtn:{
        alignItems: 'flex-end', 
        justifyContent: 'space-around',
        paddingRight: 10
    },
    iconBtn:{
        color: '$dark',
        fontSize: 20
    }

  
  });

  export default styles;