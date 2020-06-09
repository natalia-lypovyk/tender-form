import React, { FC, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Text from 'ustudio-ui/components/Text';
import Button from 'ustudio-ui/components/Button';
import { Item } from '../Item';
import { css } from 'styled-components';
import { Context } from '../../context';

export const Items: FC<{ relatedLot: string }> = ({ relatedLot }) => {
  const { state, dispatch } = useContext(Context);
  
  return (
    <>
      <Text variant='h5' align='center'>Items</Text>
      {state.tender.items.map((item, index) => (
        <React.Fragment key={index}>
          <Item index={index} relatedLot={relatedLot} />
        </React.Fragment>
        
      ))}
      
      <Button
        onClick={() => dispatch({
          type: 'addItem',
          payload: {
            description: '',
            id: uuidv4(),
            relatedLot,
            classification: {
              scheme: 'CPV',
              id: uuidv4(),
              description: ''
            },
            additionalClassification: [],
            quantity: 0,
            unit: {
              id: '123',
              value: 'metre'
            }
          }
        })}
        styled={{
          Button: css`
            display: block;
            margin: auto;          `
        }}
      >
        Add item
      </Button>
    </>
  );
};
