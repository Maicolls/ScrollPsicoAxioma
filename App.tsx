import {
  PixelRatio,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import React, { useRef, useState } from 'react';
import data from './src/Data/data';
import RenderItem from './src/Components/RenderItem';
import CustomButton from './src/Components/CustomButton';
import {
  Canvas,
  Circle,
  Group,
  Image,
  Mask,
  SkImage,
  makeImageFromView,
} from '@shopify/react-native-skia';
import { useSharedValue, withTiming } from 'react-native-reanimated';
import Pagination from './src/Components/Pagination';

const App = () => {
  const pd = PixelRatio.get();
  const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = useWindowDimensions();
  const ref = useRef(null);
  const [active, setActive] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [overlay, setOverlay] = useState<SkImage | null>(null);
  const mask = useSharedValue(0);
  const buttonVal = useSharedValue(0);

;
  const wait = async (ms: number) =>
    new Promise(resolve => setTimeout(resolve, ms));

  const handlePress = async () => {
    if (currentIndex === data.length - 1 && !active) {
      console.log('Accion Final');
      return;
    }
    if (!active) {
      setActive(true);

      const snapshot1 = await makeImageFromView(ref);
      setOverlay(snapshot1);
      await wait(80);

      setCurrentIndex(prev => prev + 1);
      mask.value = withTiming(SCREEN_HEIGHT, { duration: 1000 });
      buttonVal.value = withTiming(buttonVal.value + SCREEN_HEIGHT);
      await wait(1000);

      setOverlay(null);
      mask.value = 0;
      setActive(false);
    }
  };
  return (
    <View style={styles.container}>
      <View ref={ref} collapsable={false}>
        {data.map((item, index) => {
          return (
            currentIndex === index && <RenderItem item={item} key={index} />
          );
        })}
      </View>
      {overlay && (
        <Canvas style={StyleSheet.absoluteFill} pointerEvents={'none'}>
          <Mask
            mode="luminance"
            mask={
              <Group>
                <Circle
                  cx={SCREEN_WIDTH / 2}
                  cy={SCREEN_HEIGHT - 160}
                  r={SCREEN_HEIGHT}
                  color="white"
                />
                <Circle
                  cx={SCREEN_WIDTH / 2}
                  cy={SCREEN_HEIGHT - 160}
                  r={mask}
                  color="black"
                />
              </Group>
            }>
            <Image
              image={overlay}
              x={0}
              y={0}
              width={overlay.width() / pd}
              height={overlay.height() / pd}
            />
          </Mask>
        </Canvas>
      )}
      <CustomButton handlerPress={handlePress} buttonVal={buttonVal} />
      <Pagination data={data} buttonVal={buttonVal} />
      <Text style={styles.credit}>© TypeByte Ⓡ 2024</Text>
    </View>
  );
};

export default App;


 {/* Este es el css que se le da a los botones que se le dan a la paginacion de los scroll 
  el container es el contenedor de la paginacion el color del mismo
  el credit es para el footer*/}

const styles = StyleSheet.create({
  container: { 
    alignItems: 'center', 
    flex: 1,
  },
  credit: {
    bottom: 12,
    color: 'white', 
    position: 'absolute',
    fontSize: 14,
  },
});