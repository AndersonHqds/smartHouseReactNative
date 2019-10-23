import React from 'react';

interface Props {
  children: React.ReactNode;
}

const Row: React.FC<Props> = props => <Row>{props.children}</Row>;
