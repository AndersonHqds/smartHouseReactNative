import React from 'react';
import {Modal} from 'react-native';
import {Spinner} from 'native-base';

import {ModalContainer, ModalBox} from './styles';

interface Props {
  isVisible: boolean;
  transparent: boolean;
  animationType: 'slide' | 'none' | 'fade' | undefined;
  onRequestClose: Function;
  children: React.ReactNode;
}

const ModalComponent: React.FC<Props> = props => {
  return (
    <Modal
      animationType={props.animationType}
      transparent={true}
      visible={props.isVisible}
      onRequestClose={(): void => {
        props.onRequestClose();
      }}>
      <ModalContainer>
        <ModalBox>
          {props.children}
          <Spinner />
        </ModalBox>
      </ModalContainer>
    </Modal>
  );
};

export default ModalComponent;
