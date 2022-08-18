import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { FilterContainer, FilterInput } from './Filter.styled';

import { getFilter } from '../../redux/contactsSelectors';
import { filterSlice } from '../../redux/myContacts/filterSlice';
const filterId = nanoid();

export const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();
  return (
    <FilterContainer>
      <label> Find contacts by name </label>
      <FilterInput
        type="text"
        name="filter"
        value={value}
        onChange={e =>
          dispatch(filterSlice.actions.changeFilter(e.target.value))
        }
        id={filterId}
        placeholder="enter contacts' name"
      />
    </FilterContainer>
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
  onFilter: PropTypes.func,
};
