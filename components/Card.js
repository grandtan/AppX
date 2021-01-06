import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { LayoutAnimation, StyleSheet, Text, View, Platform, SafeAreaView, TouchableHighlight } from 'react-native';


const Card = (e) => (
    <TouchableHighlight
        activeOpacity={0.6}
        underlayColor="#B9F65C"
        onPress={() => alert('Pressed!')}
    >

        <View style={styles.container}>
            <Text>{e}</Text>

        </View>

    </TouchableHighlight>



);


const styles = StyleSheet.create({
    container: {

        backgroundColor: 'red',
        justifyContent: 'center',
        flex: 1,
    }
});


export default Card


