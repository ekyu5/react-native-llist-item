import React from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const monthlyData = [
    {
        month: 1,
        expenditure: 100000,
    },
    {
        month: 2,
        expenditure: 200000,
    },
    {
        month: 3,
        expenditure: 300000,
    },
    {
        month: 4,
        expenditure: 400000,
    },
    {
        month: 5,
        expenditure: 5010000,
    },
    {
        month: 6,
        expenditure: 5120000,
    },
    {
        month: 7,
        expenditure: 700000,
    },
    {
        month: 8,
        expenditure: 800000,
    },
    {
        month: 9,
        expenditure: 900000,
    },
    {
        month: 10,
        expenditure: 1000000,
    },
    {
        month: 11,
        expenditure: 1100000,
    },
    {
        month: 12,
        expenditure: 1200000,
    },
]

const dailyeData = [
    {
        date: '2025-01-01',
        expenditure: 10000,
        revenue: 100000,
    },
    {
        date: '2025-01-02',
        expenditure: 20000,
        revenue: 200000,
    },
    {
        date: '2025-01-03',
        expenditure: 30000,
        revenue: 300000,
    },
    {
        date: '2025-01-04',
        expenditure: 40000,
        revenue: 400000,
    },
    {
        date: '2025-01-05',
        expenditure: 50000,
        revenue: 500000,
    },
    {
        date: '2025-01-06',     
        expenditure: 60000,
        revenue: 600000,
    },
    {
        date: '2025-01-07',
        expenditure: 70000,
        revenue: 700000,
    },
    {
        date: '2025-01-08',
        expenditure: 80000,
        revenue: 800000,
    },
    {
        date: '2025-01-09',
        expenditure: 90000,
        revenue: 900000,
    },
    {
        date: '2025-01-10',
        expenditure: 100000,
        revenue: 1000000,
    },
    {
        date: '2025-01-11',
        expenditure: 110000,
        revenue: 1100000,
    },
    {
        date: '2025-01-12',
        expenditure: 120000,
        revenue: 1200000,
    },
    {
        date: '2025-01-13',
        expenditure: 130000,
        revenue: 1300000,
    },
    {
        date: '2025-01-14',
        expenditure: 140000,
        revenue: 1400000,
    },
    {
        date: '2025-01-15',
        expenditure: 150000,
        revenue: 1500000,
    },
    {
        date: '2025-01-16',
        expenditure: 160000,
        revenue: 1600000,
    },
    {
        date: '2025-01-17',
        expenditure: 170000,
        revenue: 1700000,
    },
    {
        date: '2025-01-18',
        expenditure: 180000,
        revenue: 1800000,
    },
    {
        date: '2025-01-19',
        expenditure: 190000,
        revenue: 1900000,
    },
    {
        date: '2025-01-20',
        expenditure: 200000,
        revenue: 2000000,
    },
    {
        date: '2025-01-21',
        expenditure: 210000,
        revenue: 2100000,
    },
    {
        date: '2025-01-22',
        expenditure: 220000,
        revenue: 2200000,
    },
    {
        date: '2025-01-23',
        expenditure: 230000,
        revenue: 2300000,
    },
    {
        date: '2025-01-24',
        expenditure: 240000,
        revenue: 2400000,
    },
    {
        date: '2025-01-25',
        expenditure: 250000,
        revenue: 2500000,
    },
    {
        date: '2025-01-26',
        expenditure: 260000,
        revenue: 2600000,
    },  
    {
        date: '2025-01-27',
        expenditure: 270000,
        revenue: 2700000,
    },
    {
        date: '2025-01-28',
        expenditure: 280000,
        revenue: 2800000,
    },
    {
        date: '2025-01-29',
        expenditure: 290000,
        revenue: 2900000,
    },
    {
        date: '2025-01-30',
        expenditure: 300000,
        revenue: 3000000,
    },
    {
        date: '2025-01-31',
        expenditure: 310000,
        revenue: 3100000,
    },
]

class MyExpenditureState {
    selectedMonth: number = 0;
    selectedYear: number = 0;
    selectedDay: number = 0;
    numberOfDaysInMonth: number = 0;
}

export default class TossTabMyExpenditure extends React.Component<any, MyExpenditureState> {
    state = {
        selectedMonth: new Date().getMonth() + 1,
        selectedYear: new Date().getFullYear(),
        selectedDay: new Date().getDate(),
        numberOfDaysInMonth: new Date(new Date().getFullYear(), new Date().getMonth(), 0).getDate(),
    }

    generateCalendar(year: number, month: number) {
        const firstDay = new Date(year, month, 1).getDay(); // 이번 달 첫 날 요일 (0: 일요일 ~ 6: 토요일)
        const totalDays = new Date(year, month, 0).getDate(); // 이번 달 총 일 수
        console.log('totalDays : ' + totalDays)
        const calendar = [];
        for (let i = 0; i < firstDay; i++) {
          calendar.push({ key: `empty-${i}`, day: null }); // 첫 주 빈칸
        }
        for (let i = 1; i <= totalDays; i++) {
          calendar.push({ key: `${year}-${month + 1}-${i}`, day: i }); // 실제 날짜
        }
        for (let i = 0; i < 7 - (totalDays + firstDay) % 7; i++) {
            calendar.push({ key: `empty-${i}`, day: null });
        }
        return calendar;
      };
    
    toNextMonth() {
        this.setState({
            selectedMonth: this.state.selectedMonth + 1,
        });
    }

    toPreviousMonth() {
        this.setState({
            selectedMonth: this.state.selectedMonth - 1,
        });
    }

