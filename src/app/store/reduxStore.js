import DescriptionSlice from "./descriptionSlice";
import ProductData from "./productData";
import SearchSlice from "./searchSlice";

const { configureStore } = require("@reduxjs/toolkit");
const { default: TokenSlice } = require("./tokenSlice");

const ReduxStore = configureStore({
  reducer: {
    token: TokenSlice.reducer,
    productData: ProductData.reducer,
    description: DescriptionSlice.reducer,
    search: SearchSlice.reducer,
  },
});
export default ReduxStore;
