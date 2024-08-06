import { TypedUseSelectorHook } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../types/types';
import { RootState } from '../types/types';


export const useAppDispatch = () => useDispatch<AppDispatch>();
//хук для того, чтобы получить значение из состояния
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
