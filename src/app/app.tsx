import { Route, Routes } from 'react-router-dom';
import { AppRoutes } from '../utils/appRoutes';
import MainPage from '../pages/mainPage/mainPage';
import ErrorPage from '../pages/errorPage/errorPage';
import LoginPage from '../pages/loginPage/loginPage';
import OfferPage from '../pages/offerPage/offerPage';
import LayoutMain from '../components/layout/layoutMain';
import FavoritesPage from '../pages/favoritesPage/favoritesPage';


function App(): JSX.Element {

  return (
    <Routes>
      <Route path={AppRoutes.MAIN} element={<LayoutMain />} >
        <Route index element={<MainPage />} />
        <Route
          path=':city/:filter'
          element={<MainPage />}
        />
        <Route path={AppRoutes.OFFER} >
          <Route path=':id' element={<OfferPage />} />
        </Route>
        <Route path={AppRoutes.FAVORITES} element={<FavoritesPage />}/>
        <Route
          path='*'
          element={<ErrorPage />}
        />
      </Route>
      <Route path={AppRoutes.LOGIN} element={<LoginPage />} />
      <Route
        path='*'
        element={<ErrorPage />}
      />
    </Routes>
  );
}

export default App;
