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
  let filtered = [...state.items];
  const { sortOrder, priceRange, rating, bestseller } = state.filters;

  if (sortOrder) {
    filtered.sort((a, b) =>
      sortOrder === "low-to-high"
        ? a.discountPrice - b.discountPrice
        : b.discountPrice - a.discountPrice
    );
  }

  if (priceRange) {
    const range = priceRange.split("-");
    const min = Number(range[0]);
    const max = Number(range[1]);
    filtered = filtered.filter(
      (item) => item.discountPrice >= min && item.discountPrice <= max
    );
  }

  if (rating) {
    const minRating = parseFloat(rating);
    filtered = filtered.filter((item) => item.ratings >= minRating);
  }

  if (bestseller) {
    filtered = filtered.filter((item) => item.bestsellers === "yes");
  }

  state.filteredItems = filtered;
}

export const productDataActions = ProductData.actions;
export default ProductData;
