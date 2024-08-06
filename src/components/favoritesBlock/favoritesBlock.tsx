import { useNavigate, useSearchParams } from 'react-router-dom';
import { AppRoutes } from '../../utils/appRoutes';
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks';
import { chooseCity } from '../../store/slices/userActivity/userActivity';
import { getFavorites } from '../../store/slices/userActivity/selectors';
import { Link } from 'react-router-dom';
import { fetchAddFavorite, fetchRemoveFavorite } from '../../store/api-actions/api-actions';

function FavoritesBlock({city}: {city: string}) : JSX.Element {

  const [, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const favorites = useAppSelector(getFavorites);
  const favoritesInBlock = favorites?.filter((item) => item.city.name === city);
  const isFavorite = favorites?.find((item) => item.city.name === city);

  return favoritesInBlock ? (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <button
            className="locations__item-link"
            onClick={(e) => {
              e.preventDefault();
              setSearchParams({city: city, filter: 'popular'});
              dispatch(chooseCity(city));
              navigate(AppRoutes.MAIN);
            }}
          >
            <span>{city}</span>
          </button>
        </div>
      </div>
      <div className="favorites__places">
        {
          favoritesInBlock?.map((item) => (
            <article key={item.id} className="favorites__card place-card">
              {item.isFavorite && (
                <div className="place-card__mark">
                  <span>Premium</span>
                </div>)}

              <div className="favorites__image-wrapper place-card__image-wrapper">
                <Link to={`${AppRoutes.OFFER}${item.id}`}>
                  <img
                    className="place-card__image"
                    src={item.previewImage.replace('https://13.react.pages.academy', 'https://13.react.htmlacademy.pro')}
                    width="150"
                    height="110"
                    alt={item.title}
                  />
                </Link>
              </div>

              <div className="favorites__card-info place-card__info">
                <div className="place-card__price-wrapper">
                  <div className="place-card__price">
                    <b className="place-card__price-value">&euro;{item.price}</b>
                    <span className="place-card__price-text">&#47;&nbsp;night</span>
                  </div>
                  <button
                    className="place-card__bookmark-button place-card__bookmark-button--active button"
                    type="button"
                    onClick={(e) => {
                      isFavorite === undefined
                        ? (dispatch(fetchAddFavorite({offerId: item.id})))
                        : (dispatch(fetchRemoveFavorite({offerId: item.id})));
                    }}
                  >
                    <svg className="place-card__bookmark-icon" width="18" height="19">
                      <use xlinkHref="#icon-bookmark"></use>
                    </svg>
                    <span className="visually-hidden">In bookmarks</span>
                  </button>
                </div>
                <div className="place-card__rating rating">
                  <div className="place-card__stars rating__stars">
                    <span style={{width: '100%'}}>{item.rating}</span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                </div>
                <h2 className="place-card__name">
                  <Link to={`${AppRoutes.OFFER}${item.id}`} >{item.title}</Link>
                </h2>
                <p className="place-card__type">{item.type}</p>
              </div>
            </article>
          ))
        }

      </div>
    </li>
  ) : (
    <span className='visually-hidden'>No favorites</span>
  );
}
export default FavoritesBlock;
