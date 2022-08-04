import { AiFillHeart } from 'react-icons/ai';
import { ImUserMinus } from 'react-icons/im';
import { FaRegUserCircle } from 'react-icons/fa';

import { Box } from 'components/Box/Box';
import Button from 'components/Button/Button';
import { Spinner } from 'components/Spinner/Spinner';
import { CheckBoxLabel, UserName, UserNumber } from './ContactDesctop.styled';

import {
  useDeleteContactMutation,
  useToggleFavoritesMutation,
} from 'redux/contacts/servises/contactAPI';

const ContactDesctop = ({ id, name, number, favorites }) => {
  
  const [toggleFavorites_RTKQ] = useToggleFavoritesMutation();
  const [deleteContact_RTKQ, { isLoading }] = useDeleteContactMutation();

  const onDeleteContact = id => {
    deleteContact_RTKQ(id);
    // dispatch(deleteContact(id));
  };

  const toggleContact = ({ id, favorites }) => {
    toggleFavorites_RTKQ({ id, favorites });
    // dispatch(toggleFavoritContact({ id, favorites }));
  };

  return (
    <>
      <Box
        mb={3}
        display="flex"
        justifyContent="space-around"
        alignItems="center"
        textAlign="left"
        as="li"
      >
        <FaRegUserCircle size={22} color={'blue'} />
        <CheckBoxLabel>
          <input
            type="checkbox"
            checked={favorites}
            onChange={() => toggleContact({ id, favorites: !favorites })}
          />
          <AiFillHeart />
        </CheckBoxLabel>

        <UserName>{name}:</UserName>
        <UserNumber>{number}</UserNumber>
        <Button onClick={() => onDeleteContact(id)} disabled={isLoading}>
          {isLoading ? <Spinner size={14} /> : <ImUserMinus size={14} />}
          Delete
        </Button>
      </Box>
    </>
  );
};

export default ContactDesctop;
