import { useSearchParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks';
import { FormEvent, useState } from 'react';
import { filterList } from '../../utils/utils';
import {chooseFilter} from '../../store/slices/userActivity/userActivity';

function FilterForm() : JSX.Element {

  const [, setSearchParams] = useSearchParams();

  const dispatch = useAppDispatch();
  const chosenCity = useAppSelector((state) => state.USER_ACTIVITY.chosenCity);
  const chosenFilter = useAppSelector((state) => state.USER_ACTIVITY.chosenFilter);

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const [opened, setOpened] = useState<boolean>(false);

  return (
    <form
      onSubmit={submitHandler}
      className="places__sorting"
      action="#"
      method="get"
    >
      <span className="places__sorting-caption" >Sort by </span>
      <span className="places__sorting-type"
        onClick={(e) => {
          e.preventDefault();
          setOpened((prev) => !prev);
        }}
      >
        {chosenFilter}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`${opened ? 'places__options--opened' : ''} places__options places__options--custom`}>
        {
          filterList.map((item) => (
            <li
              key={item}
              className={`places__option  ${chosenFilter === item ? 'places__option--active' : ''}`}
              tabIndex={0}
              onClick={
                (e) => {
                  chosenCity !== null && setSearchParams({city: chosenCity, filter: item});
                  dispatch(chooseFilter(item));
                  setOpened((prev) => !prev);
                }
              }
            >{item}
            </li>
          ))
        }
      </ul>
    </form>
  );
}
export default FilterForm;
