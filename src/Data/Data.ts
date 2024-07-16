import { ImageProps } from "react-native";

/*Aca es donde se va a almacenar la informacion de las presentacion Scroll */
export interface OnboardingData {
id: number;
image:ImageProps;
text: string;
textColor: string;
backgroundColor: string;
}

const data: OnboardingData[] = [
 {
    id: 1,
    image: require('../images/Calendario.png'), /*Aca debe ir el logo de psicoAxioma */
    text: 'Hola Bienvenido a PsicoAxioma, la plataforma que te ayudara a mejorar tu salud mental',
    textColor: '#F8DAC2',
    backgroundColor: '#154F40'
 },      
 {
   id: 2,
   image: require('../images/Diario.png'), /*Aca debe ir el logo de psicoAxioma */
   text: 'No tiene amigos cagada escriba aca',
   textColor: '#F8DAC2',
   backgroundColor: '#154F40'
},
 {
    id: 3,
    image: require('../images/Diario.png'), /*Aca debe ir el logo de psicoAxioma */
    text: 'No tiene amigos cagada escriba aca',
    textColor: '#F8DAC2',
    backgroundColor: '#154F40'
 },
 {
    id: 4,
    image: require('../images/Reconocimiento.png'), /*Aca debe ir el logo de psicoAxioma */
    text: 'Aca puede pillar que tan lindo es mi ñero',
    textColor: 'black',
    backgroundColor: '#f8dac2'
 },
];

export default data;