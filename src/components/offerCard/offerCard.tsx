import { OfferType } from '../../types/types';
import { AppRoutes } from '../../utils/appRoutes';
import { Link } from 'react-router-dom';
import { AuthStatus } from '../../store/utils/utils';
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks';
import { fetchAddFavorite, fetchRemoveFavorite } from '../../store/api-actions/api-actions';
import { useNavigate } from 'react-router-dom';
import { getFavorites } from '../../store/slices/userActivity/selectors';


function OfferCard({offer}: {offer: OfferType}) : JSX.Element {

  const dispatch = useAppDispatch();
  const auth = useAppSelector((state) => state.SERVER_DATA.authorized);
  const navigate = useNavigate();
  const favorites = useAppSelector(getFavorites);
  const isFavorite = favorites?.find((item) => item.id === offer.id);

  return (
    <article key={offer.id} className="cities__card place-card">
      {offer.isPremium && <div className="place-card__mark"><span>Premium</span></div>}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`${AppRoutes.OFFER}${offer.id}`}>
          <img className="place-card__image" src={offer.previewImage.replace('https://13.react.pages.academy', 'https://13.react.htmlacademy.pro')} width="260" height="200" alt={offer.title}/>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          {
            auth === AuthStatus.AUTH ? (
              <button
                className="place-card__bookmark-button button"
                type="button"
                onClick={(e) => {
                  isFavorite
                    ? (dispatch(fetchAddFavorite({offerId: offer.id})))
                    : (dispatch(fetchRemoveFavorite({offerId: offer.id})));
                }}
              >
                <svg className="place-card__bookmark-icon" width="18" height="19">
                  <use xlinkHref="#icon-bookmark"></use>
                </svg>
                <span className="visually-hidden">To bookmarks</span>
              </button>
            ) : (
              <button
                className="place-card__bookmark-button button"
                type="button"
                onClick={(e) => {
                  navigate(AppRoutes.LOGIN);
                }}
              >
                <svg className="place-card__bookmark-icon" width="18" height="19">
                  <use xlinkHref="#icon-bookmark"></use>
                </svg>
                <span className="visually-hidden">To bookmarks</span>
              </button>
            )
          }

        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: '80%'}}>{offer.rating}</span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoutes.OFFER} ${offer.id}`}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}
export default OfferCard;
