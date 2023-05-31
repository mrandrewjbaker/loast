import { useAppStoreDispatch, useAppStoreSelector } from '..';
import { selectGameState } from '../Game/Game.slice';
import { GridTile } from '../GridTile/GridTile';
import scss from './GridRenderer.module.scss';

export const GridRenderer: React.FC = () => {
  const appStoreDispatch = useAppStoreDispatch();
  const GameState = useAppStoreSelector(selectGameState);

  

  return (
    <div className={scss.GridRenderer}>
      {
        GameState.grid.dimensions.tile.width > 0 &&
        GameState.grid.dimensions.tile.height > 0 &&
        new Array(GameState.grid.dimensions.tile.width).fill(0).map((_, y) => (
          new Array(GameState.grid.dimensions.tile.height).fill(0).map((_, x) => (
            <GridTile key={`${x}-${y}`} />
          ))
        ))
      }
      </div>
  );
}