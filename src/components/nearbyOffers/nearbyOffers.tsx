import { OffersArray } from '../../types/types';
import NearbyCard from '../nearbyCard/nearbyCard';


function NearbyOffers({offersNearby} : {offersNearby: OffersArray | null}) : JSX.Element {

  return (
    <div className="container">
      <section className="near-places places">
        <h2 className="near-places__title">Other places in the neighbourhood</h2>
        <div className="near-places__list places__list">
          {
            offersNearby && offersNearby.map((offer) => (<NearbyCard key={offer.id} offer={offer} />))
          }
        </div>
      </section>
    </div>
  );
}
export default NearbyOffers;
