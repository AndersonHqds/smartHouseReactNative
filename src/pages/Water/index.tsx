import React from 'react';
import LottieView from 'lottie-react-native';

import {Container} from './styles';

const WaterComponent: React.FC<{}> = () => {
  return (
    <Container>
      <LottieView
        source={require('../../assets/lottie/935-loading.json')}
        autoPlay
        loop
        style={{flex: 1}}
        resizeMode="cover"
      />
    </Container>
  );
};

export default WaterComponent;
