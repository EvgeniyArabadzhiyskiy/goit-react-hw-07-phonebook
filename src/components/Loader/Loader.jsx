import { Spinner } from 'components/Spinner/Spinner';
import { SpinnerBox } from './Loader.styled';

const Loader = () => {
  return (
    <SpinnerBox>
      <Spinner size={30} />
    </SpinnerBox>
  );
};

export default Loader;
