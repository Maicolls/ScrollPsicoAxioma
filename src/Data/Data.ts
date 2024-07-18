import {ImageProps} from 'react-native';


{/*En este apartado de la app se podra encontrar el tema de los slaider con sus respectivos ID esto puesto que el ID es el que se va a mostrar la tarjeta por orden,
   */}


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
    image: require('../images/icono-llamada.png'),
    text: 'Bienvenido a PsicoAxioma',
    textColor: '#f8dac2',
    backgroundColor: '#154f40',
  },
  {
    id: 2,
    image: require('../images/icono-llamada.png'),
    text: 'Encontras las lineas de ayuda en salud mental',
    textColor: '#154f40',
    backgroundColor: '#fd94b2',
  },
  {
    id: 3,
    image: require('../images/Diario.png'),
    text: 'Sientete con libertad de expresar lo que sientes en tu diario emocional',
    textColor: 'black',
    backgroundColor: '#f8dac2',
  },
 {
    id: 4,
    image: require('../images/Reconocimiento.png'),
    text: 'Reconoce tu estado de animo mediante nuestra Inteligencia Artificial',
    textColor: 'black',
    backgroundColor: '#f8dac2',
  }, 
];

export default data;