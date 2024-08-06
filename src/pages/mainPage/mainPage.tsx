import CitiesList from '../../components/citiesList/citiesList';
import OffersList from '../../components/offersList/offersList';
import MapSection from '../../components/mapSection/mapSection';


function MainPage() : JSX.Element {

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <CitiesList />
      <div className="cities">
        <div className="cities__places-container container">
          <OffersList />
          <MapSection />
        </div>
      </div>
    </main>
  );
}

export default MainPage;
