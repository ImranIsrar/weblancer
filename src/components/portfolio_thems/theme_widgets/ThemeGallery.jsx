
import { CloseCircleFilled, LeftCircleFilled, PlusCircleFilled, RightCircleFilled } from "@ant-design/icons";
import { useState } from "react"

const ThemeGallery = ({ getOpenUser }) => {

  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  // const { portfolio_images } = getOpenUser;
  // const { portfolio_gallery } = portfolio_images;

  // Open Modal
  const handleOpenModal = (index) => {
    setSlideNumber(index)
    setOpenModal(true)
  }

  // Close Modal
  const handleCloseModal = () => {
    setOpenModal(false)
  }

  // Previous Image
  const prevSlide = () => {
    slideNumber === 0
      ? setSlideNumber(getOpenUser?.portfolio_images?.portfolio_gallery?.file.length - 1)
      : setSlideNumber(slideNumber - 1)
  }

  // Next Image  
  const nextSlide = () => {
    slideNumber + 1 === getOpenUser?.portfolio_images?.portfolio_gallery?.file.length
      ? setSlideNumber(0)
      : setSlideNumber(slideNumber + 1)
  }

  return (
    <>
      {
        openModal && (
          <div className='sliderWrap'>
            <CloseCircleFilled className='btnClose' onClick={handleCloseModal} />
            <LeftCircleFilled className='btnPrev' onClick={prevSlide} />
            <RightCircleFilled className='btnNext' onClick={nextSlide} />
            
            <div className='fullScreenImage'>
              <img src={getOpenUser?.portfolio_images?.portfolio_gallery?.file[slideNumber]['data_url']} alt='' />
            </div>
          </div>
        )
      }
      <div className="mb-4 pb-3 border-bottom">
        <h3 className="text-600">Creative Portfolio</h3>
      </div>
      <div className='row galleryWrap'>
        {
          getOpenUser?.portfolio_images?.portfolio_gallery?.file ? (
            getOpenUser?.portfolio_images?.portfolio_gallery?.file?.map((slide, index) => {
              return (
                <div className="col-lg-6 d-flex" key={index}>
                  <div className="overflow-hidden w-100 shadow">
                    <div
                      className='single position-relative mh-466 w-100 d-flex align-items-center'
                      onClick={() => handleOpenModal(index)}
                    >
                      <img src={slide['data_url']} alt="" className="w-100 h-100"  />

                      <div className="gallery-puls">
                        <PlusCircleFilled />
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
          ) : (
            <h5>Portfolio Gallery Images Not Uploaded Yet</h5>
          )
        }
      </div>
    </>
  )
}

export default ThemeGallery
