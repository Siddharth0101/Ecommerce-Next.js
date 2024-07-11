const { createSlice } = require("@reduxjs/toolkit");

const DescriptionSlice = createSlice({
  name: "description",
  initialState: {
    display: {},
  },
  reducers: {
    DISPLAY(state, action) {
      state.display = action.payload;
    },
  },
});
export const DescriptionSliceAction = DescriptionSlice.actions;
export default DescriptionSlice;
