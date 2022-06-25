import {useSelector, useDispatch} from 'react-redux';
import { doLogout } from '../../store/authSlicer';
import {incremented, decremented, reset} from '../../store/CounterSlicer';

export default function useHome() {
  const count = useSelector(store => store.counter.count);

  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(doLogout())
  } 

  const doIncreament = () => {
    dispatch(incremented());
  };
  const doDecrement = () => {
    dispatch(decremented());
  };

  const doReset = () => {
    dispatch(reset());
  };

  return {
    count,
    doIncreament,
    doDecrement,
    doReset,
    logoutHandler
  };
}
