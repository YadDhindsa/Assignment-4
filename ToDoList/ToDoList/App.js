import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';

function App() {
  // Initial tasks to do
  const [tasks, setTasks] = useState(['Do laundry', 'Go to gym', 'Walk dog']);

  // This function will be passed down to the form
  const addTask = (taskText) => {
    // It Trims the whitespace
    const newTask = taskText.trim();

    // It Prevent empty or duplicate tasks
    if (!newTask) return; // it  ignore the  empty
    if (tasks.includes(newTask)) return; // it ignores the duplicates

    // It Update the tasks state
    setTasks([...tasks, newTask]);
  };

  