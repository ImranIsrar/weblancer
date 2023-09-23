
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectThemeByUser } from "../../features/userDetails";
import { theme } from "../api";
import { CheckOutlined } from "@ant-design/icons";


const Modal = () => {
  
  const [checkTheme, setCheckTheme] = useState(false);
  const { users, activeUser } = useSelector((state) => state.app);
  const [currentUser] = users?.filter((find) => find?.email === activeUser);

  const activeUserTheme = Object.keys(currentUser?.selected_theme).length > 0 ? (
    currentUser?.selected_theme
  ) : (
    { id: "1", name:"theme_1", imgName: "theme_2.png" }
  );

  useEffect(() => {
    
    setCheckTheme(true);
  }, [activeUserTheme?.id]);


  // User Select Theme
  const dispatch = useDispatch();
  const handleSetTheme = (item) => {
    dispatch(selectThemeByUser(item));
  }


  return (
    <>
      <div className="portfolio-modal modal fade" id="SelectProfilioTheme" 
        tabIndex="-1" 
        aria-labelledby="SelectProfilioTheme" 
        aria-hidden="true"
      >
        <div className="modal-dialog h-100 d-flex align-items-center">
          <div className="modal-content">
            <div className="modal-header border-0">
              <button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body text-center pb-5">
              <div className="row">
                {
                  theme?.map((item) => {
                    return (
                      <div className="col-md-4 mb-3 mb-md-0" key={item?.id}>
                        <div className="card select-theme border-0">
                          <div className="card__img-wrapper">
                            <img className="card-img-top" src={`/assets/themes/images/${item?.imgName}`} alt="image" />
                          </div>
                          <div className="card-body" style={{ backgroundColor: '#ededed' }}>
                            <button type="button" 
                              className={`btn d-block w-100 select-theme ${(checkTheme && item?.id == activeUserTheme?.id) ? 'activeUser-theme' : ''}`}
                              onClick={() => handleSetTheme(item)}
                              data-bs-dismiss="modal"
                            >
                              { 
                                (checkTheme && item?.id == activeUserTheme?.id) && (
                                  <CheckOutlined className="me-2" style={{ verticalAlign: 'revert' }} /> 
                                ) 
                              }
                              Select Theme
                            </button>
                          </div>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Modal
