import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  emergency2: [],
};

const emergencySlice2 = createSlice({
  name: "emergencySlice2",
  initialState,
  reducers: {
    addEmergency: (state, action) => {
      console.log(action);
      return {
        ...state,
        emergency2: [state.emergency2, action.payload],
      };
    },
  },
});

export const { addEmergency } = emergencySlice2.actions;
export default emergencySlice2.reducer;
