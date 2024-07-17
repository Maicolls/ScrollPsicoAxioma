import {ImageProps} from 'react-native';

export interface OnboardingData {
  id: number;
  image: ImageProps;
  text: string;
  textColor: string;
  backgroundColor: string;
}

const data: OnboardingData[] = [
  {
    id: 1,
    image: require('../images/LineasAtencion.png'),
    text: 'Esta triste Pues llame',
    textColor: '#f8dac2',
    backgroundColor: '#154f40',
  },
  {
    id: 2,
    image: require('../images/Reconocimiento.png'),
    text: 'prb tan feo veo le tomo foto ',
    textColor: '#154f40',
    backgroundColor: '#fd94b2',
  },
  {
    id: 3,
    image: require('../images/Calendario.png'),
    text: 'fixture de la copa mestrual',
    textColor: 'black',
    backgroundColor: '#f8dac2',
  },
 {
    id: 4,
    image: require('../images/Flechitauwu.png'),
    text: 'pa comer fresas con crema pa alla papu',
    textColor: 'black',
    backgroundColor: '#f8dac2',
  }, 
];

export default data;