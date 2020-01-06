import React, {useState} from 'react';
import { StyleSheet, TextInput, View, Button } from 'react-native';

const GoalInput = props =>{

    const [enteredGoal, setEnteredGoal] = useState('')
    const goalInput = (inputText) => {
      setEnteredGoal(inputText)
    }

    //<Button title="Add" onPress={()=> props.onAddGoal(enteredGoal)} /> also works at line 16
    return (<View style={styles.addContainer}>
        <TextInput placeholder="Input a goal" style={styles.input}
          onChangeText={goalInput}
          value={enteredGoal}></TextInput>
        <Button title="Add" onPress={props.onAddGoal.bind(this,enteredGoal)} />
      </View>)
}


const styles = StyleSheet.create({
    addContainer: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-between',
    
      }, input: {
        borderColor: 'black',
        padding: 10,
        borderWidth: 1,
        width: '80%',
      },
   });
  
   
export default GoalInput;
