import ProductData from "./productData";

const { configureStore } = require("@reduxjs/toolkit");
const { default: TokenSlice } = require("./tokenSlice");

const ReduxStore = configureStore({
  reducer: { token: TokenSlice.reducer, productData: ProductData.reducer },
});
export default ReduxStore;
