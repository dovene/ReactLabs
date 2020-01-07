import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Button, Modal } from 'react-native';

const GoalInput = props => {

    const [enteredGoal, setEnteredGoal] = useState('')
    const goalInput = (inputText) => {
        setEnteredGoal(inputText)
    }
    const addGoal = () => {
        props.onAddGoal(enteredGoal)
        setEnteredGoal('')
    }

    //<Button title="Add" onPress={()=> props.onAddGoal(enteredGoal)} /> also works at line 16
    return (
        <Modal visible={props.visible} animationType='slide'>
            <View style={styles.addContainer}>
                <TextInput placeholder="Input a goal" style={styles.input}
                    onChangeText={goalInput}
                    value={enteredGoal}></TextInput>
                <View style={styles.buttonsContainer}>
                <View style={styles.button}>
                <Button title="Cancel" color='red' onPress={props.onCancel} />
                </View>
                <View style={styles.button}>
                <Button  title="Add" onPress={addGoal} />
                </View>
                </View>
            </View>
        </Modal>
    )
}


const styles = StyleSheet.create({
    addContainer: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }, input: {
        borderColor: 'black',
        padding: 10,
        borderWidth: 1,
        width: '80%',
        marginBottom: 10
    }, buttonsContainer: {
        justifyContent: 'flex-end',
        flexDirection: 'row',
        width: '80%'
    }, button: {
        marginStart: 10
    },
});

export default GoalInput;
