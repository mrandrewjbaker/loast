import { createSlice } from '@reduxjs/toolkit';
import { tAppStore } from '..';

export const DevSlice = createSlice({
  name: 'Dev',
  initialState: {
    debugStream: ["Debug stream initialized!"],
    commandStream: ["Command stream initialized!"],
    grid: {
      dimensions: {
        display: false,
        unit: 'tile',
      },
      map: {
        coordinates: {
          display: false,
        },
      },
    },
  },
  reducers: {
    // Grid
    setDisplayGridDimensions: (state, action) => {
      state.grid.dimensions.display = action.payload;
    },
    setDisplayGridUnit: (state, action) => {
      state.grid.dimensions.unit = action.payload;
    }
  },
});

export const {
  setDisplayGridDimensions,
  setDisplayGridUnit,
} = DevSlice.actions;

export const selectDev = (state: tAppStore) => state.Dev;
export const selectDisplayGridDimensions = (state: tAppStore) => state.Dev.grid.dimensions.display;
export const selectDisplayGridUnit = (state: tAppStore) => state.Dev.grid.dimensions.unit;

export default DevSlice.reducer;