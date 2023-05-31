export interface tiGridFrameUnitDimensions {
  height: number;
  width: number;
}

export interface tiGridFrameUnits {
  pixel: tiGridFrameUnitDimensions;
  tile: tiGridFrameUnitDimensions;
}

export interface tiGridFrame {
  dimensions: tiGridFrameUnits;
}

export const initialGridFrame: tiGridFrame = {
  dimensions: {
    pixel: {
      height: 0,
      width: 0,
    },
    tile: {
      height: 0,
      width: 0,
    }
  }
};