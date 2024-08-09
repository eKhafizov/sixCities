import { useAppSelector, useAppDispatch } from '../../store/hooks/hooks';
import { getAuth } from '../../store/slices/serverData/selectors';
import { AuthStatus } from '../../store/utils/utils';
import { AppRoutes } from '../../utils/appRoutes';
import { Link, useNavigate } from 'react-router-dom';
import { logoutAuth } from '../../store/api-actions/api-actions';
import { useGetFavoritesQuery } from '../../features/apiSlice';

function Header() : JSX.Element {

  const dispatch = useAppDispatch();
  const auth = useAppSelector(getAuth);

  const {data} = useGetFavoritesQuery();
  const favorites = data;

  const userInfo = useAppSelector((state) => state.USER_ACTIVITY.userInfo);
  const navigate = useNavigate();
  const favoriteNumber = () =>
    favorites !== undefined && favorites !== null
      ? (
        favorites.length
      ) : (
        0
      );

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link to={AppRoutes.MAIN} className="header__logo-link header__logo-link--active">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
            </Link>
          </div>
          <nav className="header__nav">
            {
              auth === AuthStatus.AUTH
                ? (
                  <ul className="header__nav-list">
                    <li className="header__nav-item user">
                      <Link to={AppRoutes.FAVORITES} className="header__nav-link header__nav-link--profile" >
                        <div className="header__avatar-wrapper user__avatar-wrapper">
                        </div>
                        <span className="header__user-name user__name">{userInfo}</span>
                        <span className="header__favorite-count">{favoriteNumber()}</span>
                      </Link>
                    </li>
                    <li className="header__nav-item">
                      <button
                        className="header__nav-link"
                        onClick={
                          (e) => {
                            dispatch(logoutAuth());
                            navigate(AppRoutes.MAIN);
                          }
                        }
                      >
                        <span className="header__signout">Sign out</span>
                      </button>
                    </li>
                  </ul>
                )
                : (
                  <ul className="header__nav-list">
                    <li className="header__nav-item">
                      <Link className="header__nav-link" to={AppRoutes.LOGIN}>
                        <span className="header__signout">Sign in</span>
                      </Link>
                    </li>
                  </ul>
                )
            }
          </nav>
        </div>
      </div>
    </header>
  );
}
export default Header;
