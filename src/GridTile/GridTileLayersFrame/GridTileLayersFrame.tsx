import { useAppStoreSelector } from '../..';
import { selectDev } from '../../DevTools/Dev.slice';
import scss from './GridTileLayersFrame.module.scss';

export const GridTileLayersFrame: React.FC = () => {
  const DevState = useAppStoreSelector(selectDev);

  return (
    <div className={scss.GridTileLayersFrame}>
      {
        DevState.grid.dimensions.display && (
          <div className={scss.GridTileLayersFrame__Dev}>
            <div className={scss.GridTileLayersFrame__Dev__TileTopHalf}>
              <div className={scss.GridTileLayersFrame__Dev__TileTopHalfLeft}>
                <span>col</span>
              </div>
              <div className={scss.GridTileLayersFrame__Dev__TileTopHalfRight}></div>
            </div>
            <div className={scss.GridTileLayersFrame__Dev__TileBottomHalf}>
              <div className={scss.GridTileLayersFrame__Dev__TileBottomHalfLeft}></div>
              <div className={scss.GridTileLayersFrame__Dev__TileBottomHalfRight}>
                <span>row</span>
              </div>
            </div>
          </div>
        )
      }
        


    </div>
  );
}