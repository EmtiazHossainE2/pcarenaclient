import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  build: {
    CPU: {},
    RAM: {},
    MOTHERBOARD: {},
    MONITOR: {},
    PSU: {},
    ROM: {},
    CASING: {},
    "CPU COOLER": {},
    GPU: {},
    KEYBOARD: {},
    MOUSE: {},
    SPEAKER: {},
    SSD: {},
    UPS: {},
  },
  requiredCategory: [],
  required: ["CPU", "RAM", "MOTHERBOARD", "MONITOR", "PSU", "ROM", "CASING"],
};

const pcBuilderSlice = createSlice({
  name: "pcBuilder",
  initialState,
  reducers: {
    addToBuild: (state, action) => {
      const category = action.payload?.Category;
      state.build[category] = action.payload;
      if (state.required?.includes(action.payload?.Category)) {
        state.requiredCategory?.push(action.payload?.Category);
      }
    },
    removeFromBuild: (state, action) => {
      delete state.build[action.payload];
      var index = state.requiredCategory.indexOf(action.payload);
      if (index !== -1) {
        state.requiredCategory.splice(index, 1);
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToBuild, removeFromBuild } = pcBuilderSlice.actions;

export default pcBuilderSlice.reducer;
