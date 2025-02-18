import React from "react";
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";

export default class CarrotPost extends React.Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar hidden={false} />
                <View>
                    <Text>CarrotTabHome</Text>
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})