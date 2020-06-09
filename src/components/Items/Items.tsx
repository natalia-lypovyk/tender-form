import React, { FC } from 'react';
//import { v4 as uuidv4 } from 'uuid';
import Text from 'ustudio-ui/components/Text';
import Button from 'ustudio-ui/components/Button';
import { Item } from '../Item';
import { css } from 'styled-components';
export const Items: FC = () => {
  
  const addItem = (): void => {
    console.log();
  }

  return (
    <>
      <Text variant='h5' align='center'>Items</Text>
      <Item />
      <Button
        onClick={addItem}
        styled={{
          Button: css`
            display: block;
            margin: auto;          `
        }}
      >
        Add new item
      </Button>
    </>
  );
};
