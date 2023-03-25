import {initializeApp} from 'firebase/app';
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// const firebaseConfig = {
//     apiKey: import.meta.env.VITE_REACT_APP_API_KEY,
//     authDomain: import.meta.env.VITE_REACT_APP_AUTH_DOMAIN,
//     projectId: import.meta.env.VITE_REACT_APP_PROJECT_ID,
//     storageBucket: import.meta.env.VITE_REACT_APP_STORAGE_BUCKET,
//     messagingSenderId: import.meta.env.VITE_REACT_APP_MESSAGINGS_SENDER_ID,
//     appId: import.meta.env.VITE_REACT_APP_APP_ID,
//     measurementId: import.meta.env.VITE_REACT_APP_MEASUREMENT_ID
//   };
const firebaseConfig = {
  apiKey: "AIzaSyASbtNH-0vsyKgfwTBt8ynxSABLpZKdv30",
  authDomain: "linked-in-1ddae.firebaseapp.com",
  projectId: "linked-in-1ddae",
  storageBucket: "linked-in-1ddae.appspot.com",
  messagingSenderId: "982328039560",
  appId: "1:982328039560:web:84ef81599bf96fcebd673d",
  measurementId: "G-CVWDK8C2RL"
};
const app=initializeApp(firebaseConfig);
const auth=getAuth(app);
const db = getFirestore(app);

const provider=new GoogleAuthProvider();
export {auth,db,provider}