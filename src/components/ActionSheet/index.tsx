import React from 'react';
import {Container, Header, Content, ActionSheet} from 'native-base';
const BUTTONS = ['Option 0', 'Option 1', 'Option 2', 'Cancel'];

interface Props {
  names?: [];
  cancelIndex: number;
  show: boolean;
  title: string;
}

const ActionSheetExample: React.FC<Props> = props => {
  const show = (): void => {
    return ActionSheet.show(
      {
        options: BUTTONS,
        cancelButtonIndex: props.cancelIndex,
        title: props.title,
      },
      buttonIndex => {
        console.log(buttonIndex);
      },
    );
  };
  if (!props.show) return null;
  return (
    <Container>
      <Header />
      <Content padder>{show()}</Content>
    </Container>
  );
};

export default ActionSheetExample;
