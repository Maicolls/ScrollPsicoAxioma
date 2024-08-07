/* import {Image, StyleSheet, Text, View, useWindowDimensions} from 'react-native';
import React from 'react';
import {OnboardingData} from '../Data/data';

type Props = {
  item: OnboardingData;
};

const RenderItem = ({item}: Props) => {
  const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = useWindowDimensions();

  return (
    <View
      style={[
        styles.itemContainer,
        {
          width: SCREEN_WIDTH,
          height: SCREEN_HEIGHT,
          backgroundColor: item.backgroundColor,
        },
      ]}>
      <Image source={item.image} />
      <Text style={[styles.itemText, {color: item.textColor}]}>
        {item.text}
      </Text>
    </View>
  );
  <Image
        source={item.image}
        style={[styles.imageStyle, {width: SCREEN_WIDTH, height: imageHeight}]}
        resizeMode="contain" // Cambia esto según tus necesidades
      />
};

export default RenderItem;

const styles = StyleSheet.create({
  itemContainer: {
    alignItems: 'center',
    flex: 0,
    paddingTop: 20,
  },
  itemText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginHorizontal: 30,
    marginTop: 35,
    textAlign: 'center',
  },
});
 */
import {Image, StyleSheet, Text, View, useWindowDimensions} from 'react-native';
import React from 'react';
import {OnboardingData} from '../Data/data';

type Props = {
  item: OnboardingData;
};

const RenderItem = ({item}: Props) => {
  const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = useWindowDimensions();

 { /* Se hace la relación de aspecto de la iamgen es decir el valor que se modique entre 12/ 16 afectara unicmanete la 
  imagen, al modificar el primer valor este afectara el espacio de la imagen y el segundo valor afectara el tamaño de la imagen*/}
  const imageHeight = SCREEN_WIDTH * (10 / 14);

  return (
    <View
      style={[
        styles.itemContainer,
        {
          width: SCREEN_WIDTH,
          height: SCREEN_HEIGHT,
          backgroundColor: item.backgroundColor,
        },
      ]}>
      <Image
        source={item.image}
        style={[styles.imageStyle, {width: SCREEN_WIDTH, height: imageHeight}]}
        resizeMode="contain" // El componente resizMode es para ajustar la imagen en el tamaño de la pantalla
      />
      <Text style={[styles.itemText, {color: item.textColor}]}>
        {item.text}
      </Text>
    </View>
  );
};

export default RenderItem;

const styles = StyleSheet.create({
  imageStyle: {
    // Puedes ajustar estos estilos según sea necesario
    marginBottom: 30, // Ajusta el espacio entre la imagen y el texto
  },
  itemContainer: {//apartado especial para la imgen y texto 
    alignItems: 'center',
    flex: 1, // Cambiado a 1 para ocupar todo el espacio disponible
    paddingTop: 110, //posocion de la imagen junto al texto 
  },
  itemText: { //Apartado especial para el texto 
    fontSize: 30,//Tamaño del texto
    fontWeight: 'bold', //Tipo de fuente
    marginHorizontal: 35,
    marginTop: 15,//Este se utiliza para poder ajustar la posicion del texto alrededor de la imagen
    textAlign: 'center', 
  },
});