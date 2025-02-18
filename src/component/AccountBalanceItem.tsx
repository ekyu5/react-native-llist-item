import React, { ReactNode } from "react";
import { Image, ImageSourcePropType, StyleProp, StyleSheet, Text, TextStyle, TouchableOpacity, View, ViewStyle } from "react-native";
interface AccountBalanceProps {
    title: string;
    titleStyle?: StyleProp<TextStyle>;
    balance: string;
    balanceStyle?: StyleProp<TextStyle>;
    description?: string;
    descriptionStyle?: StyleProp<TextStyle>;
    image?: ImageSourcePropType|ImageSourcePropType[];
    imageContainerStyle?: StyleProp<ViewStyle>;
    right?: ReactNode;
    rightContainerStyle?: StyleProp<ViewStyle>;
    onPress?: () => void;
}

export default class AccountBalanceItem extends React.Component<AccountBalanceProps> {
    renderImage() {
        let image: JSX.Element | JSX.Element[] | undefined;
        if (!Array.isArray(this.props.image)) {
            image = <Image source={this.props.image} style={styles.image} />;
        } else if (Array.isArray(this.props.image)) {
            if (this.props.image.length > 1) {
                image = [];
                const firstImage = this.props.image[0];
                image.push(
                    <View key={1} style={[this.props.imageContainerStyle, this.props.image.length > 1 ? styles.imageDoubleTop : undefined]}>
                        <Image source={firstImage} style={[styles.image]} />
                    </View>
                );
                if (this.props.image.length > 1) {
                    const secondImage = this.props.image[1];
                    image.unshift(
                        <View key={2} style={[this.props.imageContainerStyle, this.props.image.length > 1 ? styles.imageDoubleBottom : undefined]}>
                            <Image source={secondImage} style={[styles.image]} />
                        </View>
                    );
                }
            } else if (this.props.image.length === 1) {
                image = <Image source={this.props.image[0]} style={styles.image} />;
            }
        }
        return image ? (
            <View style={[styles.imageContainer, this.props.imageContainerStyle]}>
                {image}
            </View>
        ) : null;
    }

    renderRight() {
        return this.props.right ? this.props.right : null;
    }

    render() {
        return (
            <TouchableOpacity style={styles.container}>
                {this.renderImage()}
                <View style={styles.textContainer}>
                    <Text style={[styles.defaultFont, styles.textTitle, this.props.titleStyle]} >{this.props.title}</Text>
                    <View style={styles.textContainerBalance}>
                        <Text style={[styles.defaultFont, styles.textBalance, this.props.balanceStyle]}>{this.props.balance}</Text>
                        {this.props.description && <Text style={[styles.defaultFont, styles.textDescription, this.props.descriptionStyle]}>{this.props.description}</Text>}
                    </View>
                </View>
                {this.renderRight()}
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 10,
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
    textContainer: {
      flex: 1,
      textAlign: 'left',
      flexDirection: 'column',
    },
    defaultFont: {
        fontFamily: 'Pretendard-SemiBold',
    },
    textTitle: {
        textAlign: 'left',
        color: '#A0A0A0',
        fontSize: 15,
    },
    textContainerBalance: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    textBalance: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    textDescription: {
        fontSize: 15,
        marginLeft: 10,
    },
    imageDoubleTop: {
        width: 35,
        height: 35,
        position: 'absolute',
        top: 0,
        left: 0,
    },
    imageDoubleBottom: {
        width: 35,
        height: 35,
        position: 'absolute',
        bottom: 0,
        right: 0,
    },
});  