// src/component/CollapsibleContent.tsx
import React, { PropsWithChildren, useCallback, useRef } from 'react';
import {
    View,
    StyleSheet,
    Text,
    Animated,
    Dimensions,
    TouchableOpacity,
    Button
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavProps } from '../../AppStack';

const window = Dimensions.get("window");

interface CollapsibleHeaderProps {
    headerHeight: Animated.AnimatedInterpolation<string | number>;
    headerText: string;
}

export default class CollapsibleHeader extends React.Component<PropsWithChildren<CollapsibleHeaderProps>> {
    headerHeight = 100;
    scrollY = new Animated.Value(0);
    headerHeightAnimation = this.scrollY.interpolate({
        inputRange: [0, this.headerHeight],
        outputRange: [this.headerHeight, 50],
        extrapolate: 'clamp',
    });

    render() {
        return (
            <View style={styles.rootContainer}>
                <Animated.View style={[{ height: this.headerHeightAnimation }]}>
                    {/* <Text style={[styles.headerText, { opacity: this.scrollY.interpolate({
                        inputRange: [0, this.headerHeight],
                        outputRange: [1, 0],
                        extrapolate: 'clamp',
                    }) }]}>
                        {this.props.headerText}
                    </Text> */}
                    <View style={styles.header}>
                        <TouchableOpacity onPress={() => {console.log('back')}}>
                            <Icon name="chevron-left" size={30} color="black" />
                        </TouchableOpacity>
                        <Text style={styles.headerText}>{this.props.headerText}</Text>
                    </View>
                </Animated.View>
                <Animated.ScrollView
                    contentContainerStyle={{
                        paddingTop: this.headerHeight,
                        minHeight: window.height + this.headerHeight
                    }}
                    scrollEventThrottle={16}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { y: this.scrollY } } }],
                        { useNativeDriver: false }
                    )}
                    bounces={false}
                >
                    {this.props.children}
                </Animated.ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
    },
    header: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingVertical: 5,
        paddingLeft: 10,
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    itemContainer: {
        width: "100%",
        height: 100,
        justifyContent: "center",
        alignItems: "center",
    },
    itemText: {
        fontSize: 25,
        color: "#FFD800"
    },
});