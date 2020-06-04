export const reducer = (state: any, action: any) => {
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

    case 'addLotTitle': {
      return {
        tender: {
          ...state.tender,
          lots: {
            title: action.payload,
          }
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

export const initialState = {
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
