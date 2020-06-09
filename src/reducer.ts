import { Data } from './types';

export const initialState: Data = {
  tender: {
    title: '',
    description: '',
    classification: {
      scheme: 'CPV',
      id: '',
      description: '',
    },
    lots: [],
    items: []
  }
};

export const reducer = (state: Data, action: any) => {
  switch (action.type) {
    case 'addTitle': {
      return {
        tender: {
          ...state.tender,
          title: action.payload
        }
      };
    }

    case 'addDescription': {
      return {
        tender: {
          ...state.tender,
          description: action.payload
        }
      }
    }

    case 'addClassificationDescription': {
      return {
        tender: {
          ...state.tender,
          classification: {
            ...state.tender.classification,
            description: action.payload
          }       
        }
      }
    }

    case 'addUnit': {
      return {
        tender: {
          ...state.tender,
          items: {
            ...state.tender.items,
            unit: {
              name: action.payload
            }
          }
        }
      }
    }

    case 'addQuantity': {
      return {
        tender: {
          ...state.tender,
          items: {
            ...state.tender.items,
            quantity: action.payload
          }
        }
      }
    }

    case 'addLot': {
      return {
        tender: {
          ...state.tender,
          lots: [
            ...state.tender.lots,
            action.payload
          ]
        }
      }
    }

    case 'addLotTitle': {
      return {
        tender: {
          ...state.tender,
          lots: [
            ...state.tender.lots.map((lot, index) => {
              if (index === action.payload.index) {
                return {
                  id: lot.id,
                  title: action.payload.value
                }
              }
              return lot;
            })
          ]
        }
      }
    }

    case 'addItemTitle': {
      return {
        tender : {
          ...state.tender,
          items: {
            ...state.tender.items,
            title: action.payload            
          }
        }
      }
    }

    case 'addItemDescription': {
      return {
        tender : {
          ...state.tender,
          items: {
            ...state.tender.items,
            description: action.payload            
          }
        }
      }
    }

    default:
      return state;
  }
}

