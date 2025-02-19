import moment from "moment";
import React from "react";
import { Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {Flame, Menu, ThumbsUp} from 'lucide-react-native';

import 'moment/locale/ko';
import { NavProps, PageName } from "../../../AppStack";

const postData = [
    {
        id: 1,
        category: '미용',
        title: '젤네일 제거샵 아시는곳있나요?',
        content: '<html><body><p>제거만 하고 싶고 저렴한 곳을로 아시는 곳 있나요?</p></body></html>',
        location: '역삼동',
        timeCreate: '2025-02-17 10:00:00',
        countView: 30,
        countLike: 1,
        writer: {
            avatar: 'https://i.pravatar.cc/300',
            name: '홍길동',
            location: '역삼동',
            countLocationAuth: 10,
        },
    },
    {
        id: 2,
        category: '분실/실종',
        title: '저희 몽이를 찾아요.',
        content: '<html><body><p>공원 근처에서 산책하다가 잠시 한눈판 사이에 사라졌어요.<br>\n' + 
                  '<img src="https://i.pravatar.cc/300" /><br>\n' +
                  '<img src="https://i.pravatar.cc/300" /><br>\n' +
                  '<img src="https://i.pravatar.cc/300" /><br>\n' +
                  '<img src="https://i.pravatar.cc/300" /><br>\n' +
                  '<img src="https://i.pravatar.cc/300" /><br>\n' +
                  '<img src="https://i.pravatar.cc/300" /></p></body></html>',
        location: '역삼동',
        timeCreate: '2025-02-17 10:00:00',
        countView: 30,
        countLike: 3,
        writer: {
            avatar: 'https://i.pravatar.cc/300',
            name: '브리치즈',
            location: '역삼동',
            countLocationAuth: 10,
        },
    },
    {
        id: 3,
        category: '서초구청 소식',
        title: '동절기 코로나19 추가 접종 안내',
        content: '<html><body><p>안녕하세요. 서초구청입니다.<br>\n' +
                  '동절기 코로나19 추가 접종 안내드립니다.</p></body></html>',
        location: '역삼동',
        timeCreate: '2025-02-17 10:00:00',
        countView: 30,
        countLike: 1,
        writer: {
            avatar: 'https://i.pravatar.cc/300',
            name: '홍길동',
            location: '역삼동',
            countLocationAuth: 10,
        },
    },
    {
        id: 4,
        category: '맛집',
        title: '당근마트 주변 맛집 알려주세요!',
        content: '<html><body><p>이사온지 얼마 안돼서 맛집 추천 너무너무 간절해요ㅠ</p></body></html>',
        location: '역삼동',
        timeCreate: '2025-02-17 10:00:00',
        countView: 30,
        countLike: 1,
        writer: {
            avatar: 'https://i.pravatar.cc/300',
            name: '홍길동',
            location: '역삼동',
            countLocationAuth: 10,
        },
    }
];

const categoryList = ['맛집', '병원/약국', '미용', '분실/실종', '서초구청 소식'];

interface CarrotTabBoardProps extends NavProps {
}

export default class CarrotTabBoard extends React.Component<CarrotTabBoardProps> {
    renderItem(post: any) {
        const imgTags = post.content.match(/<img[^>]*>/g);
        console.log('imgTags : ', imgTags);
        const images = imgTags?.map((img: string) => img.match(/src="([^"]+)"/)?.[1]);
        console.log('images : ', images);

        let postContent;
        if (!images || images.length === 0) {
            postContent = (
                <>
                    <TouchableOpacity onPress={() => {console.log('onclick : ' + post.category)}}>
                        <Text style={[styles.postCategoryBadge, styles.childMargin]}>{post.category}</Text>
                    </TouchableOpacity>
                    <Text style={[styles.postTitle, styles.childMargin]}>{post.title}</Text>
                    <Text style={[styles.postContent, styles.fontColorGray, styles.childMargin]} numberOfLines={1} ellipsizeMode="tail">
                        {post.content.replace(/<[^>]+>/g, '')}
                    </Text>
                </>
            );
        } else {
            postContent = (
                <View style={{flexDirection: 'row'}}>
                    <View style={{flex: 1}}>
                        <TouchableOpacity onPress={() => {console.log('onclick : ' + post.category)}}>
                            <Text style={[styles.postCategoryBadge, styles.childMargin]}>{post.category}</Text>
                        </TouchableOpacity>
                        <Text style={[styles.postTitle, styles.childMargin]}>{post.title}</Text>
                        <Text style={[styles.postContent, styles.fontColorGray, styles.childMargin]} numberOfLines={1} ellipsizeMode="tail">
                            {post.content.replace(/<[^>]+>/g, '')}
                        </Text>
                    </View>
                    <View style={[styles.postImageContainer, {justifyContent: 'flex-end'}]}>
                        <Image source={{uri: images[0]}} style={styles.postImage} />
                        <Text style={styles.postImageCount}>{images.length}</Text>
                    </View>
                </View>
            );
        }
        return (
            <TouchableOpacity key={post.id} style={styles.containerPost} onPress={() => {this.props.navigation.navigate(PageName.CarrotPost, {post: post})}}>
                {postContent}
                <View style={styles.postFooter}>
                    <View style={styles.postFooterLeft}>
                        <Text style={[styles.postFontFooter, styles.fontColorGray]}>{post.location}</Text>
                        <Text style={[styles.postFontFooter, styles.fontColorGray]}> · </Text>
                        <Text style={[styles.postFontFooter, styles.fontColorGray]}>{moment(post.timeCreate).fromNow()}</Text>
                        <Text style={[styles.postFontFooter, styles.fontColorGray]}> · </Text>
                        <Text style={[styles.postFontFooter, styles.fontColorGray]}>조회 {post.countView}</Text>
                    </View>
                    <View style={styles.postFooterRight}>
                        <Text style={[styles.postLike, styles.fontColorGray]}>
                            <ThumbsUp size={20} color="#A0A0A0" strokeWidth={1} />
                            
                        </Text>
                        <Text style={[styles.postLike, styles.fontColorGray]}>
                            {post.countLike}
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView horizontal contentContainerStyle={styles.categoryContentContainer}>
                    <TouchableOpacity style={styles.categoryItem}>
                        <Menu size={20} color="black" strokeWidth={1} />
                        <Text>주제</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.categoryItem}>
                        <Flame size={20} color="#FF6B6B" strokeWidth={1} />
                        <Text>인기글</Text>
                    </TouchableOpacity>
                    {categoryList.map((category) => (
                        <TouchableOpacity key={category} style={styles.categoryItem}>
                            <Text>{category}</Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
                <ScrollView nestedScrollEnabled={true}>
                    {postData.map((post) => this.renderItem(post))}
                    {postData.map((post) => this.renderItem(post))}
                </ScrollView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    categoryContentContainer: {
        paddingVertical: 20,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#F0F0F0',
        gap: 10,
    },
    categoryItem: {
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#F0F0F0',
        borderRadius: 20,
        paddingHorizontal: 10,
        paddingVertical: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        height: 40,
        gap: 5
    },
    containerPost: {
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#F0F0F0',
    },
    containerPostWighImage: {
        flexDirection: 'row',
    },
    postImageContainer: {
        width: 85,
        height: 85,
        position: 'relative',
    },
    postCategoryBadge: {
        fontSize: 11,
        color: '#808080',
        backgroundColor: '#F0F0F0',
        borderRadius: 5,
        paddingHorizontal: 5,
        paddingVertical: 5,
        alignSelf: 'flex-start',
    },
    postTitle: {
        fontSize: 15,
    },
    postContent: {
        fontSize: 13,
    },
    postImage: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
    },
    postImageCount: {
        position: 'absolute',
        top: 0,
        left: 0,
        backgroundColor: 'black',
        color: 'white',
        fontSize: 12,
        padding: 5,
        borderTopLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    postFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 5,
    },
    postFooterLeft: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    postFooterRight: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    postFontFooter: {
        fontSize: 12,
    },
    postLike: {
        fontSize: 15,
        alignItems: 'center',
    },
    fontColorGray: {
        color: '#A0A0A0',
    },
    childMargin: {
        marginBottom: 5,
    },
})
