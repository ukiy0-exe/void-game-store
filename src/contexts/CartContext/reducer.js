export function reducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART": {
      const { id } = action.payload;
      const existingProduct = state.find((item) => item.id === id);

      if (existingProduct) {
        return state.map((item) =>
          item.id === id
            ? { ...item, cart_quantity: item.cart_quantity + 1 }
            : item,
        );
      } else {
        return [...state, { ...action.payload, cart_quantity: 1 }];
      }
    }
    case "REMOVE_FROM_CART": {
      return state.filter(
        (_, filteredIndex) => action.payload !== filteredIndex,
      );
    }
    case "CLEAR_CART": {
      return [];
    }
    case "INCREMENT_QUANTITY": {
      return state.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, cart_quantity: item.cart_quantity + 1 };
        }
        return item;
      });
    }
    case "DECREMENT_QUANTITY": {
      return state.map((item) => {
        if (item.id === action.payload.id) {
          const newQuantity = Math.max(1, item.cart_quantity - 1);
          return { ...item, cart_quantity: newQuantity };
        }
        return item;
      });
    }
    default: {
      return state;
    }
  }
}
