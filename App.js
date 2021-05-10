import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Task from './components/Task'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.taskWrapper}>

        <Text style={styles.sectionTitle}>Liste d'aujourd'hui</Text>
        <View style={styles.items}></View>
         
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  taskWrapper:{
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle:{
    fontSize: 24,
    fontWeight: 'bold'
  },
  items:{}
});
