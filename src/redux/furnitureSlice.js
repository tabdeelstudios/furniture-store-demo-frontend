import { createSlice } from "@reduxjs/toolkit";

export const furnitureSlice = createSlice({
  name: "furniture",
  initialState: {
    furniture: [],
  },
  reducers: {
    fetchFurniture: (state, action) => {
      console.log(action.payload);
      state.furniture = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { fetchFurniture } = furnitureSlice.actions;

export default furnitureSlice.reducer;
