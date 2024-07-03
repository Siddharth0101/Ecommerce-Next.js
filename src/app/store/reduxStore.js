const { configureStore } = require("@reduxjs/toolkit");
const { default: TokenSlice } = require("./tokenSlice");

const ReduxStore = configureStore({
  reducer: { token: TokenSlice.reducer },
});
export default ReduxStore;
