import { useSearchParams } from 'react-router-dom';
import { citiesList } from '../../utils/utils';
import styles from './style.module.css';
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks';
import {chooseCity} from '../../store/slices/userActivity/userActivity';

function CitiesList() : JSX.Element {

  const dispatch = useAppDispatch();
  const chosenCity = useAppSelector((state) => state.USER_ACTIVITY.chosenCity);
  const currentFilter = useAppSelector((state) => state.USER_ACTIVITY.chosenFilter);

  const [, setSearchParams] = useSearchParams();


  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {
            citiesList.map((city) => (
              <li key={city} className='locations__item'>
                <button
                  className={`
                    ${styles.button__city} locations__item-link tabs__item
                    ${city === chosenCity ? 'tabs__item--active' : ''}
                    `}
                  onClick={(e) => {
                    setSearchParams({city: city, filter: currentFilter});
                    dispatch(chooseCity(city));
                    e.preventDefault();
                  }}
                >
                  <span>{city}</span>
                </button>
              </li>))
          }
        </ul>
      </section>
    </div>
  );
}
export default CitiesList;
