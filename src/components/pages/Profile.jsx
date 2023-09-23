
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import PhoneInput from "react-phone-input-2";
import { updateUser } from "../../features/userDetails";

import { CloseCircleOutlined, CloudUploadOutlined, UserOutlined } from "@ant-design/icons"

import ImageUploading from 'react-images-uploading';
import secureLocalStorage from "react-secure-storage";


const Profile = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Get Active Current User
  const { users, activeUser } = useSelector((state) => state.app);
  const [currentUser] = users?.filter((find) => find?.email === activeUser);

  const [phoneData, setPhoneData] = useState('');
  let [formData, setFormData] = useState(currentUser);
  const [btnDisabled, setBtnDisabled] = useState(true);

  const [images, setImages] = useState({});
  const maxNumber = 4;

  /* ============== Form Data ============== */


  useEffect(() => {
    let usersArray = secureLocalStorage.getItem('users');
    let [currentUserArray] = usersArray?.filter((find) => find?.email == activeUser);
    console.log(currentUserArray)

    setImages(currentUserArray?.portfolio_images);
    // setFormData 
    // console.log(phoneData);
    // setFormData({ 
    //   ...formData,
    //   ['phone'] : phoneData
    // })
    // setBtnDisabled(true)
  }, []);

  // Enable/ Disable Button
  const checkButtonState = () => {
    const isFormChanged = Object.values(formData).some((value) => value.trim() !== '');
    setBtnDisabled(isFormChanged);
  }

  // Submit Form Data
  const handleProfileSubmit = (e) => {
    e.preventDefault();

    formData = {
      ...formData,
      ['portfolio_images']: images
    };
    console.log(formData);
    dispatch(updateUser(formData));
    navigate("/dashboard");
  }


  /* ============== User Images ============== */

  // Change Image
  const handleImageChange = (imageList, addUpdateIndex) => {
    setImages({
      ...images,
      ['profile_img']: {
        ...images['profile_img'],
        ['file']: imageList,
      }
    });
  }
  useEffect(() => {
    console.log('profile image', images?.profile_img?.file);
  }, [images?.profile_img?.file]);

  // Change Banner
  const handleBannerChange = (imageList, addUpdateIndex) => {
    setImages({
      ...images,
      ['portfolio_banner']: {
        ...images['portfolio_banner'],
        ['file']: imageList,
      }
    });
  }
  useEffect(() => {
    console.log('portfolio', images?.portfolio_banner?.file);
  }, [images?.portfolio_banner?.file]);


  // Change Gallery
  const handleGalleryChange = (imageList, addUpdateIndex) => {
    setImages({
      ...images,
      ['portfolio_gallery']: {
        ...images['portfolio_gallery'],
        ['file']: imageList,
      }
    });
  }
  useEffect(() => {
    console.log('portfolio', images?.portfolio_gallery?.file);
  }, [images?.portfolio_gallery?.file]);

  return (
    <>
      <section className="profile">
        <div className="container">
          <form onSubmit={handleProfileSubmit}>

            {/* Acount Info */}
            <div className="dashboard-box mb-3">
              <div className="headline">
                <h3 className="mb-0">
                  <UserOutlined />
                  My Account</h3>
              </div>

              <div className="content p-4">
                <div className="row">
                  {/* Image Upload */}
                  <div className="col-lg-2">
                    <div className="avatar-wrapper">
                      <ImageUploading
                        value={images?.profile_img?.file}
                        onChange={handleImageChange}
                        maxNumber={maxNumber}
                        dataURLKey="data_url"
                      >
                        {
                          ({ imageList, onImageUpload, onImageRemoveAll, onImageUpdate, onImageRemove, isDragging, dragProps }) => (
                            <div className="avatar-wrapper">
                              <button
                                className="border-0 p-0 rounded-0 h-100"
                                style={isDragging ? { color: 'red' } : undefined}
                                onClick={onImageUpload}
                                {...dragProps}
                              >
                                {
                                  images?.profile_img?.file ? (
                                    images?.profile_img?.file?.map((imgSrc, index) => (
                                      <img
                                        className="profile-pic"
                                        src={imgSrc['data_url']}
                                        alt=""
                                        key={index}
                                      />
                                    ))
                                  ) : (
                                    <img
                                      className="profile-pic"
                                      src="/assets/images/user-avatar-placeholder.png"
                                      alt=""
                                    />
                                  )
                                }
                              </button>
                            </div>
                          )
                        }
                      </ImageUploading>
                    </div>
                  </div>

                  <div className="col-lg-10">
                    {/* Account Type */}
                    <div className="account-type">
                      <div>
                        <input
                          type="radio"
                          name="account-type"
                          id="freelancer-radio"
                          className="account-type-radio"
                          defaultChecked
                          onChange={
                            (e) => setFormData({
                              ...formData,
                              profile: {
                                ...formData.profile,
                                [e.target.name]: e.target.value
                              }
                            })
                          }
                        />
                        <label htmlFor="freelancer-radio" className="ripple-effect-dark">
                          <i className="icon-material-outline-account-circle" /> Freelancer
                        </label>
                      </div>
                      <div>
                        <input
                          type="radio"
                          name="account-type"
                          id="employer-radio"
                          className="account-type-radio"
                          onChange={
                            (e) => setFormData({
                              ...formData,
                              profile: {
                                ...formData.profile,
                                [e.target.name]: e.target.value
                              }
                            })
                          }
                        />
                        <label htmlFor="employer-radio" className="ripple-effect-dark">
                          <i className="icon-material-outline-business-center" /> Employer
                        </label>
                      </div>
                    </div>

                    <div className="row">

                      {/* Name */}
                      <div className="col-lg-12">
                        <div className="form-floating mb-3">
                          <input id="profile_name" type="text" name="name" placeholder="Name" autoComplete="off" className="form-control"
                            value={formData?.name}
                            onChange={
                              (e) => setFormData({
                                ...formData,
                                [e.target.name]: e.target.value
                              })
                            }
                          />
                          <label htmlFor="profile_name">Name</label>
                        </div>
                      </div>

                      {/* Phone */}
                      <div className="col-lg-6">
                        <div className="form-floating mb-3">
                          <PhoneInput
                            country={'pk'}
                            value={phoneData}
                            onChange={value => setPhoneData(value)}
                            id="profile_phone"
                            className="border-0"
                          />
                          <label htmlFor="profile_phone" className="d-none">Phone</label>
                        </div>
                      </div>

                      {/* Country */}
                      <div className="col-lg-6">
                        <div className="form-floating mb-3">
                          <input id="profile_country" type="text" name="country" placeholder="Country" autoComplete="off" className="form-control"
                            value={formData?.profile?.country}
                            onChange={
                              (e) => setFormData({
                                ...formData,
                                profile: {
                                  ...formData.profile,
                                  [e.target.name]: e.target.value
                                }
                              })
                            }
                          />
                          <label htmlFor="profile_country">Country</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Profession */}
            <div className="dashboard-box mb-3">
              <div className="headline">
                <h3 className="mb-0">
                  <UserOutlined />
                  Portfolio Information</h3>
              </div>
              <div className="content p-4">
                <div className="row">
                  {/* Profession */}
                  <div className="col-lg-6">
                    <div className="form-floating mb-3">
                      <input id="profile_prof" type="text" name="professional" placeholder="Professional" autoComplete="off" className="form-control"
                        value={formData?.profile?.professional}
                        onChange={
                          (e) => setFormData({
                            ...formData,
                            profile: {
                              ...formData.profile,
                              [e.target.name]: e.target.value
                            }
                          })
                        }
                      />
                      <label htmlFor="profile_prof">Profession</label>
                    </div>
                  </div>

                  {/* Rate Per Hour */}
                  <div className="col-lg-6">
                    <div className="form-floating mb-3">
                      <input id="profile_rate" type="text" name="rate_per_hr" placeholder="Rate/Hr" autoComplete="off" className="form-control"
                        value={formData?.profile?.rate_per_hr}
                        onChange={
                          (e) => setFormData({
                            ...formData,
                            profile: {
                              ...formData.profile,
                              [e.target.name]: e.target.value
                            }
                          })
                        }
                      />
                      <label htmlFor="profile_rate">Rate/Hr</label>
                    </div>
                  </div>

                  {/* Tag Line */}
                  <div className="col-lg-12">
                    <div className="form-floating mb-3">
                      <input id="profile_tagline" type="text" name="tag_line" placeholder="Tag Line" autoComplete="off" className="form-control"
                        value={formData?.profile?.tag_line}
                        onChange={
                          (e) => setFormData({
                            ...formData,
                            profile: {
                              ...formData.profile,
                              [e.target.name]: e.target.value
                            }
                          })
                        }
                      />
                      <label htmlFor="profile_tagline">Tag Line</label>
                    </div>
                  </div>

                  {/* Introduction */}
                  <div className="col-lg-12">
                    <div className="form-floating mb-3">
                      <textarea id="profile_intro" type="text" name="yourself" placeholder="Introduce Yourself" autoComplete="off" className="form-control"
                        style={{ minHeight: '150px', resize: 'none', paddingTop: '20px', lineHeight: '1.5rem' }}
                        value={formData?.profile?.yourself}
                        onChange={
                          (e) => setFormData({
                            ...formData,
                            profile: {
                              ...formData.profile,
                              [e.target.name]: e.target.value
                            }
                          })
                        }
                      />
                      <label htmlFor="profile_intro">Introduce Yourself</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="dashboard-box mb-3">
              <div className="headline">
                <h3 className="mb-0">
                  <UserOutlined />
                  Portfolio Banner</h3>
              </div>
              <div className="content p-4">
                <ImageUploading
                  value={images?.portfolio_banner?.file}
                  onChange={handleBannerChange}
                  maxNumber={1}
                  dataURLKey="data_url"
                >
                  {
                    ({ imageList, onImageUpload, onImageRemoveAll, onImageUpdate, onImageRemove, isDragging, dragProps }) => (
                      <div className="avatar-wrapper" style={{ height: '400px', cursor: 'pointer' }}>
                        <div
                          className="h-100"
                          style={isDragging ? { color: 'red' } : undefined}
                          onClick={onImageUpload}
                          {...dragProps}
                        >
                          {
                            images?.portfolio_banner?.file ? (
                              images?.portfolio_banner?.file?.map((imgSrc, index) => (
                                <img
                                  className="profile-pic"
                                  src={imgSrc['data_url']}
                                  alt=""
                                  key={index}
                                />
                              ))
                            ) : (
                              <img
                                className="profile-pic"
                                src="/assets/images/user-avatar-placeholder.png"
                                alt=""
                                style={{ objectFit: 'contain' }}
                              />
                            )
                          }
                        </div>
                      </div>
                    )
                  }
                </ImageUploading>
              </div>
            </div>

            {/* Portfolio ShowCase */}
            <div className="dashboard-box mb-3">
              <div className="headline">
                <h3 className="mb-0">
                  <UserOutlined />
                  Portfolio Showcase</h3>
              </div>
              <div className="content p-4">
                <div className="row">
                  <ImageUploading
                    multiple
                    value={images?.portfolio_gallery?.file}
                    onChange={handleGalleryChange}
                    maxNumber={maxNumber}
                    dataURLKey="data_url"
                  >
                    {
                      ({ imageList, onImageUpload, onImageRemoveAll, onImageUpdate, onImageRemove, isDragging, dragProps }) => (
                        <>
                          <div className="col-lg-2 mb-3 mb-lg-0">
                            <div className="avatar-wrapper">
                              <button
                                className="border-0 p-0 rounded-0 h-100"
                                style={isDragging ? { color: 'red' } : undefined}
                                onClick={onImageUpload}
                                {...dragProps}
                              >
                                <img
                                  className="profile-pic"
                                  src="/assets/images/user-avatar-placeholder.png"
                                  alt=""
                                />
                              </button>
                            </div>
                          </div>
                          <div className="col-lg-10">
                            <div className="row">
                              {/* <button onClick={onImageRemoveAll}>Remove all images</button> */}
                              {
                                images?.portfolio_gallery?.file && images?.portfolio_gallery?.file?.map((imgSrc, index) => (
                                  <div key={index} className="image-item col-3">
                                    <div className="avatar-wrapper">
                                      <img
                                        className="profile-pic"
                                        src={imgSrc['data_url']}
                                        alt=""
                                      />
                                      <div>
                                        <button type="button" className="btn p-0 border-0 upload-gallery-img"
                                          onClick={() => onImageUpdate(index)}
                                        >
                                          <CloudUploadOutlined />
                                        </button>
                                        <button type="button" className="btn p-0 border-0 remove-gallery-img"
                                          onClick={() => onImageRemove(index)}
                                        >
                                          <CloseCircleOutlined />
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                ))
                              }
                            </div>
                          </div>
                        </>
                      )
                    }
                  </ImageUploading>
                </div>
              </div>
            </div>

            <div className="text-end">
              <button type="submit" className="btn btn-primary btn-xl masthead-btn">Save</button>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}

export default Profile
