import React, { useState } from 'react'
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native'
import ToDoForm from './components/ToDoForm'
import ToDoList from './components/ToDoList'

function App() {
  const [tasks, setTasks] = useState(['Do laundry', 'Go to gym', 'Walk dog'])

  const addTask = (taskText) => {
    const newTask = taskText.trim()
    if (!newTask) return
    if (tasks.includes(newTask)) return
    setTasks([...tasks, newTask])
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <ToDoList tasks={tasks} />
      </ScrollView>
      <View style={styles.formContainer}>
        <ToDoForm addTask={addTask} />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 80
  },
  formContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#f8f8f8',
    padding: 15,
    borderTopWidth: 1,
    borderColor: '#ccc'
  }
})

export default App
