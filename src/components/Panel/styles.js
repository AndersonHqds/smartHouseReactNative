import styled from 'styled-components/native';

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

export const Panel = styled.View`
  flex: 1;
  flex-direction: column;
  padding: 10px;
`;
