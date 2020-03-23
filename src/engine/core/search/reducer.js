const initialState = {
  input: ''
};

export function searchReducer (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case 'SET_INPUT_VALUE': {
      return {
        ...state,
        input: payload
      }
    }
    default: {
      return state;
    }
  }
}
