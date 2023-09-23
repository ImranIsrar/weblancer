
import { MenuOutlined } from "@ant-design/icons"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const HeaderDefault = ({ themeHeader, activeUser, currentUser, logout }) => {

  
  // Add / Remove Class Onscroll on Header
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {

    const handleScroll = () => {

      if (window.scrollY > 104) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }
    window.addEventListener('scroll', handleScroll);


    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isScrolled]);

  const getActiveUser = activeUser?.email || activeUser;

  return (
    <>
      <header className={`${themeHeader ? themeHeader + ' fixed-top' : 'fixed-top'}`}>
        <nav 
          className={`${!themeHeader || isScrolled ? 'bg-secondary' : ''} mainNav navbar navbar-expand-lg text-uppercase`} 
          id="mainNav">
          <div className="container">
            {
              // Check activeUser is set or not
              getActiveUser == "" ? (
                <Link className="navbar-brand" to="/">Weblance</Link>
              ) : (
                <Link className="navbar-brand" to="/dashboard">Weblance</Link>
              )
            }
            <button className="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded" type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              Menu
              <MenuOutlined />
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ms-auto align-items-center">
                {
                  activeUser?.email != "" && (
                    <li className="nav-item mx-0 mx-lg-1">
                      <Link className="nav-link py-3 px-0 px-lg-3 rounded" to={`/portfolio/${currentUser?.id}`}>Portfolio</Link>
                    </li>
                  )
                }
                <li className="nav-item mx-0 mx-lg-1">
                  <a className="nav-link py-3 px-0 px-lg-3 rounded" href="#about">About</a>
                </li>
                <li className="nav-item mx-0 mx-lg-1">
                  <a className="nav-link py-3 px-0 px-lg-3 rounded" href="#contact">Contact</a>
                </li>
                <li className={`nav-item dropdown ${getActiveUser != "" ? '' : 'd-none'}`}>
                  {
                    // If activeUser is Set
                    (getActiveUser == currentUser?.email ) && (
                      <>
                        <button type="button" className="btn nav-link py-0 pe-0 dropdown-toggle text-white border-0 active-user dropdown-toggle"
                          data-bs-toggle="dropdown">
                          { currentUser?.name && <span className="pe-2">{currentUser?.name}</span> }
                          <img className="masthead-avatar rounded-circle"
                            src={
                              currentUser?.portfolio_images?.profile_img?.file.length > 0 ? (
                                currentUser?.portfolio_images?.profile_img?.file[0]['data_url']
                              ) : (
                                "/assets/images/avataaars.svg"
                              )
                            }
                            alt="..."
                            width="50"
                            height="50"
                          />
                        </button>
                        <ul className="dropdownMenu shadow dropdown-menu dropdown-menu-end">
                          <li>
                            <Link className="dropdown-item" to="/profile">Edit Profile</Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#"
                              data-bs-toggle="modal" data-bs-target="#SelectProfilioTheme"
                            >Update Theme</Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to={`/portfolio/${currentUser?.id}`}>Portfolio</Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" onClick={logout}>Logout</Link>
                          </li>
                        </ul>
                      </>
                    )
                  }
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default HeaderDefault
