import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { LayoutAnimation, StyleSheet, Text, View, Platform, SafeAreaView, TouchableHighlight } from 'react-native';
import Card from './components/Card'

const App = () =>

(
  <View style={styles.container}>

    {Card("xxxxxx")}

  </View >
);


const styles = StyleSheet.create({
  container: {
    padding: 8,
    flexDirection: 'column',
    backgroundColor: '#BAC8A5',
    justifyContent: 'flex-start',
    // alignItems: 'stretch',
    flex: 1,
  }
});


export default App


