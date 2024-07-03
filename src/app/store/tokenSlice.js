const { createSlice } = require("@reduxjs/toolkit");

const TokenSlice = createSlice({
  name: "token",
  initialState: {
    isLogged: localStorage.getItem("token") ? true : false,
    displayName: "",
  },
  reducers: {
    DISPLAYNAME(state, action) {
      state.displayName = action.payload;
    },
    LOGIN(state, action) {
      state.isLogged = true;
    },
    LOGOUT(state, action) {
      state.isLogged = false;
    },
  },
});
export const TokenSliceActions = TokenSlice.actions;
export default TokenSlice;
