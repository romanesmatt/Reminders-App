import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from '@ui-kitten/components';


const Note = ({ title, description, colour, onPress }) => {
    return (
        <TouchableOpacity
        // onPress={onPress} //Currently does not work
            style={[styles.itemContainer, {backgroundColor: colour}]}
            >
                <Text style={styles.title} category='h1'>{title}</Text>
                <Text style={styles.description}>{description}</Text>
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    itemContainer: {
        width: 170,
        height: 170,
        marginLeft: 25,
        marginVertical: 10,
        borderRadius: 20,
        alignItems: 'center'
    },
    title: {
        marginVertical: 5,
        fontSize: 20,
        color: 'black',
        alignItems: 'center'
    },
    desription: {
        marginTop: 10
    }

})

export default Note;