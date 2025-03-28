import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

const ToDoList = ({ tasks }) => {
  return (
    <View>
      {tasks.map((task, index) => (
        <Pressable key={index}>
          <View style={[styles.task, styles.incomplete]}>
            <Text style={styles.taskText}>{task}</Text>
          </View>
        </Pressable>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  task: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  incomplete: {
    backgroundColor: '#e0e0e0',
  },
  taskText: {
    fontSize: 16,
  },
});

export default ToDoList;
