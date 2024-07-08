const { createSlice } = require("@reduxjs/toolkit");

const ProductData = createSlice({
  name: "product",
  initialState: {
    items: [],
    filteredItems: [],
    filters: {
      sortOrder: "",
      priceRange: "",
      rating: "",
      bestseller: false,
    },
  },
  reducers: {
    DataPush(state, action) {
      state.items = action.payload;
      state.filteredItems = action.payload;
    },
    setSortOrder(state, action) {
      state.filters.sortOrder = action.payload;
      applyFilters(state);
    },
    setPriceRange(state, action) {
      state.filters.priceRange = action.payload;
      applyFilters(state);
    },
    setRating(state, action) {
      state.filters.rating = action.payload;
      applyFilters(state);
    },
    setBestseller(state, action) {
      state.filters.bestseller = action.payload;
      applyFilters(state);
    },
  },
});

function applyFilters(state) {
  let filtered = state.items.slice();

  if (state.filters.sortOrder === "low-to-high") {
    filtered.sort((a, b) => a.discountPrice - b.discountPrice);
  } else if (state.filters.sortOrder === "high-to-low") {
    filtered.sort((a, b) => b.discountPrice - a.discountPrice);
  }

  if (state.filters.priceRange) {
    const [min, max] = state.filters.priceRange.split("-").map(Number);
    filtered = filtered.filter(
      (item) => item.discountPrice >= min && item.discountPrice <= max
    );
  }

  if (state.filters.rating) {
    const minRating = Number(state.filters.rating.split("-")[0]);
    filtered = filtered.filter((item) => item.ratings >= minRating);
  }

  if (state.filters.bestseller) {
    filtered = filtered.filter((item) => item.bestsellers == "yes");
  }
  state.filteredItems = filtered;
}

export const productDataActions = ProductData.actions;
export default ProductData;
