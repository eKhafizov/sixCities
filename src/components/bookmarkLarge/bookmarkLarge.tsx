import { OfferType } from '../../types/types';
import {useAppSelector } from '../../store/hooks/hooks';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '../../utils/appRoutes';
import { AuthStatus } from '../../store/utils/utils';
import { useAddFavoriteMutation, useDeleteFavoriteMutation, useGetFavoritesQuery } from '../../features/apiSlice';


function BookmarkLarge({offer} : {offer: OfferType}) : JSX.Element {

  const auth = useAppSelector((state) => state.SERVER_DATA.authorized);
  const navigate = useNavigate();

  //rtk-query get favorites
  const {data} = useGetFavoritesQuery();
  const favorites = data;

  //rtk-query add favorite (POST)
  const [addFavorite] = useAddFavoriteMutation();
  const [deleteFavorite] = useDeleteFavoriteMutation();

  const isFavorite = favorites?.find((item) => item.id === offer?.id);


  return (
    auth === AuthStatus.AUTH
      ? (
        <button
          className={`place-card__bookmark-button button ${isFavorite !== undefined ? 'place-card__bookmark-button--active' : ''}`}
          type="button"
          onClick={(e) => {
            isFavorite === undefined
              ? addFavorite(offer.id)
              : deleteFavorite(offer.id);
          }}
        >
          <svg className="place-card__bookmark-icon" width="31" height="33">
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
          <svg className="place-card__bookmark-icon" width="31" height="33">
            <use xlinkHref="#icon-bookmark"></use>
          </svg>
          <span className="visually-hidden">To bookmarks</span>
        </button>
      )
  );
}
export default BookmarkLarge;
