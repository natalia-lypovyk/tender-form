import React, { FC, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { css } from 'styled-components';

import Text from 'ustudio-ui/components/Text';
import TextInput from 'ustudio-ui/components/Input/TextInput';
import NumberInput from 'ustudio-ui/components/Input/NumberInput';
import Button from 'ustudio-ui/components/Button';
import RadioGroup from 'ustudio-ui/components/RadioGroup';

import { Context } from '../../context';
import { Classification } from '../Classification';
import Styled from './Item.styles';

export const Item: FC = () => {
  const { state, dispatch } = useContext(Context);
  
  const addClassification = () => {
  }

  return (
    <Styled.StyledForm>
      <Text variant='h5' align='center'>Items</Text>
      {state.tender.items.map((item, index) => (
        <React.Fragment key={index}>
          <label>
            Item description:
            <TextInput
              name='item-description'
              placeholder='Enter description'
              onChange={(value) => dispatch({
                type: 'addItemDescription',
                payload: {
                  value,
                  index
                }
              })}
            />
          </label>

          <Classification />
          <label>
            <Text align='center'>Additional classification:</Text>
            <Button 
              type='button'
              onClick={addClassification}
              styled={{
                Button: css`
                  display: block;
                  margin: 10px auto;
                `,
              }}
            >
              Add
            </Button>
          </label>

          <label>
            Unit:
            <RadioGroup
              direction='row'
              name='options'
              onChange={(value) => dispatch({
                type: 'addUnit',
                payload: {
                  value,
                  index
                }
              })}
              options={{
                'metre': {
                  label: 'metre',
                  value: 'metre'
                },
                'kilo': {
                  label: 'kilo',
                  value: 'kilo'
                }
              }}
            />
          </label>

          <label>
            Quantity:
            <NumberInput
              name='quantity'
              onChange={(value) => dispatch({
                type: 'addQuantity',
                payload: {
                  value,
                  index
                }
              })}
              placeholder='Enter quantity'
            />
          </label>
        </React.Fragment>
      ))}

      <Button 
        type='button' 
        styled={{
          Button: css`
            display: block;
            margin: auto;
          `,
        }}
        onClick={(value) => dispatch({
          type: 'addItem',
          payload: {
            description: '',
            id: uuidv4(),
            relatedLot: '',
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
      >
        Add item
      </Button>
    </Styled.StyledForm >
  )
}