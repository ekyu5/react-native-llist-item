import React from "react";
import { Animated, SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
import CarrotTabHome from "./tabs/CarrotTabHome";
import CarrotTabBoard from "./tabs/CarrotTabBoard";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import CarrotTabEmpty from "./tabs/CarrotTabEmpty";
import CollapsibleHeader from "../component/CollapsibleHeader";

const HEADER_MAX_HEIGHT = 200;
const HEADER_MIN_HEIGHT = 50;
const SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

const topTab = createMaterialTopTabNavigator();
const TopTab = () => {
    return (
        <topTab.Navigator
            initialRouteName="홈"
            screenOptions={{
                tabBarStyle: {
                    marginTop: HEADER_MIN_HEIGHT,
                    backgroundColor: 'white',
                    borderBottomWidth: 1,
                    borderBottomColor: '#F0F0F0',
                    shadowColor: 'transparent',
                },
                tabBarIndicatorStyle: {
                    height: 3,
                    backgroundColor: 'black',
                },
            }
        }>
            <topTab.Screen name="홈" component={CarrotTabHome} />
            <topTab.Screen name="게시판" component={CarrotTabBoard} />
            <topTab.Screen name="일정" component={CarrotTabEmpty} />
            <topTab.Screen name="앨범" component={CarrotTabEmpty} />
            <topTab.Screen name="채팅" component={CarrotTabEmpty} />
        </topTab.Navigator>
    );
}

export default class CarrotUserMain extends React.Component {
    scrollY = new Animated.Value(0);
    
    renderItem = ({ item }: any) => (
        <View>
          <Text>{item}</Text>
        </View>
      );

    render() {
        const headerHeight = this.scrollY.interpolate({
            inputRange: [0, SCROLL_DISTANCE],
            outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
            extrapolate: 'clamp',
        });

        const backButtonLeft = this.scrollY.interpolate({
            inputRange: [0, SCROLL_DISTANCE],
            outputRange: [0, 0],
            extrapolate: 'clamp',
          });
      
        const opacityExpanded = this.scrollY.interpolate({
            inputRange: [0, 100],
            outputRange: [1, 0], // 불투명도 1에서 0으로 변경
            extrapolate: 'clamp',
        });

        const opacityCollapsed = this.scrollY.interpolate({
            inputRange: [0, 100],
            outputRange: [0, 1], // 불투명도 0에서 1로 변경
            extrapolate: 'clamp',
        });
        
        const tmp = new Array(0);
        for (let i = 0; i < 100; i++) {
            tmp.push(<Text key={i} style={styles.contentText}>CarrotUserMain</Text>);
        }

        return (
            <SafeAreaView style={styles.container}>
                <StatusBar hidden={false} />
                <CollapsibleHeader headerHeight={headerHeight} headerText="Collapsible Header">
                    <View style={styles.scrollContainer}>
                        <TopTab />
                    </View>
                </CollapsibleHeader>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    header: {
        position: 'absolute',
        backgroundColor: 'blue',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    scrollContainer: {
        flex: 1,
        // paddingBottom: HEADER_MAX_HEIGHT,
      },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    contentText: {
        fontSize: 18,
        padding: 20,
    },
    scrollViewContent: {
        paddingTop: 200,
    },
})