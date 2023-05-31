import { useCallback, useEffect, useRef, useState } from 'react';
import scss from './GridFrame.module.scss';
import { useAppStoreDispatch, useAppStoreSelector } from '..';
import { selectGameState, setGridDimensions } from '../Game/Game.slice';
import { tiGridFrameUnits } from './GridFrame.type';
import { GridRenderer } from '../GridRenderer/GridRenderer';

export const GridFrame: React.FC = () => {
  const appStoreDispatch = useAppStoreDispatch();
  const GameState = useAppStoreSelector(selectGameState);
  const GridFrameRef = useRef<HTMLDivElement>(null);
  const [localGridDimensions, setLocalGridDimensions] = useState({
    pixel: {
      width: 0,
      height: 0
    },
    tile: {
      width: 0,
      height: 0
    }
  });

  const updateDimensions = useCallback ((newDimensions: tiGridFrameUnits) => {
    setLocalGridDimensions(newDimensions);
    appStoreDispatch(setGridDimensions(newDimensions));
  }, [appStoreDispatch, setLocalGridDimensions]);

  const calculateGridDimensions = useCallback(() => {
    if (!GridFrameRef.current) return;
    const { width: gridFramePixelWidth, height: gridFramePixelHeight } = GridFrameRef.current.getBoundingClientRect();
    const { width: gridFrameTileWidth, height: gridFrameTileHeight } = {
      width: Math.floor(gridFramePixelWidth / 49),
      height: Math.floor(gridFramePixelHeight / 49),
    };

    const newGridDimensions = {
      pixel: {
        width: gridFramePixelWidth,
        height: gridFramePixelHeight
      },
      tile: {
        width: gridFrameTileWidth,
        height: gridFrameTileHeight
      }
    };

    updateDimensions(newGridDimensions);
  }, [updateDimensions]);

  useEffect(() => {
    calculateGridDimensions();
    window.addEventListener('resize', calculateGridDimensions);

    return () => {
      window.removeEventListener('resize', calculateGridDimensions);
    }
  }, [GridFrameRef, calculateGridDimensions]);

  
  return (
    <div className={scss.GridFrame} ref={GridFrameRef}>
      {
        GameState.grid.dimensions.tile.width > 0 && GameState.grid.dimensions.tile.height > 0
        && (
          <GridRenderer />
        )
      }
    </div>
  );
}