    render() {
        const selectedMonth = monthlyData.find(data => data.month === this.state.selectedMonth);

        return (
            <SafeAreaView style={[styles.container]}>
                <View>
                    <View style={styles.monthSelect}>
                        <TouchableOpacity onPress={this.toPreviousMonth.bind(this)}>   
                            <Icon name="menu-left" size={30} color="#A0A0A0" />
                        </TouchableOpacity>
                        <Text style={[styles.defaultFont, styles.textSelectedMonth]}>{this.state.selectedMonth}월</Text>
                        <TouchableOpacity onPress={this.toNextMonth.bind(this)}>
                            <Icon name="menu-right" size={30} color="#A0A0A0" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.containerMonthExpenditure}>
                        <View style={styles.containerExpenditureValue}>
                            <Text style={[styles.defaultFont, styles.textExpenditure]}>
                                {selectedMonth?.expenditure.toLocaleString() + '원'}
                                <Icon name="chevron-down" size={20} />
                            </Text>
                            <Text style={[styles.defaultFont, styles.textExpenditureDescription]}>
                                지난달 보다 <Text style={[styles.defaultFont, { color: '#D44950' }]}>11만원</Text> 더 쓰고 있어요
                            </Text>
                        </View>
                        <TouchableOpacity style={styles.buttonAnalysis}>
                            <Text style={[styles.defaultFont, styles.buttonAnalysisText]}>분석 전체보기</Text>
                            <Icon name="chevron-right" size={20} />
                        </TouchableOpacity>
                        {/* FIXME 차트 추가 */}
                        <View style={styles.expenditureChart} />
                    </View>
                    <View style={styles.containerExpenditureMainCategory}>
                        <View style={styles.containerExpenditureMainCategoryDescription}>
                            <Icon name="chart-pie" size={20} />
                            <Text style={[styles.defaultFont, styles.textExpenditureMainCategoryDescription]}>
                                <Text style={[styles.textExpenditureMainCategory]}>의료·건강·피트니스</Text>에 많이 쓰는 중
                            </Text>
                        </View>
                        <Icon name="chevron-right" size={20} color="#A0A0A0" />
                    </View>
                    <View style={styles.horizontalLine} />
                    <View style={styles.containerCalendar}>
                        <View style={styles.weekRow}>
                            {['일', '월', '화', '수', '목', '금', '토'].map((day) => (
                                <Text key={day} style={styles.weekDay}>{day}</Text>
                            ))}
                        </View>

                        <FlatList
                            style={{width: '100%'}}
                            data={this.generateCalendar(this.state.selectedYear, this.state.selectedMonth)}
                            numColumns={7}
                            columnWrapperStyle={{justifyContent: 'space-between'}}
                            contentContainerStyle={{width: '100%'}}
                            keyExtractor={(item) => item.key}
                            renderItem={({ item }) => (
                                <TouchableOpacity 
                                    style={[styles.containerCalendarDay]} 
                                    onPress={() => console.log(item.day)}
                                    disabled={!item.day}
                                >
                                    <View style={[styles.dayCircle, item.day === this.state.selectedDay ? styles.selectedDay : null]}>
                                        <Text style={[styles.defaultFont, item.day ? styles.dayText : undefined]}>{item.day || ''}</Text>
                                    </View>
                                </TouchableOpacity>
                            )}
                        />
                    </View>
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: '#FFFFFF',
    },
    monthSelect: {
        paddingTop: 30,
        width: 90,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    defaultFont: {
        fontFamily: 'Pretendard-SemiBold',
    },
    textSelectedMonth: {
        textDecorationLine: 'underline',
    },
    containerMonthExpenditure: {
        paddingTop: 10,
        position: 'relative',
        height: 160,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    containerExpenditureValue: {
        flexDirection: 'column',
    },
    buttonAnalysis: {
        width: 120,
        padding: 10,
        paddingHorizontal: 15,
        borderRadius: 20,
        backgroundColor: '#F0F0F0',
        flexDirection: 'row',
        alignItems: 'center',

    },
    buttonAnalysisText: {
        fontSize: 13,
        marginRight: 5,
    },
    textExpenditure: {
        fontSize: 25,
        fontWeight: 'bold',
        flexDirection: 'row',
        alignItems: 'center',
    },
    textExpenditureDescription: {
        paddingTop: 10,
        fontSize: 13,
        color: '#A0A0A0',
    },
    expenditureChart: {
        width: 185,
        height: 80,
        backgroundColor: 'red',
        opacity: 0.5,
        position: 'absolute',
        right: 0,
        bottom: 15,
    },
    containerExpenditureMainCategory: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    containerExpenditureMainCategoryDescription: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 10,
    },
    textExpenditureMainCategoryDescription: {
        fontSize: 13,
        marginLeft: 10,
    },
    textExpenditureMainCategory: {
        color: '#0099FF',
    },
    horizontalLine: {
        height: 1,
        backgroundColor: '#F0F0F0',
        marginVertical: 20,
    },
    containerCalendar: {
        width: '100%',
    },
    weekRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    weekDay: {
        fontSize: 15,
        color: '#A0A0A0',
        marginHorizontal: 10,
        marginBottom: 40,
    },
    containerCalendarDay: {
        width: 30,
        height: 70,
        alignItems: 'center',
    },
    selectedDay: {
        borderRadius: 15,
        backgroundColor: '#F0F0F0',
    },
    dayCircle: {
        width: 30,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    dayText: {
        fontSize: 17, 
        color: '#000000',
    },
});
