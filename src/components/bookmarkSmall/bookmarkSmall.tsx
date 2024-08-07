import { OfferType } from '../../types/types';
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks';
import { useNavigate } from 'react-router-dom';
import { fetchAddFavorite, fetchRemoveFavorite } from '../../store/api-actions/api-actions';
import { AppRoutes } from '../../utils/appRoutes';
import { AuthStatus } from '../../store/utils/utils';


function BookmarkSmall({offer} : {offer: OfferType}) : JSX.Element {

  const auth = useAppSelector((state) => state.SERVER_DATA.authorized);
  const navigate = useNavigate();
  const favorites = useAppSelector((state) => state.USER_ACTIVITY.favorites);
  const isFavorite = favorites?.find((item) => item.id === offer?.id);
  const dispatch = useAppDispatch();

  return (
    auth === AuthStatus.AUTH
      ? (
        <button
          className={`place-card__bookmark-button button ${isFavorite ? 'place-card__bookmark-button--active' : ''}`}
          type="button"
          onClick={(e) => {
            isFavorite === undefined
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
          className={`place-card__bookmark-button button ${isFavorite ? 'place-card__bookmark-button--active' : ''}`}
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
  );
}

export default BookmarkSmall;
