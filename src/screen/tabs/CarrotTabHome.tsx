import React, { PropsWithChildren } from "react";
import { Button, Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import 'moment/locale/ko';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

interface CardProps {
    title: string;
}

export class Card extends React.Component<PropsWithChildren<CardProps>, any> {
    render() {
        console.log('children', this.props.children);
        return (
            <View style={cardStyles.container}>
                <Text style={cardStyles.textTitle}>{this.props.title}</Text>
                <View style={cardStyles.containerContent}>
                    {this.props.children}
                </View>
            </View>
        )
    }
}

const cardStyles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 20,
        marginBottom: 10,
    },
    textTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    containerContent: {
        flexGrow: 1,
    }
})
export default class CarrotTabHome extends React.Component<any, any> {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView contentContainerStyle={styles.cardContainer}>
                    <Card title="일정">
                        <View style={styles.containerCardContentSchedule}>
                            <Text style={styles.textScheduleTitle}>일정이 없어요.</Text>
                            <Text style={styles.textScheduleDescription}>일정을 작성하고 이웃들과 모여보세요.</Text>
                            <TouchableOpacity style={styles.buttonCreateSchedule}>
                                <Text style={styles.textButtonCreateSchedule}>일정 만들기</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.closeButton}>
                                <Icon name="close" size={30} color="#808080" />
                            </TouchableOpacity>
                        </View>
                    </Card>
                    <Card title="채팅">

                    </Card>
                    <Card title="멤버">

                    </Card>
                    <Card title="소개">

                    </Card>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F0F0',
    },
    cardContainer: {
    },
    containerCardContentSchedule: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 35,
        marginVertical: 15,
        borderWidth: 1,
        borderColor: '#C0C0C0',
        borderRadius: 10,
        borderStyle: 'dashed',
        position: 'relative',
    },
    closeButton: {
        position: 'absolute',
        top: 0,
        right: 0,
        padding: 10,
    },
    textScheduleTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    textScheduleDescription: {
        fontSize: 14,
        color: '#808080',
        marginBottom: 10,
    },
    buttonCreateSchedule: {
        backgroundColor: '#F0F0F0',
        borderRadius: 5,
        paddingVertical: 15,
        paddingHorizontal: 10,
        marginTop: 10,
    },
    textButtonCreateSchedule: {
        fontSize: 16,
        fontWeight: 'bold',
    }
})
