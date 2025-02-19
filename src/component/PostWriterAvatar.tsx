import React from "react";
import { Image, StyleSheet, View } from "react-native";

interface Props {
    avatar: string;
    name: string;
    location: string;
    countLocationAuth: number;
    timeCreate: string;
}

export default class WriterAvatar extends React.Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <Image source={{uri: this.props.avatar}} style={styles.image} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    imageContainer: {
        width: 40,
        height: 40,
        marginRight: 15,
    },
    image: {
        width: '100%',
        height: '100%',
    },

});
