import { Text, View, StyleSheet, Pressable } from "react-native";

export default function GoalItem(props) {
    return (
        <View style={styles.goalItem}>
            <Pressable style={(pressed) => pressed && styles.pressedItem} android_ripple={{color: '#ddddd'}} onPress={props.onDeleteItem.bind(this, props.id)}>
                <Text style={styles.goalText}>{props.text}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#5E0ACC',
    },

    goalText: {
        color: 'white',
        padding: 8,
    },

    pressedItem: {
        opacity: 0.5
    }
})