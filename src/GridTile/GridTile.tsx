import scss from './GridTile.module.scss';
import { GridTileLayersFrame } from './GridTileLayersFrame/GridTileLayersFrame';

export const GridTile: React.FC = () => {
  return (
    <div className={scss.GridTile}>
      <GridTileLayersFrame />
    </div>
  );
}