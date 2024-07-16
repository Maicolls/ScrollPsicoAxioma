import { StyleSheet, Text, View} from 'react-native';
import React,{useState} from 'react';
import data from './src/Data/data';
import RenderItem from './src/Components/RenderItem';
import CustomButton from './src/Components/CustomButton';


const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handlerPress = () => {
    if(currentIndex === data.length - 1) {
      console.log('End');
      return;
    }
    setCurrentIndex(prev => prev + 1);
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
      <CustomButton handlerPress={handlerPress}/>
      <Text style={styles.credit}> By: TypeByte</Text>
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
    color: 'Black',
  },
});