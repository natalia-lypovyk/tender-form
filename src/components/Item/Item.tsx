import React, { FC, useContext } from 'react';
//import { v4 as uuidv4 } from 'uuid';
import { css } from 'styled-components';

import Text from 'ustudio-ui/components/Text';
import TextInput from 'ustudio-ui/components/Input/TextInput';
import TextArea from 'ustudio-ui/components/Input/TextArea';
import NumberInput from 'ustudio-ui/components/Input/NumberInput';
import Button from 'ustudio-ui/components/Button';
import RadioGroup from 'ustudio-ui/components/RadioGroup';

import { Context } from '../../context';
//import { Classification } from '../Classification';
import Styled from './Item.styles';

export const Item: FC<{ relatedLot: string, index: number }> = ({ relatedLot, index }) => {
  const { dispatch } = useContext(Context);

  return (
    <Styled.StyledForm>
      <Text variant='h5' align='center'>Items</Text>
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

      <Text 
        variant='h5' 
        align='center'
      >
        Classification
      </Text>
        <label>
          <TextInput 
            name='scheme'
            value='CPV'
            readOnly
            styled={{
              Input: css`
                width: 40%;
              `
            }}
          />
        </label>

        <label>
          Description: 
          <TextArea  
            name='item-classification-description'
            placeholder='Enter description'
            onChange={(e) => dispatch({
              type: 'addItemClassificationDescription',
              payload: e
            })}
          />
        </label>
      
      <label>
        <Text align='center'>Additional classification:</Text>
        <Button
          type='button'          
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

      {/* <Button
        type='button'
        styled={{
          Button: css`
            display: block;
            margin: auto;
          `,
        }}
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
      >
        Add item
      </Button>*/}
    </Styled.StyledForm > 
  )
}