import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const GoalListItem = props =>{
    return (<TouchableOpacity onPress={props.onDelete.bind(this,props.id)} style={styles.listitem} >

        <Text>{props.title}</Text>
      </TouchableOpacity>)
}


const styles = StyleSheet.create({
    listitem: {
       borderColor: 'black',
       marginVertical: 12,
       borderWidth: 1,
       backgroundColor: 'grey',
       padding: 8
     },
   });
  
   
export default GoalListItem;

