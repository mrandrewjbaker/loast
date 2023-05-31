import { useCallback, useEffect } from "react"
import { useAppStoreDispatch, useAppStoreSelector } from ".."
import { selectDev, setDisplayGridDimensions } from "./Dev.slice";

export const DevTools: React.FC = () => {
  const appStoreDispatch = useAppStoreDispatch();
  const DevState = useAppStoreSelector(selectDev);

  const init = useCallback(() => {
    console.log('DevTools.tsx');

    const toggleDisplayGridDimensions = (status: boolean) => {
      console.log(`displayGridDimensions = ${status}`)
      appStoreDispatch(setDisplayGridDimensions(status))
    }

    const logDevState = () => {
      console.log(JSON.stringify(DevState));
    }

    interface DevApi {
      [key: string]: Function
    }

    const devapi: DevApi =  {
      toggleDisplayGridDimensions,
      logDevState,
    };

    (window as any).devapi = {
      ...devapi
    };

    console.log('devapi:', devapi);

  }, [appStoreDispatch, DevState]);





  useEffect(() => {
    init();
  }, [init]);

  return (
    <div>

    </div>
  )
}
