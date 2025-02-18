import React from "react";
import { View, Text, StyleSheet, StyleProp, ViewStyle } from "react-native";

interface MainItemContainerProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

/**
 * 메인 아이템 컨테이너
 *  - 메인 아이템 컨테이너는 메인 아이템을 포함하는 컨테이너이다.
 * 요구사항
 *  - 상하좌우 여백을 포함한다. 
 *  - 내부에 아이템을 포함한다. 
 */
export default class MainItemContainer extends React.Component<MainItemContainerProps> {
  render() {
    return <View style={[styles.container, this.props.style]}>
      {this.props.children}
    </View>
  }
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 15,
    marginHorizontal: 20,
    backgroundColor: '#FFFFFF',
  },
});
