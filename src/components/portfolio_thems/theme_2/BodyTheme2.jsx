
import ThemeSidebar from '../theme_widgets/ThemeSidebar';
import ThemeGallery from '../theme_widgets/ThemeGallery';

const BodyTheme2 = ({ getActiveUser, getOpenUser }) => {

  return (
    <>
      {/* Hero Banner */}
      <section className="py-5 px-5" style={{ backgroundColor: '#F2F6FC' }}>
        <div className="masthead px-4 px-lg-5 position-relative"
          style={{ 
            backgroundImage: 'url("/assets/themes/images/hero-banner/home-bg.jpg")', 
          }}
        >
          <div className="row gx-4 gx-lg-5 position-relative justify-content-center">
            <div className="col-md-12">
              <div className="site-heading">
                <h1>{getOpenUser?.profile?.professional ? getOpenUser?.profile?.professional : 'Title Here'}</h1>
                <span className="subheading">{getOpenUser?.profile?.tag_line ? getOpenUser?.profile?.tag_line : 'TagLine Here'}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Profolio Info */}
      <section className="porfolio-sec py-5" style={{ backgroundColor: '#FAFAFB' }}>
        <div className="container">
          <div className="row d-flex flex-row-reverse">
            <div className="col-lg-5 col-xl-4 mb-4">
              <ThemeSidebar 
                getActiveUser={getActiveUser} 
                getOpenUser={getOpenUser} 
              />
            </div>

            <div className="col-lg-7 col-xl-8 maincontent pe-lg-5">
              <ThemeGallery getOpenUser={getOpenUser} />

              {/* YourSelf */}
              <div className="my-4 pb-3 border-bottom">
                <h3 className="text-600">Meet Me</h3>
              </div>
              <div className="rounded card">
                <div className="card-body p-0">
                  <div className="_header card-body p-0 d-md-flex align-items-center">
                    <div className="_title w-100">About Me </div>
                  </div>
                  <div className="_content p-3">
                    <p>{ getOpenUser?.profile?.yourself ?  getOpenUser?.profile?.yourself : 'Lorem Ipsum' }</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default BodyTheme2
