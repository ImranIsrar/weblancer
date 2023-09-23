
import { useDispatch } from "react-redux";
import { favUser } from "../features/userDetails";


const useFavUser = () => {

  const dispatch = useDispatch();
  const savedUser = (favUserId, ActiveUserId) => {

    dispatch(favUser({
      favId: favUserId,
      userId: ActiveUserId
    }));
  }

  return { savedUser };
}

export default useFavUser
