import { useAppSelector } from '../../store/hooks/hooks';
import { AppRoutes } from '../../utils/appRoutes';
import { Link } from 'react-router-dom';
import FilterForm from '../filterForm/filterForm';


function OffersList() : JSX.Element {

  const filteredOffers = useAppSelector((state) => state.USER_ACTIVITY.offers);

  // .replace('https://13.react.pages.academy', 'https://13.react.htmlacademy.pro');

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">312 places to stay in Amsterdam</b>
      <FilterForm />
      <div className="cities__places-list places__list tabs__content">
        {
          filteredOffers?.map((offer) => (
            <article key={offer.id} className="cities__card place-card">
              <div className="place-card__mark">
                {offer.isPremium && <span>Premium</span>}
              </div>
              <div className="cities__image-wrapper place-card__image-wrapper">
                <Link to={`${AppRoutes.OFFER} ${offer.id}`}>
                  <img className="place-card__image" src={offer.previewImage.replace('https://13.react.pages.academy', 'https://13.react.htmlacademy.pro')} width="260" height="200" alt={offer.title}/>
                </Link>
              </div>
              <div className="place-card__info">
                <div className="place-card__price-wrapper">
                  <div className="place-card__price">
                    <b className="place-card__price-value">&euro;{offer.price}</b>
                    <span className="place-card__price-text">&#47;&nbsp;night</span>
                  </div>
                  <button className="place-card__bookmark-button button" type="button">
                    <svg className="place-card__bookmark-icon" width="18" height="19">
                      <use xlinkHref="#icon-bookmark"></use>
                    </svg>
                    <span className="visually-hidden">To bookmarks</span>
                  </button>
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
          ))
        }
      </div>
    </section>
  );
}
export default OffersList;
