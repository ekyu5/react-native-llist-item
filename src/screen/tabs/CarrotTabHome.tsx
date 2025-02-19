import React, { PropsWithChildren } from "react";
import { Button, Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import 'moment/locale/ko';
import moment from "moment";
import { Crown, MapPin, X } from "lucide-react-native";

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

const chatList = [
    {
        id: 1,
        title: '망냥냥 전체방',
        avatar: 'https://i.pravatar.cc/50',
        content: '희희님이 돌아왔어요.',
        timeCreate: '2025-02-18 10:00:00',
        countNewEvent: 1,
    }
]

const memberList = [
    {
        id: 1,
        name: '희희',
        avatar: 'https://i.pravatar.cc/50',
        location: '역삼동',
        level: 'owner',
        timeCreate: '2025-02-18 10:00:00',
    }
]

const introduction = [
    {
        id: 1,
        description: '놀아요 같이~ 영화도 보고',
        location: '역삼동',
        tags: ['기타', '20~29세'],
        timeCreate: '2025-02-18 10:00:00',
    }
]
export default class CarrotTabHome extends React.Component<any, any> {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView contentContainerStyle={styles.cardContainer} nestedScrollEnabled={true}>
                    <Card title="일정">
                        <View style={styles.containerCardContentEmpty}>
                            <Text style={styles.textScheduleTitle}>일정이 없어요.</Text>
                            <Text style={styles.textScheduleDescription}>일정을 작성하고 이웃들과 모여보세요.</Text>
                            <TouchableOpacity style={styles.buttonCreateSchedule}>
                                <Text style={styles.textButtonCreateSchedule}>일정 만들기</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.closeButton}>
                                <X size={30} color="#808080" strokeWidth={1} />
                            </TouchableOpacity>
                        </View>
                    </Card>
                    <Card title="채팅">
                        <View style={styles.containerCardContent}>
                            {chatList.map(item => (
                                <View key={item.id} style={styles.containerCardContentItem}>
                                    <Image source={{uri: item.avatar}} style={styles.avatar} />
                                    <View style={styles.containerCardContentChatItemContent}>
                                        <View style={styles.containerCardContentChatItemDescription}>
                                            <Text style={styles.textChatItemTitle}>{item.title}</Text>
                                            <Text style={styles.textChatNewEvent}>{item.countNewEvent}</Text>
                                        </View>
                                        <Text style={styles.textChatItemContent}>{item.content}</Text>
                                    </View>
                                    <Text style={styles.textChatItemTime}>{moment(item.timeCreate).fromNow()}</Text>
                                </View>
                            ))}
                        </View>
                    </Card>
                    <Card title={"멤버 " + memberList.length}>
                        <View style={styles.containerCardContent}>
                            {memberList.map(item => (
                                <View key={item.id} style={styles.containerCardContentItem}>
                                    <Image source={{uri: item.avatar}} style={styles.avatar} />
                                    <View style={styles.containerCardContentMemberItemContent}>
                                        <Text style={styles.textMemberName}>{item.name}</Text>
                                        <Crown size={16} color="#DFAF00" />
                                        <Text style={styles.textMemberLocation}>{item.location}</Text>
                                    </View>
                                </View>
                            ))}
                        </View>
                    </Card>
                    <Card title="소개">
                        <View style={styles.containerCardContent}>
                            {introduction.map(item => (
                                <View key={item.id} style={styles.containerCardContentItem}>
                                    <View style={styles.containerCardContentItemIntroduction}>
                                        <Text style={styles.textIntroductionDescription}>{item.description}</Text>
                                        <View style={styles.containerCardContentItemIntroductionTags}>
                                            <View style={styles.containerIntroductionTags}>
                                                <MapPin size={16} color="#808080" />
                                                <Text style={styles.textIntroductionTags}>{item.location}</Text>
                                            </View>
                                            {item.tags.map(tag => (
                                                <Text key={tag} style={[styles.containerIntroductionTags, styles.textIntroductionTags]}>{tag}</Text>
                                            ))}
                                        </View>
                                    </View>
                                </View>
                            ))}
                        </View>
                    </Card>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F0F0F0',
    },
    cardContainer: {
    },
    containerCardContentEmpty: {
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
    containerCardContent: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginVertical: 15,
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
    },
    containerCardContentChat: {
        flex: 1,
    },
    containerCardContentItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingVertical: 5,
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 25,
    },
    containerCardContentChatItemContent: {
        flex: 1,
        marginLeft: 10,
    },
    containerCardContentChatItemDescription: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    textChatItemTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 3,
    },
    textChatItemContent: {
        fontSize: 14,
        color: '#808080',
    },
    textChatNewEvent: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#808080',
        marginLeft: 5,
    },
    textChatItemTime: {
        fontSize: 12,
        color: '#808080',
        justifyContent: 'flex-end'
    },
    textMemberName: {
        fontSize: 14,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    textMemberLocation: {
        fontSize: 12,
        color: '#808080',
        marginHorizontal: 5,
    },
    containerCardContentMemberItemContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: 5,
    },
    textIntroductionDescription: {
        fontSize: 14,
        color: '#808080',
        textAlign: 'left',
    },
    textIntroductionLocation: {
        fontSize: 14,
        color: '#808080',
    },
    containerIntroductionTags: {
        backgroundColor: '#F0F0F0',
        borderRadius: 5,
        paddingHorizontal: 5,
        paddingVertical: 5,
        marginRight: 5,
        marginTop: 15,
        flexDirection: 'row',
        alignItems: 'center',
    },
    textIntroductionTags: {
        fontSize: 14,
        color: '#808080',
    },
    containerCardContentItemIntroduction: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    containerCardContentItemIntroductionTags: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
})
