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
  StyleSheet,
  Text,
  View,
} from 'react-native';

import MainItemContainer from './src/component/MainItemContainer';
import MainAccountItem from './src/component/MainAccountItem';

const accountData = [
  {
    image: ['https://i.pravatar.cc/50'],
    imageType: 'avatar' as const,
    description: '토스뱅크 통장',
    mainValue: 150009,
    btnText: '송금',
    btnType: 'default' as const,
  },
  {
    image: ['https://i.pravatar.cc/50'],
    imageType: 'avatar' as const,
    description: '달려라2030통장',
    mainValue: 73820,
    btnText: '송금',
    btnType: 'default' as const,
  },
  {
    image: ['https://i.pravatar.cc/50', 'https://i.pravatar.cc/50'],
    imageType: 'avatar' as const,
    description: '투자 모아보기 · 8개',
    mainValue: 90000000,
    subValue: 0.125,
  }
]

const consumeData = [
  {
    image: ['https://i.pravatar.cc/50', 'https://i.pravatar.cc/50'],
    imageType: 'icon' as const,
    description: '이번달 소비',
    mainValue: 125000,
    btnText: '새 내역 1건',
    btnType: 'primary' as const,
  },
  {
    image: ['https://i.pravatar.cc/50'],
    imageType: 'icon' as const,
    description: '3월 25일 낼 카드값',
    mainValue: 921000,
  }
]
export default class App extends React.Component {
  render() {

    return (
      <SafeAreaView style={styles.container}>
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
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>토스뱅크</Text>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>></Text> {/* 화살표 아이콘 으로 변경 */}
            </MainItemContainer>
            <MainItemContainer>
              {accountData.map((item) => (
                <MainAccountItem
                  image={item.image}
                  imageType={item.imageType}
                  description={item.description}
                  mainValue={item.mainValue}
                  btnText={item.btnText}
                  btnType={item.btnType}
                  subValue={item.subValue}
                />
              ))}
              <View style={styles.horizontalLine} />
              <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{color: '#A0A0A0'}}>내 계좌 · 대출 · 증권 · 포인트 보기 ></Text>
              </View>
            </MainItemContainer>
            <MainItemContainer>
              <MainAccountItem
                image={consumeData[0].image}
                imageType={consumeData[0].imageType}
                description={consumeData[0].description}
                mainValue={consumeData[0].mainValue}
                btnText={consumeData[0].btnText}
                btnType={consumeData[0].btnType}
              />
              <View style={styles.horizontalLine} />
              <MainAccountItem
                image={consumeData[1].image}
                imageType={consumeData[1].imageType}
                description={consumeData[1].description}
                mainValue={consumeData[1].mainValue}
              />
            </MainItemContainer>
            <MainItemContainer>
              <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Image source={{uri: 'https://i.pravatar.cc/50'}} style={{width: 25, height: 25, marginRight: 10}}/>
                  <Text>내 신용 점수</Text>
                </View>
                <Text style={{color: '#A0A0A0'}}>></Text>
              </View>
              <View style={styles.horizontalLine} />
              <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 10}}>
                <Text style={{marginHorizontal: 10}}>계좌개설</Text>
                <Text style={{marginHorizontal: 10}}>|</Text>
                <Text style={{marginHorizontal: 10}}>카드발급</Text>
                <Text style={{marginHorizontal: 10}}>|</Text>
                <Text style={{marginHorizontal: 10}}>대출받기</Text>
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
  },
});
