import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks';
import Reviews from '../../components/reviews/reviews';
import { getNearbyOffers } from '../../store/slices/userActivity/selectors';
import NearbyOffers from '../../components/nearbyOffers/nearbyOffers';
import { useEffect } from 'react';
import BookmarkLarge from '../../components/bookmarkLarge/bookmarkLarge';
import { fetchComment, fetchNearbyOffers } from '../../store/api-actions/api-actions';
import { useGetOffersQuery } from '../../features/apiSlice';


function OfferPage() : JSX.Element {

  const param = useParams();
  // Var1 with axios and thunks and slices
  //const offers = useAppSelector(getOffers);
  // Var-2 with RTK-query
  const {data} = useGetOffersQuery();
  const offers = data;

  const offer = offers?.find((item) => item.id === Number(param.id));
  const dispatch = useAppDispatch();

  const offersNearby = useAppSelector(getNearbyOffers);
  useEffect(() => {
    offer !== undefined && dispatch(fetchNearbyOffers({offerId: offer?.id}));
    offer !== undefined && dispatch(fetchComment({offerId: offer?.id}));
  }, []);

  return offer ? (
    <main className="page__main page__main--property">
      <section className="property">
        {/* Images */}
        <div className="property__gallery-container container">
          <div className="property__gallery">
            {offer.images.map((image, index) => (
              <div key={image} className="property__image-wrapper">
                <img className="property__image" src={image.replace('https://13.react.pages.academy', 'https://13.react.htmlacademy.pro')} alt={`image-${index.toString()}`} />
              </div>
            ))}
          </div>
        </div>

        <div className="property__container container">
          <div className="property__wrapper">
            {offer.isPremium && (<div className="property__mark"><span>Premium</span></div>)}
            <div className="property__name-wrapper">
              <h1 className="property__name">
                {offer.title}
              </h1>

              <BookmarkLarge offer={offer}/>

            </div>
            <div className="property__rating rating">
              <div className="property__stars rating__stars">
                <span style={{width: '80%'}} ></span>
                <span className="visually-hidden">Rating</span>
              </div>
              <span className="property__rating-value rating__value">{offer.rating}</span>
            </div>
            <ul className="property__features">
              <li className="property__feature property__feature--entire">
                {offer.type}
              </li>
              <li className="property__feature property__feature--bedrooms">
                {offer.bedrooms} bedrooms
              </li>
              <li className="property__feature property__feature--adults">
                Max {offer.maxAdults} adults
              </li>
            </ul>
            <div className="property__price">
              <b className="property__price-value">&euro;{offer.price}</b>
              <span className="property__price-text">&nbsp;night</span>
            </div>

            {/* Offer goods */}
            <div className="property__inside">
              <h2 className="property__inside-title">What&apos;s inside</h2>
              <ul className="property__inside-list">
                {
                  offer.goods.map((good) => (
                    <li key={good} className="property__inside-item">
                      {good}
                    </li>
                  ))
                }
              </ul>
            </div>

            {/* Host */}
            <div className="property__host">
              <h2 className="property__host-title">Meet the host</h2>
              <div className="property__host-user user">
                <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                  <img className="property__avatar user__avatar" src={offer.host.avatarUrl.replace('https://13.react.pages.academy', 'https://13.react.htmlacademy.pro')} width="74" height="74" alt={`Host ${offer.host.name} avatar`}/>
                </div>
                <span className="property__user-name">
                  {offer.host.name}
                </span>
                <span className="property__user-status">
                  {offer.host.isPro && 'Pro'}
                </span>
              </div>
              <div className="property__description">
                <p className="property__text">
                  ${offer.description}
                </p>
              </div>
            </div>

            {/* Reviews */}
            <Reviews
              offer={offer}
            />

          </div>
        </div>

        <section className="property__map map"></section>
      </section>


      <NearbyOffers offersNearby={offersNearby} />

    </main>
  ) : (
    <h2>No offer here</h2>
  );
}

export default OfferPage;
