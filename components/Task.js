import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Task = (props) => {
    <View style= {styles.items} >
        <View style={styles.itemLeft} >
            <View style={style.square}></View>
        </View>
        <Text style={style.itemText} >{props.text}</Text>
        <View style={style.circular} ></View>
    </View>
}

const styles = StyleSheet.create({
    item:{
        backgroundColor: '#FFFF',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20
    },
    itemLeft:{
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    square:{
        width: 24,
        height: 24,
        backgroundColor: '#55BCF6',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,
    },
    itemText:{
        maxWidth: '80%'
    },
    circular:{
        width: 12,
        height: 12,
        borderColor: '#55BCF6',
        borderRadius: 5,
        borderWidth: 2
    },
})

export default Task