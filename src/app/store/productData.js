const { createSlice } = require("@reduxjs/toolkit");

const ProductData = createSlice({
  name: "product",
  initialState: {
    items: [],
  },
  reducers: {
    DataPush(state, action) {
      state.items = action.payload;
    },
    LowToHigh(state, action) {
      state.items.sort((a, b) => a.discountPrice - b.discountPrice);
    },
    HighToLow(state, action) {
      state.items.sort((a, b) => b.discountPrice - a.discountPrice);
    },
    MinimumPrice(state, action) {
      state.items = state.items.filter(
        (item) => item.discountPrice < action.payload
      );
    },
    MaximumPrice(state, action) {
      state.items = state.items.filter(
        (item) => item.discountPrice > action.payload
      );
    },
  },
});
export const productDataActions = ProductData.actions;
export default ProductData;
