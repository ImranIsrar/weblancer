
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { Suspense } from "react"

import ThemeHeader from '../portfolio_thems/ThemeHeader'
import ThemeBody from '../portfolio_thems/ThemeBody'
import ThemeFooter from '../portfolio_thems/ThemeFooter'
import Loader from "../widgets/Loader"



const Portfolio = () => {

  const { id }  = useParams();
  const { users, activeUser } = useSelector((state) => state.app);
  
  // Current User
  const [currentUser] = users?.filter((find) => find?.id === id);

  // Active User
  const [getActiveUser] = users?.filter((find) => find?.email === activeUser);
  
  return (
    <>
      {
        getActiveUser ? (
          <>
            <Suspense fallback={<Loader />}>
              <ThemeHeader getActiveUser={getActiveUser} getOpenUser={currentUser} />
              <ThemeBody getActiveUser={getActiveUser} getOpenUser={currentUser} />
              <ThemeFooter getActiveUser={currentUser?.email} getOpenUser={currentUser} />
            </Suspense>
          </>
        ) : (
          navigate("/")
        )
      }
    </>
  )
}

export default Portfolio

