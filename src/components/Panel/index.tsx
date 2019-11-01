import React from 'react';

import {Button, Panel, Row} from './styles';
import Text from '../Text';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { sendData } from '../../helpers/functions';
import { NavigationScreenProp } from 'react-navigation';
const DEFAULT_COLOR = '#FA754C';

interface Props {
  navigation: NavigationScreenProp<any, any>;
  onVoiceButtonPress: Function;
}

const PanelComponent: React.FC<Props> = ({navigation, onVoiceButtonPress}):any => (
  <Panel>
    <Row>
      <Button onPress={(): Promise<void> => sendData('light')}>
        <Text color={DEFAULT_COLOR}>Luz</Text>
        <Icon name="wb-incandescent" size={28} color={DEFAULT_COLOR} />
      </Button>
      <Button onPress={(): Promise<void> => sendData('fan')}>
        <Text color={DEFAULT_COLOR}>Ar</Text>
        <Icon name="computer" size={28} color={DEFAULT_COLOR} />
      </Button>
    </Row>
    <Row>
      <Button
        onPress={(): void => {
          navigation.navigate('Temperature');
        }}>
        <Text color={DEFAULT_COLOR}>Temperatura</Text>
        <Icon name="wb-sunny" size={28} color={DEFAULT_COLOR} />
      </Button>
      <Button onPress={(): Promise<void> => sendData('fan')}>
        <Text color={DEFAULT_COLOR}>Ventilador</Text>
        <Icon name="toys" size={28} color={DEFAULT_COLOR} />
      </Button>
    </Row>
    <Row>
      <Button
        onPress={(): void => {
          onVoiceButtonPress()
        }}>
        <Text color={DEFAULT_COLOR}>Voz</Text>
        <Icon name="mic" size={28} color={DEFAULT_COLOR} />
      </Button>
      <Button
        onPress={(): void => {
          navigation.navigate('Water');
        }}>
        <Text color={DEFAULT_COLOR}>Água</Text>
        <Icon name="public" size={28} color={DEFAULT_COLOR} />
      </Button>
    </Row>
  </Panel>
);

export default PanelComponent;
