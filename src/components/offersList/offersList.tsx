import { useAppSelector } from '../../store/hooks/hooks';
import { getFilteredOffers } from '../../store/slices/userActivity/selectors';
import FilterForm from '../filterForm/filterForm';
import OfferCard from '../offerCard/offerCard';

function OffersList() : JSX.Element {

  const filteredOffers = useAppSelector(getFilteredOffers);

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
