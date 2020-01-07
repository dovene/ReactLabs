import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import GoalListItem from './components/GoalListItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [isAddMode, setIsAddMode] = useState(false)

  const [courseGoals, setCoursedGoals] = useState([])

  const onGoalButtonClicked = (goalTitle) => {
    // console.log(enteredGoal)
    setCoursedGoals(currentGoals => [...currentGoals, {
      id: courseGoals.length,//Math.random.toString(),
      value: goalTitle
    }]);
    setIsAddMode(false)
  }

  const deleteGoal = (goalId) => {
    setCoursedGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id != goalId)
    })
  }

  const cancelGoalAdd = () => {
    setIsAddMode(false)
  }

  return (
    <View style={styles.root}>
      <View >
        <Text>Goals App!</Text>
      </View>
      <Button title="Add new goal" onPress={()=>setIsAddMode(true)}/>
      <GoalInput visible={isAddMode} onAddGoal={onGoalButtonClicked} onCancel={cancelGoalAdd}/>

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
