import { Route, Routes, useSearchParams } from 'react-router-dom';
import { AppRoutes } from '../utils/appRoutes';
import MainPage from '../pages/mainPage/mainPage';
import ErrorPage from '../pages/errorPage/errorPage';
import LoginPage from '../pages/loginPage/loginPage';
import OfferPage from '../pages/offerPage/offerPage';
import LayoutMain from '../components/layout/layoutMain';
import FavoritesPage from '../pages/favoritesPage/favoritesPage';
import { chooseCity, chooseFilter } from '../store/slices/userActivity/userActivity';
import store from '../store/store/store';
import { useEffect } from 'react';
import PrivateRoute from '../components/PrivateRoute/privateRouter';
import { useAppSelector } from '../store/hooks/hooks';
import { getAuth } from '../store/slices/serverData/selectors';


function App(): JSX.Element {

  const [searchParams, ] = useSearchParams();
  useEffect(()=> {
    const recievedFilter = searchParams.get('filter');
    recievedFilter !== null && store.dispatch(chooseFilter(recievedFilter));
    const recievedCity = searchParams.get('city');
    recievedCity !== null && store.dispatch(chooseCity(recievedCity));
  });
  const auth = useAppSelector(getAuth);

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
        <Route
          path={AppRoutes.FAVORITES}
          element={
            <PrivateRoute auth={auth}>
              <FavoritesPage />
            </PrivateRoute>
          }
        />
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
