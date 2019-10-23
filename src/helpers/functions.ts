import BluetoothSerial, {
  withSubscription,
} from 'react-native-bluetooth-serial-next';
import { BackHandler } from 'react-native';

const getDevices = async (): Promise<any> => {
  const [devices, unpairedDevices] = await Promise.all([
    BluetoothSerial.list(),
    BluetoothSerial.listUnpaired(),
  ]);
  const allDevices = [...devices, ...unpairedDevices];
  const devicesName = allDevices.map(device => ({
    ...device,
    text: (device.name || "Desconhecido") + '\n' + device.id,
    icon: 'bluetooth',
  }));
  devicesName.push({ text: 'Cancelar', icon: 'exit', id: '0' });
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
    alert(e);
  }
};

const pairDevice = async(id: string): Promise<void> => {
  console.log(id);
  await BluetoothSerial.pairDevice(id);
}

const connectToDevice = async(id: string): Promise<any> => {
  if (id !== '0')
    return await BluetoothSerial.connect(id);
  throw new Error("Cancelado");
}

export {check, pairDevice, connectToDevice};

