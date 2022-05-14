import { useDispatch } from 'react-redux';
import { itemsDelete } from 'redux/contactsSlice';
import PropTypes from 'prop-types';
import { Button, ItemList } from './ContactItem.styled';

export default function ContactItem({ id, name, number }) {
  const dispatch = useDispatch();

  const contactDelete = event => {
    event.preventDefault();

    const idContactDelete = event.currentTarget.id;
    dispatch(itemsDelete(idContactDelete));
  };

  return (
    <ItemList key={id}>
      {name} {number}
      <Button type="button" id={id} onClick={contactDelete}>
        Delete
      </Button>
    </ItemList>
  );
}

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};