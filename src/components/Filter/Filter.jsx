import { Label, Input } from './Filter.styled';
import { addFilter, getFilter } from 'redux/contactsSlice';
import { useSelector, useDispatch } from 'react-redux';

export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const filterChange = e => {
    dispatch(addFilter(e.target.value));
  };

  return (
    <div>
      <Label htmlFor="filter">Find contacts by name</Label>
      <Input
        value={filter}
        onChange={filterChange}
        type="text"
        name="filter"
      />
    </div>
  );
}