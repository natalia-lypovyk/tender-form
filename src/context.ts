import React from 'react';
import { Data } from './types';

type Action = {
  type: string;
  payload: any
}

export const ContextForm: Data = {
  tender: {
    title: '',
    description: '',
    classification: {
      scheme: 'CPV',
      id: '',
      description: '',
    },
    lots: [],
    items: [],
  }
};

export const Context = React.createContext<{state: typeof ContextForm, dispatch: (action: Action) => void}>({ 
  state: ContextForm, 
  dispatch: () => {}
});
