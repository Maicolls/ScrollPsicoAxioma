import { StyleSheet, Text, useWindowDimensions, View} from 'react-native';
import React,{useState} from 'react';
import data from './src/Data/data';
import RenderItem from './src/Components/RenderItem';
import CustomButton from './src/Components/CustomButton';
import { useSharedValue, withTiming } from 'react-native-reanimated';


const App = () => {
  const {height: SCREEN_HEIGHT} = useWindowDimensions();
  const [currentIndex, setCurrentIndex] = useState(0);
  const buttonVal = useSharedValue(0);
  const handlerPress = () => {
    if(currentIndex === data.length - 1) {
      console.log('End');
      return;
    }
    setCurrentIndex(prev => prev + 1);
    buttonVal.value = withTiming(buttonVal.value  + SCREEN_HEIGHT );
  }

  return (
    <View style={styles.container}>
      <View>
        {data.map((item, index) => {
          return (
            currentIndex === index && <RenderItem item={item} key={index}/>
          )
        })}
      </View>
      <CustomButton handlerPress={handlerPress} buttonVal={buttonVal}/>{/* aca se es llamado el boton con respectivo componente */}
      <Text style={styles.credit}> By: TypeByte</Text>{/* Este es el apartado para la marca espcial de la app donde indica debajo del boton el nombre de la empresa */}
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',

  },
  credit: {/*Esto hace parte del titulo pequeño */
    position: 'absolute',
    bottom: 20,
    color: 'red',
  },
});