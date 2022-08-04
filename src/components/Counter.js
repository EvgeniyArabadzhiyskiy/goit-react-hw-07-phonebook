import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {increment} from '../redux/contacts/contacts-reducers'

const Counter = () => {
  const dispatch = useDispatch();
  const clicksValue = useSelector(state => state.contacts.counter);
  return (
    <button type="button" onClick={() => dispatch(increment())}>
      Кликнул {clicksValue}
    </button>
  );
};

export default Counter;
