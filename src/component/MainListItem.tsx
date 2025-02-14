import React, { ReactNode } from "react";
import { Image, ImageSourcePropType, StyleSheet, Text, View } from "react-native";

interface MainListItemProps {
  image: ImageSourcePropType|ImageSourcePropType[];
  description: string;
  mainValue?: number;
  subValue?: number;
  onClickItem?: (param: any) => void;    // 아이템 터치 시 호출되는 함수 FIXME: 파라미터 재정의 필요
  rightButton?: ReactNode;
}

/**
 * 메인 아이템
 *  - 메인 아이템은 메인 아이템 컨테이너에 포함되는 아이템이다.
 * 요구사항
 *  - 아이템은 왼쪽 이미지, 중앙 텍스트, 오른쪽 버튼으로 구성된다.
 *    > 이미지는 왼쪽에 배치하며, 1개 또는 최대 2개까지만 표시한다.
 *    > 이미지는 아바타 형태와 일반 형태로 구분한다. 
 *    >텍스트는 두줄 표시되어야 한다. 이 때 텍스트의 상단, 하단의 총 높이는 이미지 1개일 때 높이와 일치해야 한다.
 *      하단 텍스트는 없을 수 있다. 하단 텍스트가 없는 경우 중앙 정렬 한다. 
 *    > 컨테이너와 이미지 까지의 여백은, 이미지 1개 표시되었을 때 '토스뱅크 통장' 아이콘 크기 기준으로, 아이콘 너비의 50% 보다 조금 더 커야 한다. 
 *    > 이미지가 2개 표시되는 경우, 아이템 전체 높이가 이미지 기준으로 높아져야 한다.
 *      즉, 위 또는 아래 아이템과의 폭 차이가 이미지 기준이어야 한다. 
 *    > 이미지가 2개 일 때, 1개일 때 크기보다 88% 작아야 하고 이미지의 25% 크기만큼 앞, 뒤 아이콘의 높이 차이가 발생해야 한다. 
 *    > 상단 텍스트는 하단 텍스트 보다 작아야 한다. 
 *    > 버튼은 오른쪽에 배치한다. 
 *    > 버튼은 최소 2가지 형태를 포함해야 하며, 버튼에 따라 연결되는 링크가 다르다.
 *    > 버튼 내 텍스트 크기는 아이템 상단 텍스트의 86% 이어야 한다.
 *  - 텍스트
 *    > 아이템 상단의 텍스트 크기는 하단 임의 view, 마지막 컨테이너의 모든 텍스트 크기와 동일하다.
 *    > 아이템 상단의 텍스트 크기는 하단 텍스트 크기의 85% 이어야 한다.
 */
export default class MainListItem extends React.Component<MainListItemProps> {
  render() {
    return (
      <View style={styles.container}>
        {!Array.isArray(this.props.image) && 
            <View style={styles.imageContainerSingle}>
            <Image source={this.props.image} style={styles.imageSingle} />
            </View>
        }
        {Array.isArray(this.props.image) && this.props.image.length > 1 && 
          <View style={styles.imageContainerDouble}>
            <Image 
              source={this.props.image[this.props.image.length - 1]} 
              style={[styles.imageDoubleBottom]} 
            />
            <Image 
              source={this.props.image[0]} 
              style={[styles.imageDoubleTop]} 
            />
          </View>
        }
        <View style={styles.textContainer}>
            <Text style={[styles.textDefaultFont, styles.textDescription]}>{this.props.description}</Text>
            {this.props.mainValue && (
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={[styles.textDefaultFont, styles.textMain]}>{this.props.mainValue.toLocaleString() + '원'}</Text>
                    {this.props.subValue && (
                        <Text style={this.props.subValue > 0 ? styles.textSubPlus : styles.textSubMinus}>{this.props.subValue > 0 ? '+' : '-'}{this.props.subValue * 100 + '%'}</Text>
                    )}
                </View>
            )}
        </View>
        {this.props.rightButton}
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 15,
    },
    imageContainerSingle: {
        minWidth: 40,
        minHeight: 40,
        marginRight: 10,
    },
    imageSingle: {
        width: 40,
        height: 40,
    },
    imageContainerDouble: {
        width: 40,
        height: 51,
        marginRight: 10,
        position: 'relative',
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
    textContainer: {
      flex: 1,
      textAlign: 'left',
      flexDirection: 'column',
    },
    textDefaultFont: {
        fontFamily: 'Pretendard-Regular',
    },
    textDescription: {
        textAlign: 'left',
        color: '#A0A0A0',
        fontSize: 15,
    },
    textMain: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    textSubPlus: {
        color: 'red',
        marginLeft: 10,
    },
    textSubMinus: {
        color: 'blue',
        marginLeft: 10,
    },
    buttonDefault: {
      borderRadius: 20,
    },
    buttonContainer: {
        alignItems: 'center',
    },
});  