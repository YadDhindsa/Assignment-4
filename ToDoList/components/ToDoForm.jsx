import React, { useState } from 'react'
import { View, StyleSheet, TextInput, Button } from 'react-native'

const ToDoForm = ({ addTask }) => {
  const [taskText, setTaskText] = useState('')

  const handleAddTask = () => {
    addTask(taskText)
    setTaskText('')
  }

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Add a new task..."
        value={taskText}
        onChangeText={(text) => setTaskText(text)}
      />
      <Button title="Add Task" onPress={handleAddTask} />
    </View>
  )
}
const styles = StyleSheet.create({
  form: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
  },
});

export default ToDoForm;
