import React from "react";
import { Image, KeyboardAvoidingView, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { NavProps } from "../../AppStack";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import moment from "moment";
import {CircleHelp, Eye, Heart, Image as ImageIcon, MapPin, Smile} from 'lucide-react-native';

const commentData = [
    {
        id: 1,
        content: '당근만두 맛있어요! 사장님도 친절하구 서비스도 많이 주시더라구요~',
        timeCreate: '2025-02-17 10:00:00',
        writer: {
            avatar: 'https://i.pravatar.cc/300',
            name: '홍길동',
            location: '서초동',
            countLocationAuth: 10,
        },
    },
    {
        id: 2,
        content: '당근만두 맛있어요! 사장님도 친절하구 서비스도 많이 주시더라구요~',
        timeCreate: '2025-02-17 10:00:00',
        writer: {
            avatar: 'https://i.pravatar.cc/300',
            name: '홍길동',
            location: '서초동',
            countLocationAuth: 10,
        },
    }
];

interface Props extends NavProps {
    post: {
        id: number;
        category: string;
        title: string;
        content: string;
        location: string;
        timeCreate: string;
        countView: number;
        countLike: number;
        writer: {
            avatar: string;
            name: string;
            location: string;
            countLocationAuth: number;
            timeCreate: string;
        };
    };
}
export default class CarrotPost extends React.Component<Props> {
    state = {
        webViewHeight: 0, // WebView 높이를 저장할 상태 추가
    };

    handleWebViewMessage = (event: any) => {
        const height = Number(event.nativeEvent.data); // WebView에서 전달된 높이
        if (!isNaN(height)) { // 높이가 유효한 숫자인지 확인
            this.setState({ webViewHeight: height }); // 상태 업데이트
        }
    };

    render() {
        const { post } = this.props.route.params;

        return (
            <SafeAreaView style={{ flex: 1 }}>
                <StatusBar hidden={false} />
                <ScrollView >
                    <View style={styles.containerPost}>
                        <TouchableOpacity style={[styles.postCategoryBadge]} onPress={() => {console.log('onclick : ' + post.category)}}>
                            <Icon name="file-document-outline" size={20} color="#A0A0A0" />
                            <Text >{post.category}</Text>
                        </TouchableOpacity>
                        <View style={styles.containerWriter}>
                            <View style={styles.containerWriterAvatar}>
                                <Image source={{uri: post.writer.avatar}} style={[styles.image]} />
                            </View>
                            <View style={styles.containerWriterContent}>
                                <Text style={[styles.textMedium, styles.textBold]}>{post.writer.name}</Text>
                                <Text style={styles.textLight}>{post.writer.location} · {moment(post.timeCreate).fromNow()}</Text>
                            </View>
                        </View>
                        <View style={styles.containerPostContent}>
                            <Text style={[styles.postTitle, styles.textXLarge, styles.textBold]}>{post.title}</Text>
                            <Text style={[styles.postContent, styles.textMedium]}>{post.content.replace(/<[^>]+>/g, '')}</Text>
                        </View>
                        <View style={styles.containerTag}>
                            <View style={styles.alignCenter}>
                                <Text style={[styles.textBold]}>추천 태그</Text>
                                <CircleHelp size={20} color="#808080" strokeWidth={2} />
                            </View>
                            <Text style={styles.textTag}>#{post.category}</Text>
                        </View>
                        <View style={[styles.containerViewer]}>
                            <Eye size={20} color="#808080" strokeWidth={1} />
                            <Text style={[styles.textLight, styles.textLeftPadding]}>
                                {post.countView}명이 봤어요
                            </Text>
                        </View>
                        <View style={styles.containerFooter}>
                            <TouchableOpacity style={styles.containerBadge}>
                                <Heart size={20} color="#808080" strokeWidth={1} />
                                <Text style={styles.textLeftPadding}>{post.countLike}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.containerBadge}>
                                <Text>저장</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.containerComment}>
                        <View style={styles.containerCommentHeader}>
                            <Text style={styles.textBold}>댓글 {commentData.length}</Text>
                            <View style={styles.containerCommentHeaderSort}>
                                <TouchableOpacity style={styles.containerCommentHeaderSortItem}>
                                    <Text>등록순</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.containerCommentHeaderSortItem}>
                                    <Text>최신순</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View>
                            {commentData.map(item => (
                                <View>
                                    <View style={styles.containerWriter}>
                                        <View style={styles.containerWriterAvatar}>
                                            <Image source={{uri: post.writer.avatar}} style={[styles.image]} />
                                        </View>
                                        <View style={styles.containerWriterContent}>
                                            <Text style={[styles.textSmall, styles.textBold]}>{post.writer.name}</Text>
                                            <Text style={[styles.textXSmall, styles.textLight]}>{post.writer.location} · {moment(post.timeCreate).fromNow()}</Text>
                                        </View>
                                    </View> 
                                    <View style={styles.containerCommentContent}>
                                        <Text style={[styles.textMedium]}>{item.content}</Text>
                                        <View style={[styles.containerCommentLocation, styles.alignCenter]}>
                                            <Text style={[styles.textSmall, styles.textBold]}>언급된 장소</Text>
                                            <CircleHelp size={18} color="#808080" strokeWidth={2} />
                                        </View>
                                        <View style={styles.containerReplyInput}>
                                            <Icon name="reply-circle" size={20} color="#808080" />
                                            <TextInput style={styles.textMedium} placeholder={"답글을 입력해주세요."} />
                                        </View>
                                        
                                    </View>
                                    <View style={styles.horizontalLine} />
                                </View>
                            ))}
                        </View>
                    </View>
                </ScrollView>
                <KeyboardAvoidingView style={styles.containerCommentInputRow} behavior="padding">
                    <ImageIcon size={30} color="#808080" strokeWidth={1} />
                    <MapPin size={30} color="#808080" strokeWidth={1} />
                    <View style={styles.containerCommentInput}>
                        <TextInput style={styles.textLarge} placeholder="댓글을 입력해주세요." />
                        <TouchableOpacity>
                            <Smile size={30} color="#808080" strokeWidth={1} />
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerPost: {
        backgroundColor: '#FFFFFF',
        width: '100%',
        padding: 20,
    },
    containerWriter: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 20,
    },
    containerWriterAvatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        overflow: 'hidden',
    },
    containerWriterContent: {
        paddingLeft: 10,
    },
    textBold: {
        fontWeight: 'bold',
    },
    alignCenter: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
    },
    textLight: {
        color: '#808080',
    },
    textXLarge: {
        fontSize: 20,
    },
    textLarge: {
        fontSize: 18,
    },
    textMedium: {
        fontSize: 15,
    },
    textSmall: {
        fontSize: 13,
    },
    textXSmall: {
        fontSize: 11,
    },
    postCategoryBadge: {
        flexDirection: 'row',
        alignItems: 'center',
        color: '#808080',
        backgroundColor: '#F0F0F0',
        borderRadius: 20,
        padding: 10,
        paddingHorizontal: 10,
        alignSelf: 'flex-start',
    },
    image: {
        width: '100%',
        height: '100%',
    },
    containerPostContent: {
        flex: 1,
        flexDirection: 'column',
    },
    postTitle: {
        paddingTop: 20,
    },
    postContent: {
        fontSize: 15,
        marginTop: 10,
    },
    containerBadge: {
        flexDirection: 'row',
        borderRadius: 25,
        padding: 10,
        paddingHorizontal: 15,
        borderWidth: 1,
        borderColor: '#F0F0F0',
        alignItems: 'center',
    },
    containerTag: {
        paddingTop: 20,
        paddingBottom: 10,
    },
    textTag: {
        color: 'blue',
        fontSize: 15,
        paddingTop: 5
    },
    textLeftPadding: {
        paddingLeft: 5,
    },
    containerViewer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingVertical: 10,
    },
    containerFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
    },
    containerComment: {
        backgroundColor: '#FFFFFF',
        width: '100%',
        marginVertical: 10,
        padding: 20,
    },
    containerCommentHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    containerCommentHeaderSort: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    containerCommentHeaderSortItem: {
        paddingLeft: 10,
    },
    containerCommentContent: {
        marginLeft: 50,
    },
    containerCommentLocation: {
        paddingTop: 10,
        paddingBottom: 5,
    },
    containerReplyInput: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#F0F0F0',
        borderRadius: 25,
        margin: 10,
        paddingHorizontal: 10,
    },
    horizontalLine: {
        height: 1,
        backgroundColor: '#F0F0F0', // 수평선 색상
        marginVertical: 10, // 수직 여백
    },
    containerCommentInputRow: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderTopWidth: 1,
        borderTopColor: '#F0F0F0',
        paddingVertical: 5,
        paddingHorizontal: 10,
        gap: 10
    },
    containerCommentInput: {
        flex: 1,
        backgroundColor: '#F0F0F0',
        borderRadius: 30,
        margin: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 5,
        paddingHorizontal: 10,
    },
})