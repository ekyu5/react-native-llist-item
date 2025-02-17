/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import MainItemContainer from './src/component/MainItemContainer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AccountBalanceItem from './src/component/AccountBalanceItem';

const accountData = [
  {
    image: 'https://i.pravatar.cc/50',
    title: '토스뱅크 통장',
    balance: 150009,
    description: undefined,
  },
  {
    image: 'https://i.pravatar.cc/50',
    title: '달려라2030통장',
    balance: 73820,
    description: undefined,
  },
]

const combinedInvestData = 
{
  image: ['https://i.pravatar.cc/50', 'https://i.pravatar.cc/50'],
  title: '투자 모아보기 · 8개',
  balance: 90000000,
  description: '+0.125%',
}

const consumeData = [
  {
    image: ['https://i.pravatar.cc/50', 'https://i.pravatar.cc/50'],
    title: '이번달 소비',
    balance: 125000,
    description: undefined,
  },
  {
    image: 'https://i.pravatar.cc/50',
    title: '3월 25일 낼 카드값',
    balance: 921000,
  }
]

/**
 * 메인 화면
 *  - 토스뱅크 앱 메인 화면을 그대로 구현한다.
 * 요구사항
 *  - 메인 화면은 전체 화면으로 표시되어야 하며, 스크롤 가능한 형태로 구현한다.
 *  - 메인 화면은 좌우 여백을 포함해야 하며, 메인 화면에 포함되는 콘텐츠는 별도 여백 없이 배치한다.
 *  - 토스앱의 폰트는 'Toss Product Sans' 인데, 전용 서체로 외부 배포되지 않는다.
 *    https://cho.sh/r/5C159C 에서 'Pretendard' 폰트를 사용하는 것을 권한하여 이를 사용하도록 한다.
 *    폰트 다운로드 링크: https://cactus.tistory.com/306
 *  - status bar는 표시되지 않아야 한다.
 *  - 첫번째 카드의 폰트 크기는 계좌 액수 글씨보다 8% 커야 한다.
 *    오른쪽 chevron-right 아이콘은 폰트 크기의 63% 이어야 한다.
 *  - 화면 상단에는 아이콘을 배치하며, 왼쪽에는 메인 아이콘, 오른쪽에는 터치 가능한 아이콘을 배치한다.
 *    > 배치되는 아이콘은 세로 중앙 정렬하며, 터치 가능한 아이콘은 메인 아이콘 보다 작아야 한다 (79%).
 *    > 오른쪽 터치 아이콘은 터치 시 log 를 출력하도록 한다. 
 *    > 아이콘은 임의 사용한다. 
 *  - 하단에는 4개의 컨테이너를 배치하며, 컨테이너는 내부 아이템을 필수로 포함한다. 
 *  - 컨테이너는 콘텐츠 포함 영역과 하단 영역으로 구분하며, 구분은 수평선으로 구분한다.
 *  - 하단 영역은 아이템을 포함하거나, 임의 view 를 포함한다.
 *    > 하단 영역에 임의 view 를 포함하는 경우, 상하 여백은 아이템 영역의 상하 여백의 88% 수준이어야 한다. 
 *  
 */
