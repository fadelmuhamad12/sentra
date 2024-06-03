const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";

// Initial state for the cart
const initialState = {
  items: [],
  totalCount: 0,
  totalPaid: 0,
};

// Cart reducer
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const newItem = action.payload;
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === newItem.id
      );
      if (existingItemIndex === -1) {
        return {
          ...state,
          items: [
            ...state.items,
            {
              id: newItem.id,
              price: newItem.price,
              quantity: 1,
              totalPrice: newItem.price,
              name: newItem.name,
              image: newItem.image,
              description: newItem.description,
              rating: newItem.rating
            },
          ],
          totalCount: state.totalCount + 1,
          totalPaid: state.totalPaid + newItem.price,
        };
      } else {
        const updatedItems = state.items.map((item, index) => {
          if (index === existingItemIndex) {
            return {
              ...item,
              quantity: item.quantity + 1,
              totalPrice: item.totalPrice + newItem.price,
            };
          }
          return item;
        });
        return {
          ...state,
          items: updatedItems,
          totalCount: state.totalCount + 1,
          totalPaid: state.totalPaid + newItem.price,
        };
      }
    default:
      return state;
  }
};

export default cartReducer;
