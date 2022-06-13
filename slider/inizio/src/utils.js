import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';

const starCreator = (num) => {
  return Array.from({ length: 5 }, (_, index) => {
    if (num >= index + 1) {
      /*se il numero che riceviamo è maggiore o uguale a index +1 
        (perchè il primo index è = 0 mentre quello che abbiamo nei data è 1).*/
      //Ovvero quindi se il numero ricevuto è un numero pieno, restituisco un stella piena.
      return <BsStarFill key={index} className="star"></BsStarFill>;
    } else if (num >= index + 0.5) {
      //se invece il numero che riceviamo è un mezzo numero,restituisco metà stella.
      return <BsStarHalf key={index} className="star"></BsStarHalf>;
    } else {
      //altrimenti è zero quindi daremo una stella vuota.
      return <BsStar key={index} className="star"></BsStar>;
    }
  });
};

export default starCreator;
