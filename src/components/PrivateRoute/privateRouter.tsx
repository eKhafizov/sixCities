import { AuthStatus } from '../../store/utils/utils';
import { AppRoutes } from '../../utils/appRoutes';
import { Navigate } from 'react-router-dom';


export type PrivateRouteType = {
  auth: string;
  children: JSX.Element;
};

function PrivateRoute({auth, children} : PrivateRouteType) : JSX.Element {

  return (
    auth === AuthStatus.AUTH
      ? children
      : <Navigate to={AppRoutes.LOGIN} />
  );
}
export default PrivateRoute;
