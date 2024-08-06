import Namespace from '../../utils/utils';
import { RootState } from '../../types/types';


export const getAuth = (state: Pick<RootState, Namespace.serverData>) : string => state.SERVER_DATA.authorized;

