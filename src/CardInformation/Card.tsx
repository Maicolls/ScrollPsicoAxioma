import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const Card = () => {
  return (
    <View style={styles.cardLinea}>
      <Image
        style={styles.cardImg}
        source={require('../images/linea106_0.jpg')}
      />
      <Text style={styles.cardTitle}>Linea de atención en Psicológica Bogotá</Text>
      <Text style={styles.cardText}>Linea de atención 106</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cardLinea: {
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardImg: {
    width: 100, // Establece el ancho de tu imagen
    height: 100, // Establece la altura de tu imagen
    borderRadius: 50, // Ajusta según necesites
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 8,
  },
  cardText: {
    fontSize: 14,
    marginTop: 4,
  },
});

export default Card;