import { StyleSheet, Text, View } from "react-native";
import React,{useState} from "react";
import data from "./src/Data/Data";
import RenderItem from "./src/Components/RenderItem";


const App = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  return (
    <View style={styles.container}>
      <View>
        {data.map((item, index) => {
          return (
            currentIndex === index && <RenderItem item={item} key={index}/>
          )
        })}
      </View>
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',

  },
});