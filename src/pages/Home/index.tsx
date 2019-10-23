import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {LineChart} from 'react-native-svg-charts';
import * as shape from 'd3-shape';
import Tts from 'react-native-tts';
import Voice from 'react-native-voice';
import {ActionSheet} from 'native-base';

import Text from '../../components/Text';
import Modal from '../../components/Modal';
import {
  Container,
  HomeHeader,
  TemperatureContainer,
  Temperature,
  Chart,
  Panel,
  Button,
  Row,
} from './styles';
import {check, connectToDevice} from '../../helpers/functions';
import Toast from '../../Toast';
import Commands from '../../helpers/commands';

export default function Home({navigation}:any) {

  const DEFAULT_COLOR = '#FA754C';
  const [isSearching, setSearch] = useState(true);
  const [modalMsg, setMsg] = useState('Procurando Dispositivos');

  Voice.onSpeechStart = (e: any) => {
    console.log('OnSpeechStart: ', e);
  };

  Voice.onSpeechResults = (e: any) => {
    console.log('OnSpeechResults: ', e);
    const command = Commands.filter(command => e.value.includes(command.command));
    if (command.length > 0) {
      Tts.speak(command[0].response);
    }
  }

  useEffect(() => {
    Tts.setDefaultLanguage('pt-BR');
    check().then(data => {
      setSearch(false);
      ActionSheet.show(
        {
          options: data,
          cancelButtonIndex: data.length - 1,
          title: 'Dispositivos',
        },
        buttonIndex => {
          setMsg("Conectando no dispositivo");
          setSearch(true);
          const id = data[buttonIndex].id;
          if (!id) return null
          return connectToDevice(id)
            .then((value) => {
              setSearch(false);
              Toast.show(`Conectado ao dispositivo ${value.name}`, Toast.LONG);
            })
            .catch(error => {
              setSearch(false);
              Toast.show(`Falha ao conectar`, Toast.LONG);
            });
        },
      );
    });
  }, []);

  return (
    <Container>
      <Modal
        animationType="slide"
        isVisible={isSearching}
        transparent={true}
        onRequestClose={() => alert("Close")}>
        <Text size={20} fontWeight="bold">
          {modalMsg}
        </Text>
      </Modal>
      <HomeHeader>
        <Text>Hello</Text>
        <Text weight="bold" size={20} color="#000">
          Anderson
        </Text>
      </HomeHeader>
      <TemperatureContainer>
        <Temperature>
          <Text
            weight="300"
            size={90}
            color="#000"
            family="Montserrat-SemiBold">
            34
          </Text>
          <Text size={25} paddingTop={30} weight="bold" color="#000">
            °C
          </Text>
        </Temperature>
        <Chart>
          <Text>Umidade</Text>
          <LineChart
            yMax={100}
            yMin={0}
            data={[0, 20, 25, 15, 20, 55, 60]}
            style={{flex: 1}}
            curve={shape.curveNatural}
            svg={{stroke: '#FA754C', strokeWidth: 3}}
          />
        </Chart>
      </TemperatureContainer>
      <Panel>
        <Row>
          <Button
            onPress={() => {
              Tts.speak('Ligando luz');
            }}>
            <Text color={DEFAULT_COLOR}>Luz</Text>
            <Icon name="wb-incandescent" size={28} color={DEFAULT_COLOR} />
          </Button>
          <Button
            onPress={() => {
              Tts.speak('Ligando luz');
            }}>
            <Text color={DEFAULT_COLOR}>Ar</Text>
            <Icon name="computer" size={28} color={DEFAULT_COLOR} />
          </Button>
        </Row>
        <Row>
          <Button
            onPress={() => {
              navigation.navigate('Temperature');
            }}>
            <Text color={DEFAULT_COLOR}>Temperatura</Text>
            <Icon name="wb-sunny" size={28} color={DEFAULT_COLOR} />
          </Button>
          <Button
            onPress={() => {
              Tts.speak('Ligando Ventilador');
            }}>
            <Text color={DEFAULT_COLOR}>Ventilador</Text>
            <Icon name="toys" size={28} color={DEFAULT_COLOR} />
          </Button>
        </Row>
        <Row>
          <Button
            onPress={() => {
              console.log(Voice.start('pt-BR'));
            }}>
            <Text color={DEFAULT_COLOR}>Voz</Text>
            <Icon name="mic" size={28} color={DEFAULT_COLOR} />
          </Button>
          <Button onPress={() => { navigation.navigate('Water') }}>
            <Text color={DEFAULT_COLOR}>Água</Text>
            <Icon name="public" size={28} color={DEFAULT_COLOR} />
          </Button>
        </Row>
      </Panel>
    </Container>
  );
}

Home.navigationOptions = {
  title: 'Home',
};
