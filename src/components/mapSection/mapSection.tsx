import 'leaflet/dist/leaflet.css';
import { Icon, layerGroup, Marker } from 'leaflet';
import { useEffect, useRef } from 'react';
import useMap from './useMap';
import { useAppSelector } from '../../store/hooks/hooks';
import { getChosenCity, getOffers } from '../../store/slices/userActivity/selectors';
import { citiesLocation } from '../../utils/utils';


//Это объекты иконок для карты
const defaultCustomIcon = new Icon({
  iconUrl: 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});
const currentCustomIcon = new Icon({
  iconUrl: 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});


function MapSection() : JSX.Element {

  const chosenCity = useAppSelector(getChosenCity);
  const offers = useAppSelector(getOffers);
  const myRef = useRef(null);
  const city = citiesLocation.find((item) => item.name === chosenCity);
  const map = useMap(myRef, city);

  useEffect(() => {
    if (map) {
      //создаем слой и добавляем к карте map
      const markerLayer = layerGroup().addTo(map);
      //для каждого объекта из props.offers делаем маркер
      offers !== null && offers.forEach((point) => {
        const marker = new Marker({
          lat: point.city.location.latitude,
          lng: point.city.location.longitude
        });
        //добавляем маркеру иконку
        marker
          .setIcon(
            chosenCity !== undefined && point.city.name === chosenCity
              ? currentCustomIcon //если есть выбранный в сотоянии объект, то делаем его маркер красным
              : defaultCustomIcon //остальные маркеры делаем синими
          )
          .addTo(markerLayer); //добавляем каждый маркер на слой, которой уже на map
      });

      //убираем слой перед размонтированием элемента, он добавится после обновления при монтированием
      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, offers, chosenCity]);

  return (
    <div className="cities__right-section">
      <section className="cities__map map">
        <div
          style={{height: '600px'}}
          ref={myRef} //добавили ссылку на элемент DOM с картой
        >
        </div>
      </section>
    </div>);
}
export default MapSection;
