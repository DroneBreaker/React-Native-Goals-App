import { useState } from "react";
import { Button, TextInput, View, StyleSheet, Modal, Image } from "react-native";

export default function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('');
  
    function inputHandler(enteredText) {
      setEnteredGoalText(enteredText);
    }

    function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }

    return (
        <Modal visible={props.visible} animationType={'slide'}>
            <View style={styles.inputContainer}>
                {/* <Image source={require('../assets/images/#')}/> */}
                <TextInput style={styles.textInput} placeholder='Your course goal' onChangeText={inputHandler} value={enteredGoalText}/>
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title='Add Goal' onPress={addGoalHandler} color='#B180F0'/>
                    </View>

                    <View style={styles.button}>
                        <Button title='Cancel' onPress={props.onCancel} color='#F31282'/>
                    </View>
                </View>
            </View>
        </Modal>
    )
}


const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8,
        backgroundColor: '#311B6B'
    },
    
    textInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    width: '90%',
    padding: 14, 
    backgroundColor: '#e4d0ff',
    color: '#120438',
    borderRadius: 6,
    },

    buttonContainer: {
        flexDirection: 'row',
        marginTop: 16
    },

    button: {
        width: 100,
        marginHorizontal: 8
    }
})