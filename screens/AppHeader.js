import * as React from 'react';
import {Header} from 'react-native-elements';

export const MyHeader = props=> {
    return(
        <Header
        centerComponent={{
            text:props.title,
            style:{color:'black',
            backgroundColor:'white',
            width:300,
            alignSelf:'center',
            alignItems:'center',
            justifyContent:'center',
            borderRadius:20,
            paddingLeft:60,
            paddingTop:5,
            paddingBottom:5,
            fontSize:30        
        }
        }}
        />
    )
}

export default MyHeader;