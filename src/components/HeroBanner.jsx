
import { StarFilled } from '@ant-design/icons';
import { useSelector } from 'react-redux';

const HeroBanner = () => {

  const { users, activeUser } = useSelector((state) => state.app);
  const [currentUser] = users?.filter((find) => find?.email === activeUser);

  return (
    <>
      {/* Masthead */}
      <section className="masthead masthead-not-before bg-primary text-white text-center">
        <div className="container d-flex align-items-center flex-column">
          {/*  Masthead Avatar Image */}
            <img className="masthead-avatar mb-5" src="/assets/images/avataaars.svg" alt="..." />
          
          {/* Masthead Heading */}
          <h1 className="masthead-heading text-uppercase mb-0">Become WEBLANCE</h1>
          
          {/* Divider */}
          <div className="divider-custom divider-light">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon">
              <StarFilled />
            </div>
            <div className="divider-custom-line"></div>
          </div>

          {/* Masthead Subheading */}
          <p className="masthead-subheading font-weight-light">Professional success is a journey, not a destination.</p>
          
          {
            Object.keys(currentUser?.selected_theme).length < 1 ? (
              <button className="btn btn-primary btn-xl masthead-btn" type="button"
                data-bs-toggle="modal" data-bs-target="#SelectProfilioTheme"
              >
                Get Started
               </button>
            ) : (
              <h5 className="masthead-subheading font-weight-light">
                {`Welcome ${currentUser?.name}`}
              </h5>
            )
          } 
        </div>
      </section>
    </>
  )
}

export default HeroBanner
