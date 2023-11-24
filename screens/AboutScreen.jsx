import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainLayout from '../layouts/MainLayout';

function AboutScreen() {
  // Get the current date
  const currentDate = new Date().toDateString();

  return (
    <MainLayout>
      <View style={styles.container}>
        <Text style={styles.title}>My ToDo App</Text>
        <Text style={styles.subtitle}>Developed by Your Name</Text>
        <Text style={styles.date}>Current Date: {currentDate}</Text>
        <Text>About Screen</Text>
      </View>
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  date: {
    fontSize: 16,
    color: 'gray',
  },
});

export default AboutScreen;