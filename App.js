import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import GoalListItem from './components/GoalListItem';
import GoalInput from './components/GoalInput';

export default function App() {

  const [courseGoals, setCoursedGoals] = useState([])

  const onGoalButtonClicked = (goalTitle) => {
    // console.log(enteredGoal)
    setCoursedGoals(currentGoals => [...currentGoals, {
      id: courseGoals.length,//Math.random.toString(),
      value: goalTitle
    }])
  }

  const deleteGoal = (goalId) => {
    setCoursedGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id != goalId)
    })
  }

  return (
    <View style={styles.root}>
      <View >
        <Text>Goals App!</Text>
      </View>
      <GoalInput onAddGoal={onGoalButtonClicked}/>

      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData =>
          (<GoalListItem id={itemData.item.id} title={itemData.item.value} onDelete= {deleteGoal}/>)
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    padding: 50
  },
});
