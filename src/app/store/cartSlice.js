const { createSlice } = require("@reduxjs/toolkit");

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    REPLACE(state, action) {
      state.items = action.payload;
    },
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
  },
});

export const CartSliceActions = CartSlice.actions;
export default CartSlice;
