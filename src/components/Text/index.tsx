import React from 'react';
import {Text} from 'native-base';

export interface Props {
  family?: any;
  size?: any;
  fontWeight?: any;
  weight?: any;
  color?: any;
  paddingTop?: any;
  children: string;
}

const TextComponent: React.FC<Props> = props => {
  return (
    <Text
      style={{
        fontFamily: props.family,
        fontSize: props.size,
        fontWeight: props.weight,
        color: props.color,
        paddingTop: props.paddingTop,
      }}>
      {props.children}
    </Text>
  );
};

export default TextComponent;
