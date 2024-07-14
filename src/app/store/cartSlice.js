const { createSlice } = require("@reduxjs/toolkit");

const convertPriceToNumber = (price) => {
  return Number(price.replace("₹", ""));
};

const calculateTotalAmount = (items) => {
  return items.reduce((total, item) => {
    return total + convertPriceToNumber(item.discountPrice) * item.quantity;
  }, 0);
};

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalAmount: 0,
  },
  reducers: {
    ADDITEM(state, action) {
      const {
        id,
        title,
        image,
        discountPrice,
        originalPrice,
        size,
        quantity,
        stock,
      } = action.payload;
      const existingItemIndex = state.items.findIndex(
        (item) => item.id == id && item.size == size
      );
      if (existingItemIndex != -1) {
        state.items[existingItemIndex].quantity += quantity;
        state.items[existingItemIndex].stock = stock;
      } else {
        state.items.push({
          id,
          title,
          image,
          discountPrice,
          originalPrice,
          size,
          quantity,
          stock,
        });
      }
      state.totalAmount = calculateTotalAmount(state.items);
    },
    EDIT(state, action) {
      const { id, size, quantity, stock } = action.payload;
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === id && item.size === size
      );
      if (existingItemIndex !== -1) {
        state.items[existingItemIndex].quantity = quantity;
        if (stock !== undefined) {
          state.items[existingItemIndex].stock = stock;
        }
      }
      state.totalAmount = calculateTotalAmount(state.items);
    },
    REMOVE(state, action) {
      const { id, size } = action.payload;
      state.items = state.items.filter(
        (item) => !(item.id === id && item.size === size)
      );
      state.totalAmount = calculateTotalAmount(state.items);
    },
  },
});

export const CartSliceActions = CartSlice.actions;
export default CartSlice;
