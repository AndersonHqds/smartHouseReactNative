import React, {useEffect, useState} from 'react';
import LottieView from 'lottie-react-native';
import BluetoothSerial from 'react-native-bluetooth-serial-next';

import {readArduinoData} from '../../helpers/functions';
import {Container, LottieContainer, TemperatureContainer} from './styles';
import Text from '../../components/Text';

const TemperatureComponent: React.FC<{}> = () => {
  const [temperature, setTemperature] = useState(0);
  const controlAnimation = (animation: any): void => {
    if (animation) animation.play(50, 125);
  };

  useEffect(() => {
    readArduinoData(setTemperature, (subscription: any) => {
      BluetoothSerial.removeSubscription(subscription);
    });
  }, [temperature]);

  return (
    <Container>
      <LottieContainer>
        <LottieView
          ref={(animation: any): any => controlAnimation(animation)}
          source={require('../../assets/lottie/2594-a-simple-sun-day.json')}
          autoPlay
          loop
          style={{flex: 1}}
          resizeMode="cover"
        />
      </LottieContainer>
      <TemperatureContainer>
        <Text size={130} weight="bold" family="roboto">
          {temperature
            .toString()
            .split(',')[0]
            .trim()}
          °C
        </Text>
      </TemperatureContainer>
    </Container>
  );
};

export default TemperatureComponent;
