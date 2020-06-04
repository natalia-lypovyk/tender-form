import React from 'react';

type Action = {
  type: string;
  payload: any
}

export const ContextForm = {
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

export const Context = React.createContext({ 
  state: ContextForm, 
  dispatch: (action: Action) => {}
});
