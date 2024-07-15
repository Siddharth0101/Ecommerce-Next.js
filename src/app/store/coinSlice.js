const { createSlice } = require("@reduxjs/toolkit");

const CoinSlice = createSlice({
  name: "coinslice",
  initialState: {
    coin: 0,
  },
  reducers: {
    COINS(state, action) {
      state.coin += action.payload;
    },
  },
});
export const coinsliceAction = CoinSlice.actions;
export default CoinSlice;
