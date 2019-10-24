import BluetoothSerial from 'react-native-bluetooth-serial-next';
import {BackHandler} from 'react-native';

const getDevices = async (): Promise<any> => {
  const [devices, unpairedDevices] = await Promise.all([
    BluetoothSerial.list(),
    BluetoothSerial.listUnpaired(),
  ]);
  const allDevices = [...devices, ...unpairedDevices];
  const devicesName = allDevices.map(device => ({
    ...device,
    text: (device.name || 'Desconhecido') + '\n' + device.id,
    icon: 'bluetooth',
  }));
  // @ts-ignore
  devicesName.push({text: 'Cancelar', icon: 'exit', id: '0'});
  return devicesName;
};

const check = async (): Promise<any> => {
  try {
    const isEnabled = await BluetoothSerial.isEnabled();
    if (isEnabled) {
      return getDevices();
    } else {
      try {
        await BluetoothSerial.requestEnable();
        return getDevices();
      } catch (e) {
        BackHandler.exitApp();
      }
    }
  } catch (e) {
    console.warn('error', e);
  }
};

const pairDevice = async (id: string): Promise<void> => {
  console.log(id);
  await BluetoothSerial.pairDevice(id);
};

const readArduinoData = async (
  setTemperature: Function,
  subscriptionCb?: Function,
): Promise<any> => {
  BluetoothSerial.read((data: string, subscription: any): any => {
    if (subscription && subscriptionCb) {
      subscriptionCb(subscription);
    }
    setTemperature(data);
    // @ts-ignore
  }, '\r\n');
};

const connectToDevice = async (
  id: string,
  setTemperature: Function,
): Promise<any> => {
  if (id !== '0') {
    const connect = await BluetoothSerial.connect(id);
    await BluetoothSerial.withDelimiter('\r\n');
    readArduinoData(setTemperature);
    return connect;
  }
  throw new Error('Cancelado');
};

const sendData = async (data: string, id?: string): Promise<void> => {
  await BluetoothSerial.write(data, id);
};

export {check, pairDevice, connectToDevice, sendData, readArduinoData};
