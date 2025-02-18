import moment from "moment";
import React from "react";
import { Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import 'moment/locale/ko';

const postData = [
    {
        id: 1,
        category: '미용',
        title: '젤네일 제거샵 아시는곳있나요?',
        content: '제거만 하고 싶고 저렴한 곳을로 아시는 곳 있나요?',
        location: '역삼동',
        timeCreate: '2025-02-17 10:00:00',
        countView: 30,
        countLike: 1,
    },
    {
        id: 2,
        category: '분실/실종',
        title: '저희 몽이를 찾아요.',
        content: '공원 근처에서 산책하다가 잠시 한눈판 사이에 사라졌어요.\n' + 
                  '<img src="https://i.pravatar.cc/300" />\n' +
                  '<img src="https://i.pravatar.cc/300" />\n' +
                  '<img src="https://i.pravatar.cc/300" />\n' +
                  '<img src="https://i.pravatar.cc/300" />\n' +
                  '<img src="https://i.pravatar.cc/300" />\n' +
                  '<img src="https://i.pravatar.cc/300" />\n' +
                  '<img src="https://i.pravatar.cc/300" />\n' +
                  '<img src="https://i.pravatar.cc/300" />\n' +
                  '<img src="https://i.pravatar.cc/300" />\n' +
                  '<img src="https://i.pravatar.cc/300" />\n',
        location: '역삼동',
        timeCreate: '2025-02-17 10:00:00',
        countView: 30,
        countLike: 3,
    },
    {
        id: 3,
        category: '서초구청 소식',
        title: '동절기 코로나19 추가 접종 안내',
        content: '안녕하세요. 서초구청입니다.\n동절기 코로나19 추가 접종 안내드립니다.',
        location: '역삼동',
        timeCreate: '2025-02-17 10:00:00',
        countView: 30,
        countLike: 1,
    },
];

export default class CarrotTabBoard extends React.Component<any, any> {
    render() {
        const posts = postData.map((post) => {
            // post.content 에서 img 태그를 찾아서 src 목록을 추출
            const images = post.content.match(/<img src="([^"]+)"/g)?.map(img => img.match(/src="([^"]+)"/)[1]);

            return (
                <View key={post.id} style={styles.containerPost}>
                    {!images && (
                        <>
                            <TouchableOpacity onPress={() => {console.log('onclick : ' + post.category)}}>
                                <Text style={[styles.postCategoryBadge, styles.childMargin]}>{post.category}</Text>
                            </TouchableOpacity>
                            <Text style={[styles.postTitle, styles.childMargin]}>{post.title}</Text>
                            <Text style={[styles.postContent, styles.fontColorGray, styles.childMargin]} numberOfLines={1} ellipsizeMode="tail">
                                {post.content}
                            </Text>
                        </>
                    )}
                    {images && (
                        <View style={{flexDirection: 'row'}}>
                            <View style={{flex: 1}}>
                                <TouchableOpacity onPress={() => {console.log('onclick : ' + post.category)}}>
                                    <Text style={[styles.postCategoryBadge, styles.childMargin]}>{post.category}</Text>
                                </TouchableOpacity>
                                <Text style={[styles.postTitle, styles.childMargin]}>{post.title}</Text>
                                <Text style={[styles.postContent, styles.fontColorGray, styles.childMargin]} numberOfLines={1} ellipsizeMode="tail">
                                    {post.content}
                                </Text>
                            </View>
                            <View style={[styles.postImageContainer, {justifyContent: 'flex-end'}]}>
                                <Image source={{uri: images[0]}} style={styles.postImage} />
                                <Text style={styles.postImageCount}>{images.length}</Text>
                            </View>
                        </View>
                    )}
                    
                    <View style={styles.postFooter}>
                        <View style={styles.postFooterLeft}>
                            <Text style={[styles.postFontFooter, styles.fontColorGray]}>{post.location}</Text>
                            <Text style={[styles.postFontFooter, styles.fontColorGray]}> · </Text>
                            <Text style={[styles.postFontFooter, styles.fontColorGray]}>{moment(post.timeCreate).fromNow()}</Text>
                            <Text style={[styles.postFontFooter, styles.fontColorGray]}> · </Text>
                            <Text style={[styles.postFontFooter, styles.fontColorGray]}>조회 {post.countView}</Text>
                        </View>
                        <View style={styles.postFooterRight}>
                            <Text style={[styles.postLike, styles.fontColorGray]}><Icon name="thumb-up-outline" size={20} color="#A0A0A0" /> {post.countLike}</Text>
                        </View>
                    </View>
                </View>
            );
        });
        const categoryList = ['맛집', '병원/약국', '미용', '분실/실종', '서초구청 소식'];
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView horizontal contentContainerStyle={styles.categoryContentContainer}>
                    <TouchableOpacity style={styles.categoryItem}>
                        <Icon name="menu" size={20} color="black" />
                        <Text>주제</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.categoryItem}>
                        <Icon name="fire" size={20} color="#FF6B6B" />
                        <Text>인기글</Text>
                    </TouchableOpacity>
                    {categoryList.map((category) => (
                        <TouchableOpacity key={category} style={styles.categoryItem}>
                            <Text>{category}</Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
                <ScrollView>
                    {posts}
                    {posts}
                    {posts}
                    {posts}
                    {posts}
                    {posts}
                    {posts}
                    {posts}
                    {posts}
                </ScrollView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    },
    categoryContentContainer: {
        paddingVertical: 20,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#F0F0F0',
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
    },
    fontColorGray: {
        color: '#A0A0A0',
    },
    childMargin: {
        marginBottom: 5,
    },
})
