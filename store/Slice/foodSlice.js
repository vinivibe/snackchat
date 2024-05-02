import { createSlice } from "@reduxjs/toolkit";

const foodSlice = createSlice({
  name: "food",
  initialState: {
    selectedFoodType: ''
  },
  reducers: {
    setSelectedFoodType: (state, action) => {
      const type = action.payload;
      console.log(`Setting selected food type to ${type}`);
      state.selectedFoodType = type;
    },
  },
});

export const { setSelectedFoodType } = foodSlice.actions;
export default foodSlice.reducer;
