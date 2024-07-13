const { createSlice } = require("@reduxjs/toolkit");

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    ADDITEM(state, action) {
      const { id, title, image, discountPrice, originalPrice, size, quantity } =
        action.payload;
      const existingItemIndex = state.items.findIndex(
        (item) => item.id == id && item.size == size
      );
      if (existingItemIndex != -1) {
        state.items[existingItemIndex].quantity += quantity;
      } else {
        state.items.push({
          id,
          title,
          image,
          discountPrice,
          originalPrice,
          size,
          quantity,
        });
      }
    },
    EDIT(state, action) {
      const { id, size, quantity } = action.payload;
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === id && item.size === size
      );
      if (existingItemIndex !== -1) {
        state.items[existingItemIndex].quantity = quantity;
      }
    },
    REMOVE(state, action) {
      const { id, size } = action.payload;
      state.items = state.items.filter(
        (item) => !(item.id === id && item.size === size)
      );
    },
  },
});

export const CartSliceActions = CartSlice.actions;
export default CartSlice;
