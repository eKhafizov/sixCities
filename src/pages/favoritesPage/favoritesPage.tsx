import FavoritesBlock from '../../components/favoritesBlock/favoritesBlock';
import { AppRoutes } from '../../utils/appRoutes';
import { Link } from 'react-router-dom';
import { citiesList } from '../../utils/utils';

function FavoritesPage() : JSX.Element {

  return (
    <>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>

            <ul className="favorites__list">
              {citiesList.map((city) => (
                <FavoritesBlock
                  key={city}
                  city={city}
                />
              ))}
            </ul>

          </section>
        </div>
      </main>

      <footer className="footer container">
        <Link className="footer__logo-link" to={AppRoutes.MAIN}>
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </Link>
      </footer>

    </>
  );
}
export default FavoritesPage;
