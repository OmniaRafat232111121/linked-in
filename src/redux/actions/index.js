import { auth,provider} from "../../firebase"
import { signInWithPopup } from "firebase/auth";
import * as actions from "./actions";

export function signInAPI() {
  return (dispatch) => {
    signInWithPopup(auth, provider)
      .then((payload) => {
        // console.log(actions.setUser(payload.user.photoURL))
        dispatch(actions.setUser(payload.user.photoURL));

      })
      .catch((error) => alert(error.message));
  };
}
export function getUserAuth(){
 return (dispatch)=>{
  auth.onAuthStateChanged(async (user)=>{
    if(user){
      dispatch(actions.setUser(user))

    }
  })
 }
}
export function signOutAPI(){
  return(dispatch)=>{
    auth.signOut()
    .then(()=>{
      dispatch(actions.setUser(null))
    })
    .catch((error)=>{
      alert(error.message)
    })

  }
}