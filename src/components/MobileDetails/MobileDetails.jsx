import { ImUserMinus } from 'react-icons/im';
import { AiFillHeart } from 'react-icons/ai';

import { Box } from 'components/Box/Box';
import Button from 'components/Button/Button';
import { Spinner } from 'components/Spinner/Spinner';
import {
  CheckBoxLabel,
  UserNumber,
} from 'components/ContactDesctop/ContactDesctop.styled';

import {
  useDeleteContactMutation,
  useToggleFavoritesMutation,
} from 'redux/contacts/servises/contactAPI';
import { useDispatch } from 'react-redux';
import { filteredContacts } from 'redux/contacts/contacts-actions';

const MobileDetails = ({ id, number, favorites }) => {
  const dispatch = useDispatch();

  const [toggleFavorites_RTKQ] = useToggleFavoritesMutation();
  const [deleteContact_RTKQ, { isLoading }] = useDeleteContactMutation();

  const onDeleteContact = id => {
    deleteContact_RTKQ(id);
    dispatch(filteredContacts(''));
  };

  const toggleContact = ({ id, favorites }) => {
    toggleFavorites_RTKQ({ id, favorites });
  };

  return (
    <>
      <Box display="flex" justifyContent="space-evenly" alignItems="center">

        <CheckBoxLabel>
          <input
            type="checkbox"
            checked={favorites}
            onChange={() => toggleContact({ id, favorites: !favorites })}
          />
          <AiFillHeart />
        </CheckBoxLabel>

        <UserNumber>{number}</UserNumber>

        <Button onClick={() => onDeleteContact(id)} disabled={isLoading}>
          {isLoading ? <Spinner size={14} /> : <ImUserMinus size={14} />}
          Delete
        </Button>
        
      </Box>
    </>
  );
};

export default MobileDetails;
