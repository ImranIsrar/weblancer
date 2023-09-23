
import FooterDefault from "./theme_1/FooterDefault";
import FooterTheme2 from "./theme_2/FooterTheme2";
import FooterTheme3 from "./theme_3/FooterTheme3";


const ThemeFooter = ({ getActiveUser, getOpenUser }) => {

  const { selected_theme } = getOpenUser;

  return (
    <>
      {
        (() => {
          switch (selected_theme?.name) {
            case 'theme_1':
              return (
                <FooterDefault />
              );
            case 'theme_2':
              return (
                <FooterTheme2 />
              );
            case 'theme_3':
              return (
                <FooterTheme3 />
              );
            default:
              return (
                <FooterDefault />
              );
          }
        })()
      }
    </>
  )
}

export default ThemeFooter
