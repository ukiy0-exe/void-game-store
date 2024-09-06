export function reducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART": {
      return [...state, action.payload];
    }
    default: {
      return state;
    }
  }
}
