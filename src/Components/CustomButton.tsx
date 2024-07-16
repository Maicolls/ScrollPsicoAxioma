import { StyleSheet, TouchableWithoutFeedback, Text, View, Image} from 'react-native'
import React from 'react'



type Props = {
    handlerPress: () => void;
}

const CustomButton = ({handlerPress}: Props) => {
  return (
    <TouchableWithoutFeedback onPress={handlerPress}>
        <View style={styles.container}>
            <Image source={require('../images/Flechitauwu.png')} />
        </View>
    </TouchableWithoutFeedback>
  )
}

export default CustomButton

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        zIndex: 1,
        bottom: 40,
        width: 120,
        height: 120,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
    }
})