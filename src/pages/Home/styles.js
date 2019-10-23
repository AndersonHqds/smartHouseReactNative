import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding-top: 10px;
  background: #f7f9fa;
`;

export const HomeHeader = styled.View`
  flex-direction: column;
  padding: 20px;
  flex-wrap: wrap;
`;

export const TemperatureContainer = styled.View`
  flex-direction: row;
`;

export const Temperature = styled.View`
  flex: 0.4;
  flex-direction: row;
  align-items: center;
  padding: 20px;
  padding-top: 0;
  flex-wrap: nowrap;
`;
export const Chart = styled.View`
  flex: 0.6;
  max-height: 100;
  padding: 10px;
`;

export const Panel = styled.View`
  flex: 1;
  flex-direction: column;
  padding: 10px;
`;

export const Row = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
  padding: 10px;
`;

export const Button = styled.TouchableOpacity`
  border: 1px;
  border-color: #fa754c;
  height: 100px;
  width: 100px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-items: center;
  border-radius: 100px;
  background: #efefef;
`;
