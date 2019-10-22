import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { LineChart } from 'react-native-svg-charts'
import * as shape from 'd3-shape'
import Tts from 'react-native-tts'
import Voice from 'react-native-voice'
import  { BleManager } from 'react-native-ble-plx';

import Text from '../../components/Text'
import { Container, HomeHeader, TemperatureContainer, Temperature, Chart, Panel, Button, Row } from './styles'

export default function Home(){
    
    const DEFAULT_COLOR = "#FA754C"
    const manager = new BleManager();
    Voice.onSpeechStart = (e:any) => {
        console.log('OnSpeechStart: ', e)
    }

    const scanDevices = () => {
      
      manager.startDeviceScan(null, null, (error, device) => {
        if(error) return null;
        console.warn(device);
        if (device && (device.name === 'TI BLE Sensor Tag' || 
            device.name === 'SensorTag')) {
            
            // Stop scanning as it's not necessary if you are scanning for one device.
            manager.stopDeviceScan();

            // Proceed with connection.
        }
      })
    }

    return(
        <Container>
            <HomeHeader>
                <Text>Hello</Text>
                <Text weight="bold" size={20} color="#000">Anderson</Text>
            </HomeHeader>
            <TemperatureContainer>
                <Temperature>
                    <Text weight="300" size={90} color="#000" family="Montserrat-SemiBold">
                        34
                    </Text>
                    <Text size={25} paddingTop={30} weight="bold" color="#000">°C</Text>
                </Temperature>
                <Chart>
                    <Text>Umidade</Text>
                    <LineChart
                        yMax={100}
                        yMin={0}
                        data={[0, 20, 25, 15, 20, 55, 60]}
                        style={{ flex: 1 }}
                        curve={shape.curveNatural}
                        svg={{ stroke: "#FA754C", strokeWidth: 3 }}
                    />
                </Chart>
            </TemperatureContainer>
            <Panel>
                <Row>
                    <Button onPress={() => {Tts.speak('Hello, World!')}}>
                        <Text color={DEFAULT_COLOR}>Luz</Text>
                        <Icon name="wb-incandescent" size={28} color={DEFAULT_COLOR} />
                    </Button>
                    <Button onPress={() => { console.log(Voice.start('pt-BR')) }}>
                        <Text color={DEFAULT_COLOR}>Ar</Text>
                        <Icon name="computer" size={28} color={DEFAULT_COLOR} />
                    </Button>
                </Row>
                <Row>
                    <Button onPress={() => scanDevices()}>
                        <Text color={DEFAULT_COLOR}>Temperatura</Text>
                        <Icon name="wb-sunny" size={28} color={DEFAULT_COLOR} />
                    </Button>
                    <Button>
                        <Text color={DEFAULT_COLOR}>Ventilador</Text>
                        <Icon name="toys" size={28} color={DEFAULT_COLOR} />
                    </Button>
                </Row>
                <Row>
                    <Button>
                        <Text color={DEFAULT_COLOR}>Voz</Text>
                        <Icon name="mic" size={28} color={DEFAULT_COLOR} />
                    </Button>
                    <Button>
                        <Text color={DEFAULT_COLOR}>Água</Text>
                        <Icon name="public" size={28} color={DEFAULT_COLOR} />
                    </Button>
                </Row>
            </Panel>              
        </Container>
    )
}

Home.navigationOptions = {
    title: 'Home'
}
