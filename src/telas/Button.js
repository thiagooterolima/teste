import React from "react"
import { StyleSheet,Text, TouchableOpacity, View } from 'react-native'

const Button =({labelButton,onpress}) => {
    return(
        <TouchableOpacity style={styles.Button} 
            onpress={onpress}
            >
            <Text>{labelButton}</Text>
        </TouchableOpacity>
    )

    
}

export default Button

const styles = StyleSheet.create({
    Button:{
        width :100,
        height:50,
        position:'relative',
        backgroundColor:'#808080',
        
        
        

    }
})