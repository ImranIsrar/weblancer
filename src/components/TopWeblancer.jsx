
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";

import useFavUser from '../hooks/useFavUser';

import { CheckOutlined, PushpinOutlined, StarFilled } from '@ant-design/icons';


const TopWeblancer = () => {

  // Get Current User
  const { users, activeUser } = useSelector((state) => state.app);
  const [currentUser] = users?.filter((find) => find?.email === activeUser);
  // console.log('currentUser =>', currentUser, users);

  // Add Favriout User
  const { savedUser } = useFavUser();

  return (
    <>
      <section className="page-section portfolio pb-5" id="portfolio">
        <div className="container">

          {/* Portfolio Section Heading */}
          <div>
            <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Top WebLancers</h2>
            <div className="divider-custom">
              <div className="divider-custom-line"></div>
              <div className="divider-custom-icon">
                <StarFilled />
              </div>
              <div className="divider-custom-line"></div>
            </div>
          </div>

          {/* Top Weblancer */}
          <div className="row justify-content-center">
            {
              users?.map((item, index) => (

                <div className="col-md-6 col-lg-4 mb-5" key={item?.id || index}>
                  <div className="freelancer">
                    <div className="freelancer-overview">
                      <div className="freelancer-overview-inner">
                        {
                          /* Bookmark Icon */
                          item?.email != currentUser?.email && (
                            <button type="button"
                              className="bookmark-icon border-0 p-0 d-flex align-items-center justify-content-center"
                              onClick={() => savedUser(item.id, currentUser?.id)}
                            >
                              {
                                currentUser?.fav.length > 0 ? (
                                  currentUser?.fav?.includes(item?.id) ? (
                                    <StarFilled style={{ color: '#febe42' }} />
                                  ) : (
                                    <StarFilled />
                                  )
                                ) : (
                                  <StarFilled />
                                )
                              }
                            </button>
                          )
                        }

                        {/* Avatar */}
                        <div className="freelancer-avatar">
                          <div className="verified-badge">
                            <CheckOutlined />
                          </div>
                          <Link to={`/portfolio/${item?.id}`}>
                            {
                              item?.portfolio_images?.profile_img?.file.length > 0 ? (
                                <img src={item?.portfolio_images?.profile_img?.file[0]['data_url']} alt="" />
                              ) : (
                                <img src="/assets/images/user-avatar-big-01.jpg" alt="" />
                              )
                            }
                          </Link>
                        </div>

                        {/* Name */}
                        <div className="freelancer-name">
                          <h4 className="text-capitalize">
                            <Link to={`/portfolio/${item?.id}`} className="decoration-none">
                              {item?.name}
                              <img
                                className="flag"
                                src="/assets/images/flags.svg"
                                alt=""
                                data-tippy-placement="top"
                                data-tippy=""
                                data-original-title="United Kingdom"
                              />
                            </Link>
                          </h4>
                          <span>{item?.profile?.professional ? item?.profile?.professional : 'Not Selected Yet'}</span>
                        </div>

                        {/* Rating */}
                        <div className="freelancer-rating mt-1 d-flex align-items-center justify-content-center">
                          <span className="freelancer-rating-points">4.9</span>
                          <StarFilled style={{ color: '#febe42', fontSize: '18px' }} />
                          <StarFilled style={{ color: '#febe42', fontSize: '18px' }} />
                          <StarFilled style={{ color: '#febe42', fontSize: '18px' }} />
                          <StarFilled style={{ color: '#febe42', fontSize: '18px' }} />
                          <StarFilled style={{ color: '#febe42', fontSize: '18px' }} />
                        </div>
                      </div>
                    </div>

                    <div className="freelancer-details">
                      <div className="freelancer-details-list">
                        <ul>
                          <li>
                            Country
                            <strong>
                              <PushpinOutlined /> {item?.profile?.country ? item?.profile?.country : 'Unknown'}
                            </strong>
                          </li>
                          <li>
                            Rate <strong>${item?.profile?.rate_per_hr ? item?.profile?.rate_per_hr : 0} / hr</strong>
                          </li>
                          <li>
                            Job Success <strong>95%</strong>
                          </li>
                        </ul>
                      </div>
                      <Link
                        to={`/portfolio/${item?.id}`}
                        className="button button-sliding-icon d-block w-100 text-center decoration-none"
                      >
                        View Profile <i className="icon-material-outline-arrow-right-alt" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </section>

      <section className="page-section pt-0">
        <div className="container">
          {/* Portfolio Section Heading */}
          <div>
            <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Saved WebLancers</h2>
            <div className="divider-custom">
              <div className="divider-custom-line"></div>
              <div className="divider-custom-icon">
                <StarFilled />
              </div>
              <div className="divider-custom-line"></div>
            </div>
          </div>

          {/* Saved Weblancer */}
          <div className="row justify-content-center">
            {
              currentUser?.fav?.map((curr) => (
                users?.filter((find) => find?.id == curr)
                  .map((item, index) => (
                    <div className="col-md-6 col-lg-4 mb-5" key={item?.id || index}>
                      <div className="freelancer">
                        <div className="freelancer-overview">
                          <div className="freelancer-overview-inner">
                            <div className="bookmark-icon border-0 p-0 d-flex align-items-center justify-content-center">
                              <StarFilled style={{ color: '#febe42' }} />
                            </div>

                            {/* Avatar */}
                            <div className="freelancer-avatar">
                              <div className="verified-badge">
                                <CheckOutlined />
                              </div>
                              <Link to={`/portfolio/${item?.id}`}>
                                {
                                  item?.portfolio_images?.profile_img?.file.length > 0 ? (
                                    <img src={item?.portfolio_images?.profile_img?.file[0]['data_url']} alt="" />
                                  ) : (
                                    <img src="/assets/images/user-avatar-big-01.jpg" alt="" />
                                  )
                                }
                              </Link>
                            </div>

                            {/* Name */}
                            <div className="freelancer-name">
                              <h4 className="text-capitalize">
                                <Link to={`/portfolio/${item?.id}`} className="decoration-none">
                                  {item?.name}
                                  <img
                                    className="flag"
                                    src="/assets/images/flags.svg"
                                    alt=""
                                    data-tippy-placement="top"
                                    data-tippy=""
                                    data-original-title="United Kingdom"
                                  />
                                </Link>
                              </h4>
                              <span>{item?.profile?.professional ? item?.profile?.professional : 'Not Selected Yet'}</span>
                            </div>

                            {/* Rating */}
                            <div className="freelancer-rating mt-1 d-flex align-items-center justify-content-center">
                              <span className="freelancer-rating-points">4.9</span>
                              <StarFilled style={{ color: '#febe42', fontSize: '18px' }} />
                              <StarFilled style={{ color: '#febe42', fontSize: '18px' }} />
                              <StarFilled style={{ color: '#febe42', fontSize: '18px' }} />
                              <StarFilled style={{ color: '#febe42', fontSize: '18px' }} />
                              <StarFilled style={{ color: '#febe42', fontSize: '18px' }} />
                            </div>
                          </div>
                        </div>

                        <div className="freelancer-details">
                          <div className="freelancer-details-list">
                            <ul>
                              <li>
                                Country
                                <strong>
                                  <PushpinOutlined /> {item?.profile?.country ? item?.profile?.country : 'Unknown'}
                                </strong>
                              </li>
                              <li>
                                Rate <strong>${item?.profile?.rate_per_hr ? item?.profile?.rate_per_hr : 0} / hr</strong>
                              </li>
                              <li>
                                Job Success <strong>95%</strong>
                              </li>
                            </ul>
                          </div>
                          <Link
                            to={`/portfolio/${item?.id}`}
                            className="button button-sliding-icon d-block w-100 text-center decoration-none"
                          >
                            View Profile <i className="icon-material-outline-arrow-right-alt" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))
              ))
            }
          </div>
        </div>
      </section>
    </>
  )
}

export default TopWeblancer
