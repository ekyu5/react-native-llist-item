import React from "react";
import { View, Text, StyleSheet, StyleProp, ViewStyle } from "react-native";

interface MainItemContainerProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

export default class MainItemContainer extends React.Component<MainItemContainerProps> {
  render() {
    return <View style={[styles.container, this.props.style]}>
      {this.props.children}
    </View>
  }
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    padding: 20,
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: '#FFFFFF',
  },
});
