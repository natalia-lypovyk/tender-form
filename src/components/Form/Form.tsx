import React, { FC, FormEvent, useContext } from 'react';
//import { v4 as uuidv4 } from 'uuid';
import { css } from 'styled-components';

import Flex from 'ustudio-ui/components/Flex';
import TextInput from 'ustudio-ui/components/Input/TextInput';
import TextArea from 'ustudio-ui/components/Input/TextArea';
import Button from 'ustudio-ui/components/Button';

import { Context } from '../../context';
import { Classification } from '../Classification';
import { Items } from '../Items';

import Styled from './Form.styles';

export const Form: FC = () => {
  const {state, dispatch} = useContext(Context);  

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    console.log(state);    
  }

  return (
    <Flex
      alignment={{
        horizontal: 'center',
        vertical: 'center'
      }}
      styled={{
        Flex: css`
          width: 60%;
          margin: 50px auto;
        `,
      }}
    >
      <Styled.Form onSubmit={handleSubmit} >
        <label>
          Title:
          <TextInput
            name='title'
            placeholder='Enter tender title'
            onChange={(e) => dispatch({
              type: 'addTitle',
              payload: e
            })}            
          />
        </label>

        <label>
          Description:
          <TextArea
            name='description'
            placeholder='Enter description'
            onChange={(e) => dispatch({
              type: 'addDescription',
              payload: e
            })}            
          />
        </label>
        <Classification />  
        <Items />     
        <Button
          styled={{
            Button: css`
              display: block;
              margin: 30px auto 0;
            `,
          }}
        >
          Create tender
        </Button>
      </Styled.Form>
    </Flex>
  )
};
