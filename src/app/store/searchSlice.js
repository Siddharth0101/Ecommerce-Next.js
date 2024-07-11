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
      console.log(state.items);
    },
    ENTERED(state, action) {
      state.entered = action.payload;
      console.log(state.entered);
    },
    LOGIC(state, action) {
      if (state.entered.trim() === "") {
        state.items = state.originalItems;
      } else {
        state.items = state.originalItems.filter((item) =>
          item.title.toLowerCase().includes(state.entered.toLowerCase())
        );
      }
      console.log(state.items);
    },
  },
});
export const SearchSliceActions = SearchSlice.actions;
export default SearchSlice;
