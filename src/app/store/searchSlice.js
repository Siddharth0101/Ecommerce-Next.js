const { createSlice } = require("@reduxjs/toolkit");

const SearchSlice = createSlice({
  name: "search",
  initialState: {
    items: [],
    entered: "",
    originalItems: [],
  },
  reducers: {
    PUSHDATA(state, action) {
      state.items = action.payload;
      state.originalItems = action.payload;
    },
    ENTERED(state, action) {
      state.entered = action.payload;
    },
    LOGIC(state, action) {
      if (state.entered.trim() === "") {
        state.items = state.originalItems;
      } else {
        state.items = state.originalItems.filter((item) =>
          item.title.toLowerCase().includes(state.entered.toLowerCase())
        );
      }
    },
  },
});
export const SearchSliceActions = SearchSlice.actions;
export default SearchSlice;
