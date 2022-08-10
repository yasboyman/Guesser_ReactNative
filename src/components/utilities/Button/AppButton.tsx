import {View, Button, StyleSheet, TouchableOpacity, Text} from "react-native";

type AppButtonProps = {
    onPress(): void;
    title: string;
    color?: string;
}


const AppButton = ({onPress, title}: AppButtonProps) => {

    return (<TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
            <Text style={styles.appButtonText}>{title}</Text>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    // ...
    appButtonContainer: {
        elevation: 8,
        shadowColor: 'red',
        backgroundColor: "#009688",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12
    },
    appButtonText: {
        fontSize: 18,
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    }
});


export default AppButton