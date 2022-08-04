import { AiFillHeart } from 'react-icons/ai';
import { ImUserMinus } from 'react-icons/im';
import { FaRegUserCircle } from 'react-icons/fa';
import { BsTelephoneOutbound } from 'react-icons/bs';

import { Box } from 'components/Box/Box';
import Button from 'components/Button/Button';
import { Spinner } from 'components/Spinner/Spinner';
import {
  CallLink,
  CheckBoxLabel,
  UserName,
  UserNumber,
} from './ContactDesctop.styled';

import {
  useDeleteContactMutation,
  useToggleFavoritesMutation,
} from 'redux/contacts/servises/contactAPI';
import { useDispatch } from 'react-redux';
import { filteredContacts } from 'redux/contacts/contacts-actions';

const ContactDesctop = ({ id, name, number, favorites }) => {
  const dispatch = useDispatch();

  const [toggleFavorites_RTKQ] = useToggleFavoritesMutation();
  const [deleteContact_RTKQ, { isLoading }] = useDeleteContactMutation();

  const onDeleteContact = id => {
    deleteContact_RTKQ(id);
    dispatch(filteredContacts(''));

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
        <Box display="flex">
          <CallLink>
            <a href={`tel:${number}`}>
              <BsTelephoneOutbound size={14} />
              <span>Call</span>
            </a>
          </CallLink>
          <Button onClick={() => onDeleteContact(id)} disabled={isLoading}>
            {isLoading ? <Spinner size={14} /> : <ImUserMinus size={14} />}
            Delete
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default ContactDesctop;
