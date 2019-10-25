# Smarthouse written in React Native

## Requirements

* Arduino Uno
  * DHT11 Sensor
  * Coller or other little fan type
  * HC-06 Bluetooth Receptor
  * Led

* [Yarn package manager](https://yarnpkg.com/lang/en/)

* Mobile phone
* Configured React Native environment (Currently it only works on Android OS)
* [Arduino IDE](https://www.arduino.cc/en/main/software)

## App aparence

### Main Screen
![Main Screen](/gitassets/main_screen.png)
### Temperature Screen
![Temperature Screen](/gitassets/temperature_screen.png)
* Schema
![Schema](/gitassets/schema.jpg)

## Arduino Ports

| Modules | Ports |
| ------ | ------ |
| HC-06 | (TX -> 10, RX -> 11) |
| DHT11 | 9 |
| LED| 12 |
| FAN | 6 |

## How to run it

Clone the repository with the command `git clone https://github.com/AndersonHqds/smartHouseReactNative.git`

### Arduino
Firstly open the arduino IDE, You need to add the libs (projectFolder/arduino/libs) [If you don't know how to add a lib, please click here](https://www.arduino.cc/en/guide/libraries). After that, you need to open the `ino` file (projectFolder/arduino/smartHouse.ino), and load the program to your arduino board.

### App
Plug  your device on the usb.
Open the terminal and go to **projectFolder**, after run the following commands.

* Install the dependencies
  * `$ yarn`
* Run the project
  * `$ react-native run-android`

### Voice commands
Currenctly the **voice** commands just works in **pt-BR**.

| Functionality | Voice command |
| ------ | ------ |
| Light | **Turn on** - You need to say **Ligar luz**, **Turn off** - You need to say **Desligar luz** |
| FAN | You need to say **Ligar ventilador** |
| Temperature | Just say **Qual a temperatura?** |

### TODO

- [ ] Finish the water level screen
- [ ] Implement internacionalization
- [ ] Add english voice commands




