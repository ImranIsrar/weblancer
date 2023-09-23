
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import HeaderDefault from "./theme_1/HeaderDefault";
import HeaderTheme2 from "./theme_2/HeaderTheme2";
import HeaderTheme3 from "./theme_3/HeaderTheme3";
import { logoutUser } from "../../features/userDetails";


const ThemeHeader = ({ getActiveUser, getOpenUser }) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { selected_theme } = getOpenUser;

  // Logout User From Store and Local Storage
  const handleLogout = (e) => {
    e.preventDefault();

    dispatch(logoutUser());
    navigate('/', { replace: true });
  }

  return (
    <>
      {
        (() => {
          switch (selected_theme?.name) {
            case 'theme_1':
              return (
                <HeaderDefault
                  themeHeader="header-default"
                  activeUser={getActiveUser} 
                  currentUser={getOpenUser} 
                  logout={handleLogout} 
                />
              );
            case 'theme_2':
              return (
                <HeaderTheme2
                  themeHeader="header-style-2"
                  getActiveUser={getActiveUser}
                  getOpenUser={getOpenUser}
                  logout={handleLogout}
                />
              );
            case 'theme_3':
              return (
                <HeaderTheme3
                  themeHeader="header-style-3"
                  getActiveUser={getActiveUser}
                  getOpenUser={getOpenUser}
                  logout={handleLogout}
                />
              );
            default:
              return (
                <HeaderDefault
                  themeHeader="header-default"
                  activeUser={getActiveUser} 
                  currentUser={getOpenUser} 
                  logout={handleLogout} 
                />
              );
          }
        })()
      }
    </>
  )
}

export default ThemeHeader
