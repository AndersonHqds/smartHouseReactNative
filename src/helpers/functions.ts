import BluetoothSerial, {
  withSubscription,
} from 'react-native-bluetooth-serial-next';

const getDevices = async (): Promise<void> => {
  const [devices, unpairedDevices] = await Promise.all([
    BluetoothSerial.list(),
    BluetoothSerial.listUnpaired(),
  ]);
  console.log(unpairedDevices);
  const devicesName = unpairedDevices.map(device => ({
    ...device,
    text: device.name,
    icon: 'bluetooth',
  }));
  devicesName.push('Cancelar');
  return devicesName;
};

const check = async (): Promise<any> => {
  try {
    const isEnabled = await BluetoothSerial.isEnabled();
    if (isEnabled) {
      return getDevices();
    } else {
      try {
        const response = await BluetoothSerial.requestEnable();
        return getDevices();
      } catch (e) {
        console.log(false);
      }
    }
  } catch (e) {
    alert(e);
  }
};

export {check};
