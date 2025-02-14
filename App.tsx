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
import MainAccountItem from './src/component/MainAccountItem';
import MainListItem from './src/component/MainListItem';
const accountData = [
  {
    image: {uri: 'https://i.pravatar.cc/50'},
    description: '토스뱅크 통장',
    mainValue: 150009,
    btnText: '송금',
    btnType: 'default' as const,
  },
  {
    image: {uri: 'https://i.pravatar.cc/50'},
    description: '달려라2030통장',
    mainValue: 73820,
    btnText: '송금',
    btnType: 'default' as const,
  },
]

const combinedInvestData = 
{
  image: [{uri: 'https://i.pravatar.cc/50'}, {uri: 'https://i.pravatar.cc/50'}],
  description: '투자 모아보기 · 8개',
  mainValue: 90000000,
  subValue: 0.125,
}

const consumeData = [
  {
    image: [{uri: 'https://i.pravatar.cc/50'}, {uri: 'https://i.pravatar.cc/50'}],
    description: '이번달 소비',
    mainValue: 125000,
    btnText: '새 내역 1건',
    btnType: 'primary' as const,
  },
  {
    image: {uri: 'https://i.pravatar.cc/50'},
    description: '3월 25일 낼 카드값',
    mainValue: 921000,
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
 *  -첫번째 카드의 폰트 크기는 계좌 액수 글씨보다 8% 커야 한다.
 *  - 화면 상단에는 아이콘을 배치하며, 왼쪽에는 메인 아이콘, 오른쪽에는 터치 가능한 아이콘을 배치한다.
 *    > 배치되는 아이콘은 세로 중앙 정렬하며, 터치 가능한 아이콘은 메인 아이콘 보다 작아야 한다.
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
              <Text>토스뱅크 아이콘</Text>
              <View style={[{flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end'}]}>
                <Text style={{marginRight: 10}}>웃는 아이콘</Text>
                <Text>알림 아이콘</Text>
              </View>
            </View>
            <MainItemContainer style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
              <Text style={[styles.defaultFont, styles.textTitle]}>토스뱅크</Text>
              <Text>></Text> {/* 화살표 아이콘 으로 변경 */}
            </MainItemContainer>
            <MainItemContainer>
              {accountData.map((item) => (
                <MainListItem
                  key={item.description}
                  image={item.image}
                  description={item.description}
                  mainValue={item.mainValue}
                  rightButton={
                    <TouchableOpacity style={styles.buttonSend} onPress={() => {console.log('송금 : ' + item.description)}}>
                      <Text style={styles.buttonSendText}>송금</Text>
                    </TouchableOpacity>
                  }
                />
              ))}
              <MainListItem
                  key={combinedInvestData.description}
                  image={combinedInvestData.image}
                  description={combinedInvestData.description}
                  mainValue={combinedInvestData.mainValue}
                  subValue={combinedInvestData.subValue}
                />
              <View style={styles.horizontalLine} />
              <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                <Text style={[styles.textSmall, styles.textViewAll]}>내 계좌 · 대출 · 증권 · 포인트 보기 ></Text>
              </View>
            </MainItemContainer>
            <MainItemContainer>
              <MainListItem
                image={consumeData[0].image}
                description={consumeData[0].description}
                mainValue={consumeData[0].mainValue}
                rightButton={
                  <TouchableOpacity style={styles.buttonConsumeNew} onPress={() => {console.log('송금 : ' + item.description)}}>
                      <Text style={styles.buttonConsumeText}>새 내역 1건</Text>
                    </TouchableOpacity>
                }
              />
              <View style={styles.horizontalLine} />
              <MainListItem
                image={consumeData[1].image}
                description={consumeData[1].description}
                mainValue={consumeData[1].mainValue}
              />
            </MainItemContainer>
            <MainItemContainer>
              <View style={styles.containerCredit}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Image source={{uri: 'https://i.pravatar.cc/50'}} style={{width: 25, height: 25, marginRight: 10}}/>
                  <Text style={styles.textCredit}>내 신용 점수</Text>
                </View>
                <Text style={{color: '#A0A0A0'}}>></Text>
              </View>
              <View style={styles.horizontalLine} />
              <View style={styles.containerOpen}>
                <Text style={styles.itemOpen}>계좌개설</Text>
                <Text style={styles.itemOpen}>|</Text> {/* | 아이콘 회색 으로 변경 */}
                <Text style={styles.itemOpen}>카드발급</Text>
                <Text style={styles.itemOpen}>|</Text> {/* | 아이콘 회색 으로 변경 */}
                <Text style={styles.itemOpen}>대출받기</Text>
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
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
  },
  horizontalLine: {
    height: 1,
    backgroundColor: '#F0F0F0', // 수평선 색상
    marginVertical: 10, // 수직 여백
    marginBottom: 20,
  },
  defaultFont: {
    fontFamily: 'Pretendard-Regular',
  },
  textTitle: {
    fontSize: 19.4,
    fontWeight: 'bold'
  },
  textSmall: {
    fontSize: 15,
  },
  textViewAll: {
    color: '#A0A0A0'
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
  buttonConsumeNew: {
    backgroundColor: 'lightblue',
    opacity: 0.5,
    marginRight: 0,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonConsumeText: {
    color: '#007BFF',
    fontSize: 13,
  },
  containerCredit: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  textCredit: {
    fontSize: 15,
  },
  containerOpen: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  itemOpen: {
    marginHorizontal: 10,
  }
});
