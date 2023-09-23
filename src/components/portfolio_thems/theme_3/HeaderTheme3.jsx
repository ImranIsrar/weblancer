
import { FlagOutlined, MenuOutlined } from "@ant-design/icons"
import { Link } from "react-router-dom"


const HeaderTheme3 = ({ themeHeader, getActiveUser, getOpenUser, logout }) => {
  
  return (
    <>
      <header className={`${themeHeader} fixed-top`}>
        <div className="top-nav">
          <div className="container position-sticky">
            <ul className="d-flex m-0 p-0">
              <li>
                <Link to="#">
                  <FlagOutlined />
                  {getOpenUser?.profile?.country ? getOpenUser?.profile?.country : 'Country'}
                </Link>
              </li>
              <li>
                <Link to={getOpenUser?.phone ? getOpenUser?.phone : ''}>
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none"><path d="M18.1469 13.4963C18.1138 13.4688 14.3663 10.8025 13.3544 10.9656C12.8663 11.0519 12.5875 11.385 12.0281 12.0512C11.9381 12.1587 11.7212 12.4156 11.5538 12.5988C11.2002 12.4836 10.8554 12.3432 10.5219 12.1788C8.80033 11.3406 7.40937 9.94967 6.57125 8.22812C6.40679 7.89464 6.26643 7.5498 6.15125 7.19625C6.335 7.02812 6.5925 6.81125 6.7025 6.71875C7.36562 6.1625 7.69813 5.88312 7.78438 5.39437C7.96125 4.3825 5.28125 0.63625 5.25375 0.6025C5.1317 0.42941 4.97275 0.285578 4.78836 0.181386C4.60397 0.0771933 4.39874 0.0152407 4.1875 0C3.10125 0 0 4.0225 0 4.70062C0 4.74 0.0568748 8.7425 4.9925 13.7631C10.0075 18.6931 14.01 18.75 14.0494 18.75C14.7269 18.75 18.75 15.6488 18.75 14.5625C18.7346 14.3512 18.6725 14.146 18.5682 13.9616C18.4639 13.7772 18.32 13.6183 18.1469 13.4963ZM13.98 17.4963C13.4375 17.45 10.075 17.0069 5.875 12.8813C1.72937 8.66063 1.2975 5.2925 1.25437 4.77063C2.07361 3.48478 3.06299 2.31564 4.19562 1.295C4.22062 1.32 4.25375 1.3575 4.29625 1.40625C5.16489 2.59202 5.91317 3.86142 6.53 5.19562C6.32941 5.39742 6.1174 5.58753 5.895 5.765C5.55012 6.02778 5.23343 6.32563 4.95 6.65375C4.90204 6.72104 4.8679 6.79717 4.84956 6.87774C4.83121 6.9583 4.82903 7.04171 4.84312 7.12313C4.97539 7.69608 5.17797 8.25049 5.44625 8.77375C6.40743 10.7475 8.00235 12.3422 9.97625 13.3031C10.4994 13.5718 11.0538 13.7746 11.6269 13.9069C11.7083 13.9213 11.7918 13.9193 11.8724 13.9009C11.953 13.8825 12.0291 13.8482 12.0963 13.8C12.4255 13.5154 12.7244 13.1975 12.9881 12.8512C13.1844 12.6175 13.4463 12.3056 13.5456 12.2175C14.8832 12.8337 16.1555 13.5829 17.3431 14.4537C17.395 14.4975 17.4319 14.5312 17.4562 14.5531C16.4356 15.6861 15.2662 16.6757 13.98 17.495V17.4963Z" fill="white"></path><path d="M12.75 8.75H14C13.9985 7.42437 13.4712 6.15347 12.5339 5.21611C11.5965 4.27875 10.3256 3.75149 9 3.75V5C9.99426 5.00099 10.9475 5.3964 11.6506 6.09945C12.3536 6.80249 12.749 7.75574 12.75 8.75Z" fill="white"></path><path d="M15.875 8.75H17.125C17.1225 6.59588 16.2657 4.53069 14.7425 3.0075C13.2193 1.4843 11.1541 0.627481 9 0.625V1.875C10.8227 1.87715 12.5701 2.60217 13.859 3.89102C15.1478 5.17986 15.8728 6.9273 15.875 8.75Z" fill="white"></path></svg>
                  </span>
                  {getOpenUser?.phone ? getOpenUser?.phone : 'Phone'}
                </Link>
              </li>
              <li>
                <Link href={getOpenUser?.email ? getOpenUser?.email : ''}>
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none"><path d="M13.9325 7.76317C14.1817 7.52433 14.1901 7.12868 13.9512 6.87948C13.7123 6.6303 13.3167 6.62192 13.0675 6.86078L13.9325 7.76317ZM18.2853 7.30425C18.2811 6.9591 17.9978 6.68276 17.6527 6.68703C17.3075 6.6913 17.0312 6.97456 17.0354 7.31971L18.2853 7.30425ZM11.8258 2.13096C12.171 2.1351 12.4542 1.85865 12.4583 1.5135C12.4624 1.16834 12.186 0.885184 11.8408 0.88105L11.8258 2.13096ZM3.88272 5.1655L2.27528 3.55806L1.39139 4.44194L2.99883 6.04938L3.88272 5.1655ZM2.99883 6.04938C4.37523 7.42575 5.45105 8.5035 6.4024 9.22933C7.36818 9.96617 8.27875 10.3991 9.33333 10.3991V9.14908C8.662 9.14908 8.01525 8.88758 7.16062 8.23558C6.29162 7.5725 5.2841 6.56688 3.88272 5.1655L2.99883 6.04938ZM8.5 2.125H10.1667V0.875H8.5V2.125ZM10.1667 15.875H8.5V17.125H10.1667V15.875ZM8.5 15.875C6.92369 15.875 5.79166 15.8742 4.91503 15.7792C4.05011 15.6854 3.50827 15.5062 3.08493 15.1986L2.3502 16.2098C3.02213 16.6981 3.80912 16.9167 4.7804 17.0219C5.73998 17.1258 6.95153 17.125 8.5 17.125V15.875ZM0.375 9C0.375 10.5485 0.374142 11.76 0.478109 12.7196C0.583342 13.6909 0.801934 14.4778 1.29013 15.1498L2.3014 14.4151C1.99383 13.9917 1.81454 13.4499 1.72083 12.585C1.62586 11.7083 1.625 10.5763 1.625 9H0.375ZM3.08493 15.1986C2.78426 14.9802 2.51985 14.7157 2.3014 14.4151L1.29013 15.1498C1.58568 15.5566 1.94341 15.9143 2.3502 16.2098L3.08493 15.1986ZM17.0417 9C17.0417 10.5763 17.0408 11.7083 16.9458 12.585C16.8521 13.4499 16.6728 13.9917 16.3652 14.4151L17.3765 15.1498C17.8648 14.4778 18.0833 13.6909 18.1886 12.7196C18.2925 11.76 18.2917 10.5485 18.2917 9H17.0417ZM10.1667 17.125C11.7152 17.125 12.9267 17.1258 13.8862 17.0219C14.8576 16.9167 15.6445 16.6981 16.3165 16.2098L15.5818 15.1986C15.1584 15.5062 14.6166 15.6854 13.7517 15.7792C12.875 15.8742 11.743 15.875 10.1667 15.875V17.125ZM16.3652 14.4151C16.1468 14.7157 15.8824 14.9802 15.5818 15.1986L16.3165 16.2098C16.7233 15.9143 17.081 15.5566 17.3765 15.1498L16.3652 14.4151ZM8.5 0.875C6.95153 0.875 5.73998 0.874142 4.7804 0.978109C3.80912 1.08334 3.02213 1.30193 2.35019 1.79013L3.08493 2.8014C3.50827 2.49383 4.05011 2.31454 4.91503 2.22083C5.79166 2.12586 6.92369 2.125 8.5 2.125V0.875ZM2.35019 1.79013C1.94341 2.08568 1.58568 2.44341 1.29013 2.85019L2.3014 3.58493C2.51985 3.28426 2.78426 3.01985 3.08493 2.8014L2.35019 1.79013ZM13.0675 6.86078C11.3358 8.52067 10.3777 9.14908 9.33333 9.14908V10.3991C10.9424 10.3991 12.2393 9.38608 13.9325 7.76317L13.0675 6.86078ZM18.2917 9C18.2917 8.37942 18.2917 7.8155 18.2853 7.30425L17.0354 7.31971C17.0417 7.82167 17.0417 8.37733 17.0417 9H18.2917ZM10.1667 2.125C10.7806 2.125 11.3293 2.12501 11.8258 2.13096L11.8408 0.88105C11.3354 0.874992 10.7786 0.875 10.1667 0.875V2.125ZM17.0417 3.16667C17.0417 3.74197 16.5753 4.20833 16 4.20833V5.45833C17.2657 5.45833 18.2917 4.43232 18.2917 3.16667H17.0417ZM16 4.20833C15.4247 4.20833 14.9583 3.74197 14.9583 3.16667H13.7083C13.7083 4.43232 14.7343 5.45833 16 5.45833V4.20833ZM14.9583 3.16667C14.9583 2.59137 15.4247 2.125 16 2.125V0.875C14.7343 0.875 13.7083 1.90102 13.7083 3.16667H14.9583ZM16 2.125C16.5753 2.125 17.0417 2.59137 17.0417 3.16667H18.2917C18.2917 1.90102 17.2657 0.875 16 0.875V2.125ZM1.625 9C1.625 7.63733 1.62541 6.60411 1.68792 5.7767C1.75031 4.95078 1.87157 4.38924 2.08057 3.9555L0.954484 3.41288C0.645959 4.05316 0.50845 4.79588 0.441467 5.68253C0.374592 6.56771 0.375 7.65533 0.375 9H1.625ZM2.08057 3.9555C2.14457 3.82268 2.21761 3.70026 2.3014 3.58493L1.29013 2.85019C1.16128 3.02753 1.0501 3.21445 0.954484 3.41288L2.08057 3.9555ZM2.27528 3.55806L1.95947 3.24225L1.07558 4.12613L1.39139 4.44194L2.27528 3.55806Z" fill="white"></path></svg>
                  </span>
                  {getOpenUser?.email ? getOpenUser?.email : 'Email'}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <nav className="mainNav navbar navbar-expand-lg bg-secondary text-uppercase" id="mainNav">
          <div className="container">
            {
              // Check activeUser is set or not
              getActiveUser?.email == "" ? (
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
                  getActiveUser?.email != "" && (
                    <li className="nav-item mx-0 mx-lg-1">
                      <Link className="nav-link py-3 px-0 px-lg-3 rounded active" to={`/portfolio/${getOpenUser?.id}`}>Portfolio</Link>
                    </li>
                  )
                }
                <li className="nav-item mx-0 mx-lg-1">
                  <a className="nav-link py-3 px-0 px-lg-3 rounded" href="#about">About</a>
                </li>
                <li className="nav-item mx-0 mx-lg-1">
                  <a className="nav-link py-3 px-0 px-lg-3 rounded" href="#contact">Contact</a>
                </li>
              </ul>
              {
                // If activeUser is Set
                getActiveUser?.email == getOpenUser?.email && (
                  <>
                    <ul className="navbar-nav ms-auto">
                      <div className="d-flex justify-content-center justify-content-lg-end">
                        <li className="dropdown">
                          <button type="button" className="btn nav-link py-0 pe-0 dropdown-toggle border-0 active-user dropdown-toggle text-white"
                            data-bs-toggle="dropdown">
                            { getOpenUser?.name && <span className="pe-2">{getOpenUser?.name}</span> }
                            <img className="masthead-avatar rounded-circle"
                              src={
                                getOpenUser?.portfolio_images?.profile_img?.file.length > 0 ? (
                                  getOpenUser?.portfolio_images?.profile_img?.file[0]['data_url']
                                ) : (
                                  "/assets/images/avataaars.svg"
                                )
                              }
                              alt="..."
                              width="50"
                              height="50"
                            />
                          </button>
                          <ul className="dropdownMenu shadow dropdown-menu dropdown-menu-end border-0">
                            <li>
                              <Link className="dropdown-item" to="/profile">Edit Profile</Link>
                            </li>
                            {
                              (Object?.keys(getOpenUser?.selected_theme).length > 0 && getActiveUser?.email == getOpenUser?.email) && (
                                <li>
                                  <Link className="dropdown-item" to="#"
                                    data-bs-toggle="modal" data-bs-target="#SelectProfilioTheme"
                                  >Update Theme</Link>
                                </li>
                              )
                            }
                            <li>
                              <Link className="dropdown-item" to={`/portfolio/${getOpenUser?.id}`}>Portfolio</Link>
                            </li>
                            <li>
                              <Link className="dropdown-item" onClick={logout}>Logout</Link>
                            </li>
                          </ul>
                        </li>
                      </div>
                    </ul>
                  </>
                )
              }
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default HeaderTheme3
