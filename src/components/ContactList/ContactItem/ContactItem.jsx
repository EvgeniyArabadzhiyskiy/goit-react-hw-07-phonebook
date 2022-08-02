import PropTypes from 'prop-types';
import Button from 'components/Button/Button';
import { Box } from 'components/Box/Box';
import { CheckBoxLabel, UserName, UserNumber } from './ContactItem.styled';
import { AiFillHeart } from "react-icons/ai";

const ContactItem = ({ name, number, favorites, onDeleteContact,  toggleFavoritContact }) => {
  return (
    <div>
      <Box
        mb={3}
        display="flex"
        justifyContent="space-around"
        textAlign="left"
        as="li"
      >
        <CheckBoxLabel>
        <input  type='checkbox' checked={favorites} onChange={toggleFavoritContact}  />
          <AiFillHeart  />
        </CheckBoxLabel>
        
        <UserName>{name}:</UserName>
        <UserNumber>{number}</UserNumber>
        <Button onClick={onDeleteContact}>Delete</Button>
      </Box>
    </div>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactItem;
