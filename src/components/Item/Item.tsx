import React, { FC, useContext } from 'react';
//import { v4 as uuidv4 } from 'uuid';
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
  const { dispatch } = useContext(Context);
  
  const addClassification = () => {
        
  }
  
  return (
    <Styled.StyledForm>
      <label>
        Title:
        <TextInput
          name='item-title'
          placeholder='Enter title'
          onChange={(e) => dispatch({
            type: 'addItemTitle',
            payload: e
          })}
        />
      </label>
      <label>
        Item description:
        <TextInput
          name='item-description'
          placeholder="Enter description"
          onChange={(e) => dispatch({
            type: 'addItemDescription',
            payload: e
          })}
        />
      </label>
      <label>
        Related lot:
        <TextInput
          name='related-lot'
          placeholder='Enter related lot'
        />
      </label>
      <Classification />
      <label>
        <Text align='center'>Additional classification:</Text>
        <Button 
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
          onChange={(e) => dispatch({
            type: 'addUnit',
            payload: e
          })
      }
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
          onChange={(e) => dispatch({
            type: 'addQuantity',
            payload: e
          })}
          placeholder='Enter quantity'
          
        />
      </label>      
    </Styled.StyledForm>
  )
}