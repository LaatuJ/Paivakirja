import React from "react";
import { View,  Text, StyleSheet, TouchableOpacity, TouchableOpacityComponent} from 'react-native';

const Btn = props => {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={{...styles.button, ...props.style }}>
                <Text style={{...styles.buttonText, ...props.textStyleing}}>
                    {props.title}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
        button: {
            backgroundColor: "red",
            paddingVertical: 12,
            paddingHorizontal: 25,
            borderRadius: 25
        },
    button2: {
        marginRight:10,
        marginLeft:10,
        marginTop:400,
        paddingTop:5,
        paddingBottom:5,
        paddingLeft:110,
        paddingRight:110,
        backgroundColor:'#f99755',
        borderRadius:20,
        borderWidth: 1,
        borderColor: '#f99755'
        
    },
    buttonText: {
        color: "white",
        fontSize: 18,
        fontFamily: "Roboto"

    }
})

export default Btn;