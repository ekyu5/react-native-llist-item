import React from "react";
import { Animated, ImageBackground, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import CarrotTabHome from "./tabs/CarrotTabHome";
import CarrotTabBoard from "./tabs/CarrotTabBoard";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import CarrotTabEmpty from "./tabs/CarrotTabEmpty";

const topTab = createMaterialTopTabNavigator();
const TopTab = () => {
    return (
        <topTab.Navigator
            initialRouteName="홈"
            screenOptions={{
                tabBarStyle: {
                    marginTop: 50,
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
    HEADER_MAX_HEIGHT = 200;
    HEADER_MIN_HEIGHT = 50;
    SCROLL_DISTANCE = this.HEADER_MAX_HEIGHT - this.HEADER_MIN_HEIGHT;
    
    render() {
        const headerHeight = this.scrollY.interpolate({
            inputRange: [0, this.SCROLL_DISTANCE],
            outputRange: [this.HEADER_MAX_HEIGHT, this.HEADER_MIN_HEIGHT],
            extrapolate: 'clamp',
        });

        const backButtonLeft = this.scrollY.interpolate({
            inputRange: [0, this.SCROLL_DISTANCE],
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
                {/* 확장된 상태 */}
                <Animated.View style={[styles.header, {opacity: opacityExpanded}]}>
                    <ImageBackground source={{ uri: 'https://cdn.pixabay.com/photo/2019/04/07/23/11/link-building-4111001_1280.jpg' }} style={styles.backgroundImage} />
                    <Text style={styles.headerText}>Collapsible Header</Text>
                </Animated.View>
                {/* 축소된 상태 */}
                <Animated.View style={[styles.header, styles.headerCollapsed, { opacity: opacityCollapsed }]}>
                    <Icon name="arrow-left" size={20} color="white" />
                    <Text style={styles.headerText}>Collapsible Header</Text>
                </Animated.View>

                {/* <Animated.ScrollView
                    contentContainerStyle={styles.scrollViewContent}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { y: this.scrollY } } }],
                        { useNativeDriver: true } // 네이티브 드라이버 사용 (성능 향상)
                    )}
                    stickyHeaderIndices={[0]}
                >
                </Animated.ScrollView> */}
                <TopTab />
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
    headerCollapsed: {
        height: 0,
        paddingTop: 50,
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