import React from 'react';
import {View, Text, TextInput} from 'react-native'
import styles from '../Task/style'
export default function Task(){
    return(
        <View style={styles.container}>
            <Text style={styles.title} >Task Screen</Text>
            <TextInput placeholder="Type anythink" ></TextInput>
        </View>
    )
}