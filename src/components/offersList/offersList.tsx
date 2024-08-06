import { useAppSelector } from '../../store/hooks/hooks';
import FilterForm from '../filterForm/filterForm';
import OfferCard from '../offerCard/offerCard';

function OffersList() : JSX.Element {

  const offers = useAppSelector((state) => state.USER_ACTIVITY.offers);
  const chosenCity = useAppSelector((state) => state.USER_ACTIVITY.chosenCity);
  const filteredOffers = offers?.filter((offer) => offer.city.name === chosenCity);

  // .replace('https://13.react.pages.academy', 'https://13.react.htmlacademy.pro');

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">312 places to stay in Amsterdam</b>
      <FilterForm />
      <div className="cities__places-list places__list tabs__content">
        {
          filteredOffers?.map((offer) => (
            <OfferCard key={offer.id} offer={offer} />
          ))
        }
      </div>
    </section>
  );
}
export default OffersList;
