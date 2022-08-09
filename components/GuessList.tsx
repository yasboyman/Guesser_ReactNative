import React from 'react';
import {View, Text, StyleSheet} from "react-native";

const GuessList = ({number}: any) => {
    return (
        <View style={styles.listItem}>
            <Text>{number}</Text>
        </View>
    );
};

export default GuessList;

const styles = StyleSheet.create({
    listItem: {
        borderWidth: 2,
        borderColor: 'white',
        width: '100%',
        padding: 10,
        alignItems: 'center',
        backgroundColor: 'orange',
        color: 'white',
        alignContent: 'center'
    }

})
