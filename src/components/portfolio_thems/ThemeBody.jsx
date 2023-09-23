
import BodyDefault from "./theme_1/BodyDefault";
import BodyTheme2 from "./theme_2/BodyTheme2";
import BodyTheme3 from "./theme_3/BodyTheme3";


const ThemeBody = ({ getActiveUser, getOpenUser }) => {
  
  const { selected_theme } = getOpenUser;

  return (
    <>
      {
        (() => {
          switch (selected_theme?.name) {
            case 'theme_1':
              return (
                <BodyDefault getActiveUser={getActiveUser} getOpenUser={getOpenUser} />
              );
            case 'theme_2':
              return (
                <BodyTheme2 getActiveUser={getActiveUser} getOpenUser={getOpenUser} />
              );
            case 'theme_3':
              return (
                <BodyTheme3 getActiveUser={getActiveUser} getOpenUser={getOpenUser} />
              );
            default:
              return (
                <BodyDefault getActiveUser={getActiveUser} getOpenUser={getOpenUser} />
              );
          }
        })()
      }
    </>
  )
}

export default ThemeBody
