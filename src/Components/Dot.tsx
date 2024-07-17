import { Share, StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import React from 'react'
import Animated, { interpolate, interpolateColor, SharedValue, useAnimatedStyle } from 'react-native-reanimated';
import { Extrapolate } from '@shopify/react-native-skia';

type Props = { 
    index: number;
    buttonVal: SharedValue<number>;
};

const Dot = ({index, buttonVal}: Props) => {
    const {height: SCREEN_HEIGHT} = useWindowDimensions();

    const animatedDotStyle = useAnimatedStyle(() => {
        const widthAnimation = interpolate(
            buttonVal.value,
            [
                (index - 1) * SCREEN_HEIGHT,
                index * SCREEN_HEIGHT,
                (index + 1) * SCREEN_HEIGHT,
            ],
            [10,30,10],
            Extrapolate.CLAMP
        )

        const opacityAnimation = interpolate(
            buttonVal.value,
            [
                (index - 1) * SCREEN_HEIGHT,
                index * SCREEN_HEIGHT,
                (index + 1) * SCREEN_HEIGHT,
            ],
            [0.5,1,0.5],
            Extrapolate.CLAMP
        )


        return {
            width: widthAnimation,
            opacity: opacityAnimation,
        };
    }); 

    const animatedColor= useAnimatedStyle(() => {
        const backgroundColor = interpolateColor(
            buttonVal.value,
            [0,SCREEN_HEIGHT, 3 * SCREEN_HEIGHT],
            ['#fd94b2', '#f8dac2', '#154f40', '#F4340B']
        );
        return {
            backgroundColor: backgroundColor,
        };
    });
  return (
    <Animated.View style={[styles.dot, animatedColor, animatedDotStyle]} />
  );
};

export default Dot

const styles = StyleSheet.create({
    dot: {
        height: 10,
        width: 12,
        backgroundColor: 'black',
        marginHorizontal: 5,
        borderRadius: 5,
        bottom: -10,
    },
});