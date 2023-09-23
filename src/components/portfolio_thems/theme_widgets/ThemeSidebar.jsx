
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ClipboardJS from 'clipboard';

import useFavUser from "../../../hooks/useFavUser";

import { CheckOutlined, FacebookFilled, InstagramFilled, LinkedinFilled, PhoneFilled, StarFilled, TwitterSquareFilled, WhatsAppOutlined } from "@ant-design/icons"


const ThemeSidebar = ({ getActiveUser, getOpenUser }) => {

  // Saved Favourite User
  const { savedUser } = useFavUser();

  // Full Url
  const location = useLocation();
  const [input, setInput] = useState(location.pathname);
  const [appendUrl, setAppendUrl] = useState('');
  const [copy, setCopy] = useState(false);

  useEffect(()=> {
    const fullPageUrl = window.location.href;
    let matchUrl = fullPageUrl.indexOf(input);
    matchUrl= fullPageUrl.slice(0, matchUrl);

    setAppendUrl(matchUrl + input);
  }, []);
  

  // Copying
  const handleCopyUrl = (e) => {
    navigator.clipboard.writeText(appendUrl).then(
      () => {
        setCopy(true);
      },
      (err) => {
        console.error('Unable to copy: ', err);
      }
    )
  }

  return (
    <>
      <div className="mb-4 pb-3 border-bottom">
        <h3 className="text-600">User Profile</h3>
        {
          /* Bookmark Icon */
          getActiveUser?.email != getOpenUser?.email && (
            <div className="mt-3 d-flex flex-wrap align-items-center">
              <div className="me-3">
                <button type="button"
                  className="bookmark-icon border-0 p-0 d-flex align-items-center justify-content-center position-static"
                  onClick={() => savedUser(getOpenUser?.id, getActiveUser?.id)}
                >
                  {
                    getActiveUser?.fav?.includes(getOpenUser?.id) ? (
                      <StarFilled style={{ color: '#febe42' }} />
                    ) : (
                      <StarFilled />
                    )
                  }
                </button>
              </div>
              <div className="text-600">Add Favorite</div>
            </div>
          )
        }
      </div>

      <div>
        <Link to={`tel:${getOpenUser?.phone ? getOpenUser?.phone : ""}`} 
          className="mb-3 d-block text-center phone user-btn"
        >
          <PhoneFilled className="me-2" />
          {getOpenUser?.phone ? getOpenUser?.phone : "Phone"}
        </Link>

        <a href={`https://api.whatsapp.com/send?phone=${getOpenUser?.phone ? getOpenUser?.phone : ""}`} 
          className="mb-3 d-block text-center whatsapp user-btn"
          target="_blank"
          rel="nofollow"
        >
          <WhatsAppOutlined className="me-2" />
          Send Message
        </a>
      </div>

      <div className="rounded card">
        <div className="card-body p-0">
          <div className="_header card-body p-0 d-md-flex align-items-center">
            <div className="_title w-100">Specialties</div>
          </div>
          <div className="_content p-3">
            <ul className="p-0 checklist">
              <li>
                <CheckOutlined />
                <span className="ps-2">Mobile App Design Specialist</span>
              </li>
              <li>
                <CheckOutlined />
                <span className="ps-2">Web User Experience Expert</span>
              </li>
              <li>
                <CheckOutlined />
                <span className="ps-2">Interaction Design Guru</span>
              </li>
              <li>
                <CheckOutlined />
                <span className="ps-2">User-Centered Design Pro</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* My Availability */}
      <div className="card rounded">
        <div className="card-body p-0">
          <div className="_header d-flex">
            <div className="_title w-100">My Availability</div>
          </div>
          <div className="_content p-3">
            <div className="card-hours text-600">
              <div className="addeditmenu" data-key="openinghours" />
              <div className="d-flex justify-content-between mb-2">
                <span>Monday</span>
                <span className=" small">09:00 AM - 6:00 PM </span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>Tuesday</span>
                <span className=" small">09:00 AM - 6:00 PM </span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>Wednesday</span>
                <span className=" small">09:00 AM - 6:00 PM </span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>Thursday</span>
                <span className=" small">09:00 AM - 6:00 PM </span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>Friday</span>
                <span className=" small">09:00 AM - 6:00 PM </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copy Link */}
      <div className="rounded card">
        <div className="card-body p-0">
          <div className="_header d-flex">
            <div className="_title w-100">Share this link via</div>
          </div>
          <div className="_content p-3">
            <div className="card-share">
              <ul className="list-icons p-0 d-flex flex-wrap">
                <li>
                  <Link to="#" target="_blank" rel="nofollow">
                    <FacebookFilled />
                  </Link>
                </li>
                <li>
                  <Link to="#" target="_blank" rel="nofollow">
                    <TwitterSquareFilled />
                  </Link>
                </li>
                <li>
                  <Link to="#" target="_blank" rel="nofollow">
                    <InstagramFilled />
                  </Link>
                </li>
                <li>
                  <Link to="#" target="_blank" rel="nofollow">
                    <LinkedinFilled />
                  </Link>
                </li>
              </ul>

              <div className="_title p-0 mb-2">Or copy link</div>

              <div className="field d-flex">
                <div id="copylink" className="copylink disable-text-selection d-flex align-items-center px-3"
                  style={{ width: 'calc(100% - 80px)', border: '1px solid #e0e0e0', borderRight: '0' }}
                >
                  ... {input}
                </div>
                <button
                  className="btn rounded-0 bg-primary text-600 text-white"
                  onClick={handleCopyUrl}
                  style={{ width: '100%', maxWidth: '80px' }}
                >
                  Copy
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ThemeSidebar
