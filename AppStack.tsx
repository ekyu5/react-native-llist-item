import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TossMain from './src/screen/TossMain';
import TossMonthlyRevenue from './src/screen/TossMonthlyExpenditure';
import CarrotUserMain from './src/screen/CarrotUserMain';
import CarrotPost from './src/screen/CarrotPost';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Text, TouchableOpacity } from 'react-native';
import { NavigationProp } from '@react-navigation/native';

export interface NavProps {
  navigation: NavigationProp<any>;
  route?: any;
}

export enum PageName {
  TossMain = 'TossMain',
  TossMonthlyRevenue = 'TossMonthlyRevenue',
  CarrotUserMain = 'CarrotUserMain',
  CarrotPost = 'CarrotPost',
}

const Stack = createNativeStackNavigator();
export const AppStack = () => {
  return (
    <Stack.Navigator initialRouteName={PageName.TossMain}
                      screenOptions={{
                        // headerTransparent: true, // 배경 투명
                        headerStyle: {
                          // backgroundColor: 'transparent', // 헤더 배경 투명
                        },
                      }}
    >
      <Stack.Screen name={PageName.TossMain} component={TossMain} options={{headerShown: false}} />
      <Stack.Screen
        name={PageName.TossMonthlyRevenue}
        component={TossMonthlyRevenue}
        options={({ navigation }) => ({
          headerTitle: '',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Icon name="chevron-left" size={40} color="#6C757D" />
            </TouchableOpacity>
          ),
          headerRight: () => <Text>편집</Text>,
          headerStyle: {
            backgroundColor: '#FFFFFF', // 헤더 배경색 설정
          },
          headerTransparent: true, // 헤더를 투명하게 설정
        })}
      />
      <Stack.Screen
        name={PageName.CarrotUserMain}
        component={CarrotUserMain}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name={PageName.CarrotPost} component={CarrotPost} />
    </Stack.Navigator>
  );
}