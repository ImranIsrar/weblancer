

import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { logoutUser } from '../../features/userDetails';
import HeaderDefault from '../portfolio_thems/theme_1/HeaderDefault';


const Header = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { users, activeUser } = useSelector((state) => state.app);
  const [currentUser] = users?.filter((find) => find?.email === activeUser);


  // Logout User From Store and Local Storage
  const handleLogout = (e) => {
    e.preventDefault();

    dispatch(logoutUser());
    navigate('/', { replace: true });
  }

  return (
    <>
      <HeaderDefault
        activeUser={activeUser}
        currentUser={currentUser}
        logout={handleLogout}
      />
    </>
  )
}

export default Header
