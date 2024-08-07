import { MutableRefObject, useState, useRef, useEffect } from 'react';
import {TileLayer, Map } from 'leaflet';


function useMap( myRef: MutableRefObject<HTMLElement | null> , city : {name: string; lat: number; lng: number; zoom: number} | undefined ) : Map | null {

  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef<boolean>(false);

  useEffect(() => {
    if (myRef.current !== null && !isRenderedRef.current && city !== undefined) {
      //cоздаем карту
      const instance = new Map(myRef.current, { center: { lat: city.lat , lng: city.lng }, zoom: city.zoom });

      // создаем слой
      const layer = new TileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        }
      );
      //добавляем созданный слой к созданной карте
      instance.addLayer(layer);

      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [myRef, city]);

  return map;
}
export default useMap;
