import React, { FC, useContext } from 'react';
import { css } from 'styled-components';

import Text from 'ustudio-ui/components/Text';
import TextInput from 'ustudio-ui/components/Input/TextInput';
import TextArea from 'ustudio-ui/components/Input/TextArea';

import { Context } from '../../context';
import Styled from './Classification.styles';


export const Classification: FC = () => {
  const { dispatch } = useContext(Context);

  return (
    <Styled.SubForm>
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
            name='classification-description'
            placeholder='Enter description'
            onChange={(e) => dispatch({
              type: 'addClassificationDescription',
              payload: e
            })}
          />
        </label>
    </Styled.SubForm>
  )
}
