const REMOVE_FROM_CART = 'REMOVE_FROM_CART'


const initialState = {
  items: [],
  totalCount: 0,
  totalPaid: 0
}

const removeFromCartReducer = (state = initialState, action) => {
  const id = action.payload
  const existingItem = state.items.filter(item => item.id === id)
  state.totalPaid--
  if(existingItem === 1) {
    state.items = state.items.filter(item => item.id !== id)
  } else {
    existingItem.paid
  }
}