import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import ToDoForm from '../components/ToDoForm';
import ToDoList from '../components/ToDoList';
import MainLayout from '../layouts/MainLayout';

const HomeScreen = ({ navigation }) => {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskText) => {
    setTasks([...tasks, taskText]);
  };

  return (
    <MainLayout>
      <View style={styles.container}>
        <Text style={styles.title}>To-Do App</Text>
        {/* Display ToDoForm for adding tasks */}
        <ToDoForm addTask={addTask} />
        {/* Display ToDoList for showing tasks */}
        <ToDoList tasks={tasks} />
        {/* Your screen content */}
        <Button
          title="Go to About"
          onPress={() => navigation.navigate('About')}
        />
      </View>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default HomeScreen;
