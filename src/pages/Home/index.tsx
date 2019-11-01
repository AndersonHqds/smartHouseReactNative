import React, {useEffect, useState} from 'react';
import {LineChart} from 'react-native-svg-charts';
import * as shape from 'd3-shape';
import Tts from 'react-native-tts';
import Voice from 'react-native-voice';
import {ActionSheet} from 'native-base';
import { NavigationScreenProp } from 'react-navigation';

import Text from '../../components/Text';
import Modal from '../../components/Modal';
import {
  Container,
  HomeHeader,
  TemperatureContainer,
  Temperature,
  Chart
} from './styles';
import {check, connectToDevice, sendData} from '../../helpers/functions';
import Toast from '../../Toast';
import Panel from '../../components/Panel';
import Commands from '../../helpers/commands';

interface Props {
  navigation: NavigationScreenProp<any, any>;
}

const Home: React.FC<Props> = ({navigation}) => {
  const [isSearching, setSearch] = useState(true);
  const [temperature, setTemperature] = useState(0);
  const [humidity, setHumidity] = useState([0, 20, 25, 15, 20, 55, 60]);

  const [modalMsg, setMsg] = useState('Procurando Dispositivos');

  Voice.onSpeechResults = (e: any): void => {
    e = e.value.map((value: string) => value.toLowerCase());
    const command = Commands.filter(arduinoCommand =>
      e.includes(arduinoCommand.command.toLowerCase()),
    );
    if (command.length > 0) {
      if (command[0].arduinoCmd) {
        Tts.speak(command[0].response);
        sendData(command[0].arduinoCmd);
      } else {
        if (command[0].type) {
          if (command[0].type === 'temperature') {
            const realTemperature = temperature.toString().split(',')[0];
            Tts.speak(command[0].response + realTemperature + ' graus');
          }
          if (command[0].type === 'water') {
            Tts.speak(command[0].response + '50 por cento');
          }
        } else {
          Tts.speak(command[0].response);
        }
      }
    }
  };

  useEffect(() => {
    if (temperature.toString().split(',').length === 2) {
      const sensorHumidity = temperature
        .toString()
        .split(',')[1]
        .trim();
      const humidityHelper = [...humidity];
      if (Number(humidityHelper.slice(-1)[0]) !== Number(sensorHumidity)) {
        humidityHelper.push(Number(sensorHumidity));
        setHumidity(
          humidityHelper.slice(
            humidityHelper.length - 7,
            humidityHelper.length,
          ),
        );
      }
    }
  }, [humidity, temperature]);

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
          setMsg('Conectando no dispositivo');
          setSearch(true);
          const id = data[buttonIndex].id;
          if (!id) return null;
          return connectToDevice(id, setTemperature)
            .then(value => {
              setSearch(false);
              Toast.show(`Conectado ao dispositivo ${value.name}`, Toast.LONG);
            })
            .catch(() => {
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
        onRequestClose={(): void => {}}>
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
            {temperature
              .toString()
              .split(',')[0]
              .trim()}
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
            data={humidity}
            style={{flex: 1}}
            curve={shape.curveNatural}
            svg={{stroke: '#FA754C', strokeWidth: 3}}
          />
        </Chart>
      </TemperatureContainer>
      <Panel
        navigation={navigation}
        onVoiceButtonPress={() => Voice.start('pt-BR')}/>
    </Container>
  );
};

export default Home;
