import { createSlice } from '@reduxjs/toolkit';
import { tAppStore } from '..';

export const GameSlice = createSlice({
  name: 'Game',
  initialState: {
    grid: {
      pixel: {
        dimensions: {
          width: 0,
          height: 0,
        }
      },
      tile: {
        dimensions: {
          width: 0,
          height: 0,
        }
      },
      map: {
        name: "Untitled Map",
        layers: [],
        startingPoint: {
          x: 0,
          y: 0,
        },
      },
    },
    dev: {
      debugStream: ["Debug stream initialized!"],
      commandStream: ["Command stream initialized!"],
      grid: {
        showRendererIds: false,
        showCoordinates: false,
        showDevLayer: false,
      }
    }
  },
  reducers: {
    setGridPixelDimensions: (state, action) => {
      state.grid.pixel.dimensions = action.payload;
    },
    setGridTileDimensions: (state, action) => {
      state.grid.tile.dimensions = action.payload;
    },
    setGridMap: (state, action) => {
      state.grid.map = action.payload;
    },
    setGridMapLayers: (state, action) => {
      state.grid.map.layers = action.payload;
    },
    setGridMapStartingPoint: (state, action) => {
      state.grid.map.startingPoint = action.payload;
    },
    set_DevDebugStream(state, action) {
      const _newDebugStream = [...state.dev.debugStream];
      _newDebugStream.push(action.payload);
      state.dev.debugStream = [..._newDebugStream];
    },
    set_DevCommandStream(state, action) {
      const _newCommandStream = [...state.dev.commandStream];
      _newCommandStream.push(action.payload);
      state.dev.commandStream = [..._newCommandStream];
    },
    set_DevControls_GridShowCoordinates(state, action) {
      state.dev.grid.showCoordinates = action.payload;
    },
    set_DevControls_GridShowRendererIds(state, action) {
      state.dev.grid.showRendererIds = action.payload;
    },
    set_DevControls_GridShowDevLayer(state, action) {
      state.dev.grid.showDevLayer = action.payload;
    },
    reset_DevDebugStream(state) {
      state.dev.debugStream = [];
    },
    reset_DevCommandStream(state) {
      state.dev.commandStream = [];
    }
  },
});

export const { 
  setGridPixelDimensions, 
  setGridTileDimensions,
  setGridMap,
  setGridMapLayers,
  setGridMapStartingPoint,
  set_DevControls_GridShowDevLayer,
  set_DevControls_GridShowRendererIds,
  set_DevControls_GridShowCoordinates,
  set_DevDebugStream,
  set_DevCommandStream,
} = GameSlice.actions;
export const selectGameState = (state: tAppStore) => state.Game;
export default GameSlice.reducer;