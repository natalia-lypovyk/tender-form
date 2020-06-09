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

    case 'removeLot': {
      return {
        tender: {
          ...state.tender,
          lots: [
            ...state.tender.lots.filter((lot, i) => i !== action.payload.index)
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

    case 'addItem': {
      return {
        tender: {
          ...state.tender,
          items: [
            ...state.tender.items,
            action.payload
          ]
        }
      }
    }

    case 'addItemDescription': {
      return {
        tender : {
          ...state.tender,
          items: {
            ...state.tender.items.map((item, index) => {
              if (index === action.payload.index) {
                return {
                  ...item,
                  description: action.payload.value
                }
              }
              return item;
            })       
          }
        }
      }
    }

    case 'addQuantity': {
      return {
        tender: {
          ...state.tender,
          items: {
            ...state.tender.items.map((item, index) => {
              if (index === action.payload.index) {
                return {
                  ...item,
                  quantity: action.payload.value
                }
              }
              return item;
            })

          }
        }
      }
    }

    case 'addItemClassificationDescription': {
      return {
        tender: {
          ...state.tender,
          items: {
            ...state.tender.items,
            classification: {
              ...state.tender.items.map((item, index) => {
                if (index === action.payload.index) {
                  return {
                    ...item,
                    description: action.payload.value
                  }
                }
                return item;
              })
            }
          }
        }
      }
    }
    
    default:
      return state;
  }
}
