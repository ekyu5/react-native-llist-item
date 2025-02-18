import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import TossTabCardRecommend from "./tabs/TossTabCardRecommend";
import TossTabMyRevenue from "./tabs/TossTabMyExpenditure";

const topTab = createMaterialTopTabNavigator();
const TopTab = () => {
    return (
        <topTab.Navigator screenOptions={{
            tabBarStyle: {
                marginTop: 50,
                backgroundColor: 'white',
                borderBottomWidth: 1,
                borderBottomColor: '#F0F0F0',
                shadowColor: 'transparent',
            },
            tabBarIndicatorStyle: {
                backgroundColor: '#A0A0A0',
                width: '40%',
                alignSelf: 'center',
            },
        }}>
            <topTab.Screen name="내 소비" component={TossTabMyRevenue} />
            <topTab.Screen name="카드 추천" component={TossTabCardRecommend} />
        </topTab.Navigator>
    );
}

export default class TossMonthlyExpenditure extends React.Component<any, any> {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                {TopTab()}
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
});