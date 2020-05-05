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
    buttonText: {
        color: "white",
        fontSize: 18
    }
})

export default Btn;