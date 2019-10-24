const commands = [
  {
    command: 'Ligar luz',
    response: 'Ligando luz',
    arduinoCmd: 'light',
    type: null,
  },
  {
    command: 'Desligar luz',
    response: 'Desligando luz',
    arduinoCmd: 'light',
    type: null,
  },
  {
    command: 'Ligar ar',
    response: 'Ligando ar',
    arduinoCmd: 'fan',
    type: null,
  },
  {
    command: 'Qual a temperatura',
    response: 'A temperatura é ',
    arduinoCmd: null,
    type: 'temperature',
  },
  {
    command: 'Ligar ventilador',
    response: 'Ligando ventilador',
    arduinoCmd: 'fan',
    type: null,
  },
  {
    command: 'Qual o nível de água',
    response: 'O nível de água está em ',
    type: 'water',
  },
  {
    command: 'Qual o melhor sistema',
    response: 'Óbvio que é linux',
    arduinoCmd: null,
    type: null,
  },
];
export default commands;
