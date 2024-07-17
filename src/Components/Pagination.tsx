import { StyleSheet, View, Text, Share } from 'react-native'
import React from 'react'
import { OnboardingData } from '../Data/data';
import { SharedValue } from 'react-native-reanimated';
import Dot from './Dot';

type Props = {
    data: OnboardingData[];
    buttonVal: SharedValue<number>;
};

const Pagination = ({data, buttonVal}: Props) => {
  return (
    <View style={styles.PaginationContainer}>
        {data.map((_, index) => {
            return <Dot index={index}  buttonVal={buttonVal} key={index}/>
        })}
    </View>
  );
};

export default Pagination;

const styles = StyleSheet.create({
    PaginationContainer: {
        position: 'absolute',
        bottom: 70,
        flexDirection: 'row',
    },
});