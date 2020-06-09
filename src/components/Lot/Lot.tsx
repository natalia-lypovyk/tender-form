import React, { FC, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { css } from 'styled-components';
import Flex from 'ustudio-ui/components/Flex';
import Text from 'ustudio-ui/components/Text';
import TextInput from 'ustudio-ui/components/Input/TextInput';
import Button from 'ustudio-ui/components/Button';

import { Items } from '../Items';
import { Context } from '../../context';

import Styled from './Lot.styles';

export const Lot: FC = () => {
  const { state, dispatch } = useContext(Context);

  return (
    <Styled.Form>
      <Text align='center' variant='h5'>Create lot</Text>
      {state.tender.lots.map((lot, index) => (
        <React.Fragment key={lot.id}>
          <label>
            Lot title:
            <Flex>
              <TextInput
                name='lot-title'
                placeholder='Enter lot title'
                onChange={(value) => dispatch({
                  type: 'addLotTitle',
                  payload: {
                    value,
                    index
                  }
                })}
              />
              <Button
                type='button'
                onClick={() => dispatch({
                  type: 'removeLot',
                  payload: {
                    index,
                  }
                })}
              >
                Remove
              </Button>
            </Flex>
          </label>
          <Items relatedLot={lot.id} />
        </React.Fragment>
      ))}

      <Button
        type="button"
        onClick={(value) => dispatch({
          type: 'addLot',
          payload: {
            title: '',
            id: uuidv4()
          }
        })}
        styled={{
          Button: css`
            display: block;
            margin: 10px auto;
          `,
        }}
      >
        Add lot
      </Button>
    </Styled.Form>
  )
}