export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar hidden={true} />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.container}>
            <View style={[styles.header, {flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}]}>
              <Icon name="meteor" size={38} color="#A0A0A0" />
              <View style={styles.headerRight}>
                <TouchableOpacity onPress={() => {console.log('onclick icon : ' + '행복 모음')}}>
                  <Icon name="emoticon-happy-outline" size={30} color="#A0A0A0" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {console.log('onclick icon : ' + '알림')}}>
                  <Icon name="bell" size={30} color="#A0A0A0" />
                </TouchableOpacity>
              </View>
            </View>
            <MainItemContainer>
              <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}} onPress={() => {console.log('onclick : ' + '토스뱅크')}}>  
                <Text style={[styles.defaultFont, styles.textTitle]}>토스뱅크</Text>
                <Icon name="chevron-right" size={25} color="#A0A0A0" />
              </TouchableOpacity>
            </MainItemContainer>
            <MainItemContainer>
              {accountData.map((item) => (
                <AccountBalanceItem
                  key={item.title}
                  image={Array.isArray(item.image) ? item.image.map(img => ({uri: img})) : {uri: item.image}}
                  imageContainerStyle={Array.isArray(item.image) ? styles.imageContainer : styles.avatar}
                  title={item.title}
                  description={item?.description}
                  balance={item.balance.toLocaleString() + '원'}
                  balanceStyle={styles.textBalance}
                  right={
                    <TouchableOpacity style={styles.buttonSend} onPress={() => {console.log('onclick : ' + item.title)}}>
                      <Text style={styles.buttonSendText}>송금</Text>
                    </TouchableOpacity>
                  }
                />
              ))}
              <AccountBalanceItem
                key={combinedInvestData.description}
                image={Array.isArray(combinedInvestData.image) ? combinedInvestData.image.map(img => ({uri: img})) : {uri: combinedInvestData.image}}
                imageContainerStyle={[styles.avatar, styles.imageContainer]}
                description={combinedInvestData.description}
                descriptionStyle={styles.textDescription}
                title={combinedInvestData.title}
                balance={combinedInvestData.balance.toLocaleString() + '원'}
              />
              <View style={styles.horizontalLine} />
              <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}} onPress={() => {console.log('onclick : ' + '내 계좌 · 대출 · 증권 · 포인트 보기')}}>
                <Text style={[styles.defaultFont, styles.textSmall, styles.textViewDetail]}>내 계좌 · 대출 · 증권 · 포인트 보기</Text>
                <Icon name="chevron-right" size={25} color="#A0A0A0" />
              </TouchableOpacity>
            </MainItemContainer>
            <MainItemContainer>
              <AccountBalanceItem
                image={Array.isArray(consumeData[0].image) ? consumeData[0].image.map(img => ({uri: img})) : {uri: consumeData[0].image}}
                imageContainerStyle={[styles.imageContainer, styles.imageBorder]}
                title={consumeData[0].title}
                balance={consumeData[0].balance.toLocaleString() + '원'}
                description={consumeData[0].description}
                right={
                  <TouchableOpacity style={styles.buttonConsume} onPress={() => {console.log('onclick : ' + consumeData[0].title)}}>
                    <Text style={styles.buttonConsumeText}>새 내역 1건</Text>
                  </TouchableOpacity>
                }
              />
              <View style={styles.horizontalLine} />
              <AccountBalanceItem
                image={Array.isArray(consumeData[1].image) ? consumeData[1].image.map(img => ({uri: img})) : {uri: consumeData[1].image}}
                imageContainerStyle={[styles.imageBorder]}
                title={consumeData[1].title}
                balance={consumeData[1].balance.toLocaleString() + '원'}
                description={consumeData[1].description}
              />
            </MainItemContainer>
            <MainItemContainer>
              <View style={styles.containerCredit}>
                <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}} onPress={() => {console.log('onclick : ' + '내 신용 점수')}}>
                  <Icon name="progress-check" size={25} />
                  <Text style={[styles.defaultFont, styles.textCredit]}>내 신용 점수</Text>
                </TouchableOpacity>
                <Icon name="chevron-right" size={25} color="#A0A0A0" />
              </View>
              <View style={styles.horizontalLine} />
              <View style={styles.containerOpen}>
                <TouchableOpacity onPress={() => {console.log('onclick : ' + '계좌개설')}}>
                  <Text style={[styles.defaultFont, styles.itemOpen]}>계좌개설</Text>
                </TouchableOpacity>
                <Icon name="power-on" size={25} color="#F0F0F0" />
                <TouchableOpacity onPress={() => {console.log('onclick : ' + '카드발급')}}>
                  <Text style={[styles.defaultFont, styles.itemOpen]}>카드발급</Text>
                </TouchableOpacity>
                <Icon name="power-on" size={25} color="#F0F0F0" />
                <TouchableOpacity onPress={() => {console.log('onclick : ' + '대출받기')}}>
                  <Text style={[styles.defaultFont, styles.itemOpen]}>대출받기</Text>
                </TouchableOpacity>
              </View>
            </MainItemContainer>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 10,
    marginHorizontal: 20,
  },
  headerRight: {
    width: 80,
    marginHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
  },
  horizontalLine: {
    height: 1,
    backgroundColor: '#F0F0F0', // 수평선 색상
    marginVertical: 20, // 수직 여백
  },
  defaultFont: {
    fontFamily: 'Pretendard-SemiBold',
  },
  textTitle: {
    fontSize: 19.4,
    fontWeight: 'bold'
  },
  textDescription: {
    color: '#D44950',
    fontSize: 13,
  },
  textChevronRight: {
    fontSize: 19.4 * 0.63,
  },
  textSmall: {
    fontSize: 15,
  },
  textViewDetail: {
    color: '#6C757D'
  },
  buttonSend: {
    backgroundColor: '#F0F0F0',
    marginRight: 0,
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 13,
  },
  buttonSendText: {
    fontSize: 13,
  },
  buttonConsume: {
    backgroundColor: 'lightblue',
    marginRight: 0,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonConsumeText: {
    color: '#0099FF',
    fontSize: 13,
  },
  containerCredit: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  textBalance: {
    marginBottom: 20,
  },
  textCredit: {
    fontSize: 15,
    marginLeft: 5,
  },
  containerOpen: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  itemOpen: {
    fontSize: 15,
    marginHorizontal: 10,
  },
  avatar: {
    borderRadius: 20,
    overflow: 'hidden',
  },
  imageContainer: {
    height: 50,
    width: 40,
    overflow: 'hidden',
  },
  imageBorder: {
    borderRadius: 10,
    overflow: 'hidden',
  },
});
