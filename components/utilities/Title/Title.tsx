import React from 'react';
import {StyleSheet, View, Text} from "react-native";

const Title = ({children} : any) => {
    return  <Text style={styles.title}>{children}</Text>
};

export default Title;

const styles = StyleSheet.create({
title: {
fontSize:24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    borderWidth: 4 ,
    borderColor: 'white',
    padding: 12,
    marginBottom:50,
},
});

