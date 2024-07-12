const { createSlice } = require("@reduxjs/toolkit");

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    ADDITEM(state, action) {},
  },
});
export const CartSliceActions = CartSlice.actions;
export default CartSlice;
