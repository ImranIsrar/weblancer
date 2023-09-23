
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Header from './components/common/Header';
import Login from './components/pages/Login';
import Home from './components/pages/Home';
import Profile from './components/pages/Profile';
import Portfolio from './components/pages/Portfolio';
import Footer from './components/common/Footer';
import NotFound from './components/pages/NotFound';
import Modal from './components/widgets/Modal';



function App() {

  const location = useLocation();
  const plainPage = ["/", "/portfolio/"];

  const { activeUser } = useSelector((state) => state.app);

  return (
    <>
    {
      activeUser ? (
        <>
          {
            !plainPage.includes(location.pathname) && (
              location.pathname.indexOf("/portfolio/") == -1 && (<Header />)
            )
          }
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route path="/dashboard" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/portfolio/:id" element={<Portfolio />} />
            <Route path="*" element={<NotFound />} />
          </Routes>

          <Modal /> 
          {
            !plainPage.includes(location.pathname) && (
              location.pathname.indexOf("/portfolio/") == -1 && (<Footer />)
            )
          }
        </>
      ) : (
        <Login />
      )
    }
    </>
  )
}

export default App
