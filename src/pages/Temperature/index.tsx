import React from 'react';
import LottieView from 'lottie-react-native';

import { Container, LottieContainer, TemperatureContainer } from './styles';
import Text from '../../components/Text';

const TemperatureComponent:React.FC<{}> = () => {
  const controlAnimation = (animation: any) => {
    if(animation)
      animation.play(50, 125);
  }
  return (
    <Container>
      <LottieContainer>
        <LottieView
          ref={animation => controlAnimation(animation)}
          source={require('../../assets/lottie/2594-a-simple-sun-day.json')}
          autoPlay
          loop
          style={{ flex: 1}}
          resizeMode="cover"
          />
      </LottieContainer>
      <TemperatureContainer>
        <Text size={130} weight="bold" family="roboto">30°C</Text>
      </TemperatureContainer>
    </Container>
  );
};

export default TemperatureComponent;
