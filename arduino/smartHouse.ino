#include <LiquidCrystal.h>
#include <SoftwareSerial.h>
#include <dht.h>
#include <Ultrasonic.h>

#define TRIGGER_PIN  3  // Arduino pin tied to trigger pin on the ultrasonic sensor.
#define ECHO_PIN     4  // Arduino pin tied to echo pin on the ultrasonic sensor.
#define MAX_DISTANCE 200 // Maximum distance we want to ping for (in centimeters). Maximum sensor distance is rated at 400-500cm.

/* ==========================
    Author: Andersondev
    E-mail: contatoahenrique@gmail.com
    Version: 3.0
   ==========================
*/

//Object Instance
dht dhtHandler;
SoftwareSerial bluetooth(10, 11);

Ultrasonic ultrasonic(TRIGGER_PIN, ECHO_PIN);
const int pinLed = 12;
const int dhtPin = 9;
const int fanPin = 6;

float cmMsec, inMsec;
long microsec = ultrasonic.timing();

int temperatura = 0x00,
    umidade = 0x00;

String command;

void setup() {
  // put your setup code here, to run once:);
  bluetooth.begin(9600);
  Serial.begin(9600);UT);
  pinMode(pinLed, OUTPUT);
  pinMode(fanPin, OUTPUT);
}

void execCommands(String command) {
   if(command.indexOf("light") >= 0) {
    digitalWrite(pinLed, !digitalRead(pinLed));
   }
   if(command.indexOf("fan") >= 0) {
    digitalWrite(fanPin, !digitalRead(fanPin));
   }
   if(command.indexOf("alloff") >= 0){
    digitalWrite(pinLed, HIGH);
    digitalWrite(fanPin, LOW);
   }
   if(command.indexOf("allon") >= 0){
      digitalWrite(pinLed, LOW);
      digitalWrite(fanPin, HIGH);
   }
}

void loop() {
  command = "";
  microsec = ultrasonic.timing();

  cmMsec = ultrasonic.convert(microsec, Ultrasonic::CM);
  inMsec = ultrasonic.convert(microsec, Ultrasonic::IN);
  dhtHandler.read11(dhtPin);

  temperatura = dhtHandler.temperature;
  umidade = dhtHandler.humidity;

  while (bluetooth.available()) {
    char caracter = bluetooth.read();
    command += caracter;
  }

  execCommands(command);
  bluetooth.println((String)temperatura + "," + (String)umidade);
  Serial.println((String)temperatura + "," + (String)umidade);

}
