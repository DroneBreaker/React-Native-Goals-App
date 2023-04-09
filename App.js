import { StatusBar } from 'expo-status-bar'
import { Button, FlatList, StyleSheet, View } from 'react-native';
import { useState } from 'react';
import GoalItem from './components/Goalitem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  //function to handle when a goal is added 
  function addGoalHandler(enteredGoalText) {
    setCourseGoals(currentCourseGoals => [
      ...currentCourseGoals, 
      {text: enteredGoalText, key: Math.random().toString()}
    ]);

    setModalIsVisible(false);
  }

  //function to handle when a goal is deleted 
  function deleteGoalHandler(id) {
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  }

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }
      
  function endAddGoalHandler() {
    setModalIsVisible(false);     
  }

  return (
    <>
      <StatusBar style='light'/>

      <View style={styles.appContainer}>
        <Button title='Add New Goal' color={'#A065E'} onPress={startAddGoalHandler}/>

        <GoalInput visible={modalIsVisible} 
        onAddGoal={addGoalHandler} onCancel={endAddGoalHandler}/>

        <View style={styles.goalsContainer}>
          <FlatList data={courseGoals} renderItem={(itemData) => {
            return (
              <GoalItem text={itemData.item.text} 
              onDeleteItem={deleteGoalHandler} 
              id={itemData.item.id}/>
            )
          }}/>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },

  dummyText: {
    margin: 16,
    borderWidth: 1,
    borderColor: 'red',
    padding: 16
  },

  

  goalsContainer: {
    flex: 5
  },
});