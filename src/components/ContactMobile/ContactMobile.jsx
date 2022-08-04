import { useState } from 'react';
import { FiSettings } from 'react-icons/fi';
import { IoIosContact } from 'react-icons/io';

import { Box } from 'components/Box/Box';
import IconButton from 'components/IconButton/IconButton';
import MobileDetails from 'components/MobileDetails/MobileDetails';
import { UserName } from 'components/ContactMobile/ContactMobile.styled';

const ContactMobile = ({ id, name, number, favorites }) => {
  const [isOpenDetails, setIsOpenDetails] = useState(false);

  const toggleDetails = () => {
    setIsOpenDetails(prev => !prev);
  };

  return (
    <>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <IoIosContact size={26} color="blue" />
        <UserName type="button" onClick={toggleDetails}>
          {name}
        </UserName>

        <IconButton onClick={toggleDetails} aria-label="settings-button">
          <FiSettings size={24} color="blue" />
        </IconButton>
      </Box>

      {isOpenDetails && (
        <MobileDetails
          id={id}
          number={number}
          favorites={favorites}
        />
      )}
    </>
  );
};

export default ContactMobile;
