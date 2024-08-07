import { OfferType } from '../../types/types';
import { AppRoutes } from '../../utils/appRoutes';
import { Link } from 'react-router-dom';
import BookmarkSmall from '../bookmarkSmall/bookmarkSmall';


function NearbyCard({key, offer} : {key: number; offer: OfferType}) : JSX.Element {


  return (
    <article className="near-places__card place-card">
      {offer.isPremium && (<div className="place-card__mark"><span>Premium</span></div>)}
      <div className="near-places__image-wrapper place-card__image-wrapper">
        <Link to={`${AppRoutes.OFFER}${offer.id}`} >
          <img className="place-card__image" src={offer.previewImage.replace('https://13.react.pages.academy', 'https://13.react.htmlacademy.pro')} width="260" height="200" alt={offer.title} />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>

          <BookmarkSmall offer={offer} />

        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: '100%'}}>{offer.rating}</span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoutes.OFFER}${offer.id}`}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}
export default NearbyCard;
